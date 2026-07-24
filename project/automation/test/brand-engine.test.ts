import assert from "node:assert/strict";
import { dirname, resolve } from "node:path";
import test from "node:test";

import { BrandEngine } from "../src/engines/brand-engine.js";
import { MobsFlowError } from "../src/errors.js";

test("Brand Engine resolves paths.source relative to its declaration", async () => {
  const engine = await BrandEngine.create();
  const declarationPath = resolve("fixtures", "brand", "brand.json");

  assert.deepEqual(
    engine.resolve(
      {
        id: "brand-alpha",
        paths: {
          source: "source",
        },
      },
      declarationPath,
      "brand-alpha",
    ),
    {
      brandId: "brand-alpha",
      declaredSourcePath: "source",
      sourcePath: resolve(dirname(declarationPath), "source"),
    },
  );
});

const absoluteSourcePaths = [
  {
    format: "POSIX",
    source: "/srv/mobs/brand",
  },
  {
    format: "Windows drive",
    source: String.raw`C:\mobs\brand`,
  },
  {
    format: "Windows UNC",
    source: String.raw`\\server\share\brand`,
  },
];

for (const { format, source } of absoluteSourcePaths) {
  test(`Brand Engine rejects an absolute ${format} paths.source`, async () => {
    const engine = await BrandEngine.create();

    assert.throws(
      () =>
        engine.resolve(
          {
            id: "brand-alpha",
            paths: {
              source,
            },
          },
          resolve("fixtures", "brand.json"),
          "brand-alpha",
        ),
      (error: unknown) =>
        error instanceof MobsFlowError &&
        error.message.includes("must be relative"),
    );
  });
}

test("Brand Engine rejects a declaration with a different id", async () => {
  const engine = await BrandEngine.create();

  assert.throws(
    () =>
      engine.resolve(
        {
          id: "brand-beta",
          paths: {
            source: "source",
          },
        },
        resolve("fixtures", "brand.json"),
        "brand-alpha",
      ),
    (error: unknown) =>
      error instanceof MobsFlowError &&
      error.message.includes("does not match forwarded brandId"),
  );
});

test("Brand Engine rejects a declaration without paths.source", async () => {
  const engine = await BrandEngine.create();

  assert.throws(
    () =>
      engine.resolve(
        {
          id: "brand-alpha",
          paths: {},
        },
        resolve("fixtures", "brand.json"),
        "brand-alpha",
      ),
    (error: unknown) =>
      error instanceof MobsFlowError &&
      error.component === "brand-engine",
  );
});

test("Brand Engine rejects a declaration without id", async () => {
  const engine = await BrandEngine.create();

  assert.throws(
    () =>
      engine.resolve(
        {
          paths: {
            source: "source",
          },
        },
        resolve("fixtures", "brand.json"),
        "brand-alpha",
      ),
    (error: unknown) =>
      error instanceof MobsFlowError &&
      error.message.includes("required property 'id'"),
  );
});
