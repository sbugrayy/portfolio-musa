import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaYoutube, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const SidebarContainer = styled(motion.aside)`
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background-color: var(--sidebar-bg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-speed) ease;

  @media (max-width: 768px) {
    width: 80vw;
    max-width: 320px;
    height: 100vh;
    position: fixed;
    left: ${({ open }) => (open ? '0' : '-100vw')};
    top: 0;
    padding: 2rem 1rem 1rem 1rem;
    box-shadow: 2px 0 10px rgba(0,0,0,0.2);
    transition: left 0.3s var(--transition-speed), box-shadow 0.3s;
    z-index: 1100;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const ThemeToggle = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-speed) ease;
  z-index: 1101;

  &:hover {
    color: var(--primary-color);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    left: 1.5rem;
    top: 1.5rem;
  }
`;

const ProfileImageContainer = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  border: 3px solid var(--primary-color);
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;
  background-color: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-speed) ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled(motion.h1)`
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const NavLink = styled(motion.a)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all var(--transition-speed) ease;
  text-align: center;
  position: relative;

  &:hover {
    color: var(--primary-color);
    background-color: var(--hover-bg);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  width: 100%;
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  color: var(--text-color);
  font-size: 1.5rem;
  transition: all var(--transition-speed) ease;

  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 1100;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileSidebarOverlay = styled(motion.div)`
  display: none;
  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.4);
    z-index: 1099;
  }
`;

const CloseButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 2rem;
    cursor: pointer;
    z-index: 1101;
  }
`;

const Sidebar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  
  const navItems = [
    { name: 'Anasayfa', id: 'home' },
    { name: 'Hakkımda', id: 'about' },
    { name: 'Neler Yapabilirim?', id: 'what-i-do' },
    { name: 'Özgeçmişim', id: 'resume' },
    { name: 'Portfolyo', id: 'portfolio' },
    { name: 'İletişim', id: 'contact' }
  ];

  // Menüden bir linke tıklanınca sidebar'ı kapat
  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger butonu sadece mobilde */}
      <HamburgerButton onClick={() => setOpen(true)}>
        <FaBars />
      </HamburgerButton>
      {/* Mobilde arka plan overlay */}
      <MobileSidebarOverlay
        open={open}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setOpen(false)}
      />
      <SidebarContainer
        open={open}
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Tema butonu sol üstte */}
        <ThemeToggle
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
        {/* Kapatma butonu sadece mobilde */}
        <CloseButton onClick={() => setOpen(false)}>
          <FaTimes />
        </CloseButton>
        <ProfileImageContainer>
          <ProfileImage src={require('../assets/images/profile.jpg')} alt="Musa Yücesan" />
        </ProfileImageContainer>
        <Name>Musa Yücesan</Name>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNavClick}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>
        <SocialLinks>
          <SocialLink
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaYoutube />
          </SocialLink>
          <SocialLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </SidebarContainer>
    </>
  );
};

export default Sidebar; 