// https://ant.design/docs/spec/colors#base-color-palettes
export const colors = [
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
 * `['red', 'red-1', 'red-2', ……, 'red-10', 'magenta',……]`
 */
export const colorPalettes = colors.flatMap((color) => [
  color,
  ...Array.from({ length: colorPaletteCount }, (_, i) => `${color}-${i + 1}`),
]);
