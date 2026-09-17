import React from 'react';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

const ProjectsPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Projects view="list" />
      <Experience />
    </div>
  );
};

export default ProjectsPage;
