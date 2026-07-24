import { lstat, realpath } from "node:fs/promises";
import {
  basename,
  isAbsolute,
  relative,
  resolve,
  sep,
} from "node:path";

import { MobsFlowError } from "../errors.js";

const PORTABLE_DIR = /^[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*$/;
const PORTABLE_SVG =
  /^(?!.*(?:^|\/)reference(?:\/|$))(?!.*_INK\.svg$)[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*\.svg$/;
const LOGICAL_KEY = /^[a-z][a-z0-9-]*$/;

function reject(stage: string, message: string): never {
  throw new MobsFlowError("asset-generator", stage, message);
}

export function assertLogicalMasterKey(masterKey: string, stage: string): void {
  if (!LOGICAL_KEY.test(masterKey)) {
    reject(
      stage,
      `masterKey "${masterKey}" is not a portable logical identifier`,
    );
  }
}

export function assertPortableDirectoryPath(
  value: string,
  label: string,
  stage: string,
): void {
  assertNoForbiddenPathForm(value, label, stage);

  if (!PORTABLE_DIR.test(value)) {
    reject(stage, `${label} must be a portable relative directory path`);
  }
}

export function assertPortableSvgMasterPath(
  value: string,
  label: string,
  stage: string,
): void {
  assertNoForbiddenPathForm(value, label, stage);

  if (!PORTABLE_SVG.test(value)) {
    reject(
      stage,
      `${label} must be a portable relative final SVG path under sourcePath`,
    );
  }

  if (basename(value).endsWith("_INK.svg")) {
    reject(
      stage,
      `${label} rejects editable *_INK masters as production sources`,
    );
  }

  if (value.split("/").includes("reference")) {
    reject(stage, `${label} rejects reference/ as a production source`);
  }
}

function assertNoForbiddenPathForm(
  value: string,
  label: string,
  stage: string,
): void {
  if (value.includes("\\")) {
    reject(stage, `${label} must use '/' separators only`);
  }

  if (value.includes("\0")) {
    reject(stage, `${label} contains an illegal character`);
  }

  if (
    isAbsolute(value) ||
    /^[A-Za-z]:/.test(value) ||
    value.startsWith("//") ||
    value.startsWith("\\\\")
  ) {
    reject(stage, `${label} must be relative and portable`);
  }

  const segments = value.split("/");
  if (
    segments.some(
      (segment) => segment === "" || segment === "." || segment === "..",
    )
  ) {
    reject(stage, `${label} must not contain empty segments or '..' escapes`);
  }
}

export function isPathInside(parentReal: string, candidate: string): boolean {
  const relation = relative(parentReal, candidate);

  if (relation === "") {
    return true;
  }

  return (
    !relation.startsWith(`..${sep}`) &&
    relation !== ".." &&
    !isAbsolute(relation)
  );
}

export async function realpathExisting(
  path: string,
  stage: string,
): Promise<string> {
  try {
    return await realpath(path);
  } catch {
    reject(stage, `Path does not exist: ${path}`);
  }
}

/**
 * Walk a portable relative directory under a canonical Brand declaration
 * directory. Existing segments are realpath'd; any escape via symlink is
 * rejected. Missing trailing segments are allowed (caller may create later).
 */
export async function resolveContainedDirectory(
  brandDeclarationDirReal: string,
  relativePortable: string,
  stage: string,
  label: string,
  options: { mustExist?: boolean } = {},
): Promise<{ lexicalPath: string; realPath: string | null }> {
  const segments = relativePortable.split("/");
  const lexicalPath = resolve(brandDeclarationDirReal, ...segments);

  if (!isPathInside(brandDeclarationDirReal, lexicalPath)) {
    reject(stage, `${label} resolves outside the Brand declaration directory`);
  }

  let cursorReal = brandDeclarationDirReal;

  for (let index = 0; index < segments.length; index += 1) {
    const segment = segments[index];
    if (segment === undefined) {
      reject(stage, `${label} is not a portable relative directory path`);
    }

    const nextLexical = resolve(cursorReal, segment);

    let stats;
    try {
      stats = await lstat(nextLexical);
    } catch {
      if (options.mustExist) {
        reject(stage, `${label} does not exist: ${lexicalPath}`);
      }

      // Remaining path is purely lexical under an already-contained cursor.
      return { lexicalPath, realPath: null };
    }

    const nextReal = await realpath(nextLexical);

    if (!isPathInside(brandDeclarationDirReal, nextReal)) {
      reject(
        stage,
        `${label} escapes the Brand declaration directory via symlink`,
      );
    }

    if (!stats.isDirectory() && index < segments.length - 1) {
      reject(stage, `${label} path segment is not a directory: ${nextLexical}`);
    }

    cursorReal = nextReal;
  }

  return { lexicalPath, realPath: cursorReal };
}

export async function realpathContainedFile(
  path: string,
  containerReal: string,
  stage: string,
  label: string,
): Promise<string> {
  try {
    await lstat(path);
  } catch {
    reject(stage, `${label} does not exist: ${path}`);
  }

  const real = await realpath(path);

  if (!isPathInside(containerReal, real)) {
    reject(
      stage,
      `${label} escapes its container via symlink or unresolved path`,
    );
  }

  return real;
}

export function resolveOutputPath(
  exportsDirReal: string,
  masterKey: string,
  sourceDirReal: string,
  stage: string,
): string {
  assertLogicalMasterKey(masterKey, stage);

  const outputPath = resolve(exportsDirReal, `${masterKey}.png`);

  if (!isPathInside(exportsDirReal, outputPath)) {
    reject(stage, "Output destination is outside exportsPath");
  }

  if (isPathInside(sourceDirReal, outputPath)) {
    reject(stage, "Output destination must never lie inside sourcePath");
  }

  return outputPath;
}

/**
 * Existing output must be a solitary regular file safe to overwrite.
 * Symlinks, non-files, and hardlinked inodes (nlink > 1) are rejected so a
 * write cannot mutate physical aliases outside exportsPath or the master.
 */
export async function assertExistingOutputIsSafeToOverwrite(
  outputPath: string,
  stage: string,
): Promise<void> {
  let stats;
  try {
    stats = await lstat(outputPath);
  } catch {
    return;
  }

  if (stats.isSymbolicLink()) {
    reject(
      stage,
      "Output path must not be a physical alias (symlink); refusing overwrite",
    );
  }

  if (!stats.isFile()) {
    reject(
      stage,
      "Output path must be a regular file safe to overwrite",
    );
  }

  if (stats.nlink > 1) {
    reject(
      stage,
      "Output path must not be a physical alias (hardlink nlink > 1); refusing overwrite",
    );
  }
}
