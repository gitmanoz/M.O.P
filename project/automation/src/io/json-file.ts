import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

export interface LoadedJson {
  path: string;
  value: unknown;
}

export async function readJsonFile(inputPath: string): Promise<LoadedJson> {
  const absolutePath = resolve(inputPath);
  const contents = await readFile(absolutePath, "utf8");

  return {
    path: absolutePath,
    value: JSON.parse(contents) as unknown,
  };
}
