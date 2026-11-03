import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavItem {
  name: string;
  badge?: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'WORK', badge: '02', href: '#projects' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'ACHIEVEMENTS', href: '#achievements' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'LEARNING', href: '#learning' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    });

    ['#home', '#about', '#skills', '#projects', '#achievements', '#education', '#learning', '#contact'].forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href.replace('#', ''));
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f5f2eb]/90 backdrop-blur-md border-b border-[#e2ddd3] py-3 shadow-xs'
          : 'bg-[#f5f2eb] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Geometric Star Asterisk + Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="group flex items-center gap-2.5 text-[#121316] hover:opacity-85 transition-opacity shrink-0"
          >
            {/* 8-point geometric star in cobalt blue matching template */}
            <svg
              className="w-5 h-5 text-[#2563eb] transition-transform duration-300 group-hover:rotate-45"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L13.5 8.5L22 7L15.5 13.5L24 15L15.5 16.5L17 25L10.5 18.5L9 27L7.5 18.5L-1 20L5.5 13.5L-3 12L5.5 10.5L4 2L10.5 8.5L12 0Z" />
            </svg>
            <span className="font-extrabold tracking-wider text-xs sm:text-sm uppercase font-mono text-[#121316]">
              {PERSONAL_INFO.fullName}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean uppercase typography with superscript badge) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 text-[11px] font-mono tracking-wider text-[#555860]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`relative py-1 transition-colors hover:text-[#121316] whitespace-nowrap shrink-0 flex items-baseline gap-1 ${
                    isActive ? 'text-[#121316] font-bold' : ''
                  }`}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="text-[9px] text-[#2563eb] font-semibold -top-1 relative">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#121316]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: "Let's talk ↗" with underline */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="group flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#121316] font-semibold pb-1 border-b border-[#121316] hover:border-[#2563eb] hover:text-[#2563eb] transition-all whitespace-nowrap shrink-0"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#121316] hover:bg-[#e9e4d8] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#2563eb]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f5f2eb] border-b border-[#e2ddd3] px-6 py-5 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider text-[#555860]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="py-1.5 hover:text-[#121316] flex items-center justify-between"
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] text-[#2563eb] font-semibold">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#e2ddd3]">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-[#121316] py-1 border-b border-[#121316]"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#2563eb]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
