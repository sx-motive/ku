import React from "react";

export default function Hero(props) {
  return (
    <section className="hero" data-scroll-section>
      <div className="container -full">
        <span className="hero-title">{props.title}</span>
        <span className="hero-subtitle">{props.subtitle}</span>
      </div>
    </section>
  );
}
