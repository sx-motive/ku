import React from "react";
import Img from "./img";
import Paragraph from "../interface/paragraph";

export default function About() {
  return (
    <section className="about" data-scroll-section>
      <div className="about-img -one" data-scroll data-scroll-speed="2">
        <Img
          src="/images/banner-02.webp"
          fallback="/images/banner-02.webp"
          alt="banner"
        />
      </div>
      <div className="about-img -two" data-scroll data-scroll-speed="-3">
        <Img
          ssrc="/images/banner-02.webp"
          fallback="/images/banner-02.webp"
          alt="banner"
        />
      </div>
      <div className="about-img -three" data-scroll data-scroll-speed="2">
        <Img
          src="/images/banner-02.webp"
          fallback="/images/banner-02.webp"
          alt="banner"
        />
      </div>
      <div className="container -right">
        <div className="about-desc">
          <Paragraph>
            Over the lasts years I realized - It&apos;s not enough to simply
            sell products anymore, people need brands that lead from the heart
            and share their values. That&apos;s why I focus on Branding. Whether
            a brand is looking for a refresh or finding its voice at the very
            begging, I will help find its purpose and connect with their target.
          </Paragraph>
          <Paragraph>
            I believe in creating beautiful and complete brand experiences by
            helping them connect with their intention and know-how to
            communicate their purpose.
          </Paragraph>
          <Paragraph>
            Present Currently I&apos;m working at Walsh and also as a freelancer
            looking for new brands to create complete branding experiences and
            help them find their voice.
          </Paragraph>
          <Paragraph>
            I believe collaboration allows us to create a different narratives
            for each brand. That&apos;s why depending on the project I love
            collaborating with specialists from different fields
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
