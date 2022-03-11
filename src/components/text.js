import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

export default function Text(props) {
  return (
    <SplitText
      className="wrap-text"
      LineWrapper={({ children }) => (
        <p className="text-line-wrap">
          <motion.span
            className="text-line"
            initial={{ opacity: 0, skewY: 15, y: "90%" }}
            whileInView={{
              opacity: 1,
              skewY: 0,
              y: 0,
              transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.4,
              },
            }}
            viewport={{ once: false }}
          >
            {children}
          </motion.span>
        </p>
      )}
    >
      {props.text}
    </SplitText>
  );
}
