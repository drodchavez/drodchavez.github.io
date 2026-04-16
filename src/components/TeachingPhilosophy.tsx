import React from 'react';
import styles from './TeachingPhilosophy.module.css';

const TeachingPhilosophy: React.FC = () => {
  return (
    <section id="teaching" className={styles.teaching}>
      <div className={`${styles.container} container`}>
        <h2 className="section-title">Teaching philosophy</h2>
        
        <div className={styles.content}>
          <div className={styles.details}>
            <p>
              Music has always been a driving force of my life. For me, music is a powerful storytelling tool and 
              I prioritize teaching rooted in curiosity and joy. Whether in the theater space or one-on-one in the studio,
              my goal is to help students of all ages express themselves authentically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingPhilosophy;
