import React from "react";

import photoGrid from "../images/photogrid.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <img className="hero-photogrid" src={photoGrid} alt="happy people" />
      <h2 className="hero-title">Online Experiences</h2>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
