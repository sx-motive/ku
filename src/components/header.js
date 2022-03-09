import React from "react";
import Link from "next/link";
import { navPrimary, socials } from "../utils/data";

export default function Header() {
  return (
    <header className="header" data-scroll-section>
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
    </header>
  );
}
