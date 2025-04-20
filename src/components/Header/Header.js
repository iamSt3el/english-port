import React from 'react';
import './Header.css';
import TuxLogo from '../../assets/TuxLogo';

const Header = () => {
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
    <header>
      <div className="container">
        <div className="header-content">
          <div className="header-top">
            <div className="logo">
              <TuxLogo className="tux-logo" />
            </div>
            <div className="name-title">
              <h1>Himanshu</h1>
              <p>Software Engineer</p>
            </div>
          </div>
          
          <nav>
            <ul className="nav-links">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  <i className="fas fa-user-alt"></i> about
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={(e) => handleNavClick(e, 'skills')}
                >
                  <i className="fas fa-code"></i> skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => handleNavClick(e, 'projects')}
                >
                  <i className="fas fa-project-diagram"></i> projects
                </a>
              </li>
              <li>
                <a 
                  href="#achievements" 
                  onClick={(e) => handleNavClick(e, 'achievements')}
                >
                  <i className="fas fa-trophy"></i> achievements
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;