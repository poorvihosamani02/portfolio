import React from 'react';
import { ArrowUpRight, TrendingUp } from 'lucide-react';
import { LEARNING_PILLARS } from '../data/portfolioData';

export default function Learning() {
  return (
    <section id="learning" className="py-24 relative bg-[#f5f2eb] border-t border-[#e2ddd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#e2ddd3]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#737680] font-semibold mb-2">
              GROWTH & EVOLUTION / 06
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] font-editorial">
              Learning & Development
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#555860] max-w-md">
            Expanding engineering breadth through hands-on projects and workshops.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#ede8de] border border-[#e2ddd3] hover:border-[#121316] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#2563eb]">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#737680] bg-[#f5f2eb] px-2 py-0.5 rounded">
                    {pillar.focus}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#121316] font-editorial">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#555860] leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#d8d3c7] flex items-center justify-between text-[11px] font-mono text-[#737680]">
                <span>PRACTICE</span>
                <span className="text-[#2563eb] font-bold">+</span>
              </div>
            </div>
          ))}
        </div>

        {/* Concise Quote */}
        <div className="mt-12 p-8 rounded-2xl bg-[#ede8de] border border-[#e2ddd3] text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-[#121316] font-editorial font-medium italic">
            "Exploring new technologies, transforming ideas into practical applications, and learning through hands-on projects."
          </p>
          <p className="text-xs font-mono text-[#2563eb] mt-2 font-bold uppercase">
            — Poorvi Hosamani
          </p>
        </div>
      </div>
    </section>
  );
}
