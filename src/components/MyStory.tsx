import React from 'react';
import styles from './MyStory.module.css';
import babyPhoto from '../assets/baby_photo.jpg';

const MyStory: React.FC = () => {
  return (
    <section id="mystory" className={styles.story}>
      <div className="container">
        <h2 className="section-title">My story</h2>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p>When I was 12 years old, I remember sitting at a grand piano in a shopping mall and playing a 
              piece I had been working on.  The piano was situated in a seating area right next to an escalator, 
              and I remember as I played, a dollar bill floated </p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={babyPhoto} alt="Daniela as a baby" className={styles.photo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
