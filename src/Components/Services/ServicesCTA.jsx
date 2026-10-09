import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import "../../Styles/Services/ServicesCTA.css";

function ServicesCTA() {
  return (
    <section className="services-cta">

      <div className="services-cta-orbit orbit-one"></div>
      <div className="services-cta-orbit orbit-two"></div>

      <div className="services-cta-container">

        <span>
          READY WHEN YOU ARE
        </span>

        <h2>
          Let's design your
          <br />
          <strong>perfect experience.</strong>
        </h2>

        <p>
          Tell us about your space and vision.
          We'll take care of the rest.
        </p>

        <a
          href="/contact"
          className="services-cta-button"
        >
          Get a Quote
          <FiArrowUpRight />
        </a>

      </div>

    </section>
  );
}

export default ServicesCTA;