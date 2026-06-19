import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Brain, Globe, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { summary, careerObjective, languages, hobbies } = portfolioData.personalInfo;
  
  // Soft skills mapping with corresponding icons for visual appeal
  const softSkills = [
    { name: "Problem Solving", icon: Brain, desc: "Analyzing complex logic and structuring efficient software data flows." },
    { name: "Strategic Planning", icon: Compass, desc: "Setting clear milestones and architectural stages for software systems." },
    { name: "Adaptability to Change", icon: Award, desc: "Eagerly picking up new tools, frameworks, and programming patterns." }
  ];

  return (
    <section id="about" className="py-24 bg-dark-card/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Summary Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-outfit text-2xl font-bold text-white mb-2">
              My Journey & Mindset
            </h3>
            
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <img
                src="/profile.png"
                alt="Sabarinathan Profile"
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover object-top border-2 border-indigo-500/50 shadow-lg shadow-indigo-950/30 flex-shrink-0"
              />
              <p className="text-gray-400 leading-relaxed text-base">
                {summary}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-dark-card border border-dark-border gradient-bg">
              <h4 className="font-semibold text-white mb-2 font-outfit text-lg">Career Objective</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {careerObjective}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Languages */}
              <div className="p-5 rounded-xl bg-dark-card border border-dark-border">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Globe size={16} className="text-cyan-400" />
                  Languages
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  {languages.map((lang, idx) => (
                    <li key={idx}>{lang}</li>
                  ))}
                </ul>
              </div>

              {/* Hobbies / Interests */}
              <div className="p-5 rounded-xl bg-dark-card border border-dark-border">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Heart size={16} className="text-indigo-400" />
                  Hobbies & Interests
                </h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  {hobbies.map((hobby, idx) => (
                    <li key={idx}>{hobby}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Soft Skills Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-outfit text-2xl font-bold text-white mb-2">
              Core Strengths
            </h3>

            <div className="space-y-4">
              {softSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 6 }}
                    className="p-5 rounded-xl bg-dark-card border border-dark-border flex gap-4 transition-all duration-200"
                  >
                    <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400 h-fit">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 font-outfit">{skill.name}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{skill.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
