import { StringIndex } from "src/typings";
import { nl } from "src/utils/native-lodash.ts";

export const errorShadesFrom = (tokens: StringIndex) => [
  {
    tokenPath: "md-ref-pal-error900",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error900"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error900"),
    shadeName: "E-900",
  },
  {
    tokenPath: "md-ref-pal-error800",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error800"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error800"),
    shadeName: "E-800",
  },
  {
    tokenPath: "md-ref-pal-error700",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error700"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.700"),
    shadeName: "E-700",
  },
  {
    tokenPath: "md-ref-pal-error600",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error600"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error600"),
    shadeName: "E-600",
  },
  {
    tokenPath: "md-ref-pal-error500",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error500"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error500"),
    shadeName: "E-500",
  },
  {
    tokenPath: "md-ref-pal-error400",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error400"),
    shadeName: "E-400",
  },
  {
    tokenPath: "md-ref-pal-error300",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error300"),
    shadeName: "E-300",
  },
  {
    tokenPath: "md-ref-pal-error200",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error90"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error200"),
    shadeName: "E-200",
  },
  {
    tokenPath: "md-ref-pal-error100",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error100"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error100"),
    shadeName: "E-100",
  },
  {
    tokenPath: "md-ref-pal-error50",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error50"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error50"),
    shadeName: "E-50",
  },
  {
    tokenPath: "md-ref-pal-error20",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error20"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error20"),
    shadeName: "E-20",
  },
  {
    tokenPath: "md-ref-pal-error10",
    bgColor: nl.get(tokens, "colors.md.ref.pal.error10"),
    textColor: nl.get(tokens, "colors.md.ref.pal.error900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.error10"),
    shadeName: "E-10",
  },
];
