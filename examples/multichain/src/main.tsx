import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider as ChakraProvider } from "./components/ui/provider";
import { MultichainProvider } from "./multichain/provider.tsx";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <MultichainProvider>
        <Toaster />
        <App />
      </MultichainProvider>
    </ChakraProvider>
  </StrictMode>,
);
