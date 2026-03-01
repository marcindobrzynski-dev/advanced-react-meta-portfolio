export type AlertType = "success" | "error";

export type AlertState = {
  isOpen: boolean;
  type: AlertType;
  message: string;
};

export type AlertContextValue = AlertState & {
  onOpen: (type: AlertType, message: string) => void;
  onClose: () => void;
};
