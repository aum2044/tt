import React from 'react';
import '../style/Home.css';
import Slider from 'react-slick';  
import radiographyImg from '../images/rdio.webp';
import ultrasonicImg from '../images/ultra.jpg';
import thicknessImg from '../images/thick.png';
import dyePenetrantImg from '../images/dye.png';
import hardnessImg from '../images/hard.webp';
import heatTreatmentImg from '../images/heat.jpg';
import boilerInspectionImg from '../images/boiler.webp';
import homeimg from '../images/hm.jpg';  

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${homeimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay"></div>
        <div className="content">
          <h1 className="main-heading">Welcome to Hallmark Industrial Laboratory</h1>
          <p className="bb">
            Your trusted partner for expert NDT testing services, ensuring safety, reliability, and precision across industries.
          </p>

          {/* CTA Section */}

          <div className="cta-section">
            <h2 className="qqqq">Why Choose Hallmark?</h2>
            <ul className="features-list">
              <li>✔ Over 25 years of expertise in NDT testing.</li>
              <li>✔ State-of-the-art technology for unmatched accuracy.</li>
              <li>✔ Dedicated to on-time and reliable service delivery.</li>
              <li>✔ Trusted by industries nationwide for quality assurance.</li>
              
            </ul>
          </div>

          <div className="cta-buttons">
            <a href="/about" className="learn-more">Learn More</a>
            <a href="/services" className="view-services">Our Services</a>
          </div>
        </div>
      </div>

      {/* Slider Section */}

      <div className="slider-container">
        <Slider {...settings}>
          <div className="service-slide">
            <div className="service-card">
              <div>
                <h3>Radiography</h3>
                <p>Ensuring safety by detecting defects in welds and materials using X-ray technology. Our radiography services are used to detect cracks, voids, and other anomalies inside the material structure.</p>
              </div>
              <img src={radiographyImg} alt="Radiography" />
            </div>
          </div>

          <div className="service-slide">
            <div className="service-card">
              <div>
                <h3>Ultrasonic Testing</h3>
                <p>Using high-frequency sound waves to detect material flaws or measure thickness. This method is non-destructive and helps to detect subsurface defects effectively.</p>
              </div>
              <img src={ultrasonicImg} alt="Ultrasonic Testing" />
            </div>
          </div>

          <div className="service-slide">
            <div className="service-card">
              <div>
                <h3>Thickness Measurement</h3>
                <p>Accurate measurement of material thickness to detect corrosion and wear. This helps ensure the material’s integrity in high-stress environments.</p>
              </div>
              <img src={thicknessImg} alt="Thickness Measurement" />
            </div>
          </div>

          <div className="service-slide">
            <div className="service-card">
              <div>
                <h3>Dye Penetrant Testing</h3>
                <p>Detects surface-breaking defects in non-porous materials. Effective for visualizing cracks, leaks, or other flaws on the surface of the material.</p>
              </div>
              <img src={dyePenetrantImg} alt="Dye Penetrant Testing" />
            </div>
          </div>

          <div className="service-slide">
            <div className="service-card">
              <div>
                <h3>Hardness Testing</h3>
                <p>Testing the material's hardness to assess its durability. It is crucial to ensure materials meet the required specifications for strength and resistance to deformation.</p>
              </div>
              <img src={hardnessImg} alt="Hardness Testing" />
            </div>
          </div>

          <div className="service-slide">
            <div className="service-card">
              <div>
                <h3>Heat Treatment</h3>
                <p>Heat treatment services to enhance material properties such as strength, toughness, and wear resistance by carefully controlling the heating and cooling process.</p>
              </div>
              <img src={heatTreatmentImg} alt="Heat Treatment" />
            </div>
          </div>

          <div className="service-slide">
            <div className="service-card">
              <div>
                <h3>Boiler Inspection (RLA)</h3>
                <p>Inspection and assessment of the remaining life of boilers, ensuring safety, and improving efficiency. This service includes thorough non-destructive testing techniques.</p>
              </div>
              <img src={boilerInspectionImg} alt="Boiler Inspection (RLA)" />
            </div>
          </div>
        </Slider>

        
        <div className="more-services">
          <a href="/services" className="view-more-services">View More Services</a>
        </div>
      </div>
    </div>
  );
};

export default Home;