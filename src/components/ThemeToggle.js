import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'light' ? (
        <>
          <span>🌙</span>
          <span>Koyu Tema</span>
        </>
      ) : (
        <>
          <span>☀️</span>
          <span>Açık Tema</span>
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggle; 