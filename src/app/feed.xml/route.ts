import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.momoittechnologies.com";

  const articles = [
    {
      title: "How Much Does a Business Website Cost in Kadapa? (2026 Price Guide)",
      slug: "how-much-does-a-website-cost-in-kadapa",
      description:
        "Planning to build a website in Kadapa? Here is a transparent breakdown of web design and development costs in Kadapa: static sites, custom web apps, hidden hosting fees, and why ₹2,999 templates fail.",
      pubDate: new Date("2026-09-24").toUTCString(),
    },
    {
      title: "From Manual Tester to SDET: Complete Career Transition Roadmap for Kadapa Freshers & Professionals",
      slug: "automation-testing-career-roadmap-kadapa",
      description:
        "Step-by-step 2026 guide to mastering Automation Testing with Core Java, Selenium WebDriver 4, TestNG, and Cucumber BDD in Kadapa.",
      pubDate: new Date("2026-09-24").toUTCString(),
    },
    {
      title: "How Kadapa Local Businesses Can Use AI & Automation to Grow Revenue in 2026",
      slug: "how-kadapa-businesses-can-use-ai-automation",
      description:
        "Practical guide for Kadapa retail stores, doctors, schools, and distributors on using WhatsApp AI bots, automated invoicing, and local CRM tools.",
      pubDate: new Date("2026-09-24").toUTCString(),
    },
    {
      title: "Best Software Development Solutions for Kadapa Businesses in 2026",
      slug: "best-software-development-solutions-for-businesses-in-kadapa",
      description:
        "Why off-the-shelf software fails regional businesses and how custom web, mobile, and inventory platforms empower Kadapa enterprises.",
      pubDate: new Date("2026-09-24").toUTCString(),
    },
  ];

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>MOMO IT Technologies — Knowledge Hub &amp; Engineering Guides</title>
    <link>${baseUrl}/blog</link>
    <description>Engineering guides, software development cost breakdowns, and IT career roadmaps for Kadapa and Andhra Pradesh businesses and students.</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.slug}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${article.pubDate}</pubDate>
      <author>momoit.technologies@gmail.com (MOMO IT TECHNOLOGIES)</author>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
