import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Text from "../text";

// data import
import { services } from "../../utils/data";

export default function Services() {
  return (
    <section className="services" data-scroll-section>
      <div className="container -full">
        <motion.hr
          initial={{ width: 0 }}
          whileInView={{
            width: "100%",
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 2,
            },
          }}
          viewport={{ once: false }}
        />
        <div className="services-wrapper">
          {services.map((item, index) => (
            <div className="services-item" key={index}>
              <div className="services-item-meta">
                {/*
                <span className="services-item-number">
                  <Text text={index / 4 + 331 * 0.24} />
                </span>*/}
                <span className="services-item-title">
                  <Text text={item.title} />
                </span>
              </div>
              <div className="services-item-right-wrapper">
                <ul className="services-item-list">
                  {item.list.map((itemList, index) => (
                    <li className="services-item-list-item" key={index}>
                      <Text text={itemList} />
                    </li>
                  ))}
                </ul>
                <div className="services-item-text">
                  <p>
                    <Text text={item.text} />
                  </p>
                </div>
                <div className="services-item-read">
                  <Link href={`/services/${item.slug}`}>
                    <a data-cursor="-exclusion -lg">Read more ↗︎</a>
                  </Link>
                </div>
              </div>
              <div className="services-item-hr-wrapper">
                <motion.hr
                  initial={{ width: 0 }}
                  whileInView={{
                    width: "100%",
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 2,
                    },
                  }}
                  viewport={{ once: false }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
