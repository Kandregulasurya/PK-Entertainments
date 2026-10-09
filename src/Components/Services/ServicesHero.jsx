import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import "../../Styles/Services/ServicesHero.css";

function ServicesHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const timer = setTimeout(() => {
      element.classList.add("services-hero-visible");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="services-hero"
      ref={heroRef}
    >

      {/* =================================
          THEATRE BACKGROUND
      ================================= */}

      <div className="services-theatre-bg">
        <img
          src="/images/services/home-theatre.jpg"
          alt="Premium home theatre"
        />
      </div>

      {/* Dark cinematic overlay */}
      <div className="services-theatre-overlay"></div>

      {/* Purple ambient light */}
      <div className="services-theatre-purple-glow"></div>


      {/* =================================
          GRID
      ================================= */}

      <div className="services-hero-grid"></div>


      {/* =================================
          DECORATIVE GLOWS
      ================================= */}

      <div className="services-hero-glow services-glow-one"></div>

      <div className="services-hero-glow services-glow-two"></div>


      {/* =================================
          HERO CONTENT
      ================================= */}

      <div className="services-hero-content">

        <div className="services-label">
          <span></span>

          OUR SERVICES

          <span></span>
        </div>


        <h1>
          Technology that
          <br />

          <span>disappears.</span>

          <br />

          Experience that remains.
        </h1>


        <p>
          From private cinemas to intelligent living spaces,
          we design and deliver premium audio-visual experiences
          engineered around you.
        </p>


        <div className="services-hero-actions">

          <a
            href="/contact"
            className="services-btn services-btn-primary"
          >
            Get a Quote

            <FiArrowUpRight />
          </a>


          <a
            href="#services"
            className="services-btn services-btn-secondary"
          >
            Explore Services
          </a>

        </div>

      </div>


      {/* =================================
          BOTTOM INFO
      ================================= */}

      <div className="services-hero-bottom">

        <span>
          LIVEINSMART TECHNOLOGIES
        </span>

        <span>
          PREMIUM AV EXPERIENCES
        </span>

      </div>


      {/* =================================
          SCROLL INDICATOR
      ================================= */}

      <div className="services-scroll-indicator">

        <span>SCROLL TO EXPLORE</span>

        <div className="scroll-line">
          <span></span>
        </div>

      </div>

    </section>
  );
}

export default ServicesHero;