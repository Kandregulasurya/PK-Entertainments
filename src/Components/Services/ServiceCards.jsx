import React from "react";

import {
  FiArrowUpRight,
  FiCheck,
  FiFilm,
  FiMonitor,
  FiVolume2,
  FiHome,
  FiTool,
} from "react-icons/fi";

import "../../Styles/Services/ServiceCards.css";

const services = [
  {
    number: "01",
    icon: FiFilm,
    title: "Home Theatre Design & Installation",
    description:
      "Transform your space into a private cinema with a fully customized home theatre designed around your room, lifestyle and entertainment preferences.",
    features: [
      "Custom theatre planning",
      "Screen & seating configuration",
      "AV equipment integration",
      "Professional installation",
    ],
  },
  {
    number: "02",
    icon: FiMonitor,
    title: "4K & Laser Projector Solutions",
    description:
      "Experience exceptional picture quality with carefully selected 4K and laser projection systems engineered for immersive viewing.",
    features: [
      "4K projection systems",
      "Laser projectors",
      "Large-format displays",
      "Professional screen selection",
    ],
  },
  {
    number: "03",
    icon: FiVolume2,
    title: "Acoustic Treatment & Calibration",
    description:
      "Achieve cinema-grade sound with room acoustics, speaker positioning and precision calibration designed specifically for your space.",
    features: [
      "Acoustic analysis",
      "Acoustic treatment",
      "Speaker positioning",
      "Audio calibration",
    ],
  },
  {
    number: "04",
    icon: FiHome,
    title: "Smart Home & AV Automation",
    description:
      "Bring your entertainment and smart home systems together with intuitive automation that makes every experience effortless.",
    features: [
      "Smart lighting control",
      "AV automation",
      "One-touch scenes",
      "Integrated smart systems",
    ],
  },
  {
    number: "05",
    icon: FiMonitor,
    title: "Corporate AV & Interactive Displays",
    description:
      "Professional AV solutions for offices, meeting rooms and commercial environments designed for communication and collaboration.",
    features: [
      "Meeting room solutions",
      "Interactive displays",
      "Video conferencing",
      "Presentation systems",
    ],
  },
  {
    number: "06",
    icon: FiTool,
    title: "End-to-End Execution & Support",
    description:
      "From initial consultation to installation and after-sales support, we manage every stage of your AV project with precision.",
    features: [
      "Project management",
      "Professional installation",
      "System testing",
      "After-sales support",
    ],
  },
];

function ServiceCards() {
  return (
    <section className="service-cards-section">

      <div className="service-cards-container">

        <div className="service-cards-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.number}
              >

                <div className="service-card-top">

                  <span className="service-number">
                    {service.number}
                  </span>

                  <div className="service-icon">
                    <Icon />
                  </div>

                </div>

                <div className="service-card-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <FiCheck />
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>

                <div className="service-card-footer">
                  <span>Learn More</span>
                  <FiArrowUpRight />
                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default ServiceCards;