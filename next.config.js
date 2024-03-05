/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    domains: ["i.postimg.cc"],
  },
  distDir: "docs",
  output: "export",
  basePath: "/merik-tattoo",
  assetPrefix: "/merik-tattoo/",
};

module.exports = nextConfig;
