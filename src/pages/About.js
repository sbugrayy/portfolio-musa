import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from '../styles/About.module.css';

const About = () => {
  const timelineData = [
    {
      year: "2023",
      title: "YouTube Kanalı",
      description: "Tarih içerikli YouTube kanalının kuruluşu ve içerik üretimi"
    },
    {
      year: "2022",
      title: "Tarih Bölümü Mezuniyeti",
      description: "Üniversite eğitiminin tamamlanması"
    },
    {
      year: "2021",
      title: "İlk Araştırma Projesi",
      description: "Tarih alanında ilk akademik araştırma projesi"
    }
  ];

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2>Hakkımda</h2>
          <p className={styles.subtitle}>Tarihçi & İçerik Üreticisi</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.profile}
          >
            <div className={styles.imageContainer}>
              <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_historical-portrait.json"
                style={{ height: '300px', width: '300px' }}
              />
            </div>
            <div className={styles.bio}>
              <p>
                Tarih bölümü mezunu olarak, geçmişin derinliklerinden günümüze uzanan hikayeleri
                modern bir bakış açısıyla anlatıyorum. YouTube kanalımda tarihi olayları,
                kişileri ve dönemleri interaktif bir şekilde ele alıyorum.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.timeline}
          >
            <h3>Kronolojik Akış</h3>
            <div className={styles.timelineContainer}>
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={styles.timelineItem}
                >
                  <div className={styles.year}>{item.year}</div>
                  <div className={styles.timelineContent}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 