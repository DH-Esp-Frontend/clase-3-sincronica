## Especialización FE 3 - S1C3

Para esta clase, estaremos trabajando sobre el proyecto del blog de recetas, agregando imágenes, layout, metadata e internazionalización de lenguage (i18n).

Partiremos de un repo que contendrá algunas cosas ya implementadas para ahorrar tiempo, e iremos trabando con cada uno de estos temas en particular.

Si bien el orden y la manera en que puede trabajarse puede cambiar y en definitiva depende de cada profe, a continuación se deja una sugerencia de pasos para poder llevar adelante la explicación:

### Paso 1: Agregar la metadata

En este paso, agregaremos la metadata dentro del head, tanto localmente (es decir, para una página en particular), como de manera global.
Para ello, nos enfocaremos en primer lugar en el favicon. Como el favicon será el mismo a lo largo de toda la app, lo agregaremos en un head común. Para ello, crearemos el archivo _\_document.tsx_ dentro de la carpeta _pages_. Dentro del mismo, copiaremos la estructura tal cual lo indica la [documentación](https://nextjs.org/docs/advanced-features/custom-document), solo que dentro de la etiqueta `<Head>` agregaremos el tag correspondiente para el favicon:

\__document.tsx_

```javascript
<Head>
  <link rel="shortcut icon" href="/logo.png" type="image/png" />
</Head>
```

Ahora, vamos a agregar alguna metadata local en cada una de las páginas. En primer lugar, lo haremos en el archivo _index.tsx_

```javascript
<Head>
  // Por ahora podemos hardcodear estos valores, luego lo haremos dinámico en
  //base al idioma seleccionado
  <title>RecetApp</title>
  <meta name="description" content="Blog de recetas de cocina" />
</Head>
```

Hacemos lo mismo en el archivo _[id]_ dentro de _posts_

```javascript
<Head>
  <title> Detalle de la receta </title>
  <meta name="description" content="Aquí tenemos el detalle de la receta" />
</Head>
```

### Paso 2: Imágenes y estilos

Vamos a agregar la imagen de la sección principal, que se encuentra en la carpeta public (chef.jpg). Para ello, utilizaremos el componente `<Image>` que nos provee Next (si quieren pueden probar primero utilizar la etiqueta `<img>` para ver como el linter marca el error)
Para ello, dentro del archivo _index.tsx_ agregamos la imagen:

```javascript
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
//...
```

Ahora, agregaremos el logo de la app dentro del componente `<Layout>`

```javascript
{
  /* Al hacer click en el logo volvemos siempre a la página principal */
}
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
</Link>;
```

También podemos aprovechar este momento para explorar los estilos que se encuentran dentro de la carpeta _styles_. Allí, encontraremos estilos globales que se aplican a toda la aplicacion (dentro del archivo _globals.css_) y archivos específicos para los componentes `<Home>`y `<Layout>`.

### Paso 3: Agregamos el header compartido (Layout)

Acá vamos a crear un Layout que será común a todas las páginas, ya que compartiremos el header entre todas ellas.
Para ello, utilizaremos el Componente Layout que se encuentra en la carpeta _components_. En el punto de partida, ese componente se utiliza únicamente en la página principal, pero si navegamos a la página de una receta el mismo desaparece (podemos mostrar esto a los alumnos antes de realizar este paso). Para extraerlo, deberemos modificar el componente que se encuentra dentro de _\_app.tsx_ agregando `<Layout>` como wrapper:

```javascript
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
```

Luego es esto, podemos mostrar que ahora el header es siempre el mismo, no importa si navegamos entre páginas.

### Paso 4: Agregamos i18n

En el punto de partida, todos los textos se encuentran a nivel de las páginas y en un solo idioma. Pero lo que buscamos es que nuestra aplicación soporte múltiples idiomas para que podamos expandirnos más alla de latinoamérica.
Para ello, vamos a agregar la posiblidad de "switchear" entre Ingles y Español.
Dentro de la carpeta _locale_, tenemos dos archivos que tienen la información de nuestras páginas en cada uno de dichos idiomas. Debemos buscar la forma de poder consumir uno u otro en base a la selección del usuario.

En primer lugar, vamos a agregar la configuración necesaria para que Next soporte i18n. Esto lo haremos dentro del archivo _next.config.js_

```javascript
  i18n: {
    // Agregamos el listado de lenguages que vamos a soportar
    locales: ["en-US", "es-ES", "pt-BR"],
    // // Elegimos el valor por default cuando accedemos a una ruta que no tenga fijada el valor del locale
    defaultLocale: "es-ES",
  },
```

En segundo lugar, volvemos a nuestro componente `<Layout>` para agregar los botones que nos permitirán cambiar entre un idioma y el otro.

```javascript
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
```

Luego de este cambio, si hacemos click en los botones, veremos como cambia la ruta en la barra de navegación. Sin embargo, el texto de la página sigue siendo el mismo. Para hacerlo dinámico, tenemos que consumir la información que se encuentra dentro de la carpeta _locale_ segun el caso.

Nos ocuparemos primero del archivo _index.tsx_. Hasta ahora, los textos se encuentran dentro del mismo. Necesitamos traerlos dinámicamente según el idioma elegido

```javascript
//...
import { useRouter } from "next/router";
import CONTENT_BY_LOCALE from "../locale";
import { defaultLocale } from "../locale/constants";
//...


  // Mediante useRouter accedemos al idioma seleccionado
  const { locale = defaultLocale } = useRouter();
  const localeContent =
    CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE];

  // Extraemos la información según en lenguage seleccionado
  const { appName, heroText, recipes, description } = localeContent.home;

  //...
```

Con esta información podemos reemplazar el texto estático y veremos como la página cambia cuando modificamos el idioma seleccionado.

Para terminar, repetimos el proceso dentro del archivo _[id]_ que se encuentra en la carpeta _posts_

```javascript
//...
import { useRouter } from "next/router";
import CONTENT_BY_LOCALE from "../../locale";

//...

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

  //...

```

¡Terminamos!
