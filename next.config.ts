import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 78],
  },
  // Static marketing site: Cache Components is not needed and blocks `dynamicParams = false`.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // English is the default locale; `/` always lands on `/en`.
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
