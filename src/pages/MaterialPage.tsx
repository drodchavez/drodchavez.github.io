import React from 'react';
import AdditionalMaterial from '../components/AdditionalMaterial';

const MaterialPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <AdditionalMaterial />
      <div className="container" style={{ paddingBottom: '100px' }}>
        <h2>Archived Resources</h2>
        <p>A place for older publications, presentations, or various resources that need their own dedicated page.</p>
      </div>
    </div>
  );
};

export default MaterialPage;
