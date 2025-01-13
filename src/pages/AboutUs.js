import React from 'react';
import '../style/AboutUs.css';
import ownerImage from '../images/owner.jpeg'; 
const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <img src={ownerImage} alt="Suresh Patel" className="owner-image" />
        <div className="about-text">
          <h2>Mr. Suresh Patel</h2>
          <p>
            With over 25 years of extensive experience in Non-Destructive Testing (NDT), Suresh Patel has been at the helm of Hallmark Industrial Laboratory since 1997. His deep expertise and commitment to excellence have enabled the company to provide reliable and accurate testing services to a wide range of industries, including construction, manufacturing, oil and gas, and power generation. Under his leadership, Hallmark Industrial Laboratory has earned a reputation for delivering high-quality testing solutions that ensure the safety, integrity, and reliability of critical assets and infrastructure.
          </p>
          <p>
            Suresh Patel’s knowledge encompasses a broad spectrum of NDT techniques, such as Radiography, Ultrasonic Testing, Thickness Measurement, Dye Penetrant, Hardness Testing, Heat Treatment, and Boiler Inspection (RLA). His hands-on approach and dedication to maintaining the highest industry standards have driven the company’s success. By consistently investing in advanced technology and professional development, Suresh Patel has ensured that Hallmark Industrial Laboratory remains at the forefront of NDT innovations.
          </p>
          <p>
            His leadership continues to guide the company’s mission to prioritize safety, precision, and reliability, making Hallmark Industrial Laboratory a trusted partner for businesses seeking top-tier NDT services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;