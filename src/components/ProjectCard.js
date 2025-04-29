// src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* image should go here */}
      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <Link to={project.link}>View Project</Link>

      </div>
    </div>
  );
};

export default ProjectCard;


