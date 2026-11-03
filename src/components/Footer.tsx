import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#e2ddd3] bg-[#ede8de] text-[#555860] text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <svg
              className="w-4 h-4 text-[#2563eb]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L13.5 8.5L22 7L15.5 13.5L24 15L15.5 16.5L17 25L10.5 18.5L9 27L7.5 18.5L-1 20L5.5 13.5L-3 12L5.5 10.5L4 2L10.5 8.5L12 0Z" />
            </svg>
            <div>
              <span className="font-bold text-[#121316] uppercase">
                {PERSONAL_INFO.fullName}
              </span>
              <span className="text-[#8a8d96] mx-2">·</span>
              <span>{PERSONAL_INFO.title}</span>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#f5f2eb] border border-[#d8d3c7] text-[#121316] hover:text-[#2563eb] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#f5f2eb] border border-[#d8d3c7] text-[#121316] hover:text-[#2563eb] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded bg-[#f5f2eb] border border-[#d8d3c7] text-[#121316] hover:text-[#2563eb] transition-colors"
              title="Send Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded bg-[#121316] text-[#f5f2eb] hover:bg-[#2563eb] transition-colors ml-2"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#d8d3c7] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#737680] gap-2">
          <p>© {currentYear} {PERSONAL_INFO.fullName}. Crafted with precision & engineering clarity.</p>
          <p>BENGALURU, INDIA · BMSCE</p>
        </div>
      </div>
    </footer>
  );
}
