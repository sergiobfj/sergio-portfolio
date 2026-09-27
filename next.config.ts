import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // O layout raiz vive em [locale]: um idioma inválido precisa de um 404
    // que traga o próprio <html> (src/app/global-not-found.tsx).
    globalNotFound: true,
  },
};

export default nextConfig;
