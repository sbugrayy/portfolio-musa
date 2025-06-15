import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ThemeToggle from './components/ThemeToggle';
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
