import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextBlock = styled(motion.div)`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled.p`
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <AboutContainer ref={ref}>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Hakkımda
      </Title>

      <Content
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <TextBlock variants={itemVariants}>
          <Paragraph>
            ASBÜ İngilizce Tarih bölümünden mezun oldum. Tarih alanındaki eğitimim,
            geçmiş kültürleri ve medeniyetleri derinlemesine anlamamı sağladı.
            Bu bilgi birikimi, deri el işçiliği sanatıma da yansıyarak,
            modern teknikleri geleneksel desenlerle harmanlamama olanak tanıyor.
          </Paragraph>
        </TextBlock>

        <TextBlock variants={itemVariants}>
          <Paragraph>
            Deri el işçiliği benim için sadece bir hobi değil, aynı zamanda
            bir tutku. Her bir parçayı özenle işleyerek, geçmişin izlerini
            modern tasarımlarla buluşturuyorum. Deri ürünlerimde, tarihi
            motifleri çağdaş bir yorumla ele alarak, her bir parçaya özgün
            bir karakter kazandırıyorum.
          </Paragraph>
        </TextBlock>
      </Content>
    </AboutContainer>
  );
};

export default About; 