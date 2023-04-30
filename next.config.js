/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true
  },
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
}

module.exports = nextConfig
