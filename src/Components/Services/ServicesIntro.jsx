import React from "react";

import "../../Styles/Services/ServicesIntro.css";

function ServicesIntro() {
  return (
    <section
      className="services-intro"
      id="services"
    >
      <div className="services-intro-container">

        <div className="services-intro-number">
          01
        </div>

        <div className="services-intro-content">

          <span className="services-small-label">
            WHAT WE DO
          </span>

          <h2>
            Designed around
            <span> your experience.</span>
          </h2>

          <p>
            Every project begins with understanding how you
            want to experience your space. We combine design,
            technology, acoustics and engineering to create
            systems that feel effortless to use and
            extraordinary to experience.
          </p>

        </div>

      </div>
    </section>
  );
}

export default ServicesIntro;