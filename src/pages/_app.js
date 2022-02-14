import React from "react";
import Script from "next/script";

// styles import
import "../styles/main.scss";

// components import
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script src="./cursor.js" />
    </>
  );
}

export default MyApp;
