/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://deepeshjain.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ["/api/*"],
  changefreq: "monthly",
  priority: 0.7,
  sitemapSize: 5000,
};

export default config;
