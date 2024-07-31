import React from 'react';
import './about.css';
import profilePicture from '../Images/phil2.jpg';


function About() {
  return (
    <section className="about-me" id='about'>
      <div className="profile-pic">
        <img src={profilePicture} alt="Profile" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm Philip! I am currently studying at Copenhagen School of Design and Technology where I am pursuing a degree in Computer Science.
          I have a passion for coding and love to create innovative solutions.
        </p>
        <h3>My Skills</h3>
        <ul>
          <li>System Development</li>
          <li>Agile Software Development</li>
          <li>Web Development</li>
          <li>App Development</li>
          <li>Machine Learning</li>
          <li>Algorithms</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
