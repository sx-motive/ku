import React from "react";
import Image from "next/image";

export default function ImageBlock(props) {
  return (
    <section className={`image ${props.className}`} data-scroll-section>
      <Image
        src={props.src}
        alt={props.alt}
        priority
        layout="fill"
        data-scroll
        data-scroll-speed="-4"
      />
    </section>
  );
}
