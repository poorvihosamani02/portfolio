import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Award, Plus } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative bg-[#f5f2eb] border-t border-[#e2ddd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#e2ddd3]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#737680] font-semibold mb-2">
              FEATURED WORK / 03
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121316] font-editorial">
              Selected Projects
              <span className="text-[#2563eb] text-2xl font-mono align-super ml-2 font-normal">
                ⁰²
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#555860] max-w-md">
            Citizen AI assistance, RAG pipelines, and logistics warehouse optimization.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project, idx) => {
            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#ede8de] border border-[#e2ddd3] p-8 sm:p-10 flex flex-col justify-between hover:border-[#121316] transition-all duration-300 relative group"
              >
                <div className="space-y-6">
                  {/* Top Meta Line */}
                  <div className="flex items-center justify-between text-xs font-mono uppercase text-[#737680]">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#2563eb]">
                        0{idx + 1}
                      </span>
                      <span>·</span>
                      <span>{project.type}</span>
                      <span>·</span>
                      <span className="text-[#121316] font-semibold">
                        {project.status}
                      </span>
                    </div>

                    {project.achievementHighlight && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#2563eb] bg-[#f5f2eb] px-2.5 py-0.5 rounded border border-[#d8d3c7]">
                        <Award className="w-3 h-3 text-[#2563eb]" />
                        <span>TOP 10</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="text-3xl sm:text-4xl font-black text-[#121316] font-editorial tracking-tight group-hover:text-[#2563eb] transition-colors">
                      {project.name}
                      <span className="inline-block w-2.5 h-2.5 bg-[#2563eb] ml-1.5 rounded-[1px]" />
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#555860] leading-snug">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Role Callout */}
                  <div className="p-3.5 rounded-xl bg-[#f5f2eb] border border-[#e2ddd3] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#737680] uppercase">Role</span>
                    <span className="font-bold text-[#121316]">
                      {project.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#2b2d33] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="space-y-2 pt-2">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#737680]">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f5f2eb] text-[#121316] border border-[#e2ddd3]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Strip */}
                <div className="pt-8 mt-8 border-t border-[#d8d3c7] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#121316] hover:bg-[#2563eb] text-white transition-colors flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#f5f2eb] hover:bg-[#e4ded2] text-[#121316] border border-[#121316] transition-colors flex items-center gap-1.5"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316] hover:text-[#2563eb] flex items-center gap-1 transition-colors pb-0.5 border-b border-[#121316] hover:border-[#2563eb]"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
