import React, { useEffect } from "react";
import Head from "next/head";
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
        lerp: 0.05,
        smoothMobile: true,
        resetNativeScroll: true,
      });
    });

    return () => {
      document.getElementsByClassName("ht-cursor")[0].remove();
      scroll.destroy();
    };
  });

  return (
    <>
      <Head>
        <title>Digital Designer | Frontend Developer | Denis Kunitsyn</title>
      </Head>
      <main data-scroll-container>
        <Header />
        {children}
        <Footer />
        <Menu />
      </main>
    </>
  );
}
