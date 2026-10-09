import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import "../../Styles/Services/FeaturedExperience.css";

function FeaturedExperience() {
  return (
    <section className="featured-experience">

      <div className="featured-experience-glow"></div>

      <div className="featured-experience-container">

        <div className="featured-experience-content">

          <span className="featured-label">
            THE COMPLETE EXPERIENCE
          </span>

          <h2>
            Your room.
            <br />
            <span>Your cinema.</span>
            <br />
            Your experience.
          </h2>

          <p>
            We don't simply install equipment. We engineer
            the entire experience — from the first design
            concept to the final calibration.
          </p>

          <a
            href="/contact"
            className="featured-button"
          >
            Start Your Project
            <FiArrowUpRight />
          </a>

        </div>

        <div className="featured-visual">

          <div className="visual-frame">

            <div className="visual-screen">

              <div className="screen-glow"></div>

              <div className="screen-text">
                <span>IMMERSIVE</span>
                <strong>EXPERIENCE</strong>
              </div>

            </div>

            <div className="visual-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedExperience;