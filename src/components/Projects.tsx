import React from 'react';
import styles from './Projects.module.css';
import { ExternalLink } from 'lucide-react';
import familyCopoliImg from '../assets/the_family_copoli.jpg';
import cantosTierraImg from '../assets/cantos_de_mi_tierra.jpeg';

interface ProjectsProps {
  view?: 'grid' | 'list';
}

const Projects: React.FC<ProjectsProps> = ({ view = 'grid' }) => {
  const projectList = [
      {
      title: "Falsettos @ The Rhino",
      description: '',
      tags: ['Music Direction', 'Mainstage'],
      demo: 'https://www.therhino.org/season,
      image: null
    },
      {
      title: "Cabaret @ Throckmorton Theater",
      description: '',
      tags: ['Music Direction', 'Educational Theater'],
      demo: 'https://www.throckmortontheatre.org/theatre',
      image: null
    },
    {
      title: "Unplugged Cabaret @ Korsa Musical Theater",
      description: 'No set, no costumes, no distractions: just great musical theater, unplugged.',
      tags: ['Music Direction', 'Cabaret', 'Educational Theater'],
      demo: 'https://korsamt.org/2026-2027/',
      image: null
    },
    {
      title: "A Year with Frog and Toad @ Contra Costa Civic Theatre",
      description: "Witness a beautiful friendship through the seasons.",
      tags: ['Music Direction', 'Mainstage'],
      demo: 'https://www.ccct.org/frog-and-toad',
      image: null
    },
    {
      title: 'Cantos De Mi Tierra',
      description: 'Celebrating the richness of Latin American music in an intimate cabaret setting.',
      tags: ['Music Direction', 'Cabaret', 'Latin American Music'],
      demo: 'https://cabaretlatinocantosdemitierra.com',
      image: cantosTierraImg
    },
    {
      title: 'The Family Copoli',
      description: 'A new post-apocalyptic burlesque musical.',
      tags: ['Music Direction', 'Original Work'],
      demo: 'https://thefamilycopoli.com',
      image: familyCopoliImg
    }
  ];

  const containerClass = view === 'list' ? styles.list : styles.grid;

  return (
    <section id="projects" className={styles.projects}>
      <div className={`${styles.container} container`}>
        <h2 className="section-title">Upcoming, current, and notable projects</h2>
        <div className={containerClass}>
          {projectList.map((project, index) => (
            <div key={index} className={view === 'list' ? styles.listCard : styles.card}>
              <div 
                className={view === 'list' ? styles.listCardImage : styles.cardImage} 
                style={project.image ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 } : {}}
              ></div>
              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link} title="View Project"><ExternalLink size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
