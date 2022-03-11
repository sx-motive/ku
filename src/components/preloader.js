import React from "react";
import { motion } from "framer-motion";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
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
        <motion.div className="container -center" variants={container}>
          <div className="preloader-line-wrap">
            <motion.div className="line" variants={item}>
              Denis
            </motion.div>
          </div>
          <div className="preloader-line-wrap">
            <motion.div className="line" variants={item}>
              Kunitsyn
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
