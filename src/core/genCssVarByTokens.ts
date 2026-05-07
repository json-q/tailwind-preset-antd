import type { GlobalToken } from "antd";

import { DEFAULT_CSS_VAR_PREFIX } from "../constants";

import { hexToRgb, isRGBColor } from "../utils";
import {
  borderRadius,
  colorPalettes,
  fontSizes,
  functionalColors,
  margins,
  semanticColors,
} from "../preset";

export function genCSSVarByTokens(
  tokens: GlobalToken,
  cssVarPrefix: string = DEFAULT_CSS_VAR_PREFIX
) {
  let colorsVariables = "";

  for (const [key, value] of Object.entries(tokens)) {
    // https://v3.tailwindcss.com/docs/customizing-colors#using-css-variables
    if (colorPalettes.includes(key)) {
      colorsVariables += `--${cssVarPrefix}-${key}:${hexToRgb(value)};`;
    }

    if (functionalColors.includes(key)) {
      const rgb = hexToRgb(value);
      colorsVariables += `--${cssVarPrefix}-${key}:${rgb};`;
      continue;
    }

    if (semanticColors.includes(key)) {
      const rgb = isRGBColor(value) ? value : `rgb(${hexToRgb(value)})`;
      colorsVariables += `--${cssVarPrefix}-${key}:${rgb};`;
      continue;
    }

    if (fontSizes.includes(key) || margins.includes(key) || borderRadius.includes(key)) {
      colorsVariables += `--${cssVarPrefix}-${key}:${value}px;`;
      continue;
    }
  }
  return colorsVariables;
}
