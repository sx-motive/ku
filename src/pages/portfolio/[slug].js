import React from "react";
import Head from "../../components/sections/head";

import { portfolio } from "../../utils/data";

export default function PortfolioPage({ item }) {
  return (
    <>
      <section className="service-page-inner" data-scroll-section></section>
      <Head left title={item.title} desc={item.description} />
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
