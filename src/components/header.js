import React from "react";
import Link from "next/link";
import { navPrimary } from "../utils/data";

export default function Header() {
  return (
    <>
      <header className="header" data-scroll-section>
        <div className="header-logo">Denis Kunitsyn</div>
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
      </header>
    </>
  );
}
