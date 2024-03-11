import { ReactNode } from "react";

type ToolbeltContainerProps = {
  children: ReactNode;
};

export default function ToolbeltContainer({ children }: ToolbeltContainerProps) {
  return (
    <div
      id="ToolbeltContainer"
      className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          p-2 flex flex-col flex-grow justify-center items-center
          bg-md-sys-light-surface/60 backdrop-blur-md 
          rounded-lg
        `}
    >
      {children}
    </div>
  );
}
