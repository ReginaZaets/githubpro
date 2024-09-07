import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { InputProvider } from "./context/inputContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <InputProvider>
        <App />
      </InputProvider>
    </BrowserRouter>
  </StrictMode>
);
