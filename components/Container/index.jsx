import Head from "next/head";
import Menu from "../../containers/Menu";

const imgBanner =
  "https://github.com/cikareto/cikareto.github.io/blob/gh-pages/card.png?raw=true";

const Container = ({ metadata }) => {
  return (
    <>
      <Head>
        <title>cikareto | salisa c</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content="Salisa Cheawcharnthong" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="HTML,CSS,JavaScript,developer,Salisa,Salisa Cheawcharnthong,cikareto"
        />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:url" content="https://cikareto.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={imgBanner} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:creator" content="@cikareto_" />
        <meta name="twitter:site" content="@cikareto_" />
        <meta name="twitter:image" content={imgBanner} />

        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="/style.css" />
      </Head>
      <Menu />
    </>
  );
};

export default Container;
