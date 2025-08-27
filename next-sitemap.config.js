/** @type {import('next-sitemap').IConfig} */

const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_CLOUDINARY_API_KEY,
    api_secret: process.env.NEXT_CLOUDINARY_API_SECRET,
    secure: true
})

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
