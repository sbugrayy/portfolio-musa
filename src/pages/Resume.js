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

const ResumeList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ResumeSection = styled.div`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  [data-theme='dark'] & {
    background-color: var(--background-color);
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: left;
`;

const ItemBox = styled(motion.div)` 
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  text-align: left;
  [data-theme='dark'] & {
    background-color: var(--card-bg);
  }
`;

const ItemDate = styled.span`
  display: inline-block;
  padding: 0.25rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ItemTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ItemSubtitle = styled.h5`
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ItemDescription = styled.p`
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
  cursor: pointer;

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
    date: '2019 - 2025',
    title: 'ASBÜ İngilizce Tarih Bölümü Mezunu'
  },
  {
    date: '2024 - 2025',
    title: 'Öğretmenlik Formasyonu'
  },
  {
    date: '2023',
    title: 'Diksiyon Kursu',
    subtitle: 'ASBÜ TÖMER'
  }
];

const experience = [
  {
    date: '2014 - Halen',
    title: 'Youtube Kanalı Video Üreticiliği'
  },
  {
    date: '2022 - 2024',
    title: 'ASBÜ Tarih Topluluğu Başkanlığı'
  },
  {
    date: '2023',
    title: 'Türkiye Ulusal Ajansı: Erasmus+ Projesi',
    description: '“Geleceğin Yolu: Gençlerin Gözünden Gönüllülük”\n' +
        ' projesi kapsamında 8-12 Mayıs 2023 tarihleri\n' +
        ' arasında Ankara’da gerçekleştirilen İç Anadolu\n' +
        ' Bölge Çlaıştayına katıldım.'
  },
  {
    date: '2024',
    title: 'TUBİTAK',
    description: ' 25-30 Haziran 2024 tarihinde, 28. Junior Balkan\n' +
        ' Olimpiyatları kapsamında Suudi Arabistan’dan\n' +
        ' gelen heyete rehberlik yaptım.'
  },
  {
    date: '2025',
    title: 'ASBÜ Dericilik Kursu'
  }
];

const Resume = () => {
  const handleDownload = () => {
    // PDF dosyasının yolu
    const pdfUrl = '/Musa_Yucesan_CV.pdf';
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
      <ResumeList>
        <ResumeSection>
          <SectionTitle>Eğitimim</SectionTitle>
          {education.map((item, index) => (
            <ItemBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ItemDate>{item.date}</ItemDate>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>{item.subtitle}</ItemSubtitle>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemBox>
          ))}
        </ResumeSection>
        <ResumeSection>
          <SectionTitle>Deneyimim</SectionTitle>
          {experience.map((item, index) => (
            <ItemBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ItemDate>{item.date}</ItemDate>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>{item.subtitle}</ItemSubtitle>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemBox>
          ))}
        </ResumeSection>
      </ResumeList>
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