/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Required for GitHub Pages project repos (e.g. username.github.io/valorant-landing).
  // Remove if deploying to a root domain / custom domain.
  basePath: "/valorant-landing",

  images: {
    // next/image optimization requires a server; GitHub Pages is static-only.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
