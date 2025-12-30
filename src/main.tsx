import { createRoot } from "react-dom/client"
import "./assets/css/globals.css";

import { StrictMode } from "react";
import AppRouter from "./router/Router";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors/>
    <AppRouter />
  </StrictMode>
);