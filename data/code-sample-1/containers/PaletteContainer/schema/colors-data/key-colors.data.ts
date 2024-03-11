import { StringIndex } from "src/typings";
import { nl } from "src/utils/native-lodash.ts";

export const keyColorsFrom = (tokens: StringIndex) => [
  {
    name: "Primary",
    tokenPath: "md-ref-pal-primary",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-primary"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary"),
  },
  {
    name: "Secondary",
    tokenPath: "md-ref-pal-secondary",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-secondary"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary"),
  },
  {
    name: "Error",
    tokenPath: "md-ref-pal-error",
    bgColor: nl.get(tokens, "colors.md.sys.light.error"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-error"),
    colorHash: nl.get(tokens, "colors.md.sys.light.error"),
  },
  {
    name: "Neutral",
    tokenPath: "md-ref-pal-neutral",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-surface-variant"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral"),
  },
  {
    name: "N. Variant",
    tokenPath: "md-ref-pal-neutral-variant",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant"),
    textColor: nl.get(tokens, "colors.md.sys.light.on-surface"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant"),
  },
];
