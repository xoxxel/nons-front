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
  // اضافه کردن تنظیمات امنیتی برای Server Actions
  serverActions: {
    allowedOrigins: [
      'localhost:3000',
      'localhost',
      process.env.NEXT_PUBLIC_SITE_URL,
    ],
    allowedHeaders: ['x-forwarded-host', 'host', 'origin'],
  },
};

export default withPlaiceholder(nextConfig);
