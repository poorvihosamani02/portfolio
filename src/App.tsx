import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#121316] selection:bg-[#2563eb] selection:text-white font-sans">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Single-Page Content */}
      <main>
        {/* Section 1: Hero Landing */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Skills */}
        <Skills />

        {/* Section 4: Projects (AdhikarAI & GridPoint) */}
        <Projects />

        {/* Section 5: Achievements & Recognition */}
        <Achievements />

        {/* Section 6: Education */}
        <Education />

        {/* Section 7: Learning & Development */}
        <Learning />

        {/* Section 8: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
