import { theme } from "antd";
import { useRef } from "react";

import { genCSSVarByTokens } from "./core/genCssVarByTokens";
import useCompatibleInsertionEffect from "./hooks/useCompatibleInsertionEffect";

const styleId = "antd-token-inject";

interface AntdTokenCssVarProps {
  cssVarPrefix?: string;
}

export default function AntdTokenCssVar(props: AntdTokenCssVarProps) {
  const { cssVarPrefix } = props;
  const { token } = theme.useToken();

  const cssVarRef = useRef("");

  useCompatibleInsertionEffect(
    () => {
      cssVarRef.current = genCSSVarByTokens(token, cssVarPrefix);
    },
    () => {
      const cssVar = cssVarRef.current;
      const style = document.querySelector(`#${styleId}`) || document.createElement("style");
      style.id = styleId;
      style.setAttribute("plugin-name", "tailwind-preset-antd");
      style.textContent = `:root{${cssVar}}`;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    },
    [token, cssVarPrefix]
  );

  return null;
}
