import React, { useEffect } from "react";
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
        lerp: 0.08,
        smoothMobile: true,
        resetNativeScroll: true,
      });
    });

    return () => scroll.destroy();
  });

  return (
    <main data-scroll-container>
      <Header />
      {children}
      <Footer />
      <Menu />
    </main>
  );
}
