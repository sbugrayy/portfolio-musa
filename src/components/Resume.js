import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const ResumeContainer = styled.section`
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

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ResumeSection = styled.div`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  position: relative;
  padding-left: 1rem;
  display: inline-block;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 25px;
    background-color: var(--primary-color);
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-top: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--primary-color);
    opacity: 0.3;
  }

  @media (min-width: 992px) {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 992px) {
    width: 45%;
    margin-left: ${props => props.align === 'right' ? 'auto' : '0'};
    margin-right: ${props => props.align === 'left' ? 'auto' : '0'};
    padding: 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 1.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 2px solid var(--background-color);
    z-index: 1;

    @media (min-width: 992px) {
      left: ${props => props.align === 'right' ? '-0.5rem' : 'auto'};
      right: ${props => props.align === 'right' ? 'auto' : '-0.5rem'};
    }
  }
`;

const TimelineDate = styled.span`
  display: inline-block;
  padding: 0.25rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TimelineSubtitle = styled.h5`
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  color: var(--text-color);
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 auto;
  transition: all var(--transition-speed) ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff8c5a;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const education = [
  {
    date: '2018 - 2022',
    title: 'ASBÜ İngilizce Tarih',
    subtitle: 'Ankara Sosyal Bilimler Üniversitesi',
    description: 'Tarih alanında lisans eğitimi, İngilizce dilinde.'
  }
];

const experience = [
  {
    date: '2022 - Günümüz',
    title: 'Deri El İşçiliği Sanatçısı',
    subtitle: 'Serbest Çalışan',
    description: 'Geleneksel ve modern deri işleme teknikleri ile özel tasarım ürünler üretimi.'
  },
  {
    date: '2021 - 2022',
    title: 'Tubitak',
    subtitle: 'Akademik Araştırma',
    description: 'Tarih alanında akademik araştırma ve yayın çalışmaları.'
  }
];

const Resume = () => {
  const handleDownload = () => {
    // PDF dosyasının yolu
    const pdfUrl = '/cv.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Musa_Yucesan_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ResumeContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Özgeçmişim
      </Title>

      <ResumeGrid>
        <ResumeSection>
          <SectionTitle>Eğitimim</SectionTitle>
          <Timeline>
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                align={index % 2 === 0 ? 'left' : 'right'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineItem>
            ))}
          </Timeline>
        </ResumeSection>

        <ResumeSection>
          <SectionTitle>Deneyimim</SectionTitle>
          <Timeline>
            {experience.map((item, index) => (
              <TimelineItem
                key={index}
                align={index % 2 === 0 ? 'left' : 'right'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineItem>
            ))}
          </Timeline>
        </ResumeSection>
      </ResumeGrid>

      <ButtonContainer>
        <DownloadButton
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          CV'yi İndir
        </DownloadButton>
      </ButtonContainer>
    </ResumeContainer>
  );
};

export default Resume; 