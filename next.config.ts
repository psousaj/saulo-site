import type { NextConfig } from "next";
import path from 'path';

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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'public/assets'),
    };
    return config;
  },
};


export default nextConfig;
