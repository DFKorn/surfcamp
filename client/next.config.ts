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
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};


// Config for local development

// const nextConfig: NextConfig = {
//   /* config options here */
//   images:{
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '1337',
//         pathname: "/uploads/**/*"
//       }
//     ]
//   }
// };





export default nextConfig;
