import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CONTENT_BY_LOCALE from "../locale";
import { defaultLocale } from "../locale/constants";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // Mediante useRouter accedemos al idioma seleccionado
  const { locale = defaultLocale } = useRouter();
  const localeContent =
    CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE];

  // Extraemos la información según en lenguage seleccionado
  const { appName, heroText, recipes, description } = localeContent.home;

  return (
    <>
      {/* Agregamos un Head específico  con contenido para esta página */}
      <Head>
        <title>{appName}</title>
        <meta name="description" content={description} />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.description}>{heroText}</h1>
          <figure>
            {/* Agregamos la imágen del chef que se encuentra dentro de la carpeta public */}
            <Image
              src="/chef.jpg"
              alt="app-logo"
              width={400}
              height={400}
              layout="fixed"
            />
          </figure>
        </div>
        <div className={styles.grid}>
          {/* Iteramos sobre el listado de recetas */}
          {recipes.map((recipe) => (
            // Agragamos el componente Link para navegar hacia la página
            // que contiene del detalle del post con la receta
            <Link href={recipe.link} key={recipe.id}>
              <div className={styles.card}>
                <h3>{recipe.name}</h3>
                {/* Agregamos el componente Image con la imagen del plato que obtenemos de una URL externa
               IMPORTANTE: Debemos agregar la URL dentro de los dominios permitidos en el archivo next.config.js
               */}
                <Image
                  src={recipe.image.src}
                  alt={recipe.image.alt}
                  width={recipe.image.width}
                  height={recipe.image.height}
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
