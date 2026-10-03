import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // As imagens de /public não mudam entre deploys sem mudar de nome; sem
    // isto, o otimizador revalida cada versão a cada 60 s e o visitante pega
    // mais vezes a codificação a frio (AVIF é a mais lenta). Trocar uma foto
    // = salvar com outro nome.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  // "Jornada do Cliente" virou "Bot de Vendas": o link antigo continua valendo.
  async redirects() {
    return [
      {
        source: "/:locale(pt|en|es)/work/jornada-cliente",
        destination: "/:locale/work/bot-de-vendas",
        permanent: true,
      },
    ];
  },
  experimental: {
    // O layout raiz vive em [locale]: um idioma inválido precisa de um 404
    // que traga o próprio <html> (src/app/global-not-found.tsx).
    globalNotFound: true,
  },
};

export default nextConfig;
