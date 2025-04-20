import React from 'react';
import './Projects.css';
import noteImage from '../../assets/screenshot_17042025_070826.jpg';
import typingImage from '../../assets/screenshot_20042025_180658.jpg';
import trasformerImage from '../../assets/screenshot_20042025_181121.jpg'
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Note.me',
      description: 'Note.me is a notes application that allows users to create, edit, and delete notes. It is built using Mern stack and provides a user-friendly interface for managing notes.',
      image: noteImage,
      category: 'Web',
      technologies: ['MongoDB', 'React', 'Express', 'Node.js'],
      demoLink: 'https://note-me-bqb5.onrender.com/',
      sourceLink: 'https://github.com/iamSt3el/note.me.git'
    },
    {
      id: 2,
      title: 'Transformers model to Translate English to Hindi',
      description: 'A transformer model for translating English text to Hindi, utilizing deep learning techniques for natural language processing.', 
      image: trasformerImage,
      category: 'AI/ML',
      technologies: ['Python', 'PyTorch', 'NLP'],
      demoLink: 'https://github.com/iamSt3el/Transformer-english-hindi.git',
      sourceLink: 'https://github.com/iamSt3el/Transformer-english-hindi.git'
    },
    {
      id: 3,
      title: 'Typing Game',
      description: 'Typing Game is a fun and interactive game that helps users improve their typing speed and accuracy.',
      image: typingImage,
      category: 'Game Development',
      technologies: ['C++', 'Raylib', 'Cmake'],
      demoLink: 'https://iamst3el.itch.io/typing-game',
      sourceLink: 'https://github.com/iamSt3el/typing_game.git'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-title">
        <i className="fas fa-project-diagram"></i>
        <h2>Featured Projects</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;