import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "../../utils/data";
import Paragraph from "../interface/paragraph";

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
            <div className="services-item" key={index + item.title}>
              {/*<div
                className="services-item-image"
                data-scroll
                data-scroll-speed="-1"
              >
                <video
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "100%" }}
                >
                  <source src={item.video} />
                </video>
              </div>*/}
              <div className="services-item-meta">
                <span className="services-item-title">
                  <Paragraph>{item.title}</Paragraph>
                </span>
              </div>
              <div className="services-item-right-wrapper">
                <motion.ul
                  className="services-item-list"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 2,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  {item.list.map((itemList, index) => (
                    <li className="services-item-list-item" key={index}>
                      <Paragraph>{itemList}</Paragraph>
                    </li>
                  ))}
                </motion.ul>
                <div className="services-item-text">
                  <Paragraph>{item.text}</Paragraph>
                </div>
                <motion.div
                  className="services-item-read"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 2,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  <Link href={`/services/${item.slug}`}>
                    <a data-cursor="-exclusion -lg">Read more ↗︎</a>
                  </Link>
                </motion.div>
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
