像使用 tailwindcss 一样使用 antd design token。

提供常用 antd design token 更易于使用。推荐使用 antd v6 和 tailwindcss v4，但同样支持 antd v5 和 tailwindcss v3。

[English](./README.en-US.md) | 简体中文

# 项目介绍

以前：

```tsx
import { theme } from "antd";

function App() {
  const { token } = theme.useToken();

  return <div style={{ backgroundColor: token.colorPrimary }}></div>;
}
```

现在：

```tsx
function App() {
  return <div className="bg-colorPrimary"></div>;
}
```

## 基础使用

### tailwindcss v4

在你的 css 中使用插件

```css
@plugin "tailwind-preset-antd/plugin";

/* or
@plugin "tailwind-preset-antd/plugin" {
  twPrefix: "ant";
  cssVarPrefix: "abcd";
}
 */
```

在你的任意组件中注入 css 变量的组件

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

在你的 `tailwind.config.ts` 中使用插件

```js
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

在你的任意组件中注入 css 变量的组件

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

如果使用了 `tailwind-merge` 插件，则需要进行额外配置，具体使用见 [与 tailwind-merge 配合使用](#与-tailwind-merge-配合使用)

## 配置项

- `twPrefix`: tw 类名前缀，默认为 `''`
- `cssVarPrefix`: 生成的 css var 变量前缀，默认为 `'a'`（你必须同时设置 `AntdTokenCssVar` 的 `cssVarPrefix`）

例如：当 twPrefix 为 `ant` 时，`cssVarPrefix` 为 `abcd` 时，生成的 css var 变量及样式如下：

```tsx
/**
 * :root{
 *  --abcd-colorPrimary: 47 84 235;
 * }
 */
function App() {
  return <div className="bg-ant-colorPrimary"></div>;
}

// 生成的 css: .bg-ant-colorPrimary { background-color: rgb(var(--abcd-colorPrimary)); }
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
