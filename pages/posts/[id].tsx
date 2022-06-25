import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import CONTENT_BY_LOCALE from "../../locale";

// Creamos una página dinámica en que nos permitirá
// mostrar la receta elegida por el usuario.
const Recipe: NextPage = () => {
  /* 
  Usando el hook useRouter podemos acceder al id de la receta
  el cual viene dado por la url
*/
  const { locale, query } = useRouter();
  const id = query.id;

  // También obtenemos la información en base al lenguage seleccionado
  const localeContent =
    CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE];

  // Extraemos la información según en lenguage seleccionado
  const { title, description, content } = localeContent.recipePage;

  return (
    <>
      {/* Podemos crear un Head distinto para esta página, para cambiar el titulo */}
      <Head>
        <title>{`${title}: ${id}`} </title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <h3>{title}</h3>
        <p>
          {content} #{id}
        </p>
      </div>
    </>
  );
};

export default Recipe;
