import React, { useEffect, useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Layout from "../components/layout";
import Preloader from "../components/preloader";

import "../styles/main.scss";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let scroll;

    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.03,
        smoothMobile: true,
        resetNativeScroll: true,
      });
    });
    return () => scroll.destroy();
  });
  return (
    <div data-scroll-container>
      <AnimatePresence>
        {loading ? (
          <motion.div layout key="loader">
            <Preloader setLoading={setLoading} />
          </motion.div>
        ) : (
          <motion.div layout>
            <Layout>
              <Component {...pageProps} key={router.route} />
            </Layout>
          </motion.div>
        )}
      </AnimatePresence>
      <Script src="./cursor.js" />
    </div>
  );
}

export default MyApp;
