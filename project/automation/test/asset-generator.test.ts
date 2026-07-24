import assert from "node:assert/strict";
import {
  access,
  link,
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  realpath,
  rm,
  symlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import test from "node:test";

import { AssetGenerator } from "../src/generators/asset-generator.js";
import {
  ASSET_GENERATOR_RASTER_OPTIONS,
  rasterizeSvgToPng,
} from "../src/generators/rasterize-svg.js";
import { fromRepositoryRoot } from "../src/io/repository-paths.js";

/** Self-contained SVG: shapes only, no text, no fonts, no external refs. */
const FIDELITY_SVG = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32">
  <rect x="8" y="8" width="20" height="16" fill="#112233"/>
  <circle cx="48" cy="16" r="10" fill="#cc0000" fill-opacity="0.5"/>
</svg>
`;

function readPngSize(png: Buffer): { width: number; height: number } {
  assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
  return {
    width: png.readUInt32BE(16),
    height: png.readUInt32BE(20),
  };
}

function hasAlphaChannel(png: Buffer): boolean {
  const colorType = png[25];
  return colorType === 4 || colorType === 6;
}

function rgbaAt(
  pixels: Buffer,
  width: number,
  x: number,
  y: number,
): { r: number; g: number; b: number; a: number } {
  const offset = (y * width + x) * 4;
  return {
    r: pixels[offset] ?? -1,
    g: pixels[offset + 1] ?? -1,
    b: pixels[offset + 2] ?? -1,
    a: pixels[offset + 3] ?? -1,
  };
}

async function trySymlink(
  target: string,
  linkPath: string,
  type: "file" | "dir" | "junction",
): Promise<boolean> {
  try {
    await symlink(target, linkPath, type);
    return true;
  } catch (error) {
    const code =
      error && typeof error === "object" && "code" in error
        ? String((error as { code: unknown }).code)
        : "";
    if (code === "EPERM" || code === "ENOTSUP") {
      return false;
    }
    throw error;
  }
}

async function tryHardlink(
  existingPath: string,
  newPath: string,
): Promise<boolean> {
  try {
    await link(existingPath, newPath);
    return true;
  } catch (error) {
    const code =
      error && typeof error === "object" && "code" in error
        ? String((error as { code: unknown }).code)
        : "";
    if (
      code === "EPERM" ||
      code === "ENOTSUP" ||
      code === "EOPNOTSUPP" ||
      code === "EXDEV"
    ) {
      return false;
    }
    throw error;
  }
}

async function pathExists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function withBrandFixture(
  setup: (root: string) => Promise<{
    brandContext: Record<string, unknown>;
    job: Record<string, unknown>;
  }>,
  run: (
    root: string,
    brandContext: Record<string, unknown>,
    job: Record<string, unknown>,
  ) => Promise<void>,
): Promise<void> {
  const root = await mkdtemp(join(tmpdir(), "mobs-asset-gen-"));
  try {
    const { brandContext, job } = await setup(root);
    await run(root, brandContext, job);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}

test("raster options pin resvg to 96 DPI, original size, no system fonts", () => {
  assert.equal(ASSET_GENERATOR_RASTER_OPTIONS.dpi, 96);
  assert.deepEqual(ASSET_GENERATOR_RASTER_OPTIONS.fitTo, { mode: "original" });
  assert.equal(ASSET_GENERATOR_RASTER_OPTIONS.font.loadSystemFonts, false);
});

test("fidelity: self-contained SVG rasterizes to original size with real transparency", () => {
  const svg = Buffer.from(FIDELITY_SVG, "utf8");
  const { png, width, height, pixels } = rasterizeSvgToPng(svg);
  const size = readPngSize(png);

  assert.equal(width, 64);
  assert.equal(height, 32);
  assert.deepEqual(size, { width: 64, height: 32 });
  assert.equal(hasAlphaChannel(png), true);
  assert.equal(pixels.length, width * height * 4);

  const corner = rgbaAt(pixels, width, 0, 0);
  assert.equal(corner.a, 0, "corner pixel must be fully transparent");

  const opaque = rgbaAt(pixels, width, 12, 12);
  assert.equal(opaque.r, 0x11);
  assert.equal(opaque.g, 0x22);
  assert.equal(opaque.b, 0x33);
  assert.equal(opaque.a, 255);

  const again = rasterizeSvgToPng(svg);
  assert.deepEqual(again.png, png);
});

test("Asset Generator derives deterministic PNG, overwrites same path, keeps source intact", async () => {
  await withBrandFixture(
    async (root) => {
      await mkdir(join(root, "source"), { recursive: true });
      await mkdir(join(root, "exports"), { recursive: true });
      await writeFile(join(root, "source", "mark.svg"), FIDELITY_SVG, "utf8");

      return {
        brandContext: {
          brandId: "brand-fixture",
          sourcePath: "source",
          exportsPath: "exports",
          masters: {
            mark: "mark.svg",
          },
        },
        job: {
          masterKey: "mark",
          format: "png",
        },
      };
    },
    async (root, brandContext, job) => {
      const generator = await AssetGenerator.create();
      const rootReal = await realpath(root);
      const masterPath = join(rootReal, "source", "mark.svg");
      const before = await readFile(masterPath);
      const outputPath = resolve(rootReal, "exports", "mark.png");

      const first = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });
      const second = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });

      assert.equal(first.status, "ok");
      assert.equal(second.status, "ok");

      assert.deepEqual(first.filesWritten, [outputPath]);
      assert.deepEqual(second.filesWritten, [outputPath]);

      const firstPng = await readFile(outputPath);
      const secondPng = await readFile(second.filesWritten[0]!);
      assert.deepEqual(secondPng, firstPng);
      assert.deepEqual(readPngSize(firstPng), { width: 64, height: 32 });
      assert.equal(hasAlphaChannel(firstPng), true);

      const exportNames = await readdir(join(rootReal, "exports"));
      assert.deepEqual(exportNames, ["mark.png"]);

      assert.deepEqual(await readFile(masterPath), before);
      assert.equal(
        first.steps.some((step) => step.component === "core"),
        false,
      );
    },
  );
});

test("Asset Generator rejects missing masterKey", async () => {
  await withBrandFixture(
    async (root) => {
      await mkdir(join(root, "source"), { recursive: true });
      await mkdir(join(root, "exports"), { recursive: true });
      await writeFile(join(root, "source", "mark.svg"), FIDELITY_SVG, "utf8");

      return {
        brandContext: {
          brandId: "brand-fixture",
          sourcePath: "source",
          exportsPath: "exports",
          masters: { mark: "mark.svg" },
        },
        job: { masterKey: "absent", format: "png" },
      };
    },
    async (root, brandContext, job) => {
      const generator = await AssetGenerator.create();
      const diagnostic = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });

      assert.equal(diagnostic.status, "failed");
      assert.equal(diagnostic.failure?.component, "asset-generator");
      assert.match(diagnostic.failure?.message ?? "", /absent from masters/);
      assert.deepEqual(diagnostic.filesWritten, []);
    },
  );
});

test("Asset Generator rejects non-png format via schema", async () => {
  const generator = await AssetGenerator.create();
  const diagnostic = await generator.run({
    brandDeclarationDir: tmpdir(),
    brandContext: {
      brandId: "brand-fixture",
      sourcePath: "source",
      exportsPath: "exports",
      masters: { mark: "mark.svg" },
    },
    job: { masterKey: "mark", format: "webp" },
  });

  assert.equal(diagnostic.status, "failed");
  assert.equal(diagnostic.failure?.stage, "validate-export-job");
});

test("Asset Generator rejects *_INK catalog values via schema", async () => {
  const generator = await AssetGenerator.create();
  const diagnostic = await generator.run({
    brandDeclarationDir: tmpdir(),
    brandContext: {
      brandId: "brand-fixture",
      sourcePath: "source",
      exportsPath: "exports",
      masters: { mark: "mark_INK.svg" },
    },
    job: { masterKey: "mark", format: "png" },
  });

  assert.equal(diagnostic.status, "failed");
  assert.equal(diagnostic.failure?.stage, "validate-brand-context");
});

test("Asset Generator rejects reference/ catalog values via schema", async () => {
  const generator = await AssetGenerator.create();
  const diagnostic = await generator.run({
    brandDeclarationDir: tmpdir(),
    brandContext: {
      brandId: "brand-fixture",
      sourcePath: "source",
      exportsPath: "exports",
      masters: { mark: "reference/mark.svg" },
    },
    job: { masterKey: "mark", format: "png" },
  });

  assert.equal(diagnostic.status, "failed");
  assert.equal(diagnostic.failure?.stage, "validate-brand-context");
});

test("invariant: exportsPath inside sourcePath is rejected without creating directories", async () => {
  await withBrandFixture(
    async (root) => {
      await mkdir(join(root, "source"), { recursive: true });
      await writeFile(join(root, "source", "mark.svg"), FIDELITY_SVG, "utf8");

      return {
        brandContext: {
          brandId: "brand-fixture",
          sourcePath: "source",
          exportsPath: "source/nested-exports",
          masters: { mark: "mark.svg" },
        },
        job: { masterKey: "mark", format: "png" },
      };
    },
    async (root, brandContext, job) => {
      const nested = join(root, "source", "nested-exports");
      assert.equal(await pathExists(nested), false);

      const generator = await AssetGenerator.create();
      const diagnostic = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });

      assert.equal(diagnostic.status, "failed");
      assert.match(diagnostic.failure?.message ?? "", /inside sourcePath/);
      assert.equal(await pathExists(nested), false);
      assert.deepEqual(await readdir(join(root, "source")), ["mark.svg"]);
    },
  );
});

test("invariant: sourcePath symlink escaping Brand declaration directory is rejected", async () => {
  const workspace = await mkdtemp(join(tmpdir(), "mobs-asset-escape-src-"));
  const brandRoot = join(workspace, "brand");
  const outside = join(workspace, "outside-source");

  try {
    await mkdir(brandRoot, { recursive: true });
    await mkdir(outside, { recursive: true });
    await mkdir(join(brandRoot, "exports"), { recursive: true });
    await writeFile(join(outside, "mark.svg"), FIDELITY_SVG, "utf8");

    const linked = await trySymlink(outside, join(brandRoot, "source"), "junction");
    if (!linked) {
      return;
    }

    const generator = await AssetGenerator.create();
    const diagnostic = await generator.run({
      brandDeclarationDir: brandRoot,
      brandContext: {
        brandId: "brand-fixture",
        sourcePath: "source",
        exportsPath: "exports",
        masters: { mark: "mark.svg" },
      },
      job: { masterKey: "mark", format: "png" },
    });

    assert.equal(diagnostic.status, "failed");
    assert.match(
      diagnostic.failure?.message ?? "",
      /escapes the Brand declaration directory via symlink/,
    );
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
});

test("invariant: exportsPath symlink escaping Brand declaration directory is rejected", async () => {
  const workspace = await mkdtemp(join(tmpdir(), "mobs-asset-escape-exp-"));
  const brandRoot = join(workspace, "brand");
  const outside = join(workspace, "outside-exports");

  try {
    await mkdir(brandRoot, { recursive: true });
    await mkdir(outside, { recursive: true });
    await mkdir(join(brandRoot, "source"), { recursive: true });
    await writeFile(join(brandRoot, "source", "mark.svg"), FIDELITY_SVG, "utf8");

    const linked = await trySymlink(outside, join(brandRoot, "exports"), "junction");
    if (!linked) {
      return;
    }

    const generator = await AssetGenerator.create();
    const diagnostic = await generator.run({
      brandDeclarationDir: brandRoot,
      brandContext: {
        brandId: "brand-fixture",
        sourcePath: "source",
        exportsPath: "exports",
        masters: { mark: "mark.svg" },
      },
      job: { masterKey: "mark", format: "png" },
    });

    assert.equal(diagnostic.status, "failed");
    assert.match(
      diagnostic.failure?.message ?? "",
      /escapes the Brand declaration directory via symlink/,
    );
    assert.equal(await pathExists(join(outside, "mark.png")), false);
  } finally {
    await rm(workspace, { recursive: true, force: true });
  }
});

test("invariant: existing output symlink is rejected before write", async () => {
  await withBrandFixture(
    async (root) => {
      await mkdir(join(root, "source"), { recursive: true });
      await mkdir(join(root, "exports"), { recursive: true });
      await writeFile(join(root, "source", "mark.svg"), FIDELITY_SVG, "utf8");

      const outsideTarget = join(root, "outside-target.png");
      await writeFile(outsideTarget, "PROTECTED_TARGET", "utf8");

      const linked = await trySymlink(
        outsideTarget,
        join(root, "exports", "mark.png"),
        "file",
      );
      if (!linked) {
        return { brandContext: { skip: true }, job: { skip: true } };
      }

      return {
        brandContext: {
          brandId: "brand-fixture",
          sourcePath: "source",
          exportsPath: "exports",
          masters: { mark: "mark.svg" },
        },
        job: { masterKey: "mark", format: "png" },
      };
    },
    async (root, brandContext, job) => {
      if ("skip" in brandContext) {
        return;
      }

      const generator = await AssetGenerator.create();
      const diagnostic = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });

      assert.equal(diagnostic.status, "failed");
      assert.match(
        diagnostic.failure?.message ?? "",
        /physical alias \(symlink\)/,
      );
      assert.deepEqual(diagnostic.filesWritten, []);

      const target = await readFile(join(root, "outside-target.png"), "utf8");
      assert.equal(target, "PROTECTED_TARGET");

      const linkStats = await lstat(join(root, "exports", "mark.png"));
      assert.equal(linkStats.isSymbolicLink(), true);

      const master = await readFile(join(root, "source", "mark.svg"), "utf8");
      assert.equal(master, FIDELITY_SVG);
    },
  );
});

test("invariant: output symlink onto the master itself is rejected before write", async () => {
  await withBrandFixture(
    async (root) => {
      await mkdir(join(root, "source"), { recursive: true });
      await mkdir(join(root, "exports"), { recursive: true });
      const masterPath = join(root, "source", "mark.svg");
      await writeFile(masterPath, FIDELITY_SVG, "utf8");

      const linked = await trySymlink(
        masterPath,
        join(root, "exports", "mark.png"),
        "file",
      );
      if (!linked) {
        return { brandContext: { skip: true }, job: { skip: true } };
      }

      return {
        brandContext: {
          brandId: "brand-fixture",
          sourcePath: "source",
          exportsPath: "exports",
          masters: { mark: "mark.svg" },
        },
        job: { masterKey: "mark", format: "png" },
      };
    },
    async (root, brandContext, job) => {
      if ("skip" in brandContext) {
        return;
      }

      const generator = await AssetGenerator.create();
      const diagnostic = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });

      assert.equal(diagnostic.status, "failed");
      assert.match(
        diagnostic.failure?.message ?? "",
        /physical alias \(symlink\)/,
      );
      assert.deepEqual(
        await readFile(join(root, "source", "mark.svg"), "utf8"),
        FIDELITY_SVG,
      );
    },
  );
});

test("invariant: output hardlink onto the master is rejected before write", async () => {
  await withBrandFixture(
    async (root) => {
      await mkdir(join(root, "source"), { recursive: true });
      await mkdir(join(root, "exports"), { recursive: true });
      const masterPath = join(root, "source", "mark.svg");
      await writeFile(masterPath, FIDELITY_SVG, "utf8");

      const linked = await tryHardlink(
        masterPath,
        join(root, "exports", "mark.png"),
      );
      if (!linked) {
        return { brandContext: { skip: true }, job: { skip: true } };
      }

      return {
        brandContext: {
          brandId: "brand-fixture",
          sourcePath: "source",
          exportsPath: "exports",
          masters: { mark: "mark.svg" },
        },
        job: { masterKey: "mark", format: "png" },
      };
    },
    async (root, brandContext, job) => {
      if ("skip" in brandContext) {
        return;
      }

      const masterPath = join(root, "source", "mark.svg");
      const outputPath = join(root, "exports", "mark.png");
      const masterBefore = await readFile(masterPath);
      const outputBefore = await readFile(outputPath);
      const outputStats = await lstat(outputPath);
      assert.equal(outputStats.isSymbolicLink(), false);
      assert.ok(outputStats.nlink > 1);

      const generator = await AssetGenerator.create();
      const diagnostic = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });

      assert.equal(diagnostic.status, "failed");
      assert.match(
        diagnostic.failure?.message ?? "",
        /physical alias \(hardlink nlink > 1\)/,
      );
      assert.deepEqual(diagnostic.filesWritten, []);
      assert.deepEqual(await readFile(masterPath), masterBefore);
      assert.deepEqual(await readFile(outputPath), outputBefore);
      assert.deepEqual(masterBefore, Buffer.from(FIDELITY_SVG, "utf8"));
    },
  );
});

test("invariant: output hardlink onto a protected file is rejected before write", async () => {
  await withBrandFixture(
    async (root) => {
      await mkdir(join(root, "source"), { recursive: true });
      await mkdir(join(root, "exports"), { recursive: true });
      await writeFile(join(root, "source", "mark.svg"), FIDELITY_SVG, "utf8");

      const protectedPath = join(root, "protected-original.bin");
      await writeFile(protectedPath, "PROTECTED_HARDLINK_TARGET", "utf8");

      const linked = await tryHardlink(
        protectedPath,
        join(root, "exports", "mark.png"),
      );
      if (!linked) {
        return { brandContext: { skip: true }, job: { skip: true } };
      }

      return {
        brandContext: {
          brandId: "brand-fixture",
          sourcePath: "source",
          exportsPath: "exports",
          masters: { mark: "mark.svg" },
        },
        job: { masterKey: "mark", format: "png" },
      };
    },
    async (root, brandContext, job) => {
      if ("skip" in brandContext) {
        return;
      }

      const protectedPath = join(root, "protected-original.bin");
      const outputPath = join(root, "exports", "mark.png");
      const protectedBefore = await readFile(protectedPath);
      const outputBefore = await readFile(outputPath);
      const masterBefore = await readFile(join(root, "source", "mark.svg"));
      assert.ok((await lstat(outputPath)).nlink > 1);

      const generator = await AssetGenerator.create();
      const diagnostic = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });

      assert.equal(diagnostic.status, "failed");
      assert.match(
        diagnostic.failure?.message ?? "",
        /physical alias \(hardlink nlink > 1\)/,
      );
      assert.deepEqual(diagnostic.filesWritten, []);
      assert.deepEqual(await readFile(protectedPath), protectedBefore);
      assert.deepEqual(await readFile(outputPath), outputBefore);
      assert.deepEqual(await readFile(join(root, "source", "mark.svg")), masterBefore);
      assert.equal(protectedBefore.toString("utf8"), "PROTECTED_HARDLINK_TARGET");
    },
  );
});

test("Asset Generator rejects symlink escape out of sourcePath for a master file", async () => {
  await withBrandFixture(
    async (root) => {
      const outside = join(root, "outside");
      await mkdir(join(root, "source"), { recursive: true });
      await mkdir(join(root, "exports"), { recursive: true });
      await mkdir(outside, { recursive: true });
      await writeFile(join(outside, "escaped.svg"), FIDELITY_SVG, "utf8");

      const linked = await trySymlink(
        join(outside, "escaped.svg"),
        join(root, "source", "mark.svg"),
        "file",
      );
      if (!linked) {
        return {
          brandContext: { skip: true },
          job: { skip: true },
        };
      }

      return {
        brandContext: {
          brandId: "brand-fixture",
          sourcePath: "source",
          exportsPath: "exports",
          masters: { mark: "mark.svg" },
        },
        job: { masterKey: "mark", format: "png" },
      };
    },
    async (root, brandContext, job) => {
      if ("skip" in brandContext) {
        return;
      }

      const generator = await AssetGenerator.create();
      const diagnostic = await generator.run({
        brandDeclarationDir: root,
        brandContext,
        job,
      });

      assert.equal(diagnostic.status, "failed");
      assert.match(diagnostic.failure?.message ?? "", /escapes its container/);
    },
  );
});

test("Asset Generator remains isolated from Core and CLI entrypoints", async () => {
  const cliSource = await readFile(
    fromRepositoryRoot("project", "automation", "src", "cli.ts"),
    "utf8",
  );
  const coreSource = await readFile(
    fromRepositoryRoot("project", "automation", "src", "core", "mobs-core.ts"),
    "utf8",
  );

  assert.equal(cliSource.includes("asset-generator"), false);
  assert.equal(cliSource.includes("AssetGenerator"), false);
  assert.equal(coreSource.includes("asset-generator"), false);
  assert.equal(coreSource.includes("AssetGenerator"), false);
});
