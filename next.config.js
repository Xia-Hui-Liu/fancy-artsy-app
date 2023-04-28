/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.icons8.com'],
  },
  publicRuntimeConfig: {
    staticFolder: '/static',
  },
};

module.exports = nextConfig;

