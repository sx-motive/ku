import React from "react";
import Head from "../../components/sections/head";
import ImageBlock from "../../components/sections/image";

import { portfolio } from "../../utils/data";

export default function PortfolioPage({ item }) {
  return (
    <>
      <section className="service-page-inner"></section>
      <Head left title={item.title} desc={item.description} />
      <ImageBlock className="-full" src={item.image} alt={item.title} />

      <ImageBlock className="-full" src={item.images[0]} alt={item.title} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const list = portfolio.filter((item) => item.slug.toString() == params.slug);
  return {
    props: {
      item: list[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = portfolio.map((item) => ({
    params: { slug: item.slug.toString() },
  }));

  return { paths, fallback: false };
};