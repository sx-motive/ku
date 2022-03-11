import React from "react";
import Button from "../components/button";

export default function ButtonsPage() {
  return (
    <section className="button-section" data-scroll-section>
      <Button magnetic href="/" className="solid">
        Solid
      </Button>
      <Button magnetic href="/" className="outline">
        Outline
      </Button>
      <Button href="/" className="underline">
        Underline
      </Button>
      <Button href="/" className="round">
        Explore * More * Scroll * Down *
      </Button>
    </section>
  );
}
