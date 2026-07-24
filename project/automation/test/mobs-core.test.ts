import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import test from "node:test";

import { MobsCore } from "../src/core/mobs-core.js";
import { fromRepositoryRoot } from "../src/io/repository-paths.js";

function fixturePath(...segments: string[]): string {
  return fromRepositoryRoot(
    "project",
    "automation",
    "test",
    "fixtures",
    ...segments,
  );
}

test("Core runs the Project-to-Brand vertical flow and remains idempotent", async () => {
  const core = await MobsCore.create();
  const projectPath = fixturePath("happy", "project.json");
  const brandPath = fixturePath("happy", "brand.json");
  const before = await Promise.all([
    readFile(projectPath, "utf8"),
    readFile(brandPath, "utf8"),
  ]);

  const first = await core.run({ projectPath, brandPath });
  const second = await core.run({ projectPath, brandPath });

  assert.equal(first.status, "ok");
  assert.deepEqual(
    first.steps.map((step) => step.action),
    [
      "load-project-declaration",
      "resolve-project",
      "load-brand-declaration",
      "forward-brand-association",
      "resolve-brand",
      "consolidate-diagnostic",
    ],
  );
  assert.equal(
    first.contexts.brand?.sourcePath,
    resolve(dirname(brandPath), "source"),
  );
  assert.deepEqual(second, first);
  assert.deepEqual(
    await Promise.all([
      readFile(projectPath, "utf8"),
      readFile(brandPath, "utf8"),
    ]),
    before,
  );
  assert.equal(
    first.steps.some((step) => step.action.includes("select")),
    false,
  );
});

test("Core reports a Project resolution failure without reading Brand", async () => {
  const core = await MobsCore.create();
  const diagnostic = await core.run({
    projectPath: fixturePath("project-invalid", "project.json"),
    brandPath: fixturePath("happy", "brand.json"),
  });

  assert.equal(diagnostic.status, "failed");
  assert.equal(diagnostic.failure?.component, "project-engine");
  assert.equal(diagnostic.filesRead.length, 1);
  assert.equal(diagnostic.contexts.brand, undefined);
});

test("Core reports a Brand resolution failure after forwarding association", async () => {
  const core = await MobsCore.create();
  const diagnostic = await core.run({
    projectPath: fixturePath("happy", "project.json"),
    brandPath: fixturePath("brand-invalid", "brand.json"),
  });

  assert.equal(diagnostic.status, "failed");
  assert.equal(diagnostic.failure?.component, "brand-engine");
  assert.equal(diagnostic.contexts.project?.brandId, "brand-alpha");
  assert.equal(diagnostic.contexts.brand, undefined);
});
