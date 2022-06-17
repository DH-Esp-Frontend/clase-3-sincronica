import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Blog de Recetas</h1>
        <p className={styles.description}>
          Un lugar en donde podrás encontrar todas tus recetas favoritas...
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.kiwilimon.com/receta/carnes-y-aves/res/brochetas-de-carne-con-queso"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Brochetas de carne con queso</h2>
          </a>

          <a
            href="https://www.kiwilimon.com/receta/guarniciones/ensalada-de-arroz-primavera"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Ensalada de arroz primavera</h2>
          </a>

          <a
            href="https://www.kiwilimon.com/receta/desayunos/huevos/receta-de-tortilla-espanola"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Tortilla Española</h2>
          </a>

          <a
            href="https://www.kiwilimon.com/receta/desayunos/hot-cakes-saludables"
            className={styles.card}
            target="_blank"
            rel="noreferrer"
          >
            <h2>Hotcakes saludables</h2>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
