import React from "react";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.45,
    },
  },
};

const item = {
  hidden: { opacity: 1, skewY: 15, y: "90%" },
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
    opacity: 1,
    skewY: -5,
    y: "-90%",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
    },
  },
};

export default function Loader({ setLoading }) {
  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div className="container -center" variants={container}>
          <div className="loader-line-wrap">
            <motion.div className="line" variants={item}>
              Denis
            </motion.div>
          </div>
          <div className="loader-line-wrap">
            <motion.div className="line" variants={item}>
              Kunitsyn
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
