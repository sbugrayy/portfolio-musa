import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    margin: 0;
    padding: 0;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoSection = styled.div`
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  min-width: 2rem;
  text-align: center;
`;

const InfoText = styled.p`
  color: var(--text-color);
  margin: 0;
  font-size: 1.1rem;
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

const Form = styled(motion.form)`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 0;

  &:nth-child(3),
  &:nth-child(4) {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all var(--transition-speed) ease;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-color);
  min-height: 150px;
  resize: vertical;
  transition: all var(--transition-speed) ease;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.1);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  font-size: 1.1rem;
  grid-column: 1 / -1;
  width: fit-content;
  margin: 0 auto;

  &:hover:not(:disabled) {
    background-color: #ff8c5a;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.success ? 'var(--success-color)' : 'var(--error-color)'};
  font-weight: 500;
`;

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: '' });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ show: false, success: false, message: '' });

    try {
      await emailjs.sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        show: true,
        success: true,
        message: 'Mesajınız başarıyla gönderildi!'
      });

      // Formu sıfırla
      form.current.reset();
    } catch (error) {
      console.error('Gönderme hatası:', error);
      setStatus({
        show: true,
        success: false,
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <ContactContainer ref={ref}>
        <Title
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
          İletişim
        </Title>

        <Content
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
          <ContactInfo variants={itemVariants}>
            <InfoSection>
              <InfoItem>
                <InfoIcon>
                  <FaEnvelope />
                </InfoIcon>
                <InfoText>yucesan639@gmail.com</InfoText>
              </InfoItem>

              <InfoItem>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <InfoText>Ankara, Türkiye</InfoText>
              </InfoItem>
            </InfoSection>

            <SocialLinks>
              <SocialLink href="https://youtube.com/@musayucesan8437?si=fJRmBz8kVSv_Oe0p" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/musa.yucesan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/musa-y%C3%BCcesan-96983930b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <Form
              ref={form}
              variants={itemVariants}
              onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">İsim</Label>
              <Input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">E-posta</Label>
              <Input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Konu</Label>
              <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Mesaj</Label>
              <TextArea
                  id="message"
                  name="message"
                  required
                  disabled={isSubmitting}
              />
            </FormGroup>

            <SubmitButton
                type="submit"
                disabled={isSubmitting}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
            </SubmitButton>

            {status.show && (
                <StatusMessage success={status.success}>
                  {status.message}
                </StatusMessage>
            )}
          </Form>
        </Content>
      </ContactContainer>
  );
};

export default Contact;