import React from 'react';
import styles from './About.module.css';
import babyPhoto from '../assets/baby_photo.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} container`}>
        <div className={styles.imageWrapper}>
          <img src={babyPhoto} alt="Daniela baby photo" className={styles.profileImage} />
        </div>
        <div className={styles.content}>
          <h2 className="section-title">About</h2>
          <p className={styles.text}>
            Daniela is a classically-trained pianist and freelance music director, orchestrator, composer, 
            accompanist, and teacher based in Oakland, CA. She has worked with theater 
            companies including Berkeley Playhouse, Theatre Rhinoceros, Korsa Musical Theater, Throckmorton Theatre, 
            Contra Costa Civic Theatre, TMC Arts, and Chanticleer's Theater. 
            She also performed at both the Edinburgh Fringe and Hollywood Fringe Festival, music directing and piano conducting original musicals, 
            and is the co-music director and pianist of Cantos de Mi Tierra, a group dedicated to sharing Latin American music around the Bay Area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
