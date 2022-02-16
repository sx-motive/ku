import React from "react";
import Link from "next/link";
import Marquee from "./marquee";

export default function Contact() {
  return (
    <section className="contact" data-scroll-section>
      <Marquee text="Написать в Телеграм * Написать в Телеграм * " />
      <Link href="https://t.me/sxmotive">
        <a data-magnetic className="contact-touch">
          Написать <span> ↗︎</span>
        </a>
      </Link>
    </section>
  );
}
