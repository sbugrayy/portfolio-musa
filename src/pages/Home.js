import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from '../styles/Home.module.css';

const Home = () => {
  useEffect(() => {
    // Add scroll event listener for animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.homeSection}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={styles.container}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.title}>Musa Yücesan</h1>
          <h2 className={styles.subtitle}>Tarihçi & Youtuber</h2>
          <p className={styles.description}>
            Tarihin derinliklerinden günümüze uzanan hikayeleri, 
            modern bir bakış açısıyla anlatıyorum.
          </p>
        </motion.div>

        <div className={styles.animationContainer}>
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_historical-scroll.json"
            style={{ height: '300px', width: '300px' }}
          />
        </div>

        <div className={styles.scrollIndicator}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={styles.arrow}
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            style={{ cursor: 'pointer' }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home; 