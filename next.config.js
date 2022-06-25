/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Aregamos el dominio externo desde el cual traeremos las imágenes de las recetas
  images: {
    domains: ["cdn7.kiwilimon.com"],
  },
  i18n: {
    // Agregamos el listado de lenguages que vamos a soportar
    locales: ["en-US", "es-ES", "pt-BR"],
    // // Elegimos el valor por default cuando accedemos a una ruta que no tenga fijada el valor del locale
    defaultLocale: "es-ES",
  },
};

module.exports = nextConfig;
