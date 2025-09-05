import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.nons.ir",
        port: "",
        pathname: "/**",
      }
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['nons.ir', 'localhost:3000']
    }
  },
  // تنظیمات محیط تولید
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,
  generateEtags: true
};

export default withPlaiceholder(nextConfig);
