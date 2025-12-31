import { createRoot } from "react-dom/client"
import "./assets/css/globals.css";

import { StrictMode } from "react";
import AppRouter from "./router/Router";
import { Toaster } from "sonner";
import AuthProvider from "./lib/context/providers/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Toaster richColors />
      <AppRouter />
    </AuthProvider>
  </StrictMode>
);