// src/pages/Home.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import p1Image from '../assets/images/p1header.png';
import p2Image from '../assets/images/p2header.png';



const projects = [
  {
    name: 'Scaling Screens',
    description: 'Working with different sized screens for related interfaces',
    link: '/project1',
    image: p1Image
  },
  {
    name: 'All Design is Redesign',
    description: 'Redesigning Spotify playlist features and creating an interactive quiz',
    link: '/project2',
    image: p2Image
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