import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/Layout.module.css";
import { useRouter } from "next/router";
import { localeNames, locales } from "../../locale/constants";

// Creamos un componente Layout para compartir el el hader a lo largo de todas las páginas
// de la aplicación
const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  // Traemos la información del idioma utilizando useRouter()
  const { locale, asPath } = useRouter();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Al hacer click en el logo volvemos siempre a la página principal */}
        <Link href="/">
          <div className={styles.logo}>
            {/* Agregamos el logo de la app */}
            <Image
              src="/logo.png"
              alt="app-logo"
              width={50}
              height={50}
              layout="fixed"
            />
            <p className={styles.title}>RecetApp</p>
          </div>
        </Link>
        {/* Agregamos un switch para alternar el idioma */}
        <div className={styles.localeSwitch}>
          {/* Mediante el atributo locale le indicamos a Next que idioma queremos utilizar al hacer la
          redirección
           */}
          <Link href={asPath} locale={locales.ES_ES}>
            <p className={locale === locales.ES_ES ? styles.active : ""}>
              <Image
                src="/spanish.png"
                alt="spanish"
                layout="fixed"
                width={20}
                height={20}
              />
              {localeNames[locales.ES_ES as keyof typeof localeNames]}
            </p>
          </Link>

          <Link href={asPath} locale={locales.PT_BR}>
            <p className={locale === locales.PT_BR ? styles.active : ""}>
              <Image
                src="/brazil.png"
                alt="usa"
                layout="fixed"
                width={20}
                height={20}
              />
              {localeNames[locales.PT_BR as keyof typeof localeNames]}
            </p>
          </Link>

          <Link href={asPath} locale={locales.EN_US}>
            <p className={locale === locales.EN_US ? styles.active : ""}>
              <Image
                src="/usa.png"
                alt="usa"
                layout="fixed"
                width={20}
                height={20}
              />
              {localeNames[locales.EN_US as keyof typeof localeNames]}
            </p>
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
};

export default Layout;
