import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import GlobalState from "../Context/GlobalState";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/404" ||
    router.pathname === "/sign-up" ||
    router.pathname === "/login"
      ? false
      : true;

  return (
    <>
      <Head>
        <title>Cocktailer</title>
        <link rel="icon" href="/logo.webp" />
        <meta property="og:title" content="Cocktailer" key="title" />
      </Head>
      <GlobalState>
        {showHeader ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </GlobalState>
    </>
  );
}

export default MyApp;
