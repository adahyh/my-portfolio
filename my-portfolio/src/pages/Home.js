// src/pages/Home.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    name: 'Project 1',
    description: 'My first project.',
    link: '/project1',
  },
  {
    name: 'Project 2',
    description: 'My second project.',
    // link: 'https://github.com/yourusername/project2',
  },
];

const Home = () => {
  return (
    <section id="home">
      <h2>Welcome to My Portfolio</h2>
      <p>Hi, I’m Ada, a UIUX student ଘ(੭*ˊᵕˋ)੭* ̀ˋ</p>

      <h3>Featured Projects</h3>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Home;