/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  onDemandEntries: {
    // Keep dev server memory low: dispose inactive pages after 60s
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 2,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: isDev ? 0 : 2592000,
    localPatterns: [
      { pathname: "/images/**" },
      { pathname: "/images/**", search: "?v=4" },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: [
      "@iconify/react",
      "lucide-react",
      "framer-motion",
      "react-icons",
    ],
  },
};

export default nextConfig;
