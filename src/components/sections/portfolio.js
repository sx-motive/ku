import React from "react";
import Paragraph from "../interface/paragraph";
import Caption from "../interface/caption";
import { motion } from "framer-motion";
import { portfolio } from "../../utils/data";

export default function Portfolio() {
  return (
    <section className="portfolio" data-scroll-section>
      <div className="container -full">
        <div className="portfolio-wrapper">
          {portfolio.map((item, index) =>
            item.isarchive ? (
              " "
            ) : (
              <div className="portfolio-item" key={index}>
                <div className="portfolio-item-title">
                  <Paragraph>{item.date}</Paragraph>
                  <Paragraph>{item.title}</Paragraph>
                </div>
                <video
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "100%" }}
                >
                  <source src={item.video} />
                </video>
              </div>
            )
          )}
        </div>
        <div className="container -right archive">
          <Caption tag="h3">Commercial only poducts</Caption>
          <motion.hr
            className="portfolio-archive-hr"
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
          <div className="portfolio-archive-wrapper">
            {portfolio.map((item, index) =>
              item.isarchive ? (
                <div className="portfolio-archive-item" key={index + "archive"}>
                  <div className="portfolio-archive-item-title">
                    <Paragraph>{item.title}</Paragraph>
                  </div>
                  <div className="portfolio-archive-item-desc">
                    <Paragraph>{item.description}</Paragraph>
                  </div>
                  <div className="portfolio-archive-item-date">{item.date}</div>
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
              ) : (
                " "
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
