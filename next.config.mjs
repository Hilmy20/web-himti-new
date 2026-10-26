/** @type {import('next').NextConfig} */
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
    minimumCacheTTL: 2592000, // 30 days
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
