import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Projects view="list" />
      <div className="container" style={{ paddingBottom: '100px' }}>
        <h2>More Projects</h2>
        <p>You can add more detailed project information or additional projects here.</p>
      </div>
    </div>
  );
};

export default ProjectsPage;
