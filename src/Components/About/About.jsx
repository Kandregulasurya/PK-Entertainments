
import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiFilm,
  FiMonitor,
  FiVolume2,
  FiHome,
  FiSettings,
  FiTool,
  FiTarget,
  FiAward,
  FiUsers,
  FiShield,
} from "react-icons/fi";

import "../../Styles/About.css";


/* =========================================================
   DATA
========================================================= */

const expertise = [
  {
    number: "01",
    icon: <FiFilm />,
    title: "Home Theatre Design & Installation",
    description:
      "Complete private cinema solutions designed around your space, lifestyle, and entertainment needs.",
  },
  {
    number: "02",
    icon: <FiMonitor />,
    title: "4K / Laser Projector Solutions",
    description:
      "High-performance projection systems delivering exceptional clarity, contrast, and cinematic visuals.",
  },
  {
    number: "03",
    icon: <FiVolume2 />,
    title: "Acoustic Treatment & Calibration",
    description:
      "Precision acoustic engineering and calibration for balanced, immersive sound throughout your space.",
  },
  {
    number: "04",
    icon: <FiHome />,
    title: "Smart Home & AV Automation",
    description:
      "Intelligent automation that brings lighting, audio, video, and control together seamlessly.",
  },
  {
    number: "05",
    icon: <FiMonitor />,
    title: "Corporate AV & Interactive Displays",
    description:
      "Professional AV solutions for offices, boardrooms, institutions, and modern work environments.",
  },
  {
    number: "06",
    icon: <FiTool />,
    title: "End-to-End Execution & Support",
    description:
      "From consultation and design to installation, calibration, and long-term support.",
  },
];


const missionPoints = [
  "Delivering premium quality installations with attention to every detail",
  "Designing tailored solutions based on space, usage, and budget",
  "Using industry-leading brands and technologies for long-term performance",
  "Providing honest consultation — recommending what truly fits the client",
  "Ensuring seamless execution and dependable after-sales support",
];


const reasons = [
  {
    number: "01",
    icon: <FiUsers />,
    title: "Expert Consultation",
    text: "Not just sales. We understand your space, requirements, and expectations before recommending a solution.",
  },
  {
    number: "02",
    icon: <FiTarget />,
    title: "Customized Design",
    text: "Every room is different. Our solutions are designed around your space, usage, and lifestyle.",
  },
  {
    number: "03",
    icon: <FiAward />,
    title: "Premium Brands",
    text: "We work with trusted technologies and industry-leading brands for reliable long-term performance.",
  },
  {
    number: "04",
    icon: <FiSettings />,
    title: "End-to-End Execution",
    text: "One team handles the journey from concept and design to installation, calibration, and delivery.",
  },
  {
    number: "05",
    icon: <FiShield />,
    title: "Strong After-Sales Support",
    text: "Our relationship doesn't end after installation. We remain available for support and maintenance.",
  },
];


/* =========================================================
   REVEAL HOOK
========================================================= */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}


