import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

export default function Hero(props) {
  return (
    <motion.section className="hero" data-scroll-section>
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
                  viewport={{ once: true }}
                >
                  {children}
                </motion.span>
              </div>
            )}
          >
            {props.title}
          </SplitText>
        </div>
      </div>
      <motion.div
        className="hero-image"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        <video autoPlay muted loop style={{ width: "100%", height: "100%" }}>
          <source src="/videos/05.mp4" />
        </video>
      </motion.div>
    </motion.section>
  );
}
