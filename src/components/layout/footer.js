import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { socials } from "../../utils/data";

export default function Footer() {
  return (
    <>
      <footer className="footer" data-scroll-section>
        <div className="footer-top">
          <Link href="https://t.me/sxmotive">
            <a data-magnetic className="footer-touch">
              Send message <span> ↗︎</span>
            </a>
          </Link>
          <Marquee gradient={false} className={"footer-marquee"} speed={120}>
            Send Message In Telegram * Send Message In Telegram *
          </Marquee>
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
            <span>Created with ❤ by Denis Kunitsyn ©2022</span>
          </div>
        </div>
      </footer>
    </>
  );
}
