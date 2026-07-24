import type { ValidateFunction } from "ajv";

import { MobsFlowError } from "../errors.js";
import { fromRepositoryRoot } from "../io/repository-paths.js";
import {
  describeValidationErrors,
  loadSchemaValidator,
} from "../io/schema-validator.js";
import type { ProjectResolvedContext } from "../types.js";

interface ProjectDeclaration {
  id: string;
  brandId: string;
}

export class ProjectEngine {
  private constructor(
    private readonly validate: ValidateFunction<unknown>,
  ) {}

  static async create(): Promise<ProjectEngine> {
    const schemaPath = fromRepositoryRoot(
      "docs",
      "mobs",
      "schemas",
      "project",
      "project.schema.json",
    );

    return new ProjectEngine(await loadSchemaValidator(schemaPath));
  }

  resolve(declaration: unknown): ProjectResolvedContext {
    if (!this.validate(declaration)) {
      throw new MobsFlowError(
        "project-engine",
        "resolve-project",
        `Invalid Project declaration: ${describeValidationErrors(this.validate.errors)}`,
      );
    }

    const project = declaration as ProjectDeclaration;

    return {
      projectId: project.id,
      brandId: project.brandId,
    };
  }
}
