import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Für GitHub Pages: Statischer Export
  ...(isGitHubPages ? {
    output: "export",
    basePath: "/zimmerei-stark-homepage",
    images: {
      unoptimized: true,
    },
  } : {
    // Für Docker: Standalone Output
    output: "standalone",
  }),
};

export default nextConfig;
