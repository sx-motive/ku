import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

export default function Hero(props) {
  return (
    <section className="hero" data-scroll-section>
      <div className="container -full">
        <div className="hero-title">
          <SplitText
            className="wrap-text"
            LineWrapper={({ children }) => (
              <div className="text-line-wrap">
                <motion.span
                  className="text-line"
                  initial={{ skewY: 20, y: "96%" }}
                  whileInView={{
                    skewY: 0,
                    y: 0,
                    transition: {
                      ease: [0.6, 0.01, -0.05, 0.95],
                      duration: 2,
                    },
                  }}
                  viewport={{ once: false }}
                >
                  {children}
                </motion.span>
              </div>
            )}
          >
            {props.title}
          </SplitText>
        </div>
        <span className="hero-subtitle">{props.subtitle}</span>
        <motion.div
          className="hero-avaible"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 2,
          }}
        >
          • available for freelance work
        </motion.div>
      </div>
    </section>
  );
}
