import React from 'react';
import './CV.css';

function CV() {
  return (
    <section id="cv" className="cv" data-aos="fade-up">
      <h1 data-aos="fade-up">CV</h1>
      <p data-aos="fade-up">Download my CV <a href={`${process.env.PUBLIC_URL}/CV.pdf`} target="_blank" rel="noopener noreferrer">here</a></p>
      <div className="cv-content" data-aos="fade-up">
        <div className="cv-coding" data-aos="fade-right">
          <h2>Work Experience</h2>
          <ul>
            <li>Coop Kvickly Hvidovre - 02/08-2016 - 31/05-2019</li>
            <li>7 Eleven Hvidovre - 01/09-2020 - 31/08-2022</li>
            <li>Jagger København 01/09-2022 - TDD</li>
            <li>Fellowmind Internship (Frontend) 26/08-2024 - 01/11-2024</li>
          </ul>
        </div>
        <div className="cv-other" data-aos="fade-left">
          <h2>School Experience</h2>
          <ul>
            <li>Hanssted Skole - 2007-2017</li>
            <li>Rødovre Gymnasium - 2017-2020</li>
            <li>Københavns Erhvervs Akademi (Computer Science) - 2022-2025</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CV;
