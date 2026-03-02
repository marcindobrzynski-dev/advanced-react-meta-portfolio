import { Provider } from "@/components/ui/provider";
import { AlertProvider } from "@/components/contact-me-section/context/alertContext.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </Provider>
  </StrictMode>,
);
