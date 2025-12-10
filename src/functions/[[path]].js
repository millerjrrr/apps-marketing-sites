import metaConfig from "../assets/meta.json";

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const host = url.hostname;

  const key = host.split(".")[0].toLowerCase();

  const meta = metaConfig[key] || metaConfig["link-king"];

  const response = await next();
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
