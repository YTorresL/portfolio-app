/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
}

module.exports = nextConfig
