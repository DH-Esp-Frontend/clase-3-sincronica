/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Aregamos el dominio externo desde el cual traeremos las imágenes de las recetas
  images:{
    domains: ["cdn7.kiwilimon.com"]
  },
  i18n: {
    locales: ["en-EN", "es-ES", "pt-BR"],
    defaultLocale: "es-ES"
  }
 
};

module.exports = nextConfig;
