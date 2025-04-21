import React from 'react';
import profileImage from '../../assets/image.jpeg';
import pdf from '../../assets/sp_cv_updated.pdf';
import './About.css';


const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-title">
        <i className="fas fa-user-alt"></i>
        <h2>About Me</h2>
      </div>
      
      <div className="about">
        <div className="about-img">
          <div className="img-container">
            <div className="hexagon"></div>
            <img src={profileImage} alt="Profile" className="profile-img" />
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>I am a software developer with a passion for Game development and AI/ML. I have a background in computer science and mathematics, and I have a strong interest in the intersection of technology and art. I am currently studying as a 3nd year student in Lovely Professional University.</p>
          </div>
          
          <div className="console-container">
            <div className="console-header">terminal</div>
            <div className="console-line">
              <span className="console-prompt">user@linux:~$</span>
              <span className="console-command">cat skills.txt</span>
            </div>
            <div className="console-output">
              DevOps, Full-Stack Development, C++, Game Development, AI/ML
            </div>
            <div className="console-line">
              <span className="console-prompt">user@linux:~$</span>
              <span className="console-command">ls projects/</span>
            </div>
            <div className="console-output">
              note.me/ docker-automation/ Transformer model / Typing game/
            </div>
            <div className="console-line">
              <span className="console-prompt">user@linux:~$</span>
              <span className="console-command">grep -i passion about_me.md</span>
            </div>
            <div className="console-output">
              I'm passionate about creating elegant solutions to complex problems and sharing knowledge with the community.
            </div>
            <div className="console-line">
              <span className="console-prompt">user@linux:~$</span>
              <span className="console-command">_</span>
            </div>
          </div>
          
          <div className="social-links">
            <a href="https://github.com/iamSt3el" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hd9a0b" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:himanshudhaka9166@gmail.com" className="social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          <a href={pdf} className="download-btn" download>
            <i className="fas fa-file-download"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;