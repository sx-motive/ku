import React from "react";
import Image from "next/image";
import { portfolio } from "../../utils/data";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="portfolio" data-scroll-section>
      <div className="container -full">
        <div className="portfolio-wrapper">
          {portfolio.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-item-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  priority
                  layout="fill"
                />
              </div>
              <div className="portfolio-item-title">
                <span className="portfolio-item-title-title">{item.title}</span>
                <Link href={`/portfolio/${item.slug}`}>
                  <a data-cursor="-exclusion -lg">↗︎</a>
                </Link>
              </div>
              <div className="portfolio-item-desc">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
