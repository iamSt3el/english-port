import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsList = [
    { icon: 'fab fa-linux', name: 'Linux' },
    { icon: 'fab fa-docker', name: 'Docker' },
    { icon: 'fab fa-aws', name: 'AWS' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-database', name: 'SQL/NoSQL' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fas fa-network-wired', name: 'Networking' },
    { icon: 'fab fa-jenkins', name: 'CI/CD' },
    { icon: 'fas fa-shield-alt', name: 'Security' }
  ];

  return (
    <section id="skills" className="section">
      <div className="section-title">
        <i className="fas fa-code"></i>
        <h2>Technical Skills</h2>
      </div>
      
      <div className="skills-container">
        {skillsList.map((skill, index) => (
          <div className="skill-item" key={index}>
            <i className={skill.icon}></i>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;