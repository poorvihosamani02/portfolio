import React from 'react';
import {
  BrainCircuit,
  Layers,
  Target,
  Terminal,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      num: '01',
      title: 'AI & Machine Learning',
      desc: 'Retrieval-Augmented Generation (RAG), Gemini API integration, and applied deep learning pipelines for context-grounded intelligence.',
    },
    {
      num: '02',
      title: 'Full-Stack Engineering',
      desc: 'Modern reactive component interfaces with React and Vite, backed by Python FastAPI and Express.js REST microservices.',
    },
    {
      num: '03',
      title: 'Practical Impact',
      desc: 'Translating ideas into working prototypes—from citizen rights accessibility (AdhikarAI) to logistics optimization (GridPoint).',
    },
    {
      num: '04',
      title: 'Continuous Rigor',
      desc: 'Sharpening problem solving through competitive hackathons, algorithm coursework at BMSCE, and active club leadership.',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#f5f2eb] border-t border-[#e2ddd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#e2ddd3]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#737680] font-semibold mb-2">
              ABOUT / 01
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] font-editorial">
              Background & Purpose
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#555860] max-w-md">
            Second-year Computer Science Engineering student at BMSCE, Bengaluru.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#ede8de] border border-[#e2ddd3] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-[1px] bg-[#2563eb]" />
                <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-[#121316]">
                  Profile Narrative
                </h3>
              </div>

              {/* Exact bio requested by user */}
              <div className="text-[#2b2d33] text-base sm:text-lg leading-relaxed space-y-4 font-normal">
                <p>
                  I'm Poorvi Hosamani, a second-year Computer Science Engineering student at BMS College of Engineering, Bengaluru, passionate about building technology-driven solutions to real-world problems.
                </p>
                <p>
                  My interests lie at the intersection of Artificial Intelligence, Machine Learning, and Full-Stack Development. I enjoy exploring new technologies, transforming ideas into practical applications, and learning through hands-on projects.
                </p>
                <p className="text-[#555860] text-sm sm:text-base">
                  I'm continuously expanding my technical skills, experimenting with innovative approaches, and striving to create meaningful solutions that make a difference.
                </p>
              </div>
            </div>

            {/* Quick Metadata Row */}
            <div className="pt-6 border-t border-[#d8d3c7] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#555860]">
              <div className="flex items-center gap-2">
                <span className="text-[#2563eb] font-bold">+</span>
                <span>BMSCE (2025–2029)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2563eb] font-bold">+</span>
                <span>HACK4SDG Finalist</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#2563eb] font-bold">+</span>
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-6 rounded-2xl bg-[#f5f2eb] border border-[#e2ddd3] hover:border-[#121316] transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#2563eb]">
                    {pillar.num}
                  </span>
                  <span className="text-[#8a8d96] text-xs font-mono font-bold group-hover:text-[#121316] transition-colors">
                    +
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#121316] font-editorial mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#555860] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
