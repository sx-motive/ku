import Link from "next/link";

import About from "../components/sections/about";
import Img from "../components/sections/img";
import Portfolio from "../components/sections/portfolio";
import Head from "../components/sections/head";
import Services from "../components/sections/services";
import Caption from "../components/interface/caption";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <section className="hero" data-scroll-section>
        <div data-cursor="-exclusion -hero" className="hero-title">
          <Marquee gradient={false} speed={120}>
            <Caption tag="h1"> Frontend developer & Digital Designer</Caption>
          </Marquee>
        </div>
        <div className="hero-subtitle">
          <Marquee direction="right" gradient={false} speed={60}>
            <Caption>
              I believe in creating beautiful and complete brand experiences by
              helping them connect with their intention and know-how to
              communicate their purpose.
            </Caption>
          </Marquee>
        </div>
        <div className="hero-explore">
          <Link href="/">
            <a>Explore about</a>
          </Link>
        </div>
        <div className="hero-video" data-scroll data-scroll-speed="-2">
          <video autoPlay muted loop>
            <source src="/videos/05.mp4" />
          </video>
        </div>
      </section>
      <Head cont="left" title="Great brand needs a great decision" />
      <Services />

      <section className="image-section" data-scroll-section>
        <div
          className="image-section-container"
          data-scroll
          data-scroll-speed="-5"
        >
          <Img src="/images/04.webp" fallback="/images/04.webp" alt="banner" />
        </div>
      </section>
      <Head
        cont="right"
        title="We can create an amazing digital experience together"
      />
      <About />

      <Head cont="left" title="Selected works" />
      <Portfolio />
    </>
  );
}
