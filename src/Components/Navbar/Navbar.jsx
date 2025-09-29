import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';


function Navbar() {
  const [stricky, setStricky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStricky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <nav className={`container navbar ${stricky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
