import { Buffer } from "buffer";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { getSiteContent } from "./getSiteContent";
import "./index.css";

window.Buffer = Buffer;

const site = getSiteContent();

// Inject theme vars before rendering
const root = document.documentElement;

document.title = site.meta.title;

document
  .querySelector("meta[name='description']")
  ?.setAttribute("content", site.meta.description);

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
