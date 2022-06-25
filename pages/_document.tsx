import { Html, Head, Main, NextScript } from "next/document";

// Agregamos un custom document para poner el favicon dentro de la etiqueta head.
// Como el favicon es el mismo en todas las páginas, lo hacemos
// en este archivo global
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
