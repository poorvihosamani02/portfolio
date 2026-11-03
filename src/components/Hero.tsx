import React, { useState } from 'react';
import {
  MapPin,
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Plus,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const photoSource = PERSONAL_INFO.photoUrl;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 pb-16 flex flex-col justify-center bg-[#f5f2eb] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Dual-Tone Canvas Container */}
        <div className="relative rounded-2xl overflow-hidden border border-[#e2ddd3] bg-[#f5f2eb] grid grid-cols-1 lg:grid-cols-12 min-h-[580px] sm:min-h-[640px]">
          {/* Left Column: Typographic Focus */}
          <div className="lg:col-span-7 p-6 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8 z-10">
            {/* Top Micro-label */}
            <div className="space-y-1">
              <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#737680] font-medium">
                INDEPENDENT AI/ML & FULL-STACK DEVELOPER
              </p>
            </div>

            {/* Massive Hero Name with Cobalt Square Period */}
            <div className="space-y-4 my-auto py-4">
              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-[-0.04em] text-[#121316] leading-[0.95] font-editorial select-none">
                Poorvi
                <br />
                Hosamani
                <span
                  className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 bg-[#2563eb] ml-2 mb-1 rounded-[2px]"
                  aria-hidden="true"
                />
              </h1>

              {/* Sub-statement with Cobalt Plus Sign */}
              <div className="pt-4 flex items-start gap-3 max-w-xl">
                <span className="text-[#2563eb] text-xl font-bold font-mono shrink-0 select-none">
                  +
                </span>
                <p className="text-lg sm:text-2xl text-[#121316] font-medium tracking-tight font-editorial leading-snug">
                  I turn complex AI & data systems into{' '}
                  <span className="text-[#737680]">
                    products that feel simple.
                  </span>
                </p>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#555860] max-w-lg leading-relaxed pt-1">
                {PERSONAL_INFO.heroIntro}
              </p>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="space-y-4 pt-4 border-t border-[#e2ddd3]/80">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, '#projects')}
                  className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#121316] hover:bg-[#2563eb] transition-colors duration-200 inline-flex items-center gap-2 shadow-sm"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                  className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-[#121316] bg-transparent hover:bg-[#e9e4d8] border border-[#121316] transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location & Social Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#737680] pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>BENGALURU, INDIA · BMSCE</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-[#121316] hover:text-[#2563eb] transition-colors"
                    title="GitHub Profile"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded text-[#121316] hover:text-[#2563eb] transition-colors"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-1.5 rounded text-[#121316] hover:text-[#2563eb] transition-colors"
                    title="Direct Email"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Sand Backdrop with Portrait & 3D Accent */}
          <div className="lg:col-span-5 bg-[#e9e4d8] p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-[#e2ddd3]">
            {/* Top Right Label */}
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#737680] z-10">
              <span>B.E. CSE (2025–2029)</span>
              <span>PORTFOLIO — 2026</span>
            </div>

            {/* Central Visual: Portrait Frame & Artistic Modern Sculpture motif */}
            <div className="relative my-auto py-8 flex flex-col items-center justify-center z-10">
              {/* 3D Modern Cobalt Ribbon / Knot SVG Sculpture Element (matching the reference!) */}
              <div className="absolute -right-10 -bottom-10 w-72 h-72 opacity-90 pointer-events-none transform rotate-12">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-xl"
                >
                  <defs>
                    <linearGradient id="blue3d" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="40%" stopColor="#2563eb" />
                      <stop offset="80%" stopColor="#1d4ed8" />
                      <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                    <linearGradient id="blueGlow" x1="20%" y1="0%" x2="80%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                  </defs>
                  {/* Stylized organic torus / ribbon knot inspired by template */}
                  <path
                    d="M 50,100 C 50,50 150,40 150,90 C 150,140 60,160 80,110 C 95,75 140,80 140,110 C 140,150 70,140 60,100"
                    stroke="url(#blue3d)"
                    strokeWidth="32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 75,95 C 90,65 135,70 135,100 C 135,135 75,130 65,95"
                    stroke="url(#blueGlow)"
                    strokeWidth="14"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>

              {/* Portrait Card */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden bg-[#f5f2eb] border-2 border-[#121316] shadow-2xl p-2 group transition-transform duration-300 hover:scale-[1.02]">
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#ede8de] flex flex-col justify-end">
                  {!imgError ? (
                    <img
                      src={photoSource}
                      alt="Poorvi Hosamani - AI/ML & Full-Stack Developer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: 'center 46%' }}
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* High-Fidelity Monogram Fallback Avatar in Template Style */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#ede8de]">
                      <div className="w-20 h-20 rounded-2xl bg-[#121316] text-[#f5f2eb] flex items-center justify-center font-bold text-2xl font-editorial shadow-md">
                        PH
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-[#121316] text-sm font-editorial">
                          {PERSONAL_INFO.fullName}
                        </p>
                        <p className="text-[11px] font-mono text-[#2563eb] font-semibold">
                          AI/ML & Full-Stack Developer
                        </p>
                        <p className="text-[10px] text-[#737680] font-mono">
                          BMSCE · Bengaluru
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Scrim Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#121316]/80 via-[#121316]/30 to-transparent pointer-events-none" />

                  {/* Pill Strip */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 py-1.5 px-3 rounded-lg bg-[#f5f2eb]/90 backdrop-blur-md border border-[#e2ddd3] flex items-center justify-between text-[10px] font-mono">
                    <span className="font-bold text-[#121316]">
                      POORVI HOSAMANI
                    </span>
                    <span className="text-[#2563eb] font-semibold">BMSCE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Strip: Key Milestone */}
            <div className="pt-4 border-t border-[#d8d3c7] flex items-center justify-between text-[11px] font-mono text-[#555860] z-10">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-[1px] bg-[#2563eb]" />
                <span className="font-semibold text-[#121316]">HACK4SDG TOP 10</span>
              </span>
              <span>PES UNIVERSITY STAGE</span>
            </div>

            {/* Rotated Vertical Text on Far Edge (matching reference!) */}
            <div className="hidden xl:block absolute right-3 bottom-12 origin-bottom-right rotate-90 text-[10px] font-mono tracking-widest text-[#8a8d96] select-none pointer-events-none">
              CLARITY IS AN ENGINEERING DECISION.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
