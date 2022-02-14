import React, { useState } from "react";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Menu */}
      <div className={`menu ${isOpen ? "-open" : ""}`}>
        <div className="menu-wrapper">menu list</div>
        <div className="menu-wrapper-bg" />
      </div>

      {/* Burger */}
      <div
        className="burger-wrap"
        id="cursor-stick-area"
        onClick={() => setOpen(!isOpen)}
        data-magnetic
        data-cursor-stick="#cursor-stick-area"
        data-cursor="-exclusion -lgm"
      >
        <div className={`burger ${isOpen ? "-open" : ""}`}></div>
      </div>
    </>
  );
}
