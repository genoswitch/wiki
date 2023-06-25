import { PaletteOptions, SimplePaletteColorOptions } from "@mui/material/styles/createPalette";

type ExtendablePaletteExtraKeys = {
	[key: string]: SimplePaletteColorOptions;
};

/**
 * Material UI Extendable Palette.
 *
 * Allows you to add custom keys will full type matching.
 */
type ExtendablePalette = PaletteOptions & ExtendablePaletteExtraKeys;

export default ExtendablePalette;
