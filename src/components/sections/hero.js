import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";
import Button from "../button";

const anim = {
  initial: {
    opacity: 1,
  },
  show: {
    opacity: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
    },
  },
};

export default function Hero(props) {
  return (
    <motion.section
      className="hero"
      data-scroll-section
      initial={{ height: "100vh" }}
      animate={{ height: "100vh" }}
      transition={{
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 2,
        delay: 3.6,
      }}
    >
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
        <div className="hero-button-wrap">
          <Button href="/" className="round">
            Explore * More * Scroll * Down *
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
