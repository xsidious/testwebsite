/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    distDir: 'dist',
    trailingSlash: true,
    assetPrefix: '.',
    images: { unoptimized: true },
  }
  
  module.exports = nextConfig;