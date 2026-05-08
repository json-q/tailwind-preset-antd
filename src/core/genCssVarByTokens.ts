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

  const presetTokens = [
    ...colorPalettes,
    ...functionalColors,
    ...semanticColors,
    ...margins,
    ...borderRadius,
    ...fontSizes,
  ];

  for (let i = 0; i < presetTokens.length; i++) {
    const key = presetTokens[i];
    const value = tokens[key];

    if (value === undefined && process.env.NODE_ENV !== "production") {
      console.warn(`[tailwind-preset-antd]: ${key} is not defined in antd design token`);
      continue;
    }

    // https://v3.tailwindcss.com/docs/customizing-colors#using-css-variables
    if (colorPalettes.includes(key as any)) {
      colorsVariables += `--${cssVarPrefix}-${key}:${hexToRgb(value as string)};`;
      continue;
    }

    if (functionalColors.includes(key)) {
      const rgb = hexToRgb(value as string);
      colorsVariables += `--${cssVarPrefix}-${key}:${rgb};`;
      continue;
    }

    if (semanticColors.includes(key)) {
      const rgb = isRGBColor(value as string) ? value : `rgb(${hexToRgb(value as string)})`;
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
