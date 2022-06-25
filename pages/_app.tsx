import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // Agregamos el componente Layout para compartirlo en cualquier página
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
