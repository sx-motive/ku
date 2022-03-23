import React, { useState } from "react";
import Link from "next/link";
import { navPrimary } from "../../utils/data";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Menu */}
      <div className={`menu ${isOpen ? "-open" : ""}`}>
        <div className="menu-wrapper">
          <ul className="menu-box-main">
            {navPrimary.map((item, index) => (
              <li className="menu-box-main-item" key={index}>
                <Link href={item.path}>
                  <a onClick={() => setOpen(!isOpen)}>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-wrapper-bg" />
      </div>

      {/* Burger */}
      <div
        className="burger-wrap"
        id="cursor-stick-area"
        onClick={() => setOpen(!isOpen)}
        data-magnetic
        data-cursor-stick="#cursor-stick-area"
        data-cursor="-exclusion -menu"
      >
        <div className={`burger ${isOpen ? "-open" : ""}`}></div>
      </div>
    </>
  );
}
