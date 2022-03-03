import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

const container = {
  show: {
    transition: {
      staggerChildren: 2,
    },
  },
};

const item = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const textAnim = {
  hidden: { opacity: 0, y: 200, skew: 5 },
  show: {
    opacity: 1,
    y: 0,
    skew: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
export default function Preloader({ setLoading }) {
  return (
    <motion.div className="preloader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="preloader-inner"
      >
        <motion.div variants={item} className="preloader-text">
          <SplitText
            className="wrap-text"
            LineWrapper={({ children }) => (
              <div className="text-line-wrap">
                <motion.span className="text-line" variants={textAnim}>
                  {children}
                </motion.span>
              </div>
            )}
          >
            Hello there!
          </SplitText>
        </motion.div>
        <motion.div variants={item} className="preloader-percents">
          <motion.hr />
        </motion.div>
        <motion.div
          variants={item}
          className="preloader-background-transition"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
