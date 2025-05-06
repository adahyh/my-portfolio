// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.image && (
          <div className="project-card-image-container">
          <img
            src={project.image}
            alt={project.name}
            className="project-card-image"
            // style={{ width: '100%', MaxHeight: '600px', borderRadius: '8px' }}
          />
          </div>
      )}
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <Link to={project.link}>Learn more!</Link>

      </div>
    </div>
  );
};

export default ProjectCard;


