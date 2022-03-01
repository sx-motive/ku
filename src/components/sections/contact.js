import React from "react";
import Link from "next/link";
import Marquee from "./marquee";

export default function Contact() {
  return (
    <section className="contact" data-scroll-section>
      <Marquee text="Message in Telegram * Message in Telegram * " />
      <Link href="https://t.me/sxmotive">
        <a data-magnetic className="contact-touch">
          Send message <span> ↗︎</span>
        </a>
      </Link>
    </section>
  );
}
