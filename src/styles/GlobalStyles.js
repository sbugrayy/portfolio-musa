import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Light theme variables */
    --primary-color: #ff6b35;
    --secondary-color: #2a2a2a;
    --background-color: #ffffff;
    --text-color: #333333;
    --sidebar-bg: #f8f9fa;
    --card-bg: #ffffff;
    --border-color: #e0e0e0;
    --transition-speed: 0.3s;
  }

  [data-theme='dark'] {
    --primary-color: #ff6b35;
    --secondary-color: #ffffff;
    --background-color: #1a1a1a;
    --text-color: #ffffff;
    --sidebar-bg: #2a2a2a;
    --card-bg: #2a2a2a;
    --border-color: #404040;
    --card-bg-dark: #2a2a2a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: background-color var(--transition-speed) ease,
                color var(--transition-speed) ease;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--sidebar-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ff8c5a;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
`;

export default GlobalStyles; 