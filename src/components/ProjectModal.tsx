import React, { useEffect } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Award,
  Check,
  Users,
  UserCheck,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-[#f5f2eb] border border-[#e2ddd3] shadow-2xl p-6 sm:p-10 my-8 overflow-hidden text-left text-[#121316]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#e2ddd3]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#737680] mb-2 uppercase">
              <span className="font-bold text-[#2563eb]">{project.type}</span>
              <span aria-hidden="true">·</span>
              <span>{project.status}</span>
            </div>
            <h2
              id="modal-project-title"
              className="text-3xl sm:text-4xl font-black text-[#121316] font-editorial tracking-tight"
            >
              {project.name}
              <span className="inline-block w-2.5 h-2.5 bg-[#2563eb] ml-1.5 rounded-[1px]" />
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#555860] mt-1">
              Role: <strong className="text-[#121316]">{project.role}</strong>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-[#ede8de] hover:bg-[#e4ded2] text-[#121316] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="space-y-6 pt-6 max-h-[70vh] overflow-y-auto pr-2">
          {/* Achievement Spotlight */}
          {project.achievementHighlight && (
            <div className="p-4 rounded-xl bg-[#ede8de] border border-[#d8d3c7] flex items-start gap-3">
              <Award className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#2563eb] font-mono">
                  Hackathon Recognition
                </p>
                <p className="text-xs sm:text-sm text-[#2b2d33] mt-0.5 leading-relaxed">
                  {project.achievementHighlight}
                </p>
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737680] mb-2">
              Project Overview
            </h3>
            <p className="text-[#2b2d33] text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Contribution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* My Contributions */}
            <div className="p-5 rounded-xl bg-[#ede8de] border border-[#d8d3c7]">
              <div className="flex items-center gap-2 mb-3 text-[#121316]">
                <UserCheck className="w-4 h-4 text-[#2563eb]" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                  My Core Contributions
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-[#2b2d33]">
                {project.myContributions.map((contrib, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#2563eb] font-bold mt-0.5 shrink-0">+</span>
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Context */}
            <div className="p-5 rounded-xl bg-[#f5f2eb] border border-[#e2ddd3]">
              <div className="flex items-center gap-2 mb-3 text-[#555860]">
                <Users className="w-4 h-4 text-[#737680]" />
                <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                  Team Collaboration Context
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-[#555860]">
                {project.teamAspects && project.teamAspects.length > 0 ? (
                  project.teamAspects.map((aspect, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-[1px] bg-[#8a8d96] shrink-0 mt-1.5" />
                      <span>{aspect}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-[1px] bg-[#8a8d96] shrink-0 mt-1.5" />
                    <span>Collaborative collegiate hackathon development.</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737680] mb-3">
              Key Platform Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-[#ede8de] border border-[#e2ddd3] text-xs text-[#2b2d33] flex items-start gap-2"
                >
                  <span className="text-[#2563eb] font-mono text-[11px] font-bold">
                    0{i + 1}.
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737680] mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#121316] text-[#f5f2eb]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 mt-6 border-t border-[#e2ddd3] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#121316] hover:bg-[#2563eb] text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#ede8de] hover:bg-[#e4ded2] text-[#121316] border border-[#121316] transition-colors flex items-center gap-2"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-[#555860] hover:text-[#121316] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
