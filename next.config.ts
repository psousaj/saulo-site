import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    path: `/_next/image`,
    localPatterns: [
      {
        pathname: '/assets/img/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
