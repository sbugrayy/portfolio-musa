import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useFirebase } from '../context/FirebaseContext';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/about.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.08;
    z-index: -1;
    animation: backgroundFloat 26s ease-in-out infinite;
    
    @media (max-width: 768px) {
      opacity: 0.04;
      filter: blur(1px);
    }
  }

  @keyframes backgroundFloat {
    0%, 100% { 
      transform: scale(1) rotate(0deg); 
    }
    50% { 
      transform: scale(1.03) rotate(0.3deg); 
    }
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
`;

const InfoText = styled.p`
  color: var(--text-color);
  font-size: 1.1rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  font-size: 1.8rem;
  color: var(--text-color);
  transition: all var(--transition-speed) ease;

  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const { data } = useFirebase();
  const contactData = data?.contact || {};
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
      <ContactContainer ref={ref}>
        <Title
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
          İletişim
        </Title>

        <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div variants={itemVariants}>
            <InfoItem>
              <InfoIcon><FaEnvelope /></InfoIcon>
              <InfoText>{contactData.email || 'yucesan639@gmail.com'}</InfoText>
            </InfoItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <InfoItem>
              <InfoIcon><FaMapMarkerAlt /></InfoIcon>
              <InfoText>{contactData.location || 'Ankara, Türkiye'}</InfoText>
            </InfoItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks>
              <SocialLink href={contactData.youtube || "https://youtube.com/@musayucesan8437?si=fJRmBz8kVSv_Oe0p"} target="_blank">
                <FaYoutube />
              </SocialLink>
              <SocialLink href={contactData.instagram || "https://www.instagram.com/musa.yucesan"} target="_blank">
                <FaInstagram />
              </SocialLink>
              <SocialLink href={contactData.linkedin || "https://www.linkedin.com/in/musa-y%C3%BCcesan-96983930b/"} target="_blank">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </motion.div>
        </motion.div>
      </ContactContainer>
  );
};

export default Contact;
