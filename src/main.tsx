import { createRoot } from "react-dom/client"
import "./assets/css/globals.css";

import { StrictMode } from "react";
import AppRouter from "./router/Router";
import { Toaster } from "sonner";
import AuthProvider from "./lib/context/providers/AuthProvider";

// import for redux implementation
import {Provider} from "react-redux"
import store from "./lib/config/storeConfig";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Provider add  */}
    <AuthProvider>
      {/* Redux Provider */}
      <Provider store={store}>
        <Toaster richColors />
        <AppRouter />
      </Provider>
    </AuthProvider>
  </StrictMode>
);