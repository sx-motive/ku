import React from "react";
import { motion } from "framer-motion";
import { SplitText } from "@cyriacbr/react-split-text";

export default function Text(props) {
  return (
    <SplitText
      className="wrap-text"
      LineWrapper={({ children }) => (
        <motion.div
          className="text-line-wrap"
          initial={{ opacity: 0, skewY: 3, y: 15 }}
          whileInView={{
            opacity: 1,
            skewY: 0,
            y: 0,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1,
            },
          }}
          viewport={{ once: false }}
        >
          <span className="text-line">{children}</span>
        </motion.div>
      )}
    >
      {props.text}
    </SplitText>
  );
}
