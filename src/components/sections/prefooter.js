import React from "react";
import Link from "next/link";
import Marquee from "./marquee";

export default function Prefooter() {
  return (
    <section className="prefooter" data-scroll-section>
      <Link href="https://t.me/sxmotive">
        <a data-magnetic className="prefooter-touch">
          Send message <span> ↗︎</span>
        </a>
      </Link>
      <Marquee text="Message in Telegram * Message in Telegram * " />
    </section>
  );
}
