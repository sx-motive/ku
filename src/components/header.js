import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { navPrimary, socials } from "../utils/data";

export default function Header() {
  return (
    <motion.header
      className="header"
      data-scroll-section
      initial={{ opacity: 0, top: "-8rem" }}
      animate={{ opacity: 1, top: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 2.6,
      }}
    >
      <div className="header-nav">
        <ul>
          {navPrimary.map((item, index) => (
            <li className="header-nav-item" key={index}>
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-nav-socials">
        <ul>
          {socials.map((item, index) => (
            <li className="header-nav-socials-item" key={index}>
              <Link href={item.path}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-touch">
        Contacts<span> ↗︎</span>
      </div>
    </motion.header>
  );
}
