import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Für GitHub Pages: Statischer Export
  ...(isGitHubPages ? {
    output: "export",
    basePath: "/zimmerei-stark-homepage",
  } : {
    // Für Docker: Standalone Output
    output: "standalone",
  }),
  
  // Bilder-Konfiguration
  images: {
    // Bilder nicht optimieren - vereinfacht das Setup
    unoptimized: true,
    // Externe Bilder von stark-inspiration.de erlauben
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stark-inspiration.de',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.stark-inspiration.de',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
