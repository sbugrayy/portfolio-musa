import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHistory, FaPenFancy, FaLanguage, FaPalette, FaTools } from 'react-icons/fa';

const WhatIDoContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 3rem;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all var(--transition-speed) ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 1.8rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const services = [
  {
    icon: <FaHistory />,
    title: 'Tarih Araştırması',
    description: 'Geçmiş uygarlıklar ve kültürler üzerine detaylı araştırma ve analiz çalışmaları.'
  },
  {
    icon: <FaPenFancy />,
    title: 'Akademik Yazım',
    description: 'Akademik makale ve araştırma yazıları hazırlama konusunda uzmanlık.'
  },
  {
    icon: <FaLanguage />,
    title: 'İngilizce',
    description: 'İleri düzey İngilizce yazma, okuma ve konuşma becerileri.'
  },
  {
    icon: <FaPalette />,
    title: 'Tasarım',
    description: 'Tarihi motifleri modern tasarımlarla harmanlama yeteneği.'
  },
  {
    icon: <FaTools />,
    title: 'Deri İşleme',
    description: 'Geleneksel ve modern deri işleme tekniklerinde uzmanlık.'
  }
];

const WhatIDo = () => {
  return (
    <WhatIDoContainer id="what-i-do">
      <Title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Neler Yapabilirim?
      </Title>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </WhatIDoContainer>
  );
};

export default WhatIDo; 