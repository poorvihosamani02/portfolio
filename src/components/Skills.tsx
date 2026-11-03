import React, { useState } from 'react';
import { Search, Check, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchesCategory =
      selectedCategory === 'all' || cat.categoryKey === selectedCategory;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (searchQuery.trim() !== '' && filteredSkills.length === 0) {
      return null;
    }

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  const totalSkillCount = SKILL_CATEGORIES.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-24 relative bg-[#f5f2eb] border-t border-[#e2ddd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 pb-6 border-b border-[#e2ddd3]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#737680] font-semibold mb-2">
              CAPABILITIES / 02
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] font-editorial">
              Technical Skills
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#555860] max-w-md">
            Proficiencies across programming, web development, AI systems, and tooling.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#121316] text-[#f5f2eb] font-bold shadow-xs'
                  : 'bg-[#ede8de] text-[#555860] hover:text-[#121316] hover:bg-[#e4ded2]'
              }`}
            >
              All ({totalSkillCount})
            </button>
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.categoryKey}
                type="button"
                onClick={() => setSelectedCategory(cat.categoryKey)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded-md transition-all ${
                  selectedCategory === cat.categoryKey
                    ? 'bg-[#121316] text-[#f5f2eb] font-bold shadow-xs'
                    : 'bg-[#ede8de] text-[#555860] hover:text-[#121316] hover:bg-[#e4ded2]'
                }`}
              >
                0{idx + 1} {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-[#737680] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. RAG, Python)..."
              className="w-full pl-8 pr-3 py-2 text-xs font-mono bg-[#ede8de] border border-[#e2ddd3] rounded-md text-[#121316] placeholder-[#8a8d96] focus:outline-none focus:border-[#121316] transition-all"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, idx) => {
              if (!category) return null;
              return (
                <div
                  key={category.categoryKey}
                  className="rounded-2xl bg-[#ede8de] border border-[#e2ddd3] p-7 flex flex-col justify-between hover:border-[#121316] transition-all duration-200 group"
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#d8d3c7]">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#2563eb] font-bold block mb-1">
                          CATEGORY 0{idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-[#121316] font-editorial">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-[#2563eb] font-mono text-sm font-bold">
                        +
                      </span>
                    </div>

                    <p className="text-xs text-[#555860] leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skill items */}
                    <div className="grid grid-cols-1 gap-2 pt-1">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-[#f5f2eb] border border-[#e2ddd3] hover:border-[#2563eb] transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#2563eb]" />
                            <span className="text-xs font-semibold text-[#121316]">
                              {skill.name}
                            </span>
                          </div>
                          {skill.tag && (
                            <span className="text-[10px] font-mono text-[#737680] bg-[#ede8de] px-2 py-0.5 rounded">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center text-[#737680] font-mono text-xs space-y-2">
              <p>No skills found matching "{searchQuery}"</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="text-[#2563eb] underline"
              >
                Reset filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
