import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import WhatIDo from './pages/WhatIDo';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/global.css';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 280px;
  padding: 2rem;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    width: 100%;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem 0 1.5rem 0;
  }
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <AppContainer>
        <Sidebar />
        <MainContent>
          <Section id="home">
            <Home />
          </Section>
          <Section id="about">
            <About />
          </Section>
          <Section id="what-i-do">
            <WhatIDo />
          </Section>
          <Section id="resume">
            <Resume />
          </Section>
          <Section id="portfolio">
            <Portfolio />
          </Section>
          <Section id="contact">
            <Contact />
          </Section>
          <Footer />
        </MainContent>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;