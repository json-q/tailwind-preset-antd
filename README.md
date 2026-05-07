基于 Antd Design Token 的 tailwindcss 插件。

[English](./README.md) | 简体中文

# 项目介绍

版本要求：

- antd >= 5
- tailwindcss >= 3

以前：

```tsx
import { theme } from "antd";

function App() {
  const { cssVar } = theme.useToken(); // antd v6

  return <div style={{ backgroundColor: cssVar.colorPrimary }}></div>;
}
```

现在：

```tsx
function App() {
  return <div className="bg-colorPrimary"></div>;
}
```

## 基础使用

### tailwindcss v3

1. 注册 tailwind 插件

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

2. 注册基于 antd token 的全局 css 变量

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

如果使用了 `tailwind-merge` 插件，则需要将 `fontSizes` 添加至其配置中，具体使用见 [与 tailwind-merge 配合使用](#与-tailwind-merge-配合使用)

### tailwindcss v4

查看 [How can I pass parameters to a TailwindCSS plugin in a CSS-first configuration?](https://github.com/tailwindlabs/tailwindcss/discussions/15997)

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

## 配置项

- `twPrefix`: tw 类名前缀，默认为 `''`
- `cssVarPrefix`: 生成的 css var 变量前缀，默认为 `'a'`

例如：当 twPrefix 为 `ant` 时，`cssVarPrefix` 为 `abcd` 时，生成的 css var 变量及样式如下：

```jsx
/**
 * :root{
 *  --abcd-colorPrimary: 47 84 235;
 * }
 */
function App() {
  return <div className="bg-ant-colorPrimary"></div>;
}

// 生成的 css: .bg-ant-colorPrimary { background-color: rgb(var(--a-colorPrimary)); }
```

### 与 tailwind-merge 配合使用

如果使用 `tailwind-merge`，需进行额外配置，此问题详见 [discussions](https://github.com/tailwindlabs/tailwindcss/discussions/19260)

```js
import { extendTailwindMerge } from "tailwind-merge";
import { fontSizes } from "tailwind-preset-antd/preset";

const twMerge = extendTailwindMerge({
  // prefix:"" // 如果配置了 twPrefix
  extend: {
    theme: {
      text: [...fontSizes], // tw-merge v3
      // colors:[...colorPresets] // tw-merge v2
    },
  },
});
```

## 鸣谢

- [react-antd-admin](https://github.com/condorheroblog/react-antd-admin)：此项目的 tailwindcss 插件使用启发了此仓库的开发
