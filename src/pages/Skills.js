import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const skillsData = {
    history: [
      {
        title: "Tarihsel Araştırma",
        description: "Arşiv taraması, kaynak analizi ve tarihsel veri değerlendirme",
        icon: "📚"
      },
      {
        title: "Osmanlıca",
        description: "Osmanlı Türkçesi metinlerini okuma ve anlama",
        icon: "📜"
      },
      {
        title: "Tarih Yazımı",
        description: "Akademik ve popüler tarih yazımı",
        icon: "✍️"
      }
    ],
    digital: [
      {
        title: "Video Düzenleme",
        description: "YouTube içerikleri için video prodüksiyon ve düzenleme",
        icon: "🎥"
      },
      {
        title: "İçerik Üretimi",
        description: "Tarih temalı dijital içerik üretimi",
        icon: "🎨"
      },
      {
        title: "Sosyal Medya",
        description: "Platformlar arası içerik yönetimi ve etkileşim",
        icon: "📱"
      }
    ],
    soft: [
      {
        title: "İletişim",
        description: "Etkili sunum ve anlatım becerileri",
        icon: "🗣️"
      },
      {
        title: "Problem Çözme",
        description: "Analitik düşünme ve çözüm üretme",
        icon: "💡"
      },
      {
        title: "Yaratıcılık",
        description: "Yenilikçi içerik üretimi ve sunum",
        icon: "✨"
      }
    ]
  };

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
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2>Yetenekler</h2>
          <p className={styles.subtitle}>Uzmanlık Alanları ve Beceriler</p>
        </motion.div>

        <div className={styles.skillsContainer}>
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div
              key={category}
              className={styles.skillCategory}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.categoryTitle}>
                {category === 'history' ? 'Tarihsel Yetenekler' :
                 category === 'digital' ? 'Dijital Yetenekler' :
                 'Kişisel Yetenekler'}
              </h3>
              <motion.div
                className={styles.skillsGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className={styles.skillCard}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={styles.skillIcon}>{skill.icon}</div>
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className={styles.animationContainer}>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_skills-development.json"
            style={{ height: '200px', width: '200px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills; 