import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

import styles from "../styles/Home.module.css";

const home = {
  // El appName y description nos pueden servir para inlcuir metadata específica de esta página
  appName: "RecetApp",
  description: "Blog con recetas fabulosas para preparar los mejores platos",
  heroText: "Un lugar en donde podrás encontrar todas tus recetas favoritas...",
  recipes: [
    {
      id: "brochetasConQueso",
      link: "/posts/brochetasConQueso",
      name: "Brochetas de carne con queso",
      image: {
        src: "https://cdn7.kiwilimon.com/recetaimagen/39029/50425.jpg",
        alt: "brochetas-con-queso",
        width: 200,
        height: 100,
      },
    },
    {
      id: "arrozPrimavera",
      link: "/posts/arrozPrimavera",
      name: "Ensalada de Arroz Primavera",
      image: {
        src: "https://cdn7.kiwilimon.com/recetaimagen/38554/49497.jpg",
        alt: "arroz-primavera",
        width: 200,
        height: 100,
      },
    },
    {
      id: "tortillaEspanola",
      link: "/posts/tortillaEspanola",
      name: "Tortilla Española",
      image: {
        src: "https://cdn7.kiwilimon.com/recetaimagen/39384/51406.jpg",
        alt: "tortilla-espanola",
        width: 200,
        height: 100,
      },
    },
    {
      id: "hotcakes",
      link: "/posts/hotcakes",
      name: "Hotcakes saludables",
      image: {
        src: "https://cdn7.kiwilimon.com/recetaimagen/39016/50393.jpg",
        alt: "hotckakes",
        width: 200,
        height: 100,
      },
    },
  ],
};

const Home: NextPage = () => {
  // Mediante useRouter podríamos acceder al idioma seleccionado y extraer la información en base a ello.

  // Por ahora los datos estan harcodeados en este archivo, pero deberian ser dinámicos en base al idioma seleccionado...
  const { heroText, recipes } = home;

  return (
    <Layout>
      {/* Aqui podríamos agregar un Head específico con contenido para esta página */}
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.description}>{heroText}</h1>
          <figure>
            {/* Acá agregamos la imágen del chef que se encuentra dentro de la carpeta public */}
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
               IMPORTANTE: Cuando usamos una URL externta, debemos agregarla dentro de los dominios permitidos 
               en el archivo next.config.js
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
    </Layout>
  );
};

export default Home;
