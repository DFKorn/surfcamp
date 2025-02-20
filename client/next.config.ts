import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        //port: '1337',
        //pathname: "/uploads/**/*"
      }
    ]
  }
};

export default nextConfig;
