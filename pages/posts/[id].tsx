import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const recipePage = {
  // Las properties  title y description la podemos usar para agregar metadata en esta página
  title: "Receta",
  description:
    "Detalle de los ingredientes y pasos necesarios para poder preparar el plato",
  content: "Id de la receta:",
};

// Creamos una página dinámica en que nos permitirá
// mostrar la receta elegida por el usuario.
const Recipe: NextPage = () => {
  /* 
  Usando el hook useRouter podemos acceder al id de la receta
  el cual viene dado por la url
*/
  const { query } = useRouter();
  const id = query.id;

  // También podremos obtener la información en base al lenguage seleccionado...

  // Por ahora estos datos estan hardoceados en este archivo, pero deberían depender del lenguage seleccionado
  const { title, content } = recipePage;

  return (
    <>
      {/* Podemos crear un Head distinto para esta página, para cambiar el titulo o la descripción */}
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
