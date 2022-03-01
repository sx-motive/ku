import React from "react";
import Head from "../../components/sections/head";
import Services from "../../components/sections/services";
import { services } from "../../utils/data";

export default function ServicePage({ item }) {
  return (
    <>
      <section className="service-page-inner"></section>
      <Head cont="left" title={item.title} />
      <Services />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const list = services.filter((item) => item.slug.toString() == params.slug);
  return {
    props: {
      item: list[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = services.map((item) => ({
    params: { slug: item.slug.toString() },
  }));

  return { paths, fallback: false };
};
