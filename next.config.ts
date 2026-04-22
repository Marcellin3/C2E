/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here 
};

export default nextConfig;*/
import type { NextConfig } from "next";

const nextconfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
};

export default nextconfig;