import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  text-align: center;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: -10vh; // Move content up
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  color: var(--primary-color);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-color);
  margin: 0;
  max-width: 800px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
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
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HomeContainer>
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Musa Yücesan</Title>
        <Subtitle>ASBÜ Tarih (İngilizce) Mezunu & Deri El İşçiliği Sanatçısı</Subtitle>
        <ScrollButton
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <FaChevronDown />
        </ScrollButton>
      </Content>
    </HomeContainer>
  );
};

export default Home; 