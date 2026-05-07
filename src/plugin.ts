import type { Config } from "tailwindcss";
// import type { PluginAPI } from "tailwindcss/plugin";
import plugin from "tailwindcss/plugin";

import { DEFAULT_CSS_VAR_PREFIX } from "./constants";
import {
  createBorderRadius,
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
 * @description 使用 Ant Design 的 Design Token 扩展 Tailwind CSS 类名，相关扩展有 color radius fontSize padding
 * @example `bg-colorPrimary` --> `backgroundColor: token.colorPrimary`;
 * @see https://ant-design.antgroup.com/docs/react/customize-theme-cn#seedtoken
 * @see https://github.com/tailwindlabs/tailwindcss/discussions/13292#discussioncomment-14256365
 */
const twAntdPresetPlugin: PluginWithOptions<PluginOptions> = plugin.withOptions(
  () => () => {
    /* empty */
  },
  (options: PluginOptions = {}) => {
    const { cssVarPrefix = DEFAULT_CSS_VAR_PREFIX, twPrefix = "" } = options;

    return {
      theme: {
        /**
         * @see https://tailwindcss.com/docs/customizing-colors#using-css-variables
         */
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
        },
      },
    } satisfies Partial<Config>;
  }
);

export default twAntdPresetPlugin;
