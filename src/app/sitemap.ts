import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://momoittechnologies.com";

  const routes = [
    "",
    "/services",
    "/services/qa-testing",
    "/services/software-dev",
    "/services/business-systems",
    "/case-studies/momope",
    "/case-studies/mana-tours",
    "/academy",
    "/hire-developers",
    "/industries",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
