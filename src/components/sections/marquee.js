import React, { useEffect } from "react";

export default function Marquee(props) {
  useEffect(() => {
    function animateMarquee(el, duration) {
      const innerEl = el.querySelector(".marquee-text");
      const innerWidth = innerEl.offsetWidth;
      const cloneEl = innerEl.cloneNode(true);
      el.appendChild(cloneEl);

      let start = performance.now();
      let progress;
      let translateX;

      requestAnimationFrame(function step(now) {
        progress = (now - start) / duration;

        if (progress > 1) {
          progress %= 1;
          start = now;
        }

        translateX = innerWidth * progress;

        innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
        requestAnimationFrame(step);
      });
    }
    const marqueeWrapper = document.querySelector("#marquee-wrapper");
    animateMarquee(marqueeWrapper, 29000);
  });
  return (
    <div className="marquee">
      <div className="marquee-wrapper" id="marquee-wrapper">
        <div className="marquee-text">{props.text}</div>
      </div>
    </div>
  );
}
