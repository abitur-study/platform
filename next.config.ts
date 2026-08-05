import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statik export: build sonunda out/ altına saf HTML/CSS/JS çıkar.
  // Çalışma anında sunucu yok — içerik build sırasında JSON'lardan derlenir.
  output: "export",
  // /abitur -> /abitur/index.html. Herhangi bir statik sunucuda alt yol sorunu çıkmaz.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
