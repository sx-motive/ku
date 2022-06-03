import React, { useEffect } from "react";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/cl3vd3roxeybi01z6a6pudnzl/master"
);

export async function getStaticProps() {
  const { services } = await graphcms.request(
    `
     {
        services {
          caption,desc,media {
            url
          }
        }
      }
      `
  );

  return {
    props: {
      services,
    },
  };
}

export default function Test({ services }) {
  return (
    <div>
      {services.map((service, index) => (
        <>
          <li key={index}>{service.caption}</li>
          <p>{service.desc}</p>
        </>
      ))}
    </div>
  );
}
