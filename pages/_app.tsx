import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Deberíamos agregar el componente Layout para compartirlo en cualquier página
    <Component {...pageProps} />
  );
}

export default MyApp;
