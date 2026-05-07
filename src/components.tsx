import { theme } from "antd";
import { useInsertionEffect } from "react";

import { genCSSVarByTokens } from "./core/genCssVarByTokens";

const styleId = "antd-token-inject";

interface AntdTokenCssVarProps {
  cssVarPrefix?: string;
}

export default function AntdTokenCssVar(props: AntdTokenCssVarProps) {
  const { cssVarPrefix } = props;
  const { token } = theme.useToken();

  useInsertionEffect(() => {
    const cssVar = genCSSVarByTokens(token, cssVarPrefix);

    const style = document.querySelector(`#${styleId}`) || document.createElement("style");
    style.id = styleId;
    style.setAttribute("plugin-name", "tailwind-preset-antd");

    style.textContent = `:root{${cssVar}}`;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [token, cssVarPrefix]);

  // return <style id={styleId}>{`:root{${cssVar}}`}</style>;
  return null;
}
