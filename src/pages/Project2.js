import React from 'react';
import p1Image from '../assets/images/p2header.png';


const Project2 = () => {
  return (
    <section>
      <div className="margin-text">
        <div className="project-page-image-container">
        <img
          src={p1Image}
          alt="project 2"
          className="project-page-image"
          // style={{width: '100%', maxWidth:'600px'}}
        />
        </div>
        <h2>All Design is Redesign</h2>
        <h3>Overview</h3>
        <p>On this project, I practiced redesigning by refining the 
          "add to playlist" feature on Spotify. By offering different options 
          such as suggested songs based on liked or recently played songs, 
          I aimed to reduce the cognitive load on users who previously had to 
          type out the song names from memory. I also experimented with a 
          quiz that could lead to personalized results and an interactive experience 
          that aligns with Spotify's branding and other features.</p>
      </div>
      
      
    </section>
  );
};

export default Project2;
