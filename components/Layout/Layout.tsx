import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "./Layout.module.css";

// Este Layout se podría usar para compartir el el hader a lo largo de todas las páginas
// de la aplicación
const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  // Debermoa traernos la información del idioma utilizando useRouter()
  const {locale, asPath} = useRouter()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Al hacer click en el logo volvemos siempre a la página principal */}
        <Link href="/">
          <div className={styles.logo}>
            {/* Agregamos el logo de la app */}
            <p className={styles.title}>RecetApp</p>
          </div>
        </Link>
        {/* Agregamos un switch para alternar el idioma */}
        <div  className={styles.localeSwitch}>
          <Link href={asPath} locale="es-ES" >
          <p className={locale === "es-ES" ? styles.active : ""}>
              <Image
                src="/spanish.png"
                alt="spain"
                layout="fixed"
                width={20}
                height={20}
              />
            </p>
          </Link>
          <Link href={asPath} locale="pt-BR" >
          <p className={locale === "pt-BR" ? styles.active : ""}>
              <Image
                src="/brazil.png"
                alt="usa"
                layout="fixed"
                width={20}
                height={20}
              />
            </p>
          </Link>
          <Link href={asPath} locale="en-EN" >
          <p className={locale === "en-EN" ? styles.active : ""}>
              <Image
                src="/usa.png"
                alt="usa"
                layout="fixed"
                width={20}
                height={20}
              />
            </p>
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
