import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "../components/preloader";
import Layout from "../components/layout";
import Script from "next/script";

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
      {loading ? (
        <motion.div key="preloader">
          <Preloader setLoading={setLoading} />
        </motion.div>
      ) : (
        <motion.div key="content">
          <Layout>
            <Component {...pageProps} key={router.route} />
          </Layout>
          <Script src="cursor.js" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MyApp;
