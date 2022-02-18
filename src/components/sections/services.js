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
        <div className="services-wrapper">
          {services.map((item, index) => (
            <div className="services-item" key={index}>
              <div className="services-item-meta">
                <span className="services-item-title">
                  <Text text={item.title} />
                </span>
                <span className="services-item-desc">
                  <Text text={item.description} />
                </span>
              </div>
              <div className="services-item-read">
                <Link href={`/services/${item.slug}`}>
                  <a data-cursor="-exclusion -lg">↗︎</a>
                </Link>
              </div>
              <div className="services-item-hr-wrapper">
                <motion.hr
                  initial={{ opacity: 1, width: 0 }}
                  whileInView={{
                    opacity: 1,
                    width: "100%",
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 4,
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
