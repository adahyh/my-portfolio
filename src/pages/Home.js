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
    link: '/project2',
  },
];


const Home = () => {
  return (
    <section id="home">
      <div className="banner">
        <h1>Hi, I’m Ada, a UIUX student ଘ(੭*ˊᵕˋ)੭* ̀ˋ</h1>
        <p>Welcome to my portfolio!</p>
      </div>

      <div className="margin-text">
      <h3>Featured Projects</h3>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Home;