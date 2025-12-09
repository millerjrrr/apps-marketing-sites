import type { SiteKey } from "./assets/interface";
import sites from "./assets/siteContent";

const defaultSite = "griddier";

export function getSiteContent() {
  const host = window.location.hostname.toLowerCase().split(".")[0];

  if (host.includes("localhost")) {
    return sites[defaultSite];
  }

  return sites[host as SiteKey] || sites[defaultSite];
}

export function getSiteKey() {
  const host = window.location.hostname.toLowerCase().split(".")[0];
  return host.includes("localhost") ? defaultSite : host;
}
