import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { getSiteContent } from "./getSiteContent";

const site = getSiteContent();

// Inject theme vars before rendering
const root = document.documentElement;

root.style.setProperty("--primary", site.colors.PRIMARY);
root.style.setProperty("--secondary", site.colors.SECONDARY);
root.style.setProperty("--tertiary", site.colors.TERTIARY);
root.style.setProperty("--contrast", site.colors.CONTRAST);
root.style.setProperty("--contrast-b", site.colors.CONTRAST_B);
root.style.setProperty("--contrast-c", site.colors.CONTRAST_C);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
