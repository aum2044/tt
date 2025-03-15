import React from "react";
import "../style/Services.css"; // Import CSS for Services page
import radiographyImg from "../images/rdio.webp";
import ultrasonicImg from "../images/ultra.jpg";
import thicknessImg from "../images/thick.png";
import dyePenetrantImg from "../images/dye.png";
import hardnessImg from "../images/hard.webp";
import heatTreatmentImg from "../images/heat.jpg";
import boilerInspectionImg from "../images/boiler.webp";
import eddyImg from "../images/eddy.webp"; // Placeholder for Eddy Current Testing
import pmiImg from "../images/pmi.jpg"; // Placeholder for PMI Testing

function Services() {
  return (
    <div className="services-section">
      <h2>Our NDT Testing Services</h2>
      <div className="services-grid">
        {/* Radiography */}
        <div className="service-card">
          <div>
            <h3>Radiography</h3>
            <p>
              Radiography is an essential non-destructive testing (NDT) method
              used to detect hidden defects and structural weaknesses in
              materials. This technique uses X-ray or gamma rays to penetrate
              the material and capture detailed images of internal features,
              such as welds, joints, or other critical parts of a structure. By
              analyzing these images, we can detect cracks, voids, inclusions,
              and other material anomalies that may not be visible to the naked
              eye. Radiography is widely used in industries such as aerospace,
              oil and gas, construction, and manufacturing to ensure the
              integrity and safety of products.
            </p>
          </div>
          <img src={radiographyImg} alt="Radiography" />
        </div>

        {/* Ultrasonic Testing */}
        <div className="service-card">
          <div>
            <h3>Ultrasonic Testing</h3>
            <p>
              Ultrasonic testing (UT) is a widely-used NDT technique that
              utilizes high-frequency sound waves to assess the properties of
              materials. By sending sound waves into the material and measuring
              how they reflect back, UT can identify internal flaws such as
              cracks, voids, and material thickness variations.
            </p>
          </div>
          <img src={ultrasonicImg} alt="Ultrasonic Testing" />
        </div>

        {/* Thickness Measurement */}
        <div className="service-card">
          <div>
            <h3>Thickness Measurement</h3>
            <p>
              Thickness measurement is a critical NDT technique used to assess
              the integrity of materials that may undergo wear and tear,
              corrosion, or erosion. Accurate thickness measurement helps
              identify areas that are at risk of failure due to material
              thinning.
            </p>
          </div>
          <img src={thicknessImg} alt="Thickness Measurement" />
        </div>

        {/* Dye Penetrant Testing */}
        <div className="service-card">
          <div>
            <h3>Dye Penetrant Testing</h3>
            <p>
              Dye penetrant testing (DPT) is a surface inspection method that
              detects surface-breaking defects in non-porous materials. This
              simple yet effective technique involves applying a liquid dye to
              the material's surface, which is then allowed to seep into any
              cracks or defects.
            </p>
          </div>
          <img src={dyePenetrantImg} alt="Dye Penetrant Testing" />
        </div>

        {/* Hardness Testing */}
        <div className="service-card">
          <div>
            <h3>Hardness Testing</h3>
            <p>
              Hardness testing is a key NDT technique used to evaluate the
              mechanical properties of materials, specifically their resistance
              to deformation.
            </p>
          </div>
          <img src={hardnessImg} alt="Hardness Testing" />
        </div>

        {/* Heat Treatment */}
        <div className="service-card">
          <div>
            <h3>Heat Treatment</h3>
            <p>
              Heat treatment is a process used to alter the physical and
              chemical properties of materials, especially metals, by controlled
              heating and cooling.
            </p>
          </div>
          <img src={heatTreatmentImg} alt="Heat Treatment" />
        </div>

        {/* Boiler Inspection (RLA) */}
        <div className="service-card">
          <div>
            <h3>Boiler Inspection (RLA)</h3>
            <p>
              Boiler inspection and remaining life assessment (RLA) are
              essential for ensuring the safe operation of industrial boilers.
              RLA is a systematic approach to evaluating the condition of a
              boiler, assessing its remaining operational life, and identifying
              potential risks or weaknesses.
            </p>
          </div>
          <img src={boilerInspectionImg} alt="Boiler Inspection (RLA)" />
        </div>

        {/* Eddy Current Testing */}
        <div className="service-card">
          <div>
            <h3>Eddy Current Testing</h3>
            <p>
              Eddy Current Testing (ECT) is a non-destructive method used to
              detect surface and sub-surface flaws in conductive materials. It
              is widely used in industries like aerospace, automotive, and power
              generation for detecting cracks, corrosion, and material
              thickness. ECT works by inducing an electric current into the
              material and measuring the electromagnetic response, allowing for
              the detection of discontinuities.
            </p>
          </div>
          <img src={eddyImg} alt="Eddy Current Testing" />
        </div>

        {/* PMI Testing */}
        <div className="service-card">
          <div>
            <h3>PMI Testing</h3>
            <p>
              Positive Material Identification (PMI) testing is a crucial
              non-destructive technique for identifying the composition of
              metals and alloys. PMI is often used in industries like oil and
              gas, aerospace, and manufacturing to ensure that materials meet
              specific composition requirements, preventing material failure.
            </p>
          </div>
          <img src={pmiImg} alt="PMI Testing" />
        </div>
      </div>
    </div>
  );
}

export default Services;
