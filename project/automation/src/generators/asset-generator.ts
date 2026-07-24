import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { ValidateFunction } from "ajv";

import { MobsFlowError, toMobsFlowError } from "../errors.js";
import { fromRepositoryRoot } from "../io/repository-paths.js";
import {
  describeValidationErrors,
  loadSchemaValidator,
} from "../io/schema-validator.js";
import type {
  AssetGenerationBrandContext,
  AssetGeneratorContexts,
  AssetGeneratorDiagnostic,
  DiagnosticStep,
  ExportJob,
} from "../types.js";
import {
  assertExistingOutputIsSafeToOverwrite,
  assertPortableDirectoryPath,
  assertPortableSvgMasterPath,
  isPathInside,
  realpathContainedFile,
  realpathExisting,
  resolveContainedDirectory,
  resolveOutputPath,
} from "./path-safety.js";
import { rasterizeSvgToPng } from "./rasterize-svg.js";

export interface AssetGeneratorInput {
  /** Directory containing the Brand declaration file (path resolution base). */
  brandDeclarationDir: string;
  brandContext: unknown;
  job: unknown;
}

export class AssetGenerator {
  private constructor(
    private readonly validateBrandContext: ValidateFunction<unknown>,
    private readonly validateJob: ValidateFunction<unknown>,
  ) {}

  static async create(): Promise<AssetGenerator> {
    const [validateBrandContext, validateJob] = await Promise.all([
      loadSchemaValidator(
        fromRepositoryRoot(
          "docs",
          "mobs",
          "schemas",
          "brand",
          "brand.asset-generation.schema.json",
        ),
      ),
      loadSchemaValidator(
        fromRepositoryRoot(
          "docs",
          "mobs",
          "schemas",
          "asset-generator",
          "export-job.schema.json",
        ),
      ),
    ]);

    return new AssetGenerator(validateBrandContext, validateJob);
  }

