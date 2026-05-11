import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AntdTokenCssVar from "../../src/components";
import "./global.css";
import Layout from "./Layout";

createRoot(document.querySelector("#app")!).render(
  <StrictMode>
    <Layout>
      <AntdTokenCssVar />
      <App />
    </Layout>
  </StrictMode>
);
