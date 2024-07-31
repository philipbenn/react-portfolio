import React from 'react';
import './PersonalDescription.css';
import '../util/font.css';

function PersonalDescription() {
  return (
    <section id="description" className="description">
      <div className="text-left">
        <h1>Hello I'm Philip and I enjoy developing & designing frontend products</h1>
        <h2>Frontend, UI/UX Developer</h2>
      </div>
      <div className="text-right">
        <h4>I'm a computer science student starting off my fifth semester, and I'm really into web development. I focus on frontend and UI/UX, and I love creating smooth, user-friendly experiences with my designs.</h4>
      </div>
    </section>
  );
}

export default PersonalDescription;
