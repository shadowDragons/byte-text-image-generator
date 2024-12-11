/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://text-image.tool.vin',
  generateRobotsTxt: true,
  sitemapSize: 7000,
}
