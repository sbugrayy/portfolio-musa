import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import SplitText from './SplitText';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 50%, var(--primary-color) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--accent-color) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, var(--secondary-color) 0%, transparent 50%);
  opacity: 0.1;
  animation: float 20s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(1deg); }
  }
`;

const HistoricalElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const AncientSymbol = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  color: var(--text-color);
  opacity: 0.1;
  font-family: 'Times New Roman', serif;
  
  &:nth-child(1) {
    top: 10%;
    left: 10%;
    transform: rotate(-15deg);
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 15%;
    transform: rotate(25deg);
  }
  
  &:nth-child(3) {
    bottom: 30%;
    left: 20%;
    transform: rotate(-30deg);
  }
  
  &:nth-child(4) {
    bottom: 15%;
    right: 25%;
    transform: rotate(45deg);
  }
  
  &:nth-child(5) {
    top: 50%;
    left: 5%;
    transform: rotate(-60deg);
  }
  
  &:nth-child(6) {
    top: 60%;
    right: 10%;
    transform: rotate(75deg);
  }
`;

const LoadingContent = styled.div`
  text-align: center;
  z-index: 10;
  position: relative;
  
  .loading-title {
    font-size: 4rem;
    color: var(--primary-color);
    margin: 0;
    font-weight: 300;
    letter-spacing: 0.1em;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .split-char {
    display: inline-block;
    transform-origin: center bottom;
  }
`;


const LoadingSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.8;
  margin: 1rem 0 0 0;
  font-style: italic;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 2px;
  background: var(--text-color);
  opacity: 0.2;
  border-radius: 1px;
  margin: 2rem auto 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--secondary-color));
  border-radius: 1px;
`;

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // İçeriği gecikmeyle göster
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    // Progress bar animasyonu
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearTimeout(contentTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  const ancientSymbols = ['⚱️', '🏛️', '📜', '⚔️', '🏺', '🗿'];

  return (
    <LoadingContainer>
      <BackgroundPattern />
      
      <HistoricalElements>
        {ancientSymbols.map((symbol, index) => (
          <AncientSymbol
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ 
              delay: index * 0.3, 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
          >
            {symbol}
          </AncientSymbol>
        ))}
      </HistoricalElements>

      {showContent && (
        <LoadingContent>
          <SplitText
            text="Musa Yücesan"
            tag="h1"
            className="loading-title"
            delay={100}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 100, rotationX: 180 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
          />
          
          <LoadingSubtitle
            as={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Tarih & Sanat Dünyasına Hoş Geldiniz
          </LoadingSubtitle>

          <ProgressBar>
            <ProgressFill
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </ProgressBar>
        </LoadingContent>
      )}
    </LoadingContainer>
  );
};

export default LoadingScreen;
