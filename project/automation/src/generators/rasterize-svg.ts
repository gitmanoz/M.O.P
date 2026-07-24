import { Resvg } from "@resvg/resvg-js";

/** Fixed rasterization contract for the first Asset Generator slice. */
export const ASSET_GENERATOR_RASTER_OPTIONS = {
  dpi: 96,
  fitTo: { mode: "original" as const },
  font: {
    // Preferential master fonts (e.g. Montserrat) are not loaded or versioned here.
    // System fonts are disabled so generation stays deterministic in tests.
    loadSystemFonts: false,
  },
} as const;

export interface RasterizedPng {
  png: Buffer;
  width: number;
  height: number;
  /** Raw RGBA pixels from the renderer (row-major), used for transparency proofs. */
  pixels: Buffer;
}

/**
 * Rasterize an SVG buffer to PNG.
 * Omitting `background` keeps the PNG transparent.
 */
export function rasterizeSvgToPng(svg: Buffer): RasterizedPng {
  const resvg = new Resvg(svg, ASSET_GENERATOR_RASTER_OPTIONS);
  const rendered = resvg.render();

  return {
    png: rendered.asPng(),
    width: rendered.width,
    height: rendered.height,
    pixels: rendered.pixels,
  };
}
