import type {
  AnySchema,
  ErrorObject,
  ValidateFunction,
} from "ajv";
import { Ajv2020 } from "ajv/dist/2020.js";

import { readJsonFile } from "./json-file.js";

export async function loadSchemaValidator(
  schemaPath: string,
): Promise<ValidateFunction<unknown>> {
  const { value } = await readJsonFile(schemaPath);
  const ajv = new Ajv2020({
    allErrors: true,
    strict: true,
  });

  return ajv.compile<unknown>(value as AnySchema);
}

export function describeValidationErrors(
  errors: ErrorObject[] | null | undefined,
): string {
  if (!errors || errors.length === 0) {
    return "declaration does not satisfy its schema";
  }

  return errors
    .map((error) => {
      const location = error.instancePath || "/";
      return `${location} ${error.message ?? "is invalid"}`;
    })
    .join("; ");
}
