import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.152:3000/",
    "192.168.1.152:3000",
    "192.168.1.152",
  ],
};

export default nextConfig;
