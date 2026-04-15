import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import TeachingPhilosophy from '../components/TeachingPhilosophy';

const HomePage: React.FC = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <TeachingPhilosophy />
    </>
  );
};

export default HomePage;
