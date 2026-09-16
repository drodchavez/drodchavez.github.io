import React from 'react';
import styles from './Home.module.css';
import Headshot from '../assets/headshot.jpg';   

const Home: React.FC = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.visual}>
            <div className={styles.logoContainer}>
              <img src={Headshot} alt="Daniela headshot" className={styles.photo} /> 
            </div>
          </div>
          <p className={styles.subtitle}>
            Creating music rooted in curiosity and joy.
          </p>
          <div className={styles.actions}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#about" className={styles.secondaryBtn}>More About Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
