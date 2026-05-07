import { describe, expect, it } from "vitest";
import {
  createColorPalettes,
  createFontSize,
  createSpacing,
  createBorderRadius,
} from "../core/genTailwindTheme";
import { colorPalettes } from "../preset";

describe("createColorPalettes", () => {
  it("should create color palette variables with default prefix", () => {
    const result = createColorPalettes();

    expect(result["red"]).toBe("rgb(var(--a-red))");
    expect(result["blue"]).toBe("rgb(var(--a-blue))");
    expect(result["colorPrimary"]).toBe("rgb(var(--a-colorPrimary))");
    expect(result["colorSuccess"]).toBe("rgb(var(--a-colorSuccess))");
    expect(result["colorText"]).toBe("var(--a-colorText)");
  });

  it("should create color palette variables with custom cssVarPrefix", () => {
    const result = createColorPalettes("custom");

    expect(result["red"]).toBe("rgb(var(--custom-red))");
    expect(result["blue"]).toBe("rgb(var(--custom-blue))");
    expect(result["colorPrimary"]).toBe("rgb(var(--custom-colorPrimary))");
  });

  it("should create color palette variables with custom twPrefix", () => {
    const result = createColorPalettes("a", "ant");

    expect(result["ant-red"]).toBe("rgb(var(--a-red))");
    expect(result["ant-blue"]).toBe("rgb(var(--a-blue))");
    expect(result["ant-colorPrimary"]).toBe("rgb(var(--a-colorPrimary))");
  });

  it("should use rgb() wrapper for colorPalettes", () => {
    const result = createColorPalettes();
    colorPalettes.forEach((color) => {
      expect(result[color]).toMatch(/^rgb\(var\(--a-[^)]+\)\)$/);
    });
  });
});

describe("createFontSize", () => {
  it("should create font size variables with default prefix", () => {
    const result = createFontSize();

    expect(result["fontSizeSM"]).toBe("var(--a-fontSizeSM)");
    expect(result["fontSize"]).toBe("var(--a-fontSize)");
    expect(result["fontSizeLG"]).toBe("var(--a-fontSizeLG)");
    expect(result["fontSizeXL"]).toBe("var(--a-fontSizeXL)");
  });

  it("should create font size variables with custom cssVarPrefix", () => {
    const result = createFontSize("custom");

    expect(result["fontSizeSM"]).toBe("var(--custom-fontSizeSM)");
    expect(result["fontSize"]).toBe("var(--custom-fontSize)");
  });

  it("should create font size variables with custom twPrefix", () => {
    const result = createFontSize("a", "ant");

    expect(result["ant-fontSizeSM"]).toBe("var(--a-fontSizeSM)");
    expect(result["ant-fontSize"]).toBe("var(--a-fontSize)");
  });

  it("should create all font size entries", () => {
    const result = createFontSize();
    expect(Object.keys(result).length).toBe(4);
  });
});

describe("createSpacing", () => {
  it("should create spacing variables with default prefix", () => {
    const result = createSpacing();

    expect(result["marginXXS"]).toBe("var(--a-marginXXS)");
    expect(result["marginXS"]).toBe("var(--a-marginXS)");
    expect(result["marginSM"]).toBe("var(--a-marginSM)");
    expect(result["margin"]).toBe("var(--a-margin)");
  });
});

describe("createBorderRadius", () => {
  it("should create border radius variables with default prefix", () => {
    const result = createBorderRadius();

    expect(result["borderRadiusXS"]).toBe("var(--a-borderRadiusXS)");
    expect(result["borderRadiusSM"]).toBe("var(--a-borderRadiusSM)");
    expect(result["borderRadius"]).toBe("var(--a-borderRadius)");
    expect(result["borderRadiusLG"]).toBe("var(--a-borderRadiusLG)");
  });
});
