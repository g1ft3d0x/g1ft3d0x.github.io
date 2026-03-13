import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages は静的ホスティングのため静的エクスポートに設定
  output: "export",

  // Next.js の画像最適化はサーバーが必要なため無効化
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
