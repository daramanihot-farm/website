import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure for Replit environment
  
  experimental: {
    // Disable features that might conflict with Replit's filesystem
    optimizePackageImports: ["lucide-react"]
  },
  // Handle cross-origin requests in development
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
