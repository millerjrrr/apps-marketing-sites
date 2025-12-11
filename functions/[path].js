import metaConfig from "../src/assets/meta.json";

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const host = url.hostname;

  // Detect static assets early and skip modification
  const pathname = url.pathname;
  const isStaticAsset = pathname.match(
    /\.(png|jpg|jpeg|webp|gif|svg|ico|js|css|json|txt|woff2?|ttf)$/i,
  );

  if (isStaticAsset) {
    // Let Cloudflare serve the file as-is
    return next();
  }

  // Tenant logic
  const key = host.split(".")[0].toLowerCase();
  const meta = metaConfig[key] || metaConfig["link-king"];

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
