import React from 'react';
import './nav.css';
import portrait from '../Images/philip.jpg';

function Nav() {
  return (
    <div className="nav">
      <a href='#description' className="nav-link">
        <img src={portrait} alt="Philip" className="nav-image" />
        <span className="nav-text">Philip</span>
      </a>
    </div>
  );
}

export default Nav;
