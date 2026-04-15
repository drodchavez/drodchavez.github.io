import React from 'react';
import styles from './TeachingPhilosophy.module.css';
import { Lightbulb, Users, Target } from 'lucide-react';

const TeachingPhilosophy: React.FC = () => {
  const pillars = [
    {
      icon: <Lightbulb size={32} />,
      title: 'Inquiry-Based Learning',
      description: 'Encouraging students to ask questions and explore concepts through hands-on experimentation.'
    },
    {
      icon: <Users size={32} />,
      title: 'Inclusive Environment',
      description: 'Creating a safe and welcoming space where every voice is heard and valued.'
    },
    {
      icon: <Target size={32} />,
      title: 'Outcome-Driven',
      description: 'Focusing on clear goals and practical applications of knowledge in the real world.'
    }
  ];

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
              I have been a music and voice educator since 2019 and have worked at PALAKA Music and am 
              currently an instructor at the Magnolia Music School. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingPhilosophy;
