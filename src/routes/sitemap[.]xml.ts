import { createFileRoute } from "@tanstack/react-router";
import { SERVICES_DATA } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { absoluteUrl, slugify } from "@/lib/seo";

// Bump when page content changes; search engines use it to decide what to recrawl.
const LAST_MODIFIED = "2026-10-21";

// Case studies with their own written content. The rest of /our-work/* share one
// template, so they stay out of the sitemap until they get real write-ups.
const CASE_STUDY_IDS = ["home-improvement", "local-seo"];

const STATIC_PATHS = ["/", "/about", "/services", "/our-work", "/industries", "/careers", "/contact"];

function buildSitemap() {
  const paths = [
    ...STATIC_PATHS,
    ...SERVICES_DATA.map((s) => `/services/${slugify(s.label)}`),
    ...INDUSTRIES.map((ind) => `/industries/${slugify(ind.label)}`),
    ...CASE_STUDY_IDS.map((id) => `/our-work/${id}`),
  ];
  const urls = [...new Set(paths)]
    .map((path) => `  <url>\n    <loc>${absoluteUrl(path)}</loc>\n    <lastmod>${LAST_MODIFIED}</lastmod>\n  </url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () =>
        new Response(buildSitemap(), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
