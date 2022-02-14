import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header" data-scroll-section>
      <div className="header-logo">
        <Image src="/logo.svg" alt="denis kunitsyn" width="150" height="80" />
      </div>
      <div className="header-lang">ru / en</div>
      <div className="header-nav">+7 (950) 181 8881</div>
    </header>
  );
}
