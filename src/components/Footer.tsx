import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const lastUpdated = "April 7, 2026"; // Today's date from context

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <p>&copy; {new Date().getFullYear()} Daniela Rodriguez-Chavez. All rights reserved.</p>
        <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>
      </div>
    </footer>
  );
};

export default Footer;
