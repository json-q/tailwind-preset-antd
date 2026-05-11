Use antd design token like using tailwindcss.

Provides common antd design token easier to use. Recommended to use antd v6 and tailwindcss v4, but also supports antd v5 and tailwindcss v3.

[简体中文](./README.md) | English

# Project Introduction

Before:

```tsx
import { theme } from "antd";

function App() {
  const { token } = theme.useToken();

  return <div style={{ backgroundColor: token.colorPrimary }}></div>;
}
```

Now:

```tsx
function App() {
  return <div className="bg-colorPrimary"></div>;
}
```

## Basic Usage

### tailwindcss v4

Use plugin in your css

```css
@plugin "tailwind-preset-antd/plugin";

/* or
@plugin "tailwind-preset-antd/plugin" {
  twPrefix: "ant";
  cssVarPrefix: "abcd";
}
*/
```

Import `AntdTokenCssVar` in your component. If you use theme switching, `AntdTokenCssVar` must be used inside antd `ConfigProvider`

```tsx
import AntdTokenCssVar from "tailwind-preset-antd/components";

export default function App() {
  return (
    <>
      <AntdTokenCssVar />
    </>
  );
}
```

### tailwindcss v3

Use plugin in your `tailwind.config.ts`

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss/types/config";
import tailwindPresetAntd from "tailwind-preset-antd/plugin";

const config: Config = {
  // ...
  // or custom plugins config: [tailwindPresetAntd({ twPrefix: 'ant', cssVarPrefix: 'abcd' })],
  plugins: [tailwindPresetAntd],
};

export default config;
```

Import `AntdTokenCssVar` in your component. If you use theme switching, `AntdTokenCssVar` must be used inside antd `ConfigProvider`

```tsx
import AntdTokenCssVar from "tailwind-preset-antd/components";

export default function App() {
  return (
    <>
      <AntdTokenCssVar />
    </>
  );
}
```

If you use the `tailwind-merge` plugin, additional configuration is required. See [Using with tailwind-merge](#using-with-tailwind-merge) for details

## Configuration Options

- `twPrefix`: tw class name prefix, default is `''`
- `cssVarPrefix`: Generated css var variable prefix, default is `'a'` (you must also set `AntdTokenCssVar`'s `cssVarPrefix`)

For example: when `twPrefix` is `ant` and `cssVarPrefix` is `abcd`, the generated css var variable and style are as follows:

```tsx
/**
 * :root{
 *  --abcd-colorPrimary: 47 84 235;
 * }
 */
function App() {
  return <div className="bg-ant-colorPrimary"></div>;
}

// Generated css: .bg-ant-colorPrimary { background-color: rgb(var(--abcd-colorPrimary)); }
```

### Using with tailwind-merge

If you use `tailwind-merge`, additional configuration is required. See [discussions](https://github.com/tailwindlabs/tailwindcss/discussions/19260) for details on this issue

```js
import { extendTailwindMerge } from "tailwind-merge";
import { fontSizes } from "tailwind-preset-antd/preset";

const twMerge = extendTailwindMerge({
  // prefix:"" // if twPrefix is configured
  extend: {
    theme: {
      text: [...fontSizes], // tw-merge v3
      // colors:[...colorPresets] // tw-merge v2
    },
  },
});
```

## Acknowledgments

- [react-antd-admin](https://github.com/condorheroblog/react-antd-admin): The tailwindcss plugin used in this project inspired the development of this repository
