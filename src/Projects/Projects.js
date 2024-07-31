import Modal from 'react-modal';
import './Projects.css';
import bildash from '../Images/bildash.png';
import biltable from '../Images/biltable.png';
import biomovies from '../Images/biomovies.png';
import bioseat from '../Images/bioseat.png';
import stacontact from '../Images/stacontact.png';
import staindex from '../Images/staindex.png';
import statype from '../Images/statype.png';
import blombilview from '../Images/blombilview.png';
import blomlogin from '../Images/blomlogin.png';
import pacman from '../Images/pacman-dsa.png';
import zelda from '../Images/gridzelda.png';
import stockpredictor from '../Images/StockPredictor.png';

const projectData = [
  {
    title: 'Bil Abo',
    description: 'Bil Abonnement, another project from our 2nd semester, was centered around subscription-based car services.',
    link: 'https://github.com/philipbenn/BilAbonnement',
    images: [bildash, biltable],
    skills: ['Java', 'Spring Boot', 'MySQL']
  },
  {
    title: 'Kino XP',
    description: 'Kino XP was a cinema project undertaken during our 3rd semester, creating a platform for managing cinema operations.',
    link: 'https://github.com/Scrumbledore-s-Army/Kino-Project-Frontend-app',
    images: [biomovies, bioseat],
    skills: ['Java', 'JavaScript', 'MySQL']
  },
  {
    title: 'STA',
    description: 'Scandinavian Training Academy project, involved implementing a comprehensive training platform for a real customer.',
    link: 'https://github.com/Scrumbledore-s-Army/STA-Project-Backend-Web',
    images: [stacontact, staindex, statype],
    skills: ['Java', 'Spring Boot', 'JavaScript', 'MySQL']
  },
  {
    title: 'Blom Biler',
    description: 'Blom Biler focused on car dealership management systems, enhancing customer experience within the automotive industry.',
    link: 'https://github.com/philipbenn/BlomBiler',
    images: [blombilview, blomlogin],
    skills: ['Java', 'Spring Boot', 'MySQL']
  },
  {
    title: 'Pacman',
    description: 'Pacman was my exam project for a datastructures and algorithms course, involving implementation of pathfinding algorithms.',
    link: 'https://github.com/philipbenn/Pacman',
    images: [pacman],
    skills: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Zelda',
    description: 'Zelda, a 2D grid-based game project from my datastructures and algorithms course.',
    link: 'https://github.com/philipbenn/GridZelda',
    images: [zelda],
    skills: ['JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Stock Predictor',
    description: 'Stock Predictor aimed to predict the S&P 500 index based on historical data.',
    link: 'https://github.com/philipbenn/StockPredictor',
    images: [stockpredictor],
    skills: ['Python', 'Machine Learning', 'Pandas', 'Numpy']
  }
];

Modal.setAppElement('#root');

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <ul className="project-list">
        {projectData.map((project, index) => (
          <li key={index} className="project-item" data-aos="fade-up">
            <h2>{project.title}</h2>
            <img
              src={project.images[0]}
              alt={`${project.title} thumbnail`}
              className="project-thumbnail"
            />
            <div className="skills-container">
              {project.skills.map((skill, idx) => (
                <span key={idx} className="skill-box">{skill}</span>
              ))}
            </div>
            <div className="preview-container">
              <h3 className="preview-title">{project.title}</h3>
              <p className="preview-description">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-link"
                >
                  Visit Project
                </a>
              )}
              {project.images.slice(0, 3).map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${project.title} preview ${idx + 1}`}
                  className="preview-image"
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
