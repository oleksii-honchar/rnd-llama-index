import { CorePalette, CorePaletteColors, Scheme, argbFromHex, hexFromArgb } from "@material/material-color-utilities";

import { mdTailwindThemeSchema } from "src/theme/mdTailwindThemeSchema";

import { nl } from "src/utils/native-lodash.ts";

interface CoreThemeColors {
  primary: string;
  secondary?: string;
  tertiary?: string;
  neutral?: string;
  "neutral-variant"?: string;
  error?: string;
}

export interface MDTailwindThemeJson {
  colors: {
    md: {
      sys: {
        light: object;
        dark?: object;
      };
      ref: {
        pal: object;
      };
    };
  };
}

export class MDTailwindTheme {
  coreColors: CoreThemeColors;
  corePalette: CorePalette;
  scheme: Scheme;
  theme: MDTailwindThemeJson;

  constructor(colors: CoreThemeColors) {
    // create palette and scheme for primary color with rest of the colors inferred
    const primary = argbFromHex(colors.primary);
    const tmpPalette = CorePalette.of(primary);
    const tmpScheme = Scheme.lightFromCorePalette(tmpPalette);

    // reassuring that colors is set either by user or inferred
    this.coreColors = {
      "primary": colors.primary,
      "secondary": colors.secondary ?? hexFromArgb(tmpScheme.secondary),
      "tertiary": colors.tertiary ?? hexFromArgb(tmpScheme.tertiary),
      "error": colors.error ?? hexFromArgb(tmpScheme.error),
      "neutral": colors.neutral ?? hexFromArgb(nl.get(tmpScheme, "neutral")),
      "neutral-variant": colors["neutral-variant"] ?? hexFromArgb(nl.get(tmpScheme, "neutralVariant")),
    };

    // if other colors defined, use them, otherwise use inferred colors
    const argbCoreColors = <CorePaletteColors>{
      primary: argbFromHex(this.coreColors.primary),
      secondary: argbFromHex(this.coreColors.secondary as string),
      error: argbFromHex(this.coreColors.error as string),
      neutral: argbFromHex(this.coreColors.neutral as string),
      neutralVariant: argbFromHex(this.coreColors["neutral-variant"] as string),
    };

    // rebuild palette and scheme with actual colors
    this.corePalette = CorePalette.fromColors(argbCoreColors);
    this.scheme = Scheme.lightFromCorePalette(this.corePalette);

    this.composeTheme();
    this.validateTheme();
  }

  private composeTheme() {
    const coreColorsCodes = {
      "primary": "a1",
      "secondary": "a2",
      "error": "error",
      "neutral": "n1",
      "neutral-variant": "n2",
    };

    const schemeJson = this.scheme.toJSON();

    // utils to get tones for neutral and neutral-variant
    const n1Tone = (idx: number) => hexFromArgb(this.corePalette.n1.tone(100 - idx / 10));
    const n2Tone = (idx: number) => hexFromArgb(this.corePalette.n2.tone(100 - idx / 10));

    // edge-case: when only Primary color set and the rest is inferred neutral will be dark. Let's set them to light
    this.coreColors.neutral = n1Tone(40);
    this.coreColors["neutral-variant"] = n2Tone(40);

    this.theme = {
      colors: {
        md: {
          sys: {
            light: {},
          },
          ref: {
            pal: {
              ...this.coreColors,
            },
          },
        },
      },
    };

    // converting sys-light semantic colors to hex
    Object.keys(schemeJson).forEach((key) => {
      const argb = nl.get(schemeJson, key) as number;
      const hex = hexFromArgb(argb);
      nl.set(this.theme, `colors.md.sys.light.${nl.camelToKebab(key)}`, hex);
    });

    // there is no surface-levels in schema by default, let's add them manually
    nl.set(this.theme, `colors.md.sys.light.surface-container-highest`, n1Tone(100));
    nl.set(this.theme, `colors.md.sys.light.surface-container-high`, n1Tone(80));
    nl.set(this.theme, `colors.md.sys.light.surface-container`, n1Tone(60));
    nl.set(this.theme, `colors.md.sys.light.surface-container-low`, n1Tone(40));
    nl.set(this.theme, `colors.md.sys.light.surface-container-lowest`, n1Tone(0));
    nl.set(this.theme, `colors.md.sys.light.surface-dim`, n1Tone(130));
    nl.set(this.theme, `colors.md.sys.light.surface`, n1Tone(20));

    // getting tones for core colors
    const themeColorShadeCodes = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 20, 10];
    const schemeColorShadeCodes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 98, 99];

    // converting color shades to hex
    Object.keys(coreColorsCodes).forEach((key) => {
      // key=primary -> a1
      const tonalPalette = this.corePalette[coreColorsCodes[key]];
      for (let idx = 0; idx < schemeColorShadeCodes.length; idx++) {
        const argb = tonalPalette.tone(schemeColorShadeCodes[idx]);
        const hex = hexFromArgb(argb);
        nl.set(this.theme, `colors.md.ref.pal.${nl.camelToKebab(key)}${themeColorShadeCodes[idx]}`, hex);
      }
    });
  }

  private validateTheme() {
    const res = mdTailwindThemeSchema.validate(this.theme);
    if (res.error) {
      throw new Error(`Validation error: ${res.error.message}`);
    }
  }

  toJson(): MDTailwindThemeJson {
    return this.theme;
  }
}
