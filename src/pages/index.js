import About from "../components/sections/about";
import Img from "../components/sections/img";
import Portfolio from "../components/sections/portfolio";
import Head from "../components/sections/head";
import Services from "../components/sections/services";
import Caption from "../components/interface/caption";

export default function Home() {
  return (
    <>
      <section className="hero" data-scroll-section>
        <div className="container -full">
          <div className="hero-title">
            <Caption tag="h1">Digital Designer & Frontend Developer</Caption>
          </div>
        </div>
        <div className="hero-image">
          <video autoPlay muted loop>
            <source src="/videos/05.mp4" />
          </video>
        </div>
      </section>
      <Head cont="left" title="Great brands need great decisions" />
      <Services />

      <section className="image-section" data-scroll-section>
        <div
          className="image-section-container"
          data-scroll
          data-scroll-speed="-5"
        >
          <Img src="/images/03.webp" fallback="/images/02.webp" alt="banner" />
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
