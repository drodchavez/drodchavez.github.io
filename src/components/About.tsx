import React from 'react';
import styles from './About.module.css';
import headshot from '../assets/headshot.jpeg';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={`${styles.container} container`}>
        <div className={styles.imageWrapper}>
          <img src={headshot} alt="Daniela" className={styles.profileImage} />
        </div>
        <div className={styles.content}>
          <h2 className="section-title">About me</h2>
          <p className={styles.text}>
            Hello! I'm Daniela, a classically-trained freelance music director, orchestrator, composer, 
            accompanist, and teacher based in Oakland, CA. I have worked with theater 
            companies including Berkeley Playhouse, Contra Costa Civic Theatre, TMC Arts, and Chanticleer's Theater. 
            I also performed at both the Edinburgh Fringe and Hollywood Fringe Festival, music directing and piano conducting original musicals, 
            and am the co-music director and pianist of Cantos de Mi Tierra, a group dedicated to sharing Latin American music.
          </p>
          <p className={styles.text}>
            Outside of music, I conduct mathematical research related to mosquito-borne diseases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
