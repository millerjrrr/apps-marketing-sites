import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { getSiteContent, getSiteKey } from "./getSiteContent";
import { Buffer } from "buffer";

window.Buffer = Buffer;

const site = getSiteContent();
const siteKey = getSiteKey();

// Inject theme vars before rendering
const root = document.documentElement;

document.title = site.meta.title;

const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
if (favicon) {
  favicon.href = `/app-specific/${siteKey}/favicon.ico`;
}

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
