import React from "react";
import Image from "next/image";
import { navPrimary } from "../utils/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header" data-scroll-section>
      <div className="header-logo">
        {/* <Image src="/logo.svg" alt="denis kunitsyn" width="150" height="80" /> */}
      </div>
      <div className="header-lang"></div>
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
      <div className="header-touch">
        Contacts<span> ↗︎</span>
      </div>
    </header>
  );
}
