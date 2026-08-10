import metaConfig from "../src/assets/meta.json";
import postMeta from "../src/assets/postMeta.json";

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const host = url.hostname;

  // Detect static assets early and skip modification
  const pathname = url.pathname;

  if (pathname === "/favicon.ico") {
    const key = host.split(".")[0].toLowerCase();
    const tenant = metaConfig[key] ? key : "link-king";

    return fetch(
      new URL(`/app-specific/${tenant}/favicon.ico`, request.url),
      request,
    );
  }

  if (pathname === "/favicon.png") {
    const key = host.split(".")[0].toLowerCase();
    const tenant = metaConfig[key] ? key : "link-king";

    return fetch(
      new URL(`/app-specific/${tenant}/icon.png`, request.url),
      request,
    );
  }

  const isStaticAsset = pathname.match(
    /\.(png|jpg|jpeg|webp|gif|svg|ico|js|css|json|txt|woff2?|ttf)$/i,
  );

  if (isStaticAsset) {
    // Let Cloudflare serve the file as-is
    return next();
  }

  // Tenant logic
  const key = host.split(".")[0].toLowerCase();
  const baseMeta = metaConfig[key] || metaConfig["link-king"];
  const meta = { ...baseMeta };

  // If this is a blog post page, try to use the post thumbnail, title, and
  // first-paragraph (description) as OG tags. URL layout: /blog/:slug
  const blogMatch = pathname.match(/^\/blog\/(?:posts\/)?([^\/]+)\/?$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    const sitePosts = postMeta[key] || postMeta["link-king"] || {};
    const postEntry = sitePosts[slug];
    if (postEntry) {
      const thumbnail =
        typeof postEntry === "string" ? postEntry : postEntry.thumbnail;
      if (thumbnail) {
        meta.OG_IMAGE = new URL(
          `/app-specific/${key}/thumbnails/${thumbnail}`,
          request.url,
        ).href;
      }

      if (typeof postEntry !== "string") {
        if (postEntry.title) meta.OG_TITLE = postEntry.title;
        if (postEntry.description) meta.OG_DESCRIPTION = postEntry.description;
      }
    }
  }

  // Get HTML response
  const response = await next();
  const contentType = response.headers.get("Content-Type") || "";

  // Only process HTML
  if (!contentType.includes("text/html")) {
    return response;
  }

  const text = await response.text();

  const replaced = text
    .replace(/{{OG_TITLE}}/g, meta.OG_TITLE)
    .replace(/{{OG_DESCRIPTION}}/g, meta.OG_DESCRIPTION)
    .replace(/{{OG_IMAGE}}/g, meta.OG_IMAGE)
    .replace(/{{OG_URL}}/g, url.href);

  return new Response(replaced, {
    headers: response.headers,
    status: response.status,
  });
}
