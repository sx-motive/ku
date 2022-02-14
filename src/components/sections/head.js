import React from "react";

export default function Head(props) {
  return (
    <section className="section-head" id={props.id} data-scroll-section>
      <div className={`container ${props.left ? "-left" : "-right"}`}>
        <h2 className="section-head-title">{props.title}</h2>
        <p className="section-head-desc">{props.desc}</p>
      </div>
    </section>
  );
}
