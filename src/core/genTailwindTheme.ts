import { DEFAULT_CSS_VAR_PREFIX } from "../constants";
import {
  borderRadius,
  fontSizes,
  functionalColors,
  margins,
  semanticColors,
  colorPalettes,
} from "../preset";

function genTwPrefixKey(key: string, prefix?: string) {
  return prefix ? `${prefix}-${key}` : key;
}

export function createColorPalettes(
  cssVarPrefix: string = DEFAULT_CSS_VAR_PREFIX,
  twPrefix?: string
) {
  // eg: twPrefix='ant': bg-ant-colorPrimary --> background-color: var(--a-colorPrimary)
  const colorPaletteVar: Record<string, string> = {};

  colorPalettes.forEach((color) => {
    colorPaletteVar[genTwPrefixKey(color, twPrefix)] = `rgb(var(--${cssVarPrefix}-${color}))`;
  });

  functionalColors.forEach((key) => {
    colorPaletteVar[genTwPrefixKey(key, twPrefix)] = `rgb(var(--${cssVarPrefix}-${key}))`;
  });

  semanticColors.forEach((key) => {
    colorPaletteVar[genTwPrefixKey(key, twPrefix)] = `var(--${cssVarPrefix}-${key})`;
  });

  return colorPaletteVar;
}

export function createFontSize(cssVarPrefix: string = DEFAULT_CSS_VAR_PREFIX, twPrefix?: string) {
  const fontSizeVar: Record<string, string> = {};
  fontSizes.forEach((key) => {
    fontSizeVar[genTwPrefixKey(key, twPrefix)] = `var(--${cssVarPrefix}-${key})`;
  });
  return fontSizeVar;
}

export function createSpacing(cssVarPrefix: string = DEFAULT_CSS_VAR_PREFIX, twPrefix?: string) {
  const spacingVar: Record<string, string> = {};
  margins.forEach((key) => {
    spacingVar[genTwPrefixKey(key, twPrefix)] = `var(--${cssVarPrefix}-${key})`;
  });
  return spacingVar;
}

export function createBorderRadius(
  cssVarPrefix: string = DEFAULT_CSS_VAR_PREFIX,
  twPrefix?: string
) {
  const radiusVar: Record<string, string> = {};
  borderRadius.forEach((key) => {
    radiusVar[genTwPrefixKey(key, twPrefix)] = `var(--${cssVarPrefix}-${key})`;
  });
  return radiusVar;
}
