import React from 'react';
import styles from './Interests.module.css';
import tintypesPhoto from '../assets/tintypes.jpeg';

const Interests: React.FC = () => {
  return (
    <section id="interests" className={styles.interests}>
      <div className="container">
        <h2 className="section-title">Expertise</h2>
        <div className={styles.layout}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Musical direction</h3>
              <p>Collaborating with theaters to bring musicals to life. Daniela serve as audition pianist, 
                rehearsal pianist, vocal director, band director, and keyboard-conductor. She can also re-arrange and re-program 
                the music upon request to fit the needs of the production.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Educational theater</h3>
              <p>Working with pre-professional actors as a teaching artist. Daniela believes that great actors are not born, 
                but cultivated through training and experience. She has worked with students of all ages, from elementary school to undergraduates,
                and has a passion for helping young performers develop their skills and confidence on the musical stage.            
              </p>
            </div>
            <div className={styles.card}>
              <h3>Teaching</h3>
              <p>Helping students unlock and reach their piano and vocal potential. Daniela is an enthusiastic piano teacher
                and vocal coach. She believes that everyone has the ability to express themselves through music and tailors her teaching approach
                to each student's individual needs and goals. 
              </p>
            </div>
            <div className={styles.card}>
              <h3>Original works</h3>
              <p>Composing and arranging new music that pushes the boundaries of storytelling. Daniela deeply enjoys being part of original work. 
                She has music directed, translated, and arranged music for new works and is also currently working on her own original projects. 
              </p>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img src={tintypesPhoto} alt="Daniela conducting Tintypes" className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
