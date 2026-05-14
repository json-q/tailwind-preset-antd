import hexRgb from "hex-rgb";

export function isRGBColor(color: string) {
  return color.trim().startsWith("rgb");
}

export function hexToRgb(hex: string) {
  const { red, green, blue } = hexRgb(hex);
  return `${red} ${green} ${blue}`;
}
