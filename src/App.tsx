import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Work />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;