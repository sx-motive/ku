import React from "react";
import Link from "next/link";
import { socials } from "../utils/data";
import Marquee from "../components/sections/marquee";

export default function Footer() {
  return (
    <>
      <footer className="footer" data-scroll-section>
        <div className="footer-top">
          <Link href="https://t.me/sxmotive">
            <a data-magnetic className="prefooter-touch">
              Send message <span> ↗︎</span>
            </a>
          </Link>
          <Marquee text="Message in Telegram * Message in Telegram * " />
        </div>
        <div className="footer-bottom">
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
        </div>
      </footer>
    </>
  );
}
