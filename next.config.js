/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    domains: ["i.postimg.cc"],
  },
  distDir: "docs",
  output: "export",
};

module.exports = nextConfig;
