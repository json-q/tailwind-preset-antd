import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

import { DEFAULT_CSS_VAR_PREFIX } from "./constants";
import {
  createBorderRadius,
  createBoxShadow,
  createColorPalettes,
  createFontSize,
  createSpacing,
} from "./core/genTailwindTheme";

interface PluginOptions {
  /**
   * @description tw class prefix
   * @default '''
   */
  twPrefix?: string;
  /**
   * @description css variables prefix
   * @default 'a'
   */
  cssVarPrefix?: string;
}

// override private plugin interface
interface PluginWithOptions<T> {
  (options?: T): {
    handler: (api: any) => void;
  };
  __isOptionsFunction: true;
}

/**
 * @description Based on Antd Design Token to customize TailwindCSS styles, related extensions include `color`, `borderRadius`, `fontSize`, `margin(gap)` and `boxShadow`.
 * @example `bg-colorPrimary` --> `backgroundColor: token.colorPrimary`;
 * @see https://ant.design/docs/react/customize-theme-cn#maptoken
 * @see https://github.com/tailwindlabs/tailwindcss/discussions/13292#discussioncomment-14256365
 */
const twAntdPresetPlugin: PluginWithOptions<PluginOptions> = plugin.withOptions(
  () => () => {},
  (options: PluginOptions = {}) => {
    const { cssVarPrefix = DEFAULT_CSS_VAR_PREFIX, twPrefix = "" } = options;

    return {
      theme: {
        extend: {
          colors: {
            ...createColorPalettes(cssVarPrefix, twPrefix),
            white: "rgb(255 255 255)",
            black: "rgb(0 0 0)",
            current: "currentColor",
            inherit: "inherit",
            transparent: "transparent",
          },
          fontSize: { ...createFontSize(cssVarPrefix, twPrefix) },
          radius: { ...createBorderRadius(cssVarPrefix, twPrefix) }, // v4
          borderRadius: { ...createBorderRadius(cssVarPrefix, twPrefix) }, // v3
          spacing: { ...createSpacing(cssVarPrefix, twPrefix) },

          shadow: { ...createBoxShadow(cssVarPrefix, twPrefix) }, // v4
          boxShadow: { ...createBoxShadow(cssVarPrefix, twPrefix) }, // v3
        },
      },
    } satisfies Partial<Config>;
  }
);

export default twAntdPresetPlugin;
