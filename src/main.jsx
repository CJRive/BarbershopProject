import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProviderComponent } from "./ThemeContext"; // Import ThemeProviderComponent
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <ThemeProviderComponent>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProviderComponent>
);
