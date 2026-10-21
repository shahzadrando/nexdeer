// Shared SEO helpers: every canonical / og:url must be absolute, so build them from one origin.
export const SITE_URL = "https://nexdeer.com";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Spread into a route's head(): `meta: [...pageMeta(path)]`, `links: [canonicalLink(path)]`
export function pageMeta(path: string) {
  return [{ property: "og:url", content: absoluteUrl(path) }];
}

export function canonicalLink(path: string) {
  return { rel: "canonical", href: absoluteUrl(path) };
}

const SAME_AS = [
  "https://www.linkedin.com/company/nexdeer/",
  "https://www.instagram.com/nexdeer",
  "https://www.facebook.com/nexdeer/",
];

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "NEXDEER",
      url: `${SITE_URL}/`,
      logo: absoluteUrl("/logo.png"),
      email: "hello@nexdeer.com",
      telephone: "+92 318 6662360",
      address: { "@type": "PostalAddress", addressLocality: "Multan", addressCountry: "PK" },
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "NEXDEER",
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};
