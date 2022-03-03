import React, { useEffect, useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

// components import
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";
import Preloader from "./preloader";

export default function Layout({ children }) {
  // preloader
  const [loading, setLoading] = useState(true);
  // locomotive scroll

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        touchMultiplier: 0.3,
        resetNativeScroll: true,
        lerp: 0.03,
      });
    });

    return () => scroll.destroy();
  });
  return (
    <main data-scroll-container>
      <Head>
        <title>Denis Kunitsyn</title>
      </Head>
      {loading ? (
        <motion.div key="loader">
          <Preloader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
          <Menu />
        </>
      )}
    </main>
  );
}
