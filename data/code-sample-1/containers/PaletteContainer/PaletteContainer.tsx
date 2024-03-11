import { LoggerService } from "@ciklum/logan";
import joi from "joi";
import { useAtomValue } from "jotai";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { StringIndex } from "src/typings/index.d.ts";

import { AnyObject, nl } from "src/utils/native-lodash.ts";

import { FileContext } from "src/contexts/FileContext.tsx";
import { mdTailwindThemeSchema } from "src/theme/mdTailwindThemeSchema.ts";
import Palette from "./components/Palette.tsx";
import PalettePlaceholder from "./components/PalettePlaceholder.tsx";

import { useDebouncedEffect } from "src/hooks/useDebouncedEffect.ts";

import { themeAtom } from "src/state/atoms.ts";

const logger = new LoggerService();
logger.setTitle("PaletteContainer");

export default function PaletteContainer() {
  const { file } = useContext(FileContext);
  const [mdTokens, setMdTokens] = useState({});
  const theme = useAtomValue(themeAtom);

  function processFileContent(content: string) {
    let mdTokensJson: StringIndex = {};
    try {
      mdTokensJson = JSON.parse(content);
      mdTokensJson = joi.attempt(mdTokensJson, mdTailwindThemeSchema);
      const msg = "MD Tokens parsed and applied";
      logger.debug(msg);
      // toast.success(msg);
      setMdTokens(mdTokensJson);
    } catch (err) {
      logger.error(err);
      toast.error(`File schema validation failed: ${(err as Error).message}`);
    }
  }

  useEffect(() => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      processFileContent(reader.result!.toString());
    };
    reader.readAsText(file);
  }, [file]);

  useDebouncedEffect(
    () => {
      setMdTokens(theme);
      const msg = "Theme updated";
      logger.debug(msg);
      if (!nl.isObjectEmpty(theme as unknown as AnyObject)) {
        toast.success(msg);
      }
    },
    300,
    [theme],
  );

  return (
    <div
      id="PaletteContainer"
      className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          p-2 flex flex-col flex-grow
        `}
    >
      {!nl.isObjectEmpty(mdTokens) && <Palette mdTokens={mdTokens} />}
      {nl.isObjectEmpty(mdTokens) && <PalettePlaceholder />}
    </div>
  );
}
