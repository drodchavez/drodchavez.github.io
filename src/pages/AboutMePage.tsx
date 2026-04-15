import React from 'react';
import MyStory from '../components/MyStory';
import Interests from '../components/Interests';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import styles from './AboutMePage.module.css';

const AboutMePage: React.FC = () => {
  return (
    <div className={styles.leftAlignedPage}>
      <div className="container">
        <MyStory />
        <Interests />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default AboutMePage;
