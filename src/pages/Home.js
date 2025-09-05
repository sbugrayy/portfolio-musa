import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { useFirebase } from '../context/FirebaseContext';
import SplitText from '../components/SplitText';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/home.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.3;
    z-index: -1;
    animation: backgroundFloat 20s ease-in-out infinite;
    
    @media (max-width: 768px) {
      opacity: 0.2;
      filter: blur(0.5px);
    }
  }

  @keyframes backgroundFloat {
    0%, 100% { 
      transform: scale(1) rotate(0deg); 
    }
    50% { 
      transform: scale(1.05) rotate(0.5deg); 
    }
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: -10vh; // Move content up
`;



// SplitText için özel stiller
const SplitTextStyles = styled.div`
  .title-split {
    font-size: 3.5rem;
    color: var(--primary-color);
    margin: 0;
    font-weight: bold;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .subtitle-split {
    font-size: 1.5rem;
    color: var(--text-color);
    margin: 0;
    max-width: 800px;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  
  .split-char {
    display: inline-block;
    transform-origin: center bottom;
  }
  
  .split-word {
    display: inline-block;
    margin-right: 0.3em;
  }
`;

const ScrollButton = styled(motion.button)`
  background: none;
  border: none;
  color: var(--primary-color);
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(5px);
  }
`;

const Home = () => {
  const { data, loading } = useFirebase();
  const homeData = data?.home || {};

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTitleAnimationComplete = () => {
    console.log('Title animation completed!');
  };

  const handleSubtitleAnimationComplete = () => {
    console.log('Subtitle animation completed!');
  };

  if (loading) {
    return (
      <HomeContainer>
        <Content>
          <SplitText
            text="Musa Yücesan"
            tag="h1"
            className="title-split"
            delay={80}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50, rotationX: 90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
          />
        </Content>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <SplitTextStyles>
        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SplitText
            text={homeData.title || 'Musa Yücesan'}
            tag="h1"
            className="title-split"
            delay={80}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50, rotationX: 90 }}
            to={{ opacity: 1, y: 0, rotationX: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
            onLetterAnimationComplete={handleTitleAnimationComplete}
          />
          
          <SplitText
            text={homeData.subtitle || 'ASBÜ Tarih (İngilizce) Mezunu & Deri El İşçiliği Sanatçısı'}
            tag="p"
            className="subtitle-split"
            delay={120}
            duration={0.6}
            ease="power2.out"
            splitType="words"
            from={{ opacity: 0, y: 30, scale: 0.8 }}
            to={{ opacity: 1, y: 0, scale: 1 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="center"
            onLetterAnimationComplete={handleSubtitleAnimationComplete}
          />
          
          <ScrollButton
            onClick={scrollToAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <FaChevronDown />
          </ScrollButton>
        </Content>
      </SplitTextStyles>
    </HomeContainer>
  );
};

export default Home; 