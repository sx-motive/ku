import React from "react";
import Link from "next/link";

export default function Error() {
  return (
    <section className="error404" data-scroll-section>
      Page in not found,
      <Link href="/">
        <a> back to main ↗︎</a>
      </Link>
    </section>
  );
}
