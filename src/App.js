import React from 'react';
import './App.css';
import BinaryBackground from './components/BinaryBackground/BinaryBackground';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Achievements from './components/Achievements/Achievements';
import Footer from './components/Footer/Footer';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BinaryBackground />
        <ThemeToggle />
        <Header />
        <main className="container">
          <About />
          <Skills />
          <Projects />
          <Achievements />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

