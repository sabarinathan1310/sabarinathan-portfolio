import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Layout, Settings } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Mapping categories to modern icons
const categoryIcons = {
  "Programming Languages": Code,
  "Web Technologies": Layout,
  "Database": Server,
  "Tools & CRM": Settings
};

export default function Skills() {
  const allSkills = portfolioData.skills.filter(cat => cat.category !== "Soft Skills");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...allSkills.map(s => s.category)];

  const getSkillsToDisplay = () => {
    if (selectedCategory === "All") {
      return allSkills;
    }
    return allSkills.filter(s => s.category === selectedCategory);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md'
                  : 'bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {getSkillsToDisplay().map((catData, idx) => {
            const Icon = categoryIcons[catData.category] || Code;
            return (
              <motion.div
                layout
                key={idx}
                className="p-6 rounded-2xl bg-dark-card border border-dark-border gradient-bg shadow-lg hover:border-indigo-500/35 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-outfit text-xl font-bold text-white">
                    {catData.category}
                  </h3>
                </div>

                {/* Skills inside this category */}
                <div className="space-y-4">
                  {catData.items.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                        <span className="text-xs font-semibold text-indigo-400">{skill.level}</span>
                      </div>
                      
                      {/* Skill Meter Bar */}
                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{
                            width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "85%" : "70%"
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
