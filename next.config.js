/** @type {import('next').NextConfig} */
require("dotenv").config;

const nextConfig = {
  async rewrites() {
    return [
      {
        destination: "/auth/dashboard",
        source: "/dashboard"
      }
    ];
  },
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    SECRET: process.env.SECRET
  }
};

module.exports = nextConfig;
