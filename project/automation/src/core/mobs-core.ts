import { BrandEngine } from "../engines/brand-engine.js";
import { ProjectEngine } from "../engines/project-engine.js";
import {
  MobsFlowError,
  toMobsFlowError,
} from "../errors.js";
import { readJsonFile } from "../io/json-file.js";
import type {
  DiagnosticComponent,
  DiagnosticStep,
  FactualDiagnostic,
  ResolvedContexts,
  VerticalFlowInput,
} from "../types.js";

export class MobsCore {
  private constructor(
    private readonly projectEngine: ProjectEngine,
    private readonly brandEngine: BrandEngine,
  ) {}

  static async create(): Promise<MobsCore> {
    const [projectEngine, brandEngine] = await Promise.all([
      ProjectEngine.create(),
      BrandEngine.create(),
    ]);

    return new MobsCore(projectEngine, brandEngine);
  }

  async run(input: VerticalFlowInput): Promise<FactualDiagnostic> {
    const steps: DiagnosticStep[] = [];
    const filesRead: string[] = [];
    const contexts: ResolvedContexts = {};

    let projectDeclaration: unknown;

    try {
      const loadedProject = await readJsonFile(input.projectPath);
      projectDeclaration = loadedProject.value;
      filesRead.push(loadedProject.path);
      steps.push({
        component: "core",
        action: "load-project-declaration",
        status: "ok",
      });
    } catch (error) {
      return this.fail(
        toMobsFlowError(
          error,
          "core",
          "load-project-declaration",
          "Could not load Project declaration.",
        ),
        steps,
        filesRead,
        contexts,
        "core",
        "load-project-declaration",
      );
    }

    try {
      contexts.project = this.projectEngine.resolve(projectDeclaration);
      steps.push({
        component: "project-engine",
        action: "resolve-project",
        status: "ok",
      });
    } catch (error) {
      return this.fail(
        toMobsFlowError(
          error,
          "project-engine",
          "resolve-project",
          "Project resolution failed.",
        ),
        steps,
        filesRead,
        contexts,
        "project-engine",
        "resolve-project",
      );
    }

    let brandDeclaration: unknown;
    let brandDeclarationPath: string;

    try {
      const loadedBrand = await readJsonFile(input.brandPath);
      brandDeclaration = loadedBrand.value;
      brandDeclarationPath = loadedBrand.path;
      filesRead.push(loadedBrand.path);
      steps.push({
        component: "core",
        action: "load-brand-declaration",
        status: "ok",
      });
    } catch (error) {
      return this.fail(
        toMobsFlowError(
          error,
          "core",
          "load-brand-declaration",
          "Could not load Brand declaration.",
        ),
        steps,
        filesRead,
        contexts,
        "core",
        "load-brand-declaration",
      );
    }

    steps.push({
      component: "core",
      action: "forward-brand-association",
      status: "ok",
    });

    try {
      contexts.brand = this.brandEngine.resolve(
        brandDeclaration,
        brandDeclarationPath,
        contexts.project.brandId,
      );
      steps.push({
        component: "brand-engine",
        action: "resolve-brand",
        status: "ok",
      });
    } catch (error) {
      return this.fail(
        toMobsFlowError(
          error,
          "brand-engine",
          "resolve-brand",
          "Brand resolution failed.",
        ),
        steps,
        filesRead,
        contexts,
        "brand-engine",
        "resolve-brand",
      );
    }

    steps.push({
      component: "core",
      action: "consolidate-diagnostic",
      status: "ok",
    });

    return {
      status: "ok",
      steps,
      filesRead,
      contexts,
    };
  }

  private fail(
    error: MobsFlowError,
    steps: DiagnosticStep[],
    filesRead: string[],
    contexts: ResolvedContexts,
    component: DiagnosticComponent,
    action: string,
  ): FactualDiagnostic {
    steps.push({
      component,
      action,
      status: "failed",
    });

    return {
      status: "failed",
      steps,
      filesRead,
      contexts,
      failure: error.toFactualFailure(),
    };
  }
}
