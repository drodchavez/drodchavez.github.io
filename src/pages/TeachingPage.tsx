import React from 'react';
import TeachingPhilosophy from '../components/TeachingPhilosophy';

const TeachingPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <TeachingPhilosophy />
      <div className="container" style={{ paddingBottom: '100px' }}>
        <h2>Educational Experience</h2>
        <p>This space can be used for more detailed pedagogical insights, student testimonials, or teaching background.</p>
      </div>
    </div>
  );
};

export default TeachingPage;
