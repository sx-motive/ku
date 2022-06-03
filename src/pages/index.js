import Link from "next/link";
import Img from "../components/img";
import Text from "../components/text";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import { services } from "../utils/data";

export default function Home() {
  return (
    <>
      <section className="hero" data-scroll-section>
        <div data-cursor="-exclusion -hero" className="hero-title">
          <Marquee gradient={false} speed={120}>
            <Text caption tag="h1">
              Frontend developer & Digital Designer
            </Text>
          </Marquee>
        </div>
        <div className="hero-subtitle">
          <Marquee direction="right" gradient={false} speed={60}>
            <Text caption>
              I believe in creating beautiful and complete brand experiences by
              helping them connect with their intention and know-how to
              communicate their purpose.
            </Text>
          </Marquee>
        </div>
        <div className="hero-explore">
          <Link href="/">
            <a>Discover ↗︎</a>
          </Link>
        </div>
        {/*<div className="hero-video">
          <video autoPlay muted loop>
            <source src="/videos/05.mp4" />
          </video>
        </div>*/}
      </section>

      <section className="services" data-scroll-section>
        <div className="container -full">
          <Text caption>Great brand needs a great decision</Text>
          <motion.hr
            initial={{ width: 0 }}
            whileInView={{
              width: "100%",
              transition: {
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 2,
              },
            }}
            viewport={{ once: false }}
          />
          <div className="services-wrapper">
            {services.map((item, index) => (
              <div className="services-item" key={index + item.title}>
                {/*<div
                className="services-item-image"
                data-scroll
                data-scroll-speed="-1"
              >
                <video
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "100%" }}
                >
                  <source src={item.video} />
                </video>
              </div>*/}
                <div className="services-item-meta">
                  <span className="services-item-title">
                    <Text caption tag="h3">
                      {item.title}
                    </Text>
                  </span>
                </div>
                <div className="services-item-right-wrapper">
                  <motion.ul
                    className="services-item-list"
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 2,
                      },
                    }}
                    viewport={{ once: false }}
                  >
                    {item.list.map((itemList, index) => (
                      <li className="services-item-list-item" key={index}>
                        <Text paragraph>{itemList}</Text>
                      </li>
                    ))}
                  </motion.ul>
                  <div className="services-item-text">
                    <Text paragraph>{item.text}</Text>
                  </div>
                  <motion.div
                    className="services-item-read"
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 2,
                      },
                    }}
                    viewport={{ once: false }}
                  >
                    <Link href={`/services/${item.slug}`}>
                      <a data-cursor="-exclusion -lg">Read more ↗︎</a>
                    </Link>
                  </motion.div>
                </div>
                <div className="services-item-hr-wrapper">
                  <motion.hr
                    initial={{ width: 0 }}
                    whileInView={{
                      width: "100%",
                      transition: {
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 2,
                      },
                    }}
                    viewport={{ once: false }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="image-section" data-scroll-section>
        <div
          className="image-section-container"
          data-scroll
          data-scroll-speed="-5"
        >
          <Img src="/images/04.webp" fallback="/images/04.webp" alt="banner" />
        </div>
      </section>

      <section className="about" data-scroll-section>
        <Text caption>
          We can create an amazing digital experience together
        </Text>
        <div className="about-img -one" data-scroll data-scroll-speed="2">
          <Img src="/images/07.webp" fallback="/images/07.webp" alt="banner" />
        </div>
        <div className="about-img -two" data-scroll data-scroll-speed="-3">
          <Img src="/images/05.webp" fallback="/images/05.webp" alt="banner" />
        </div>
        <div className="about-img -three" data-scroll data-scroll-speed="2">
          <Img src="/images/05.webp" fallback="/images/05.webp" alt="banner" />
        </div>
        <div className="container -right">
          <div className="about-desc">
            <Text paragraph>
              Over the lasts years I realized - It&apos;s not enough to simply
              sell products anymore, people need brands that lead from the heart
              and share their values. That&apos;s why I focus on Branding.
              Whether a brand is looking for a refresh or finding its voice at
              the very begging, I will help find its purpose and connect with
              their target. I believe in creating beautiful and complete brand
              experiences by helping them connect with their intention and
              know-how to communicate their purpose.
            </Text>
            <Text paragraph>
              Currently I&apos;m working as a freelancer looking for new brands
              to create complete branding experiences and help them find their
              voice.
            </Text>
            <Text paragraph>
              I believe collaboration allows us to create a different narratives
              for each brand. That&apos;s why depending on the project I love
              collaborating with specialists from different fields.
            </Text>
          </div>
        </div>
      </section>

      <section className="portfolio" data-scroll-section>
        <div className="container -full">
          <Text caption>Selected works</Text>
        </div>
      </section>
    </>
  );
}
