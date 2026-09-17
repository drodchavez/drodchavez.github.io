import React from 'react';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className={styles.header}>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Relevant Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
