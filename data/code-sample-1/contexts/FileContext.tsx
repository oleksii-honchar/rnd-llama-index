/**
 * This context has custom value and set function from useState hook. They both used in provider to make them available for every consumer. So useContext() somewhere you can get access to value and to fn for modification. It's a solution for loose coupled simple app state.
 */
import { createContext, ReactNode, useState } from "react";

interface FileContextProviderProps {
  children?: ReactNode;
}

interface FileContextProps {
  file: File | undefined;
  setFile: (file: File) => void;
}

export const FileContext = createContext<FileContextProps>({
  file: undefined,
  setFile: () => {},
});

export function FileContextProvider({ children }: FileContextProviderProps): ReactNode {
  const [file, setFile] = useState<File | undefined>(undefined);

  return <FileContext.Provider value={{ file, setFile }}>{children}</FileContext.Provider>;
}
