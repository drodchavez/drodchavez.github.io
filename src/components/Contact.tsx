import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title" style={{ marginBottom: 0, textAlign: 'left' }}>Contact me</h2>
          <a href="mailto:your.email@example.com" className="btn btn-primary">Send an Email</a>
        </div>
        <div className={styles.content}>
          <p>If you're interested in collaborating on a musical project, exploring educational materials, or just want to connect, feel free to reach out. I'm always excited to hear from fellow artists and educators.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
