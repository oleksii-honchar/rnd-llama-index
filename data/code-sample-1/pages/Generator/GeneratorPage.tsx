import PaletteContainer from "src/containers/PaletteContainer/PaletteContainer.tsx";
import Info from "./components/Info";
import Toolbelt from "./components/Toolbelt";
import ToolbeltContainer from "./components/ToolbeltContainer";

export default function GeneratorPage() {
  return (
    <article
      className={`
        flex flex-col items-center w-full
      `}
    >
      <Info />
      <ToolbeltContainer>
        <Toolbelt />
        <PaletteContainer />
      </ToolbeltContainer>
    </article>
  );
}
