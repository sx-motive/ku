import React from "react";
import Caption from "../components/interface/caption";
import Paragraph from "../components/interface/paragraph";

export default function ui() {
  return (
    <section className="ui" data-scroll-section>
      <Caption tag="h1">
        Some header title whitch provide you something!
      </Caption>
      <Paragraph>
        A paragraph is a series of related sentences developing a central idea,
        called the topic. Try to think about paragraphs in terms of thematic
        unity: a paragraph is a sentence or a group of sentences that supports
        one central, unified idea. Paragraphs add one idea at a time to your
        broader argument.
      </Paragraph>
      <Caption tag="h2">
        Some header title whitch provide you something!
      </Caption>
      <Paragraph>
        A paragraph is a series of related sentences developing a central idea,
        called the topic. Try to think about paragraphs in terms of thematic
        unity: a paragraph is a sentence or a group of sentences that supports
        one central, unified idea. Paragraphs add one idea at a time to your
        broader argument.
      </Paragraph>
      <Caption tag="h3">
        Some header title whitch provide you something!
      </Caption>
      <Paragraph>
        A paragraph is a series of related sentences developing a central idea,
        called the topic. Try to think about paragraphs in terms of thematic
        unity: a paragraph is a sentence or a group of sentences that supports
        one central, unified idea. Paragraphs add one idea at a time to your
        broader argument.
      </Paragraph>
    </section>
  );
}
