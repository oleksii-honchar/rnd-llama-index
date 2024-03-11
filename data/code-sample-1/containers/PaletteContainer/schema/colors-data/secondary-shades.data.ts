import { StringIndex } from "src/typings";
import { nl } from "src/utils/native-lodash.ts";

export const secondaryShadesFrom = (tokens: StringIndex) => [
  {
    tokenPath: "md-ref-pal-secondary900",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    shadeName: "S-900",
  },
  {
    tokenPath: "md-ref-pal-secondary800",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary800"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary800"),
    shadeName: "S-800",
  },
  {
    tokenPath: "md-ref-pal-secondary700",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary700"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary700"),
    shadeName: "S-700",
  },
  {
    tokenPath: "md-ref-pal-secondary600",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary600"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary600"),
    shadeName: "S-600",
  },
  {
    tokenPath: "md-ref-pal-secondary500",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary500"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary500"),
    shadeName: "S-500",
  },
  {
    tokenPath: "md-ref-pal-secondary400",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary400"),
    shadeName: "S-400",
  },
  {
    tokenPath: "md-ref-pal-secondary300",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary300"),
    shadeName: "S-300",
  },
  {
    tokenPath: "md-ref-pal-secondary200",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary200"),
    shadeName: "S-200",
  },
  {
    tokenPath: "md-ref-pal-secondary100",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary100"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary800"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary100"),
    shadeName: "S-100",
  },
  {
    tokenPath: "md-ref-pal-secondary50",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary50"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary50"),
    shadeName: "S-50",
  },
  {
    tokenPath: "md-ref-pal-secondary20",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary20"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary20"),
    shadeName: "S-20",
  },
  {
    tokenPath: "md-ref-pal-secondary10",
    bgColor: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    textColor: nl.get(tokens, "colors.md.ref.pal.secondary900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.secondary10"),
    shadeName: "S-10",
  },
];
