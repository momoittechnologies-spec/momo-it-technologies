import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.momoittechnologies.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/pay", "/seo-dashboard", "/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot-Extended",
          "Google-Extended",
          "OAI-SearchBot",
        ],
        allow: "/",
        disallow: ["/pay", "/seo-dashboard", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

