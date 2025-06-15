import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from '../styles/Portfolio.module.css';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Osmanlı Tarihi Serisi",
      type: "youtube",
      thumbnail: "https://i.ytimg.com/vi/example1/maxresdefault.jpg",
      description: "Osmanlı İmparatorluğu'nun kuruluşundan yıkılışına uzanan kapsamlı video serisi",
      link: "https://youtube.com/playlist?list=example1"
    },
    {
      id: 2,
      title: "Tarihsel Makaleler",
      type: "article",
      thumbnail: "https://example.com/article1.jpg",
      description: "Çeşitli tarih dergilerinde yayınlanan akademik makaleler",
      link: "https://example.com/articles"
    },
    {
      id: 3,
      title: "Belgesel Projesi",
      type: "documentary",
      thumbnail: "https://example.com/doc1.jpg",
      description: "Tarihi mekanlar ve olaylar üzerine hazırlanan belgesel çalışması",
      link: "https://example.com/documentary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2>Portföy</h2>
          <p className={styles.subtitle}>Projeler ve Çalışmalar</p>
        </motion.div>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.projectThumbnail}>
                <img src={project.thumbnail} alt={project.title} />
                <div className={styles.projectType}>
                  {project.type === 'youtube' ? '🎥' :
                   project.type === 'article' ? '📝' : '🎬'}
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.projectModal}
            onClick={() => setSelectedProject(null)}
          >
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Projeyi Görüntüle
              </a>
            </div>
          </motion.div>
        )}

        <div className={styles.animationContainer}>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_portfolio-showcase.json"
            style={{ height: '200px', width: '200px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 