/* =========================================================
   REVEAL COMPONENT
========================================================= */

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`about-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}


/* =========================================================
   ABOUT COMPONENT
========================================================= */

function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="about-hero">

        <div className="hero-noise"></div>

        <div className="about-hero-glow hero-glow-one"></div>
        <div className="about-hero-glow hero-glow-two"></div>

        <div className="hero-grid-lines"></div>

        <div className="about-container about-hero-grid">

          <Reveal className="about-hero-content">

            <span className="about-label hero-label">
              ABOUT — SINCE 2018
            </span>

            <h1>
              We craft
              <span className="hero-highlight"> immersive </span>
              experiences.
            </h1>

            <p>
              At LiveInSmart Technologies, we don't just install equipment —
              we engineer cinematic environments. Founded in 2018 and
              headquartered in Hyderabad, we design premium home theatres,
              high-performance projector systems, and smart AV solutions
              tailored to modern lifestyles.
            </p>

            <div className="about-hero-actions">

              <a
                href="/contact"
                className="about-primary-btn"
              >
                Get a Quote
                <FiArrowUpRight />
              </a>

              <a
                href="/products/home-theatres"
                className="about-secondary-btn"
              >
                Explore Home Theatres
              </a>

            </div>

          </Reveal>


          <Reveal
            className="about-year-wrapper"
            delay={250}
          >

            <div className="about-year-card">

              <div className="year-card-line"></div>

              <div className="year-card-orbit"></div>

              <span>EST.</span>

              <strong>2018</strong>

              <p>YEAR FOUNDED</p>

              <div className="year-card-circle">
                <FiFilm />
              </div>

            </div>

          </Reveal>

        </div>


        <div className="hero-scroll-indicator">
          <span></span>
          SCROLL TO EXPLORE
        </div>

      </section>


      {/* =====================================================
          OUR STORY
      ====================================================== */}

      <section className="about-section story-section">

        <div className="about-container">

          <Reveal>

            <div className="section-heading-row">

              <div className="section-number">
                01 — OUR STORY
              </div>

              <div className="section-heading">

                <h2>
                  Precision. Acoustics.
                  <br />
                  <span>Seamless integration.</span>
                </h2>

              </div>

            </div>

          </Reveal>


          <div className="story-grid">

            <Reveal delay={100}>

              <div className="story-intro">

                <div className="story-line"></div>

                <p className="large-text">
                  From luxury home cinemas to intelligent office setups,
                  our focus is on precision engineering, acoustic perfection,
                  and seamless integration.
                </p>

              </div>

            </Reveal>


            <Reveal delay={200}>

              <div className="story-content">

                <p>
                  Every project we take up is customized — because no two
                  spaces, and no two clients, are the same.
                </p>

                <p>
                  We work closely with homeowners, architects, and businesses
                  to transform ordinary rooms into extraordinary visual and
                  audio environments.
                </p>

                <p>
                  Whether it's a private cinema or a professional AV setup,
                  we deliver solutions that are powerful, elegant, and
                  future-ready.
                </p>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERTISE
      ====================================================== */}

      <section className="about-section expertise-section">

        <div className="about-container">

          <Reveal>

            <div className="section-top">

              <div className="section-number">
                02 — EXPERTISE
              </div>

              <h2>
                What we do,
                <span> exceptionally well.</span>
              </h2>

              <p>
                From immersive private cinemas to intelligent commercial AV
                environments, every solution is engineered with precision.
              </p>

            </div>

          </Reveal>


          <div className="expertise-grid">

            {expertise.map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * 80}
              >

                <div className="expertise-card">

                  <div className="expertise-card-top">

                    <span className="card-number">
                      {item.number}
                    </span>

                    <div className="expertise-icon">
                      {item.icon}
                    </div>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <div className="card-arrow">
                    <FiArrowUpRight />
                  </div>

                  <div className="card-glow"></div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISION
      ====================================================== */}

      <section className="vision-section">

        <div className="vision-glow"></div>

        <div className="vision-grid"></div>

        <div className="about-container vision-content">

          <Reveal>

            <div className="section-number">
              03 — VISION
            </div>

            <h2>
              India's most trusted
              <br />
              <span>premium AV brand.</span>
            </h2>

            <p>
              To become the most trusted premium AV experience brand in India —
              known for transforming spaces into immersive environments that
              redefine entertainment, learning, and communication.
            </p>

            <p>
              We envision a future where every home, office, and institution
              experiences cinema-quality sound, crystal-clear visuals, and
              intelligent automation — seamlessly integrated into everyday life.
            </p>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          MISSION
      ====================================================== */}

      <section className="about-section mission-section">

        <div className="about-container">

          <Reveal>

            <div className="mission-header">

              <div className="section-number">
                04 — MISSION
              </div>

              <div>

                <h2>
                  Technology, design &
                  <span> expertise — in every detail.</span>
                </h2>

                <p>
                  End-to-end AV solutions that combine technology, design,
                  and expertise to create unmatched experiences.
                </p>

              </div>

            </div>

          </Reveal>


          <div className="mission-list">

            {missionPoints.map((point, index) => (

              <Reveal
                key={index}
                delay={index * 90}
              >

                <div className="mission-item">

                  <div className="mission-number">
                    0{index + 1}
                  </div>

                  <div className="mission-check">
                    <FiCheck />
                  </div>

                  <p>
                    {point}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>


          <Reveal delay={300}>

            <div className="mission-footer">

              <span>
                ABOVE ALL
              </span>

              <p>
                We aim to build long-term relationships by delivering value,
                reliability, and exceptional experience in every project.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          WHY LIVEINSMART
      ====================================================== */}

      <section className="about-section why-section">

        <div className="about-container">

          <Reveal>

            <div className="section-top">

              <div className="section-number">
                05 — WHY LIVEINSMART
              </div>

              <h2>
                The difference is
                <span> in the detail.</span>
              </h2>

            </div>

          </Reveal>


          <div className="why-grid">

            {reasons.map((reason, index) => (

              <Reveal
                key={reason.number}
                delay={index * 90}
              >

                <div className="why-card">

                  <div className="why-card-number">
                    {reason.number}
                  </div>

                  <div className="why-icon">
                    {reason.icon}
                  </div>

                  <h3>
                    {reason.title}
                  </h3>

                  <p>
                    {reason.text}
                  </p>

                  <div className="why-card-line"></div>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="about-cta">

        <div className="cta-glow"></div>

        <div className="cta-ring ring-one"></div>
        <div className="cta-ring ring-two"></div>

        <div className="about-container cta-content">

          <Reveal>

            <span className="about-label">
              READY TO EXPERIENCE MORE?
            </span>

            <h2>
              Ready to design your
              <span> private cinema?</span>
            </h2>

            <p>
              Talk to our experts. Get a tailored consultation, walkthrough
              of our experience centre, and a detailed proposal — at no obligation.
            </p>

            <div className="cta-buttons">

              <a
                href="/contact"
                className="about-primary-btn"
              >
                Get a Quote
                <FiArrowUpRight />
              </a>

              <a
                href="/products/home-theatres"
                className="about-secondary-btn"
              >
                Explore Home Theatres
              </a>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  );
}


export default About;