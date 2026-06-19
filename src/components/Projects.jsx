import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 14, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Map project IDs to their local copied illustrations
const projectImages = {
  1: "/projects/missing_person_ai.png",
  2: "/projects/garage_crm.png",
  3: "/projects/fraud_detection.png",
  4: "/projects/transit_analysis.png"
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const projects = portfolioData.projects;

  const categories = ["All", "AI & ML", "Software Development", "Data Analytics"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-dark-card/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm max-w-lg mx-auto">
            A selection of software development, artificial intelligence, and data engineering projects from my academic career.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(category)}
              className={`px-4.5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="flex flex-col h-full rounded-2xl bg-dark-card border border-dark-border overflow-hidden group shadow-lg hover:border-indigo-500/35 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={projectImages[project.id]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-bold tracking-wider text-cyan-400 uppercase bg-slate-950/80 rounded-md border border-cyan-500/25">
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-outfit text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Bullet features list */}
                  <ul className="space-y-1.5 mb-6 text-gray-400 text-[11px] md:text-xs list-disc pl-4 flex-grow">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="leading-normal">{detail}</li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-medium text-gray-300 bg-slate-800/40 rounded border border-dark-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex justify-between items-center pt-4 border-t border-dark-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-semibold transition-colors duration-200"
                    >
                      <GithubIcon size={14} />
                      Code Repository
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      aria-label="View Project"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
