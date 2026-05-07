import { functionalColors } from "./tokens/functionalColors";
import { colorPalettes } from "./tokens/colorPalettes";
import { semanticColors } from "./tokens/semanticColors";

export { margins } from "./tokens/margins";
export { fontSizes } from "./tokens/fontSizes";
export { borderRadius } from "./tokens/borderRadius";

export { functionalColors };
export { colorPalettes };
export { semanticColors };

export const colorPresets = [...colorPalettes, ...functionalColors, ...semanticColors];
