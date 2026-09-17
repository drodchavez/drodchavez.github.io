import React from 'react';
import About from '../components/About';
import Interests from '../components/Interests';
import styles from './AboutMePage.module.css';

const AboutMePage: React.FC = () => {
  return (
    <div className={styles.leftAlignedPage}>
      <div className="container">
        <About />
        <Interests />
      </div>
    </div>
  );
};

export default AboutMePage;
