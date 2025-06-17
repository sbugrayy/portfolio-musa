import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHistory, FaBook, FaLanguage, FaTools, FaPalette } from 'react-icons/fa';

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: var(--text-color);
  margin: 0;
`;

const SkillDescription = styled.p`
  color: var(--text-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 4px;
`;

const skills = [
  {
    name: 'Tarih Araştırması',
    icon: <FaHistory />,
    level: 90,
    description: 'Geçmiş medeniyetleri ve kültürleri derinlemesine analiz etme ve araştırma yeteneği.'
  },
  {
    name: 'Akademik Yazım',
    icon: <FaBook />,
    level: 85,
    description: 'Akademik makaleler ve araştırma yazıları hazırlama konusunda uzmanlık.'
  },
  {
    name: 'İngilizce',
    icon: <FaLanguage />,
    level: 95,
    description: 'İleri düzey İngilizce yazma, okuma ve konuşma becerileri.'
  },
  {
    name: 'Deri İşleme',
    icon: <FaTools />,
    level: 88,
    description: 'Geleneksel ve modern deri işleme tekniklerinde uzmanlık.'
  },
  {
    name: 'Tasarım',
    icon: <FaPalette />,
    level: 82,
    description: 'Tarihi motifleri modern tasarımlarla harmanlama yeteneği.'
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <SkillsContainer ref={ref}>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Yeteneklerim
      </Title>

      <SkillsGrid
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} variants={itemVariants}>
            <SkillHeader>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillHeader>
            <SkillDescription>{skill.description}</SkillDescription>
            <ProgressBar>
              <Progress
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
              />
            </ProgressBar>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills; 