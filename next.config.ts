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
    remotePatterns: [
      {
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        hostname: 'placebear.com',
        pathname: '/**',
      },
      {
        hostname: 'random.imagecdn.app',
        pathname: '/**',
      },
      {
        hostname: 'random-image-pepebigotes.vercel.app',
        pathname: '/**',
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/contato",
        destination: "https://api.whatsapp.com/send?phone=5588997976786&text=Olá%20Saulo,%20vim%20pelo%20site%20e%20gostaria%20de%20esclarecer%20umas%20dúvidas",
        permanent: true
      },
      {
        source: "/contato",
        destination: "https://instagram.com/sauloalvesnutri",
        permanent: true
      }
    ]
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
