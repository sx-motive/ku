import React from "react";
import Head from "next/head";

// components import
import Header from "./header";
import Footer from "./footer";
import Menu from "./menu";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Denis Kunitsyn</title>
      </Head>
      <Header />
      {children}
      <Footer />
      <Menu />
    </>
  );
}
