import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: '/assets/img/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
