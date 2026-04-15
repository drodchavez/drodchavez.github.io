import React from 'react';
import styles from './AdditionalMaterial.module.css';
import { FileText, Play, Download } from 'lucide-react';

const AdditionalMaterial: React.FC = () => {
  const materials = [
    {
      type: 'Publication',
      title: 'Modern Pedagogy in Technical Education',
      description: 'A study on the impact of interactive tools in online technical learning.',
      icon: <FileText size={24} />,
      link: '#'
    },
    {
      type: 'Presentation',
      title: 'Workshop: Inclusive Coding Practices',
      description: 'Slides and resources from my workshop at the EdTech Conference.',
      icon: <Play size={24} />,
      link: '#'
    },
    {
      type: 'Resource',
      title: 'Teaching Toolkit for Beginners',
      description: 'A curated list of tools and resources for new educators.',
      icon: <Download size={24} />,
      link: '#'
    }
  ];

  return (
    <section id="additional" className={styles.additional}>
      <div className={`${styles.container} container`}>
        <h2 className="section-title">Additional material</h2>
        <div className={styles.grid}>
          {materials.map((material, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrapper}>{material.icon}</div>
              <div className={styles.content}>
                <span className={styles.type}>{material.type}</span>
                <h3 className={styles.materialTitle}>{material.title}</h3>
                <p className={styles.materialDescription}>{material.description}</p>
                <a href={material.link} className={styles.downloadLink}>
                  View Material
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalMaterial;
