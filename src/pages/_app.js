import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import Head from "next/head";

import Loader from "../components/loader";
import Layout from "../components/layout";

import "../styles/main.scss";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      <Head>
        <title>Denis Kunitsyn - Digital Designer & Frontend Developer</title>
      </Head>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.main key={router.route} data-scroll-container>
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </motion.main>
      )}
      <Script src="cursor.js" />
    </AnimatePresence>
  );
}

export default MyApp;
