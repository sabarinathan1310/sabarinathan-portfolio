import React from 'react';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const certifications = portfolioData.certifications;

  return (
    <section id="certifications" className="py-24 bg-dark-card/30 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-4">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-sm max-w-lg mx-auto">
            Professional qualifications and specialized course completions that expand my engineering knowledge.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-dark-card border border-dark-border flex flex-col md:flex-row gap-5 shadow-lg group hover:border-indigo-500/35 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative faint background badge icon */}
              <div className="absolute right-[-10px] bottom-[-10px] text-slate-800/10 group-hover:text-indigo-500/5 group-hover:scale-110 transition-all duration-300 pointer-events-none">
                <Award size={120} />
              </div>

              {/* Icon Container */}
              <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-400 h-fit w-fit flex-shrink-0">
                <ShieldCheck size={24} />
              </div>

              {/* Text details */}
              <div className="flex-grow flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="font-outfit text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-semibold mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-slate-900 px-2.5 py-1 rounded-md border border-dark-border flex-shrink-0">
                    {cert.duration}
                  </span>
                </div>

                <p className="text-gray-400 text-xs md:text-sm mt-2 leading-relaxed flex-grow">
                  {cert.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-xs text-indigo-400 group-hover:text-indigo-300 font-semibold cursor-pointer">
                  Verify Credential
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
