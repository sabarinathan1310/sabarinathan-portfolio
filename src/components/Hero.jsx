import React from 'react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const { name, title, summary, github, linkedin } = portfolioData.personalInfo;

  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-28 lg:pt-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag / Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-950/40 border border-indigo-900/50 rounded-full mb-6">
              Available for Internships & IT Roles
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-outfit text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-none"
          >
            Hi, I'm <span className="gradient-text">{name}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-6 font-outfit"
          >
            {title}
          </motion.h2>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base text-gray-400 max-w-xl mb-8 leading-relaxed"
          >
            {summary}
          </motion.p>

          {/* Buttons / Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full sm:w-auto mb-10"
          >
            <a
              href="/Sabarinathan_Resume.pdf"
              download="Sabarinathan_Resume.pdf"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-950/35 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Download size={18} />
              Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dark-card border border-dark-border hover:border-indigo-500/50 hover:bg-slate-800/40 text-gray-300 hover:text-white font-semibold hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto justify-center"
            >
              Contact Me
              <ArrowRight size={16} />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-5 justify-center lg:justify-start items-center"
          >
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2.5 rounded-full bg-slate-900/30 border border-dark-border hover:border-gray-700 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white p-2.5 rounded-full bg-slate-900/30 border border-dark-border hover:border-gray-700 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white p-2.5 rounded-full bg-slate-900/30 border border-dark-border hover:border-gray-700 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </button>
          </motion.div>
        </div>

        {/* Right Column: Profile Picture Card */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Subtle blue glow circle around image */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/10 blur-[40px] animate-pulse-subtle"></div>
            
            {/* Profile image card */}
            <div className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] rounded-2xl p-1 bg-gradient-to-b from-indigo-500 via-cyan-500 to-transparent shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-dark-card flex items-center justify-center border border-slate-900">
                <img
                  src="/profile.png"
                  alt="Sabarinathan Profile"
                  className="w-full h-full object-cover object-top scale-102"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
