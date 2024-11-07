/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["aceternity.com", "assets.aceternity.com"], // Add both domains in a single array
  },
  experimental: {
    esmExternals: true,  // Enable ES module support
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };  // Fixes some issues with dependencies
    }
    return config;
  },
};

export default nextConfig;
