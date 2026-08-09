import matter from "gray-matter";
import { getSiteKey } from "../getSiteContent";
import type { GlobModule, Post, PostMeta, PostSummary, SiteKey } from "./types";

const tenantModules: Record<SiteKey, Record<string, GlobModule>> = {
  "link-king": import.meta.glob("./link-king/*.md", {
    eager: true,
    query: "?raw",
  }) as Record<string, GlobModule>,
  griddier: import.meta.glob("./griddier/*.md", {
    eager: true,
    query: "?raw",
  }) as Record<string, GlobModule>,
  "banana-cards": import.meta.glob("./banana-cards/*.md", {
    eager: true,
    query: "?raw",
  }) as Record<string, GlobModule>,
  "who-whom": import.meta.glob("./who-whom/*.md", {
    eager: true,
    query: "?raw",
  }) as Record<string, GlobModule>,
};

export function getAllPosts(): PostSummary[] {
  console.log("MODULES:", tenantModules["link-king"]);

  const siteKey = getSiteKey() as SiteKey;
  const modules = tenantModules[siteKey] || {};

  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split("/").pop()!.replace(".md", "");

      const { data } = matter(mod.default);

      return {
        slug,
        ...(data as PostMeta),
      };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getPostBySlug(slug?: string): Post {
  if (!slug) {
    throw new Error("Slug is required");
  }

  const siteKey = getSiteKey() as SiteKey;
  const modules = tenantModules[siteKey] || {};

  const entry = Object.entries(modules).find(([path]) =>
    path.includes(`${slug}.md`),
  );

  if (!entry) throw new Error("Post not found");

  const [, mod] = entry;

  const { data, content } = matter(mod.default);

  return {
    slug, // now safe, slug is guaranteed to be string
    ...(data as PostMeta),
    content,
  };
}
