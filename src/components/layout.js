import React, { useEffect } from "react";
import Head from "next/head";

// components import
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";

export default function Layout({ children }) {
  // locomotive scroll
  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: true,
        touchMultiplier: 0.3,
        resetNativeScroll: true,
        lerp: 0.085,
      });
    });

    return () => scroll.destroy();
  });
  return (
    <main data-scroll-container>
      <Head>
        <title>Denis Kunitsyn</title>
      </Head>
      <Header />
      {children}
      <Footer />
      <Menu />
    </main>
  );
}
