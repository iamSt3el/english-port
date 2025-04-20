import React from 'react';
import './Footer.css';
import TuxLogo from '../../assets/TuxLogo';

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <TuxLogo className="footer-logo" />
          <p className="footer-text">Thank you for visiting my portfolio. Feel free to reach out if you'd like to collaborate on projects or discuss opportunities.</p>
          <div className="footer-links">
            <a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#skills" className="footer-link" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a>
            <a href="#projects" className="footer-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
            <a href="#achievements" className="footer-link" onClick={(e) => handleNavClick(e, 'achievements')}>Achievements</a>
          </div>
          <div className="footer-credit">
            <p>Powered by Linux <i className="fas fa-heart"></i> Made with passion in 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;