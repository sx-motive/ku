import React from "react";
import { portfolio } from "../../utils/data";
import Link from "next/link";
import Text from "../text";
import Img from "../sections/img";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section className="portfolio" data-scroll-section>
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
      </div>
      <div className="container -full">
        <div className="portfolio-wrapper">
          {portfolio.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="portfolio-item-meta">
                <div className="portfolio-item-title">
                  <span className="portfolio-item-title-title">
                    <Text text={item.title} />
                  </span>
                  <Link href={`/portfolio/${item.slug}`}>
                    <a data-cursor="-exclusion -lg">
                      <Text text="↗︎" />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="portfolio-item-image">
                <motion.div
                  className="portfolio-item-image-transition transition-1"
                  initial={{ x: 0 }}
                  whileInView={{
                    x: "100%",
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 3,
                    },
                  }}
                  viewport={{ once: false }}
                ></motion.div>
                <motion.div
                  className="portfolio-item-image-transition transition-2"
                  initial={{ width: "120%" }}
                  whileInView={{
                    width: 0,
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 2,
                    },
                  }}
                  viewport={{ once: false }}
                ></motion.div>
                <div
                  className="image-scroll-wrapper"
                  data-scroll
                  data-scroll-speed="-5"
                >
                  <Img
                    src={item.image}
                    fallback={item.image}
                    alt={item.title}
                  />
                </div>
              </div>

              <div className="portfolio-item-hr-wrapper">
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
