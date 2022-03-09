import React from "react";
import Text from "../text";

export default function About() {
  return (
    <section className="about" data-scroll-section>
      <div className="container -center">
        <p className="about-desc">
          <Text
            text="Over the lasts years I realized - It's not enough to simply sell products anymore, people need brands that lead from the heart and share their values.
            That's why I focus on Branding. Whether a brand is looking for a refresh or finding its voice at the very begging, I will help find its purpose and connect with their target."
          />
        </p>
        <p>
          <Text text="I believe in creating beautiful and complete brand experiences by helping them connect with their intention and know-how to communicate their purpose." />
          <Text text="Present Currently I'm working at Walsh and also as a freelancer looking for new brands to create complete branding experiences and help them find their voice." />
          <Text text=" Previously I have worked on Fibra for 3 years focusing on branding, strategic development and packaging." />
          <Text text="Education I studied in Perú at Universidad de Ciencias y Artes de America Latina. Graduating with a major in Graphic Design and specialized in Branding." />
          <Text text="Collaborations I believe collaboration allows us to create a different narratives for each brand. That's why depending on the project I love collaborating with specialists from different fields" />
        </p>
      </div>
    </section>
  );
}
