import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { MDTailwindThemeJson } from "src/theme/MDTailwindTheme";

const initialColor = ""; //empty

export const primaryCoreColorAtom = atomWithStorage<string>("primaryCoreColor", initialColor);
export const secondaryCoreColorAtom = atomWithStorage<string>("secondaryCoreColor", initialColor);
export const tertiraryCoreColorAtom = atomWithStorage<string>("tertiraryCoreColor", initialColor);
export const errorCoreColorAtom = atomWithStorage<string>("errorCoreColor", initialColor);
export const neutralCoreColorAtom = atomWithStorage<string>("neutralCoreColor", initialColor);
export const neutralVariantCoreColorAtom = atomWithStorage<string>("neutralVariantCoreColor", initialColor);

export const coreColorsAtom = atom(
  (get) =>
    Object.fromEntries(
      Object.entries({
        "primary": get(primaryCoreColorAtom),
        "secondary": get(secondaryCoreColorAtom),
        "tertiary": get(tertiraryCoreColorAtom),
        "error": get(errorCoreColorAtom),
        "neutral": get(neutralCoreColorAtom),
        "neutral-variant": get(neutralVariantCoreColorAtom),
      }).filter(([key, value]) => value),
    ),
  (get, set, newPrice) => {
    set(primaryCoreColorAtom, initialColor);
    set(secondaryCoreColorAtom, initialColor);
    set(tertiraryCoreColorAtom, initialColor);
    set(errorCoreColorAtom, initialColor);
    set(neutralCoreColorAtom, initialColor);
    set(neutralVariantCoreColorAtom, initialColor);
  },
);

export const themeAtom = atomWithStorage<MDTailwindThemeJson>("theme", {} as MDTailwindThemeJson);
