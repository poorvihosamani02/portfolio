import React, { useState } from 'react';
import { Trophy, Check, ArrowUpRight } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export default function Achievements() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Hackathon', 'Leadership', 'Club', 'Workshop'];

  const filteredItems = ACHIEVEMENTS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.type === selectedFilter;
  });

  const featuredHackathon = ACHIEVEMENTS.find((a) => a.featured);

  return (
    <section
      id="achievements"
      className="py-24 relative bg-[#f5f2eb] border-t border-[#e2ddd3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#e2ddd3]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#737680] font-semibold mb-2">
              RECOGNITION / 04
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] font-editorial">
              Achievements & Honors
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#555860] max-w-md">
            Hackathon standings, technical leadership, and club engagements.
          </p>
        </div>

        {/* Featured Spotlight: HACK4SDG Finalist */}
        {featuredHackathon && (
          <div className="mb-14 rounded-2xl bg-[#ede8de] border-2 border-[#121316] p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase text-[#737680]">
                  <span className="font-bold text-[#2563eb]">
                    HACK4SDG HACKATHON
                  </span>
                  <span>·</span>
                  <span>PES UNIVERSITY STAGE</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-[#121316] font-editorial leading-tight">
                  Selected among 300 Teams & Secured Top 10 Position
                </h3>

                <p className="text-sm sm:text-base text-[#2b2d33] leading-relaxed max-w-2xl">
                  Presented prototype <strong className="text-[#121316]">AdhikarAI</strong> live on stage before an expert jury at PES University, demonstrating an AI-powered multilingual platform for citizen welfare scheme accessibility.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {featuredHackathon.keyPoints.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs font-medium text-[#2b2d33]"
                    >
                      <span className="text-[#2563eb] font-bold text-sm shrink-0 leading-none">
                        +
                      </span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Number Showcase */}
              <div className="lg:col-span-4 p-8 rounded-xl bg-[#f5f2eb] border border-[#d8d3c7] text-center space-y-1">
                <span className="font-mono text-xs uppercase tracking-widest text-[#737680] block">
                  STANDINGS
                </span>
                <div className="text-5xl sm:text-6xl font-black text-[#121316] font-editorial">
                  TOP 10
                </div>
                <p className="text-xs font-mono text-[#2563eb] font-bold uppercase">
                  Out of 300+ Teams
                </p>
                <p className="text-[11px] text-[#737680] font-mono pt-1">
                  PES University · Bengaluru
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSelectedFilter(opt)}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-all ${
                selectedFilter === opt
                  ? 'bg-[#121316] text-[#f5f2eb] font-bold'
                  : 'bg-[#ede8de] text-[#555860] hover:text-[#121316]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Additional Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems
            .filter((item) => !item.featured)
            .map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-2xl bg-[#ede8de] border border-[#e2ddd3] hover:border-[#121316] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono uppercase text-[#737680]">
                    <span className="font-bold text-[#2563eb]">{item.type}</span>
                    <span className="bg-[#f5f2eb] px-2 py-0.5 rounded text-[11px] font-semibold text-[#121316]">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#121316] font-editorial">
                      {item.title}
                    </h4>
                    <p className="text-xs font-mono text-[#555860] mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#2b2d33] leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {item.keyPoints.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[#555860]"
                      >
                        <span className="text-[#2563eb] font-bold">+</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
