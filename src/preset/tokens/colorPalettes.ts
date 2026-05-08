import type { ColorPalettes, LegacyColorPalettes } from "antd/es/theme/interface";
import type { PresetColorKey } from "antd/es/theme/internal";

export type PresetColorPalettes = ColorPalettes & PresetColorKey & LegacyColorPalettes;

// https://github.com/ant-design/ant-design/blob/master/components/theme/interface/presetColors.ts#L1-L15
export const colors: PresetColorKey[] = [
  "red",
  "volcano",
  "orange",
  "lime",
  "gold",
  "yellow",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
  "magenta",
];

export const colorPaletteCount = 10;
/**
 * `['red', 'red1', 'red2', ……, 'red10', 'magenta',……]`
 */
export const colorPalettes = colors.flatMap((color) => [
  color,
  // antd v6 https://github.com/ant-design/ant-design/blob/master/components/theme/interface/presetColors.ts#L23-L32
  ...Array.from({ length: colorPaletteCount }, (_, i) => `${color}${i + 1}`),
  // antd v5 https://github.com/ant-design/ant-design/blob/5.0.0/components/theme/interface.ts#L74
  ...Array.from({ length: colorPaletteCount }, (_, i) => `${color}-${i + 1}`),
]) as PresetColorPalettes[];
