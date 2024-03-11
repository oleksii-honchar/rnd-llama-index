import { FaClipboardCheck } from "react-icons/fa6";

import { LoggerService } from "@ciklum/logan";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

const logger = new LoggerService();
logger.setTitle("ClipboardContext");

interface ClipboardContextProviderProps {
  children?: ReactNode;
}

interface ClipboardContextProps {
  content: string | undefined;
  setContent: (data: string) => void;
}

async function CopyToClipboard(content: string) {
  try {
    await navigator.clipboard.writeText(content);
    // const msg = `Copied to clipboard: ${content}`;
    logger.debug(content);
    toast.success(content, {
      icon: () => <FaClipboardCheck style={{ color: "#536600" }} />,
    });
  } catch (err) {
    logger.error("Failed to copy: ", err);
    toast.error(`Failed to copy: ${JSON.stringify(err) ?? "UNKNOWN"}`);
  }
}

export const ClipboardContext = createContext<ClipboardContextProps>({
  content: "",
  setContent: () => {},
});

export function ClipboardContextProvider({ children }: ClipboardContextProviderProps): ReactNode {
  const [content, setContent] = useState<string | undefined>(undefined);

  return (
    <ClipboardContext.Provider value={{ content, setContent: CopyToClipboard }}>{children}</ClipboardContext.Provider>
  );
}
