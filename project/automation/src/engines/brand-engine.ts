import type { ValidateFunction } from "ajv";
import { dirname, posix, resolve, win32 } from "node:path";

import { MobsFlowError } from "../errors.js";
import { fromRepositoryRoot } from "../io/repository-paths.js";
import {
  describeValidationErrors,
  loadSchemaValidator,
} from "../io/schema-validator.js";
import type { BrandResolvedContext } from "../types.js";

interface BrandDeclaration {
  id: string;
  paths: {
    source: string;
  };
}

export class BrandEngine {
  private constructor(
    private readonly validate: ValidateFunction<unknown>,
  ) {}

  static async create(): Promise<BrandEngine> {
    const schemaPath = fromRepositoryRoot(
      "docs",
      "mobs",
      "schemas",
      "brand",
      "brand.schema.json",
    );

    return new BrandEngine(await loadSchemaValidator(schemaPath));
  }

  resolve(
    declaration: unknown,
    declarationPath: string,
    expectedBrandId: string,
  ): BrandResolvedContext {
    if (!this.validate(declaration)) {
      throw new MobsFlowError(
        "brand-engine",
        "resolve-brand",
        `Invalid Brand declaration: ${describeValidationErrors(this.validate.errors)}`,
      );
    }

    const brand = declaration as BrandDeclaration;

    if (brand.id !== expectedBrandId) {
      throw new MobsFlowError(
        "brand-engine",
        "resolve-brand",
        `Brand declaration id "${brand.id}" does not match forwarded brandId "${expectedBrandId}"`,
      );
    }

    if (
      posix.isAbsolute(brand.paths.source) ||
      win32.isAbsolute(brand.paths.source)
    ) {
      throw new MobsFlowError(
        "brand-engine",
        "resolve-brand",
        "Brand paths.source must be relative to the Brand declaration file",
      );
    }

    return {
      brandId: brand.id,
      declaredSourcePath: brand.paths.source,
      sourcePath: resolve(dirname(declarationPath), brand.paths.source),
    };
  }
}
