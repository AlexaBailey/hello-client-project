import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./contexts/SidebarContext.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <Router>
        <App />
      </Router>
    </SidebarProvider>
  </StrictMode>
);
