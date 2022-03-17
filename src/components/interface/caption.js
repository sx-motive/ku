import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

export default function Caption(props) {
  return (
    <SplitText
      className={`caption ${props.tag}`}
      LineWrapper={({ children }) => (
        <span className="caption-line-wrap">
          <motion.span
            className="text-line"
            initial={{ skewY: 25, y: "90%" }}
            whileInView={{
              skewY: 0,
              y: 0,
              transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.2,
              },
            }}
            viewport={{ once: false }}
          >
            {children}
          </motion.span>
        </span>
      )}
    >
      {props.children}
    </SplitText>
  );
}
