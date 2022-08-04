/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Aregamos el dominio externo desde el cual traeremos las imágenes de las recetas
  images: {
    domains: ["cdn7.kiwilimon.com"],
  },
};

module.exports = nextConfig;
