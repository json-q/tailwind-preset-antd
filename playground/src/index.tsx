import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import AntdTokenCssVar from "../../src/components";
import "./global.css";

createRoot(document.querySelector("#app")!).render(
  <StrictMode>
    <ConfigProvider>
      <AntdTokenCssVar />
      <App />
    </ConfigProvider>
  </StrictMode>
);
