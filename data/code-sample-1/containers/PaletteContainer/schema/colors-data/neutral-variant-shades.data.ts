import { StringIndex } from "src/typings";
import { nl } from "src/utils/native-lodash.ts";

export const neutralVShadesFrom = (tokens: StringIndex) => [
  {
    tokenPath: "md-ref-pal-neutral-variant900",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    shadeName: "NV-900",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant800",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant800"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant800"),
    shadeName: "NV-800",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant700",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant700"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant700"),
    shadeName: "NV-700",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant600",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant600"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant600"),
    shadeName: "NV-600",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant500",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant500"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant500"),
    shadeName: "NV-500",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant400",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant400"),
    shadeName: "NV-400",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant300",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant300"),
    shadeName: "NV-300",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant200",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant200"),
    shadeName: "NV-200",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant100",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant100"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant100"),
    shadeName: "NV-100",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant50",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant50"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant50"),
    shadeName: "NV-50",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant20",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant20"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant20"),
    shadeName: "NV-20",
  },
  {
    tokenPath: "md-ref-pal-neutral-variant10",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral-variant900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral-variant10"),
    shadeName: "NV-10",
  },
];
