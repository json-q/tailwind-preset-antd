import { describe, expect, it } from "vitest";
import { genCSSVarByTokens } from "../genCssVarByTokens";

describe("createColorPalettes", () => {
  it("should generate css variables correctly", () => {
    const tokens = {
      colorPrimary: "#ff0000",
      colorSuccess: "#00ff00",
    } as any;
    const result = genCSSVarByTokens(tokens, "--css-var");
    expect(result).toContain("--css-var-colorPrimary:255 0 0;");
    expect(result).toContain("--css-var-colorSuccess:0 255 0;");
  });

  it("should generate css variables for antd v6 or v5 color palettes", () => {
    const tokens = {
      red: "#ff0000",
      red1: "#ff7875",
      "red-1": "#ff7875",
      blue: "#1890ff",
      blue5: "#096dd9",
      "blue-5": "#096dd9",
    } as any;
    const result = genCSSVarByTokens(tokens, "--css-var");
    expect(result).toContain("--css-var-red:255 0 0;");
    expect(result).toContain("--css-var-red1:255 120 117;");
    expect(result).toContain("--css-var-red-1:255 120 117;");
    expect(result).toContain("--css-var-blue:24 144 255;");
    expect(result).toContain("--css-var-blue5:9 109 217;");
    expect(result).toContain("--css-var-blue-5:9 109 217;");
  });

  it("should ignore startWith rgb", () => {
    const tokens = { colorText: "rgb(255, 255, 255)" } as any;
    const result = genCSSVarByTokens(tokens, "--css-var");
    expect(result).toContain("--css-var-colorText:rgb(255, 255, 255);");
  });

  it("should generate CSS variables for fontSize, margin, and borderRadius tokens", () => {
    const tokens = {
      fontSize: 14,
      margin: 8,
      borderRadius: 6,
    } as any;
    const result = genCSSVarByTokens(tokens, "--css-var");
    expect(result).toContain("--css-var-fontSize:14px;");
    expect(result).toContain("--css-var-margin:8px;");
    expect(result).toContain("--css-var-borderRadius:6px;");
  });

  it("should generate CSS variables for boxShadow tokens", () => {
    const tokens = {
      boxShadow:
        "0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)",
      boxShadowSecondary:
        "0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05)",
      boxShadowTertiary:
        "0 1px 2px 0 rgba(0,0,0,0.05), 0 1px 6px -1px rgba(0,0,0,0.03), 0 2px 4px 0 rgba(0,0,0,0.03)",
    } as any;
    const result = genCSSVarByTokens(tokens, "--css-var");
    expect(result).toContain(
      "--css-var-boxShadow:0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05);"
    );
    expect(result).toContain(
      "--css-var-boxShadowSecondary:0 6px 16px 0 rgba(0,0,0,0.08), 0 3px 6px -4px rgba(0,0,0,0.12), 0 9px 28px 8px rgba(0,0,0,0.05);"
    );
    expect(result).toContain(
      "--css-var-boxShadowTertiary:0 1px 2px 0 rgba(0,0,0,0.05), 0 1px 6px -1px rgba(0,0,0,0.03), 0 2px 4px 0 rgba(0,0,0,0.03);"
    );
  });
});
