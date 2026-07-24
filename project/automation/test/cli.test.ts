import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

import { main } from "../src/cli.js";
import { fromRepositoryRoot } from "../src/io/repository-paths.js";
import type { FactualDiagnostic } from "../src/types.js";

const cliPath = fileURLToPath(new URL("../src/cli.js", import.meta.url));

function fixturePath(...segments: string[]): string {
  return fromRepositoryRoot(
    "project",
    "automation",
    "test",
    "fixtures",
    ...segments,
  );
}

test("CLI writes the happy-path factual diagnostic to stdout", () => {
  const result = spawnSync(
    process.execPath,
    [
      cliPath,
      "resolve-contexts",
      "--project",
      fixturePath("happy", "project.json"),
      "--brand",
      fixturePath("happy", "brand.json"),
    ],
    { encoding: "utf8" },
  );
  const diagnostic = JSON.parse(result.stdout) as FactualDiagnostic;

  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  assert.equal(diagnostic.status, "ok");
  assert.equal(diagnostic.contexts.project?.projectId, "project-alpha");
  assert.equal(diagnostic.contexts.brand?.brandId, "brand-alpha");
});

test("CLI writes failures to stdout, exits nonzero, and hides stack traces", () => {
  const result = spawnSync(
    process.execPath,
    [
      cliPath,
      "resolve-contexts",
      "--project",
      fixturePath("project-invalid", "project.json"),
      "--brand",
      fixturePath("happy", "brand.json"),
    ],
    { encoding: "utf8" },
  );
  const diagnostic = JSON.parse(result.stdout) as FactualDiagnostic;

  assert.notEqual(result.status, 0);
  assert.equal(result.stderr, "");
  assert.equal(diagnostic.status, "failed");
  assert.equal(diagnostic.failure?.component, "project-engine");
  assert.equal(result.stdout.includes("\n    at "), false);
  assert.equal(result.stdout.includes('"stack"'), false);
});

test("CLI reports missing declaration arguments as factual JSON", () => {
  const result = spawnSync(
    process.execPath,
    [cliPath, "resolve-contexts"],
    { encoding: "utf8" },
  );
  const diagnostic = JSON.parse(result.stdout) as FactualDiagnostic;

  assert.equal(result.status, 2);
  assert.equal(result.stderr, "");
  assert.equal(diagnostic.failure?.component, "interface");
  assert.equal(diagnostic.failure?.stage, "parse-arguments");
});

test("CLI classifies native argument parsing failures with exit code 2", () => {
  const result = spawnSync(
    process.execPath,
    [cliPath, "resolve-contexts", "--unknown-option"],
    { encoding: "utf8" },
  );
  const diagnostic = JSON.parse(result.stdout) as FactualDiagnostic;

  assert.equal(result.status, 2);
  assert.equal(result.stderr, "");
  assert.equal(diagnostic.failure?.component, "interface");
  assert.equal(diagnostic.failure?.stage, "parse-arguments");
  assert.equal(result.stdout.includes('"stack"'), false);
});

test("CLI classifies schema initialization failures as Core failures", async () => {
  const output: string[] = [];
  const internalError = new Error("schema compilation failed");
  internalError.stack = "INTERNAL SCHEMA STACK";

  const exitCode = await main(
    [
      "resolve-contexts",
      "--project",
      "project.json",
      "--brand",
      "brand.json",
    ],
    {
      createCore: async () => {
        throw internalError;
      },
      write: (chunk) => {
        output.push(chunk);
      },
    },
  );
  const stdout = output.join("");
  const diagnostic = JSON.parse(stdout) as FactualDiagnostic;

  assert.equal(exitCode, 1);
  assert.equal(diagnostic.failure?.component, "core");
  assert.equal(diagnostic.failure?.stage, "initialize");
  assert.equal(diagnostic.steps[0]?.action, "initialize-flow");
  assert.equal(stdout.includes("INTERNAL SCHEMA STACK"), false);
  assert.equal(stdout.includes('"stack"'), false);
});

test("CLI classifies unexpected execution failures as Core failures", async () => {
  const output: string[] = [];
  const internalError = new Error("unexpected execution failure");
  internalError.stack = "INTERNAL EXECUTION STACK";

  const exitCode = await main(
    [
      "resolve-contexts",
      "--project",
      "project.json",
      "--brand",
      "brand.json",
    ],
    {
      createCore: async () => ({
        run: async () => {
          throw internalError;
        },
      }),
      write: (chunk) => {
        output.push(chunk);
      },
    },
  );
  const stdout = output.join("");
  const diagnostic = JSON.parse(stdout) as FactualDiagnostic;

  assert.equal(exitCode, 1);
  assert.equal(diagnostic.failure?.component, "core");
  assert.equal(diagnostic.failure?.stage, "execute");
  assert.equal(diagnostic.steps[0]?.action, "execute-flow");
  assert.equal(stdout.includes("INTERNAL EXECUTION STACK"), false);
  assert.equal(stdout.includes('"stack"'), false);
});

test("CLI exposes native help without running the flow", () => {
  const result = spawnSync(
    process.execPath,
    [cliPath, "--help"],
    { encoding: "utf8" },
  );

  assert.equal(result.status, 0);
  assert.equal(result.stderr, "");
  assert.match(result.stdout, /mobs resolve-contexts --project/);
});
