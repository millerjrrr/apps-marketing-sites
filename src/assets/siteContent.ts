import bananaCards from "./banana-cards";
import griddier from "./griddier";
import type { SitesStructure } from "./interface";
import linkKing from "./link-king";
import whoWhom from "./who-whom";

const sites: SitesStructure = {
  "link-king": linkKing,
  griddier,
  "banana-cards": bananaCards,
  "who-whom": whoWhom,
};

export default sites;
