import React from "react";
import Link from "next/link";

export default function Error() {
  return (
    <section className="error404" data-scroll-section>
      Страница не найдена,
      <Link href="/">
        <a>вернуться на главную</a>
      </Link>
    </section>
  );
}
