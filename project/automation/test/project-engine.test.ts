import assert from "node:assert/strict";
import test from "node:test";

import { ProjectEngine } from "../src/engines/project-engine.js";
import { MobsFlowError } from "../src/errors.js";

test("Project Engine resolves the minimal v1 Project context", async () => {
  const engine = await ProjectEngine.create();

  assert.deepEqual(
    engine.resolve({
      id: "project-alpha",
      brandId: "brand-alpha",
    }),
    {
      projectId: "project-alpha",
      brandId: "brand-alpha",
    },
  );
});

test("Project Engine rejects a Project without id", async () => {
  const engine = await ProjectEngine.create();

  assert.throws(
    () =>
      engine.resolve({
        brandId: "brand-alpha",
      }),
    (error: unknown) =>
      error instanceof MobsFlowError &&
      error.component === "project-engine" &&
      error.stage === "resolve-project" &&
      !error.message.includes("\n    at "),
  );
});

test("Project Engine rejects a Project without brandId in this flow", async () => {
  const engine = await ProjectEngine.create();

  assert.throws(
    () =>
      engine.resolve({
        id: "project-alpha",
      }),
    (error: unknown) =>
      error instanceof MobsFlowError &&
      error.message.includes("required property 'brandId'"),
  );
});
