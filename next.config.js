/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = withBundleAnalyzer({
  output: 'export',
  experimental: {
    optimizePackageImports: [

    ]
  },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: process.env.NEXT_PUBLIC_HYGRAPH_API,
            },
        ]
    },

})

module.exports = nextConfig
