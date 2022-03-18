import React from "react";
import Caption from "../interface/caption";

export default function Head(props) {
  return (
    <section
      className={`section-head ${props.className}`}
      id={props.id}
      data-scroll-section
    >
      <div
        className={`container ${
          props.cont == "left"
            ? "-left"
            : props.cont == "right"
            ? "-right"
            : "-center"
        }`}
      >
        <h2 className="section-head-title">
          <Caption tag="h2">{props.title}</Caption>
        </h2>
      </div>
    </section>
  );
}
