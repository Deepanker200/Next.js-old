import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["freakcoder.com"]
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  // turbopack: {
  //   rules: {
  //     "*.css": {
  //       loaders: ["@tailwindcss/turbopack"],
  //       as: "*.css",
  //     },
  //   },
  // },
};

export default nextConfig;
