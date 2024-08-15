
import React from 'react';
import './techstack.css';
import js from '../Images/icons/javascript.svg';
import java from '../Images/icons/java.svg';
import azure from '../Images/icons/azure.svg';
import bootstrap from '../Images/icons/bootstrap.svg';
import firebase from '../Images/icons/firebase.svg';
import github from '../Images/icons/github.svg';
import mysql from '../Images/icons/mysql.svg';
import react from '../Images/icons/react.svg';
import spring from '../Images/icons/spring.svg';
import typescript from '../Images/icons/typescript.svg';
import docker from '../Images/icons/docker.svg';
import html from '../Images/icons/html.svg';
import css from '../Images/icons/css.svg';
import tailwind from '../Images/icons/tailwind.svg';

const techStack = [
  { name: 'JavaScript', imgSrc: js, alt: 'JavaScript' },
  { name: 'Java', imgSrc: java, alt: 'Java' },
  { name: 'Azure', imgSrc: azure, alt: 'Azure' },
  { name: 'Bootstrap', imgSrc: bootstrap, alt: 'Bootstrap' },  
  { name: 'Firebase', imgSrc: firebase, alt: 'Firebase' },
  { name: 'Github', imgSrc: github, alt: 'Github' }, 
  { name: 'MySQL', imgSrc: mysql, alt: 'MySQL' }, 
  { name: 'React', imgSrc: react, alt: 'React' },
  { name: 'Spring', imgSrc: spring, alt: 'Spring' },
  { name: 'TypeScript', imgSrc: typescript, alt: 'TypeScript' },
  { name: 'Docker', imgSrc: docker, alt: 'Docker' },
  { name: 'HTML', imgSrc: html, alt: 'HTML' },
  { name: 'CSS', imgSrc: css, alt: 'CSS' },
  { name: 'Tailwind', imgSrc: tailwind, alt: 'Tailwind' },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h1>My Tech Stack</h1>
      <p>Here are some of the technologies I've worked with:</p>
      <div className="tech-stack-container">
        <div className="tech-stack-wrapper">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <img src={tech.imgSrc} alt={tech.alt} className="tech-icon" />
            </div>
          ))}
          {techStack.map((tech, index) => (
            <div key={index + techStack.length} className="tech-item">
              <img src={tech.imgSrc} alt={tech.alt} className="tech-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;