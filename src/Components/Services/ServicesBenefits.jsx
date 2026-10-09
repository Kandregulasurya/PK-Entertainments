import React from "react";
import { FiCheck } from "react-icons/fi";

import "../../Styles/Services/ServicesBenefits.css";

const benefits = [
  "Expert Consultation",
  "Customized Design",
  "Premium Brands",
  "Professional Installation",
  "Precision Calibration",
  "Strong After-Sales Support",
];

function ServicesBenefits() {
  return (
    <section className="services-benefits">

      <div className="services-benefits-container">

        <div className="benefits-heading">

          <span>
            WHY LIVEINSMART
          </span>

          <h2>
            Precision behind
            <strong> every experience.</strong>
          </h2>

          <p>
            Premium technology is only as good as the people
            who design, install and calibrate it. That's why
            every LiveInSmart project receives complete
            attention from concept to completion.
          </p>

        </div>

        <div className="benefits-list">

          {benefits.map((benefit, index) => (

            <div
              className="benefit-item"
              key={benefit}
            >

              <span className="benefit-number">
                0{index + 1}
              </span>

              <span className="benefit-icon">
                <FiCheck />
              </span>

              <span className="benefit-text">
                {benefit}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ServicesBenefits;