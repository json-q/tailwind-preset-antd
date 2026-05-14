import { render, cleanup } from "@testing-library/react";
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import AntdTokenCssVar from "./components";

describe("AntdTokenCssVar", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });

  afterEach(() => {
    cleanup();
  });

  it("should render correctly", () => {
    const { container } = render(<AntdTokenCssVar />);
    expect(container).toBeDefined();
    const style = document.querySelector("style#antd-token-inject");
    expect(style?.textContent).toContain("--a-");
  });

  it("should inject style element with CSS variables", () => {
    render(<AntdTokenCssVar />);
    const style = document.querySelector("style#antd-token-inject");
    expect(style).toBeTruthy();
    expect(style?.getAttribute("plugin-name")).toBe("tailwind-preset-antd");
    expect(style?.textContent).toContain(":root{");
  });

  it("should use custom cssVarPrefix", () => {
    render(<AntdTokenCssVar cssVarPrefix="custom" />);
    const style = document.querySelector("style#antd-token-inject");
    expect(style?.textContent).toContain("--custom-");
  });

  it("should update CSS variables when token changes", () => {
    const { rerender } = render(<AntdTokenCssVar cssVarPrefix="test" />);
    const style = document.querySelector("style#antd-token-inject");
    const firstContent = style?.textContent;
    expect(firstContent).toContain("--test-");

    rerender(<AntdTokenCssVar cssVarPrefix="test2" />);
    const style2 = document.querySelector("style#antd-token-inject");
    const secondContent = style2?.textContent;
    expect(secondContent).toContain("--test2-");
  });
});
