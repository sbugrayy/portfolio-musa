import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useFirebase } from '../context/FirebaseContext';

const AboutContainer = styled.div`
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

const Content = styled(motion.div)`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const TextBlock = styled(motion.div)`
  flex: 1;
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 0;
  max-width: 100%;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
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
  const { data, loading } = useFirebase();
  const aboutData = data?.about || {};
  
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
            {aboutData.text1 || `ASBÜ Tarih (İngilizce) bölümünden mezun oldum.
            Ben, entelektüel tarih ve modernleşme süreçleri üzerine yoğunlaşan bir araştırmacı adayıyım.
            Akademik ilgim özellikle Osmanlı-Türkiye modernleşmesi, 17. ve 18. yüzyıl Osmanlı düşünce tarihi,
            Kemalist ideoloji ve sol çevreler arasındaki ilişkiler üzerine odaklanmaktadır.
            Lisans tez çalışmamda, 1921-1925 yılları arasında Aydınlık çevresi ile Ankara hükümeti arasındaki ideolojik ve politik etkileşimi inceleyerek,
            dönemin siyasi düşünce yapılarının dönüşümüne katkı sunmayı hedefledim.
            Tarihsel belgelerin analizi, düşünsel tartışmaların izini sürme ve çok dilli kaynak taraması konularında yetkinleşmeye çalışıyor; 
            bu kapsamda akademik İngilizce'nin yanı sıra Osmanlı Türkçesi ve akademik düzeyde Rusça öğrenimine ağırlık veriyorum.
            Araştırmalarımda tarih yazımı, siyasi düşünce tarihi ve entelektüel çevrelerin rolü gibi tematik alanları önceliklendiriyorum.`}
          </Paragraph>
        </TextBlock>

        <TextBlock variants={itemVariants}>
          <Paragraph>
            {aboutData.text2 || `Akademik çalışmalarımın yanında, zanaatla da ilgilenmekteyim.
            Dericilikle amatör düzeyde uğraşıyor;
            el yapımı cüzdan ve benzeri ürünler tasarlayıp üretmekteyim.
            Bu yönelim, hem üretim estetiği hem de tarihsel zanaat kültürüne olan ilgimi besleyen önemli bir uğraştır.
            Araştırmacı merakı, tarihsel sezgi ve üretkenlik ilkeleri doğrultusunda akademik ve sanatsal yönlerimi bir arada geliştirerek,
            özgün ve disiplinlerarası bir perspektif kazandırmaya çalışıyorum.`}
          </Paragraph>
        </TextBlock>
      </Content>
    </AboutContainer>
  );
};

export default About; 