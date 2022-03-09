import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

const item = {
  hidden: { opacity: 0, skewY: 15, y: "90%" },
  show: {
    opacity: 1,
    skewY: 0,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 2.6,
    },
  },
  exit: {
    opacity: 0,
    skewY: -15,
    y: "-90%",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.8,
    },
  },
};

export default function Preloader({ setLoading }) {
  return (
    <div className="preloader">
      <motion.div
        className="preloader-inner"
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div className="preloader-text" variants={item}>
          <SplitText
            className="wrap-text"
            LineWrapper={({ children }) => (
              <div className="text-line-wrap">
                <motion.span className="text-line" variants={item}>
                  {children}
                </motion.span>
              </div>
            )}
          >
            Hello there!
          </SplitText>
        </motion.div>
      </motion.div>
    </div>
  );
}
