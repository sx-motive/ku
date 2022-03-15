import React from "react";
import Link from "next/link";
import { socials } from "../utils/data";
import Prefooter from "./sections/prefooter";

export default function Footer() {
  return (
    <>
      <Prefooter />
      <footer className="footer" data-scroll-section>
        <div className="footer-nav">
          <ul>
            {socials.map((item, index) => (
              <li className="footer-nav-item" key={index}>
                <Link href={item.path}>
                  <a>
                    {item.title} <span> ↗︎</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-credit">
          <span>Design & promotion by motive ©2022</span>
        </div>
      </footer>
    </>
  );
}
