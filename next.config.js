/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['i.scdn.co'],
  },
}

module.exports = nextConfig
