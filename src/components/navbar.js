import React, { useState } from 'react';
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../style/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        {/* Make the logo clickable and navigate to Home */}
        <Link to="/home">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className={`rightSide ${openLinks ? 'active' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Our Service</Link>
        <Link to="/contact">Contact Us</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      {/* Dropdown menu for mobile view */}
      <div className={`dropdownMenu ${openLinks ? 'active' : ''}`}>
        <Link to="/home" onClick={toggleNavbar}>Home</Link>
        <Link to="/about" onClick={toggleNavbar}>About Us</Link>
        <Link to="/services" onClick={toggleNavbar}>Our Service</Link>
        <Link to="/contact" onClick={toggleNavbar}>Contact Us</Link>
      </div>
    </div>
  );
}

export default Navbar;