import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const educationList = portfolioData.education;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-dark-border pl-6 md:pl-10 space-y-12">
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500 group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300"></div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-dark-card border border-dark-border gradient-bg shadow-md group-hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    {/* Degree */}
                    <h3 className="font-outfit text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {edu.degree}
                    </h3>
                    {/* Institution */}
                    <p className="text-gray-300 font-semibold text-sm mt-1 flex items-center gap-1.5">
                      <GraduationCap size={16} className="text-indigo-400" />
                      {edu.institution}
                    </p>
                  </div>

                  {/* Period badge */}
                  <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-300 bg-slate-900/60 border border-dark-border h-fit w-fit">
                    <Calendar size={12} className="text-cyan-400" />
                    {edu.period}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-medium px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
                    {edu.status}
                  </span>
                  
                  {/* Geographic Location */}
                  <span className="flex items-center gap-1 text-[11px]">
                    <MapPin size={12} />
                    Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
