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
            <p>Test. This is where you can share your journey, from your musical training to your current career. You can talk about your inspirations, challenges, and the milestones that have shaped you as an artist and educator.</p>
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
