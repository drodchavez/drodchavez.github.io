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
              <p>Collaborating with theaters and ensembles to bring musical scores to life.</p>
            </div>
            <div className={styles.card}>
              <h3>Educational theater</h3>
              <p>Directing and music directing productions designed for young performers and communities.</p>
            </div>
            <div className={styles.card}>
              <h3>Teaching</h3>
              <p>Fostering the next generation of artists through inclusive and joy-based instruction.</p>
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
