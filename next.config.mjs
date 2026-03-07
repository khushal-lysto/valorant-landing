/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Required for GitHub Pages project repos (e.g. username.github.io/valorant-landing).
  // Remove (and clear NEXT_PUBLIC_BASEPATH below) if deploying to a root domain / custom domain.
  basePath: "/valorant-landing",

  env: {
    // Must match basePath above. Read by imageLoader.js to prefix public-folder images.
    NEXT_PUBLIC_BASEPATH: "/valorant-landing",
  },

  images: {
    // Custom loader prepends basePath to public-folder image srcs in the static export.
    loader: "custom",
    loaderFile: "./imageLoader.js",
  },
};

export default nextConfig;
