import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: var(--card-bg);
  padding: 1.5rem 2rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color);
`;

const Copyright = styled.div`
  color: var(--text-color);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FooterLink = styled.button`
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0;
  font-family: inherit;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const Separator = styled.span`
  color: var(--text-color);
  font-size: 0.9rem;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  text-align: left;
`;

const ModalTitle = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: left;
`;

const ModalText = styled.div`
  color: var(--text-color);
  line-height: 1.6;
  font-size: 1rem;
  text-align: left;

  p {
    margin-bottom: 1rem;
    text-align: left;
  }

  h3 {
    color: var(--primary-color);
    margin: 1.5rem 0 1rem;
    font-size: 1.3rem;
    text-align: left;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    text-align: left;
  }

  li {
    margin-bottom: 0.5rem;
    text-align: left;
  }
`;

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const termsContent = {
    title: "Terms & Policy",
    content: (
      <ModalText>
        <h3>Kullanım Koşulları</h3>
        <p>Bu web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız:</p>
        <ul>
          <li>Site içeriğini kişisel ve ticari olmayan amaçlarla kullanabilirsiniz.</li>
          <li>İçeriği kopyalayamaz, değiştiremez veya dağıtamazsınız.</li>
          <li>Site içeriğini izinsiz kullanım durumunda yasal işlem başlatılabilir.</li>
        </ul>

        <h3>Gizlilik Politikası</h3>
        <p>Kişisel verilerinizin korunması bizim için önemlidir:</p>
        <ul>
          <li>Kişisel verileriniz güvenli bir şekilde saklanır.</li>
          <li>Üçüncü taraflarla paylaşılmaz.</li>
          <li>İletişim formu verileriniz sadece size ulaşmak için kullanılır.</li>
        </ul>

        <h3>Çerezler</h3>
        <p>Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır:</p>
        <ul>
          <li>Zorunlu çerezler: Sitenin düzgün çalışması için gereklidir.</li>
          <li>Analitik çerezler: Site kullanımını analiz etmek için kullanılır.</li>
          <li>Tercih çerezleri: Kullanıcı tercihlerini hatırlamak için kullanılır.</li>
        </ul>
      </ModalText>
    )
  };

  const disclaimerContent = {
    title: "Disclaimer",
    content: (
      <ModalText>
        <h3>Yasal Uyarı</h3>
        <p>Bu web sitesinde sunulan bilgiler genel bilgilendirme amaçlıdır:</p>
        <ul>
          <li>İçerikler profesyonel tavsiye niteliği taşımaz.</li>
          <li>Bilgilerin doğruluğu ve güncelliği garanti edilmez.</li>
          <li>Site içeriğinden doğabilecek zararlardan sorumlu değiliz.</li>
        </ul>

        <h3>Telif Hakkı</h3>
        <p>Site içeriği telif hakkı ile korunmaktadır:</p>
        <ul>
          <li>Tüm içerik ve tasarım hakları saklıdır.</li>
          <li>İzinsiz kullanım ve kopyalama yasaktır.</li>
          <li>İçerik kullanımı için yazılı izin gereklidir.</li>
        </ul>

        <h3>Üçüncü Taraf Bağlantıları</h3>
        <p>Sitemizde yer alan harici bağlantılar:</p>
        <ul>
          <li>Üçüncü taraf sitelerin içeriğinden sorumlu değiliz.</li>
          <li>Bağlantılar sadece bilgilendirme amaçlıdır.</li>
          <li>Bağlantılı sitelerin gizlilik politikaları bizim kontrolümüz dışındadır.</li>
        </ul>
      </ModalText>
    )
  };

  const openModal = (modal) => {
    setActiveModal(modal);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <FooterContainer>
        <Copyright>
          © 2025 Musa Yücesan. Tüm hakları saklıdır.
        </Copyright>
        <FooterLinks>
          <FooterLink onClick={() => openModal('terms')}>
            Terms & Policy
          </FooterLink>
          <Separator>|</Separator>
          <FooterLink onClick={() => openModal('disclaimer')}>
            Disclaimer
          </FooterLink>
        </FooterLinks>
      </FooterContainer>

      <AnimatePresence>
        {activeModal === 'terms' && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <ModalTitle>Terms & Policy</ModalTitle>
              <ModalText>
                {termsContent.content}
              </ModalText>
            </ModalContent>
          </Modal>
        )}

        {activeModal === 'disclaimer' && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              onClick={e => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <ModalTitle>Disclaimer</ModalTitle>
              <ModalText>
                {disclaimerContent.content}
              </ModalText>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer; 