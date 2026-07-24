import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const compiledModuleDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(compiledModuleDirectory, "../../../../..");

export function fromRepositoryRoot(...segments: string[]): string {
  return resolve(repositoryRoot, ...segments);
}
