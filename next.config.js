/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = withNextIntl(nextConfig);
