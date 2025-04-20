import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img src={project.image} alt={project.title} className="project-img" />
      </div>
      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span className="tech-tag" key={index}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {project.demoLink && (
          <a href={project.demoLink} className="project-link demo" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i> Demo
          </a>
        )}
        {project.sourceLink && (
          <a href={project.sourceLink} className="project-link code" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code"></i> Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

