import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/Layout.module.css";

// Este Layout se podría usar para compartir el el hader a lo largo de todas las páginas
// de la aplicación
const OfertasLayout: FC<{ children: JSX.Element }> = ({ children }) => {
  // Debermoa traernos la información del idioma utilizando useRouter()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Al hacer click en el logo volvemos siempre a la página principal */}
        <Link href="/">
          <div className={styles.logo}>
            {/* Agregamos el logo de la app */}
            <p className={styles.title}>Layout desde ofertas</p>
          </div>
        </Link>
        {/* Agregamos un switch para alternar el idioma */}
      </header>
      {children}
    </div>
  );
};

export default OfertasLayout;
