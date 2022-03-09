import React, { useEffect } from "react";
import Head from "next/head";

// components import
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";

export default function Layout({ children }) {
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
    <main data-scroll-section>
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
