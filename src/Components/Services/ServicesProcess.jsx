import React from "react";

import {
  FiTarget,
  FiLayers,
  FiTool,
  FiSettings,
  FiHeadphones,
} from "react-icons/fi";

import "../../Styles/Services/ServicesProcess.css";

const processSteps = [
  {
    number: "01",
    icon: FiTarget,
    title: "Consultation",
    description:
      "We understand your requirements, space, lifestyle and entertainment goals.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Design",
    description:
      "Our team develops a customized AV solution tailored specifically to your environment.",
  },
  {
    number: "03",
    icon: FiTool,
    title: "Installation",
    description:
      "Every component is professionally installed with careful attention to detail.",
  },
  {
    number: "04",
    icon: FiSettings,
    title: "Calibration",
    description:
      "We fine-tune your system to deliver the best possible audio and visual experience.",
  },
  {
    number: "05",
    icon: FiHeadphones,
    title: "Support",
    description:
      "Our relationship continues with reliable after-sales service and technical support.",
  },
];

function ServicesProcess() {
  return (
    <section className="services-process">

      <div className="services-process-container">

        <div className="services-process-heading">

          <span>
            OUR PROCESS
          </span>

          <h2>
            From concept to
            <strong> cinema.</strong>
          </h2>

          <p>
            A seamless process designed to make your project
            simple, transparent and exceptional.
          </p>

        </div>

        <div className="services-process-grid">

          {processSteps.map((step) => {

            const Icon = step.icon;

            return (
              <div
                className="process-card"
                key={step.number}
              >

                <span className="process-number">
                  {step.number}
                </span>

                <div className="process-icon">
                  <Icon />
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default ServicesProcess;