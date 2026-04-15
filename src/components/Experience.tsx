import React from 'react';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>So you want to know what I've done?</h2>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Preview CV</a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
