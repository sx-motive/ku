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
        <div className="portfolio-wrapper">
          {portfolio.map((item, index) => (
            <div className="portfolio-item" key={index}>
              {item.video ? (
                <video
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "100%" }}
                >
                  <source src={item.video} />
                </video>
              ) : (
                <div className="portfolio-item-image">
                  <Img
                    src={item.image}
                    fallback={item.image}
                    alt={item.title}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
