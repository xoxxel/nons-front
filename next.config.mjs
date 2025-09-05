import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.nons.ir",
        port: "",
        pathname: "/**",
      },
      // {
      //   protocol: "http",
      //   hostname: "192.168.1.103",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
  },
};

export default withPlaiceholder(nextConfig);
