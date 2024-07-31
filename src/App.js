import React, { useEffect } from 'react';
import './App.css';
import './Nav/nav';
import Navbar from './Navbar/Navbar';
import PersonalDescription from './PersonalDescription/PersonalDescription';
import CV from './CV/CV';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Nav from './Nav/nav';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BottomBar from './BottomBar/bottomBar';
import TechStack from './TechStack/techstack';
import About from './About/about';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="App">
      <Nav />
      <Navbar />
      <PersonalDescription />
      <CV />
      <TechStack />
      <About />
      <Projects />
      <Contact />
      <BottomBar />
    </div>
  );
}

export default App;
