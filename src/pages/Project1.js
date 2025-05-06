import React from 'react';
import p1Image from '../assets/images/p1header.png';

const Project1 = () => {
  return (
    <section>
      <div className="margin-text">
        <div className="project-page-image-container">
        <img
          src={p1Image}
          alt="project 1"
          className="project-page-image"
          // style={{width: '100%', maxWidth:'600px'}}
        />
        </div>
        <h2>Scaling Screens</h2>
        <h3>Overview</h3>
        <p>On this project, I practiced working with constraints through 
          creating related applications on three different screen sizes: 
          an inch scale, foot scale, and yard scale. Through this project,
          I learned how to prioritize and reduce information in order to make 
          the most out of the screen space I was given. </p>
        <p>My user scenarios centered around ordering and waiting for an 
          all you can eat sushi restaurant.
        </p>
      </div>
      
      
    </section>
  );
};

export default Project1;
