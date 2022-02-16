import React from "react";
import Link from "next/link";

// data import
import { services } from "../../utils/data";

export default function Services() {
  return (
    <section className="services" data-scroll-section>
      <div className="container -full">
        <div className="services-wrapper">
          {services.map((item, index) => (
            <div className="services-item" key={index}>
              <div className="services-item-meta">
                <span className="services-item-title">{item.title}</span>
                <span className="services-item-desc">{item.description}</span>
              </div>
              <div className="services-item-read">
                <Link href={`/services/${item.slug}`}>
                  <a data-cursor="-exclusion -lg">↗︎</a>
                </Link>
              </div>
              <div className="services-item-hr-wrapper">
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