  async run(input: AssetGeneratorInput): Promise<AssetGeneratorDiagnostic> {
    const steps: DiagnosticStep[] = [];
    const filesRead: string[] = [];
    const filesWritten: string[] = [];
    const contexts: AssetGeneratorContexts = {};

    try {
      const brandContext = this.parseBrandContext(input.brandContext);
      contexts.brand = {
        brandId: brandContext.brandId,
        sourcePath: brandContext.sourcePath,
        exportsPath: brandContext.exportsPath,
      };
      steps.push({
        component: "asset-generator",
        action: "validate-brand-context",
        status: "ok",
      });

      const job = this.parseJob(input.job);
      contexts.job = {
        masterKey: job.masterKey,
        format: job.format,
      };
      steps.push({
        component: "asset-generator",
        action: "validate-export-job",
        status: "ok",
      });

      const brandDeclarationDir = await realpathExisting(
        resolve(input.brandDeclarationDir),
        "resolve-paths",
      );

      assertPortableDirectoryPath(
        brandContext.sourcePath,
        "sourcePath",
        "resolve-paths",
      );
      assertPortableDirectoryPath(
        brandContext.exportsPath,
        "exportsPath",
        "resolve-paths",
      );

      const sourceResolved = await resolveContainedDirectory(
        brandDeclarationDir,
        brandContext.sourcePath,
        "resolve-paths",
        "sourcePath",
        { mustExist: true },
      );
      const sourceDirReal = sourceResolved.realPath;
      if (sourceDirReal === null) {
        throw new MobsFlowError(
          "asset-generator",
          "resolve-paths",
          `sourcePath does not exist: ${sourceResolved.lexicalPath}`,
        );
      }

      const exportsResolved = await resolveContainedDirectory(
        brandDeclarationDir,
        brandContext.exportsPath,
        "resolve-paths",
        "exportsPath",
      );
      const exportsCandidate =
        exportsResolved.realPath ?? exportsResolved.lexicalPath;

      // Reject nested exports before any directory creation.
      if (isPathInside(sourceDirReal, exportsCandidate)) {
        throw new MobsFlowError(
          "asset-generator",
          "resolve-paths",
          "exportsPath must not resolve inside sourcePath",
        );
      }

      await mkdir(exportsResolved.lexicalPath, { recursive: true });
      const exportsDirReal = await realpathExisting(
        exportsResolved.lexicalPath,
        "resolve-paths",
      );

      if (!isPathInside(brandDeclarationDir, exportsDirReal)) {
        throw new MobsFlowError(
          "asset-generator",
          "resolve-paths",
          "exportsPath escapes the Brand declaration directory via symlink",
        );
      }

      if (isPathInside(sourceDirReal, exportsDirReal)) {
        throw new MobsFlowError(
          "asset-generator",
          "resolve-paths",
          "exportsPath must not resolve inside sourcePath",
        );
      }

      steps.push({
        component: "asset-generator",
        action: "resolve-paths",
        status: "ok",
      });

      const masterRelative = brandContext.masters[job.masterKey];
      if (masterRelative === undefined) {
        throw new MobsFlowError(
          "asset-generator",
          "resolve-master",
          `masterKey "${job.masterKey}" is absent from masters catalog`,
        );
      }

      assertPortableSvgMasterPath(
        masterRelative,
        `masters.${job.masterKey}`,
        "resolve-master",
      );

      const masterLexical = resolve(sourceDirReal, masterRelative);
      const masterReal = await realpathContainedFile(
        masterLexical,
        sourceDirReal,
        "resolve-master",
        "Master SVG",
      );

      steps.push({
        component: "asset-generator",
        action: "resolve-master",
        status: "ok",
      });

      const outputPath = resolveOutputPath(
        exportsDirReal,
        job.masterKey,
        sourceDirReal,
        "derive-png",
      );

      await assertExistingOutputIsSafeToOverwrite(outputPath, "derive-png");

      const svgBytes = await readFile(masterReal);
      filesRead.push(masterReal);
      steps.push({
        component: "asset-generator",
        action: "read-master",
        status: "ok",
      });

      const rasterized = rasterizeSvgToPng(svgBytes);
      await writeFile(outputPath, rasterized.png);
      filesWritten.push(outputPath);
      steps.push({
        component: "asset-generator",
        action: "write-png",
        status: "ok",
      });

      const sourceAfter = await readFile(masterReal);
      if (!sourceAfter.equals(svgBytes)) {
        throw new MobsFlowError(
          "asset-generator",
          "verify-source-integrity",
          "Master SVG was modified during generation",
        );
      }

      steps.push({
        component: "asset-generator",
        action: "consolidate-diagnostic",
        status: "ok",
      });

      return {
        status: "ok",
        steps,
        filesRead,
        filesWritten,
        contexts,
      };
    } catch (error) {
      const flowError = toMobsFlowError(
        error,
        "asset-generator",
        "generate",
        "Asset generation failed.",
      );

      steps.push({
        component: flowError.component,
        action: flowError.stage,
        status: "failed",
      });

      return {
        status: "failed",
        steps,
        filesRead,
        filesWritten,
        contexts,
        failure: flowError.toFactualFailure(),
      };
    }
  }

  private parseBrandContext(value: unknown): AssetGenerationBrandContext {
    if (!this.validateBrandContext(value)) {
      throw new MobsFlowError(
        "asset-generator",
        "validate-brand-context",
        `Invalid Brand asset-generation context: ${describeValidationErrors(this.validateBrandContext.errors)}`,
      );
    }

    return value as AssetGenerationBrandContext;
  }

  private parseJob(value: unknown): ExportJob {
    if (!this.validateJob(value)) {
      throw new MobsFlowError(
        "asset-generator",
        "validate-export-job",
        `Invalid export job: ${describeValidationErrors(this.validateJob.errors)}`,
      );
    }

    return value as ExportJob;
  }
}
