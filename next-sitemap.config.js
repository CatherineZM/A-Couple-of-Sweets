/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || '', // add website link here
  generateRobotsTxt: true,
  changefreq: 'weekly',
  outDir: 'out',
  transform: async (config, path) => {
    const highPriorityPages = [
      '/'
    ]

    const pathToFolderMapping = {
      '/': 'Home'
    }

    // Use default transformation for all other cases
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  exclude: []
}
