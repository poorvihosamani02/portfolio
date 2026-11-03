import React from 'react';
import { MapPin, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#f5f2eb] border-t border-[#e2ddd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#e2ddd3]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#737680] font-semibold mb-2">
              ACADEMIC FOUNDATION / 05
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] font-editorial">
              Education
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#555860] max-w-md">
            Undergraduate curriculum in Computer Science & Engineering.
          </p>
        </div>

        {/* Education Main Card */}
        <div className="rounded-2xl bg-[#ede8de] border border-[#e2ddd3] p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#d8d3c7]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#2563eb] font-bold block mb-1">
                INSTITUTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#121316] font-editorial">
                {EDUCATION_DATA.institution}
              </h3>
              <p className="text-xs font-mono text-[#555860] mt-1">
                {EDUCATION_DATA.city} · {EDUCATION_DATA.currentYear}
              </p>
            </div>

            <div className="font-mono text-xs uppercase tracking-wider text-[#121316] font-bold bg-[#f5f2eb] px-4 py-2 rounded-lg border border-[#d8d3c7] self-start sm:self-auto">
              {EDUCATION_DATA.duration}
            </div>
          </div>

          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#737680] block">
              DEGREE PROGRAM
            </span>
            <p className="text-xl sm:text-2xl font-bold text-[#121316] font-editorial">
              {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
            </p>
            <p className="text-xs sm:text-sm text-[#2b2d33] max-w-3xl leading-relaxed">
              {EDUCATION_DATA.description}
            </p>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6 border-t border-[#d8d3c7] space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#737680] block">
              RELEVANT COURSEWORK
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {EDUCATION_DATA.relevantCoursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#f5f2eb] border border-[#e2ddd3]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#2563eb] font-mono text-xs font-bold">
                      0{idx + 1}.
                    </span>
                    <h5 className="text-sm font-bold text-[#121316] font-editorial">
                      {course.title}
                    </h5>
                  </div>
                  <p className="text-xs text-[#555860] leading-relaxed">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
