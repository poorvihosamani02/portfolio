import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('Project Collaboration & Inquiry');
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    (senderName ? `From: ${senderName}\n\n` : '') + message
  )}`;

  const quickSubjects = [
    'Project Collaboration & Inquiry',
    'AI / ML Development Discussion',
    'Internship / Opportunity',
    'General Connect',
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#f5f2eb] border-t border-[#e2ddd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 pb-6 border-b border-[#e2ddd3]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#737680] font-semibold mb-2">
              CONTACT / 07
            </p>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#121316] font-editorial">
              Let's Talk
              <span className="inline-block w-3.5 h-3.5 bg-[#2563eb] ml-2 rounded-[1px]" />
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#555860] max-w-md">
            Open to AI engineering collaborations, full-stack projects, and innovative teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#ede8de] border border-[#e2ddd3] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#737680] block mb-2">
                  DIRECT INBOX
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xl sm:text-2xl font-black text-[#121316] hover:text-[#2563eb] transition-colors font-editorial break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-5 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#121316] hover:bg-[#2563eb] transition-colors inline-flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-4 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#f5f2eb] hover:bg-[#e4ded2] text-[#121316] border border-[#d8d3c7] transition-colors inline-flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#2563eb]" />
                      <span className="text-[#2563eb]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-[#d8d3c7] space-y-2 text-xs font-mono text-[#555860]">
                <div className="flex items-center gap-2 text-[#121316] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <p className="leading-relaxed">
                  BMS College of Engineering, Bengaluru. Available for hackathons, engineering collaborations, and applied AI initiatives.
                </p>
              </div>
            </div>

            {/* Profiles */}
            <div className="pt-6 border-t border-[#d8d3c7] space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#737680] block">
                NETWORKS
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#f5f2eb] border border-[#e2ddd3] hover:border-[#121316] transition-all flex items-center justify-between text-xs font-mono text-[#121316]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2563eb]" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#f5f2eb] border border-[#e2ddd3] hover:border-[#121316] transition-all flex items-center justify-between text-xs font-mono text-[#121316]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#2563eb]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Email Composer */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#ede8de] border border-[#e2ddd3] space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#d8d3c7]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#121316] font-bold">
                Quick Message Composer
              </span>
              <span className="text-[11px] font-mono text-[#737680]">
                Prepares your mail app
              </span>
            </div>

            {/* Quick topics */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono uppercase tracking-wider text-[#737680] block">
                Select Inquiry Topic:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {quickSubjects.map((qs) => (
                  <button
                    key={qs}
                    type="button"
                    onClick={() => setSubject(qs)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                      subject === qs
                        ? 'bg-[#121316] text-[#f5f2eb] font-bold'
                        : 'bg-[#f5f2eb] text-[#555860] hover:text-[#121316] border border-[#e2ddd3]'
                    }`}
                  >
                    {qs}
                  </button>
                ))}
              </div>
            </div>

            {/* Sender Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="sender-name-input"
                className="text-[11px] font-mono uppercase tracking-wider text-[#737680] block"
              >
                Your Name / Team (Optional)
              </label>
              <input
                id="sender-name-input"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Alex (Engineering Recruiter / Founder)"
                className="w-full px-3.5 py-2.5 text-xs font-mono bg-[#f5f2eb] border border-[#d8d3c7] rounded-lg text-[#121316] placeholder-[#8a8d96] focus:outline-none focus:border-[#121316]"
              />
            </div>

            {/* Message Body */}
            <div className="space-y-1.5">
              <label
                htmlFor="message-body-input"
                className="text-[11px] font-mono uppercase tracking-wider text-[#737680] block"
              >
                Message Note
              </label>
              <textarea
                id="message-body-input"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Poorvi, I saw your AdhikarAI & GridPoint work and would love to discuss a project..."
                className="w-full px-3.5 py-2.5 text-xs font-mono bg-[#f5f2eb] border border-[#d8d3c7] rounded-lg text-[#121316] placeholder-[#8a8d96] focus:outline-none focus:border-[#121316] resize-none"
              />
            </div>

            {/* Action */}
            <div className="pt-2">
              <a
                href={mailtoUrl}
                className="w-full py-3.5 px-6 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#121316] hover:bg-[#2563eb] text-white text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Launch Mail Client with this Draft</span>
              </a>
              <p className="text-center text-[10px] text-[#737680] font-mono mt-2">
                Opens directly in your default email client (Apple Mail, Outlook, Gmail, etc.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
