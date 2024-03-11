import { StringIndex } from "src/typings";
import { nl } from "src/utils/native-lodash.ts";

export const primaryShadesFrom = (tokens: StringIndex) => [
  {
    tokenPath: "md-ref-pal-primary900",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary900"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary900"),
    shadeName: "P-900",
  },
  {
    tokenPath: "md-ref-pal-primary800",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary800"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary800"),
    shadeName: "P-800",
  },
  {
    tokenPath: "md-ref-pal-primary700",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary700"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary700"),
    shadeName: "P-700",
  },
  {
    tokenPath: "md-ref-pal-primary600",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary600"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary600"),
    shadeName: "P-600",
  },
  {
    tokenPath: "md-ref-pal-primary500",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary500"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary20"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary500"),
    shadeName: "P-500",
  },
  {
    tokenPath: "md-ref-pal-primary400",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary20"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary400"),
    shadeName: "P-400",
  },
  {
    tokenPath: "md-ref-pal-primary300",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary20"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary300"),
    shadeName: "P-300",
  },
  {
    tokenPath: "md-ref-pal-primary200",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary700"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary200"),
    shadeName: "P-200",
  },
  {
    tokenPath: "md-ref-pal-primary100",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary100"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary800"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary100"),
    shadeName: "P-100",
  },
  {
    tokenPath: "md-ref-pal-primary50",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary50"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary50"),
    shadeName: "P-50",
  },
  {
    tokenPath: "md-ref-pal-primary20",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary20"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary20"),
    shadeName: "P-20",
  },
  {
    tokenPath: "md-ref-pal-primary10",
    bgColor: nl.get(tokens, "colors.md.ref.pal.primary10"),
    textColor: nl.get(tokens, "colors.md.ref.pal.primary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.primary10"),
    shadeName: "P-10",
  },
];
