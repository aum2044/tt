import React from 'react';
import '../style/Footer.css'; // Ensure you have the footer CSS file linked

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Company Info Section */}
                <div className="footer-info">
                    <h2>Hallmark Industrial Laboratory</h2>
                    <p>
                        Our founder, Suresh Patel, started Hallmark Industrial Laboratory in 1997. Under their guidance, the company has successfully emerged as a leading provider of ISO certification training and consulting services in India.
                    </p>
                    <a href="/about" className="footer-link">Read More About Us</a>
                </div>

                {/* Links Section */}
                <div className="footer-links">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/Home">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h3>Know Us More</h3>
                    <p>
                        <strong>Address:</strong>
                        <a
                            href="https://maps.app.goo.gl/RNfxfivu2B1sY7B99"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            65/G, Rudraksha Complex, Nr. Trikampura Patiya, Phase 3, Vatva GIDC, Ahmedabad, Gujarat 382445
                        </a>
                    </p>
                    <p>
                        <strong>Email:</strong>
                        <a href="mailto:hallmark.indl.lab@gmail.com">hallmark.indl.lab@gmail.com</a>
                    </p>

                    <p>
                        <strong>Mobile:</strong>
                        <a href="tel:+91-9327004202">+91-9327004202</a>,{" "}
                        <a href="tel:+919558304774">+91-9558304774</a>
                    </p>
                </div>

                {/* Social Links Section */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i> Facebook
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; 2024 Hallmark Industrial Laboratory. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
