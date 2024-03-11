import PropTypes, { InferProps } from "prop-types";

import { ColorShade, KeyColor, PaletteColorCol } from "./templates.tsx";

import { errorShadesFrom } from "../schema/colors-data/error-shades.data.ts";
import { keyColorsFrom } from "../schema/colors-data/key-colors.data.ts";
import { neutralShadesFrom } from "../schema/colors-data/neutral-shades.data.ts";
import { neutralVShadesFrom } from "../schema/colors-data/neutral-variant-shades.data.ts";
import { primaryShadesFrom } from "../schema/colors-data/primary-shades.data.ts";
import { secondaryShadesFrom } from "../schema/colors-data/secondary-shades.data.ts";
import { sysLightColorsFrom } from "../schema/colors-data/sys-light-colors.data.ts";

Palette.propTypes = {
  mdTokens: PropTypes.object.isRequired,
};

export default function Palette(props: InferProps<typeof Palette.propTypes>) {
  const { mdTokens } = props;

  return (
    <>
      <h3 className="">Light</h3>
      <section className="flex flex-col justify-center">
        <section className="flex flex-row flex-wrap">
          <section id="colors" className="flex flex-wrap gap-4 py-0 w-full">
            <div className="flex items-stretch h-12 w-full gap-2 justify-between">
              {keyColorsFrom(mdTokens).map((color) => (
                <KeyColor key={color.name} {...color} />
              ))}
            </div>
            <div className="flex items-stretch w-full gap-2 justify-between">
              {sysLightColorsFrom(mdTokens).map((colorCol, idx) => (
                <PaletteColorCol key={`pal-col-${idx}`} colorCol={colorCol} />
              ))}
            </div>
            <div className="flex items-stretch w-full gap-2 justify-between">
              <div className="flex flex-col w-full max-w-[20%]">
                {primaryShadesFrom(mdTokens).map((shadeColor, idx) => (
                  <ColorShade key={`primary-shade-col-${idx}`} {...shadeColor} />
                ))}
              </div>
              <div className="flex flex-col  w-full max-w-[20%]">
                {secondaryShadesFrom(mdTokens).map((shadeColor, idx) => (
                  <ColorShade key={`secondary-shade-col-${idx}`} {...shadeColor} />
                ))}
              </div>
              <div className="flex flex-col  w-full max-w-[20%]">
                {errorShadesFrom(mdTokens).map((shadeColor, idx) => (
                  <ColorShade key={`error-shade-col-${idx}`} {...shadeColor} />
                ))}
              </div>
              <div className="flex flex-col  w-full max-w-[20%]">
                {neutralShadesFrom(mdTokens).map((shadeColor, idx) => (
                  <ColorShade key={`neutral-shade-col-${idx}`} {...shadeColor} />
                ))}
              </div>
              <div className="flex flex-col w-full max-w-[20%]">
                {neutralVShadesFrom(mdTokens).map((shadeColor, idx) => (
                  <ColorShade key={`neutral-v-shade-col-${idx}`} {...shadeColor} />
                ))}
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
