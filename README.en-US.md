A tailwindcss plugin based on antd Design Token.

English | [简体中文](./README.zh-CN.md)

# Project Introduction

Version requirements:

- antd >= 5
- tailwindcss >= 3

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

### tailwindcss v3

1. Register tailwind plugin

```js
// tailwind.config.ts
import type { Config } from "tailwindcss/types/config";
import antdThemePreset from "tailwind-preset-antd/plugin";

const config: Config = {
  // ...
  // or custom plugins config: [antdThemePreset({ twPrefix: 'ant', cssVarPrefix: 'abcd' })],
  plugins: [antdThemePreset],
};

export default config;
```

2. Register global css variables based on antd token

```jsx
import { AntdTokenCssVar } from "tailwind-preset-antd/components";

export default function App() {
  return (
    <>
      <AntdTokenCssVar />
    </>
  );
}
```

If you use the `tailwind-merge` plugin, you need to add `fontSizes` to its configuration. See [Using with tailwind-merge](#using-with-tailwind-merge) for details

### tailwindcss v4

See [How can I pass parameters to a TailwindCSS plugin in a CSS-first configuration?](https://github.com/tailwindlabs/tailwindcss/discussions/15997)

```css
@plugin "tailwind-preset-antd/plugin";

/* or
@plugin "tailwind-preset-antd/plugin" {
  twPrefix: "ant";
  cssVarPrefix: "abcd";
}
*/
```

```jsx
import { AntdTokenCssVar } from "tailwind-preset-antd/components";

export default function App() {
  return (
    <>
      <AntdTokenCssVar />
    </>
  );
}
```

## Configuration Options

- `twPrefix`: tw class name prefix, default is `''`
- `cssVarPrefix`: Generated css var variable prefix, default is `'a'`

For example: when `twPrefix` is `ant` and `cssVarPrefix` is `abcd`, the generated css var variable and style are as follows:

```jsx
/**
 * :root{
 *  --abcd-colorPrimary: 47 84 235;
 * }
 */
function App() {
  return <div className="bg-ant-colorPrimary"></div>;
}

// Generated css: .bg-ant-colorPrimary { background-color: rgb(var(--a-colorPrimary)); }
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
