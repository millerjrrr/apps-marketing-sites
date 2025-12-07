import type { SiteKey } from "./assets/interface";
import sites from "./assets/siteContent";

export function getSiteContent() {
  const host = window.location.hostname.toLowerCase().split(".")[0];

  if (host.includes("localhost")) {
    return sites["griddier"];
  }

  return sites[host as SiteKey] || sites["griddier"];
}
