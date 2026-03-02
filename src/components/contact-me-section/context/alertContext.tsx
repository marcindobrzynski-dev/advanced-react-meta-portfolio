import { createContext, useContext, useState } from "react";
import type { AlertState, AlertContextValue } from "./types";

const AlertContext = createContext<AlertContextValue>({
  isOpen: false,
  type: "success",
  message: "",
  onOpen: () => {},
  onClose: () => {},
});

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AlertState>({
    isOpen: false,
    type: "success",
    message: "",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () =>
          setState({ isOpen: false, type: "success", message: "" }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
