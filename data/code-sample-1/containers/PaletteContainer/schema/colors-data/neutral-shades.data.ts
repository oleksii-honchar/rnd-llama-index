import { StringIndex } from "src/typings";
import { nl } from "src/utils/native-lodash.ts";

export const neutralShadesFrom = (tokens: StringIndex) => [
  {
    name: "Scrim",
    tokenPath: "md-sys-light-scrim",
    bgColor: nl.get(tokens, "colors.md.sys.light.scrim"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    colorHash: nl.get(tokens, "colors.md.sys.light.scrim"),
    shadeName: "N-1000",
  },
  {
    name: "Shadow",
    tokenPath: "md-sys-light-shadow",
    bgColor: nl.get(tokens, "colors.md.sys.light.shadow"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    colorHash: nl.get(tokens, "colors.md.sys.light.shadow"),
    shadeName: "N-1000",
  },
  {
    name: "",
    tokenPath: "md-ref-pal-neutral400",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral400"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral400"),
    shadeName: "N-400",
  },
  {
    name: "",
    tokenPath: "md-ref-pal-neutral300",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral300"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral10"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral300"),
    shadeName: "N-300",
  },
  {
    name: "",
    tokenPath: "md-ref-pal-neutral200",
    bgColor: nl.get(tokens, "colors.md.ref.pal.neutral200"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.ref.pal.neutral200"),
    shadeName: "N-200",
  },
  {
    name: "Surface Dim",
    tokenPath: "md-sys-light-surface-dim",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-dim"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-dim"),
    shadeName: "N-130",
  },
  {
    name: "Surf. Cntr. Highest",
    tokenPath: "md-sys-light-surface-container-highest",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container-highest"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-highest"),
    shadeName: "N-100",
  },
  {
    name: "Surf. Cntr. High",
    tokenPath: "md-sys-light-surface-container-high",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container-high"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-high"),
    shadeName: "N-80",
  },
  {
    name: "Surf. Cntr.",
    tokenPath: "md-sys-light-surface-container",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container"),
    shadeName: "N-60",
  },
  {
    name: "Surf. Cntr. Low",
    tokenPath: "md-sys-light-surface-container-low",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container-low"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-low"),
    shadeName: "N-40",
  },
  {
    name: "Surface",
    tokenPath: "md-sys-light-surface",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface"),
    shadeName: "N-20",
  },
  {
    name: "Surf. Cntr. Lowest",
    tokenPath: "md-sys-light-surface-container-lowest",
    bgColor: nl.get(tokens, "colors.md.sys.light.surface-container-lowest"),
    textColor: nl.get(tokens, "colors.md.ref.pal.neutral900"),
    colorHash: nl.get(tokens, "colors.md.sys.light.surface-container-lowest"),
    shadeName: "N-0",
  },
];