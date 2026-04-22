import React from 'react';
import styles from './Interests.module.css';
import tintypesPhoto from '../assets/tintypes.jpeg';

const Interests: React.FC = () => {
  return (
    <section id="interests" className={styles.interests}>
      <div className="container">
        <h2 className="section-title">What I'm interested in doing</h2>
        <div className={styles.layout}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Musical direction</h3>
              <p>Collaborating with theaters to bring musicals to life! I serve as audition pianist, 
                rehearsal pianist, vocal director, band director, and keyboard-conductor. I have a reliable 
                network of musicians and I have experience re-orchestrating and re-arranging if needed.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Educational theater</h3>
              <p>Music directing productions focused on giving youth performers a strong skillset. I greatly enjoy
                working with students to bring a musical story to 
              </p>
            </div>
            <div className={styles.card}>
              <h3>Teaching</h3>
              <p>Giving students the opportunity to express themselves through music and singing. </p>
            </div>
            <div className={styles.card}>
              <h3>Original works</h3>
              <p>Composing and arranging new music that pushes the boundaries of storytelling.</p>
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
