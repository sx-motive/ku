import About from "../components/sections/about";
import Hero from "../components/sections/hero";
import Img from "../components/sections/img";
import Portfolio from "../components/sections/portfolio";
import Head from "../components/sections/head";
import Services from "../components/sections/services";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero subtitle=" " title="Frontend Developer & Digital Designer" />
      <section className="image-section" data-scroll-section>
        <div
          className="image-section-container"
          data-scroll
          data-scroll-speed="-5"
        >
          <Img src="/images/02.webp" fallback="/images/02.webp" alt="banner" />
        </div>
      </section>
      <Head cont="left" title="Services" />
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
      <Head cont="center" title="About" />
      <About />

      <Head cont="left" title="Works" />
      <Portfolio />

      <Contact />
    </>
  );
}
