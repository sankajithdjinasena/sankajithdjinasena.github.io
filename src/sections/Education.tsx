import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
            MY EDUCATION
          </h2>
          <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
            / ACADEMIC HISTORY
          </span>
        </div>
      </div>

      <div className="space-y-5">
        {education.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-moonstone/40 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-moonstone-dim border border-moonstone-border/30 flex items-center justify-center text-moonstone shrink-0">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-poppins">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-moonstone font-medium">
                    {item.institution}
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 self-start sm:self-auto flex items-center gap-1.5">
                <Calendar size={12} />
                {item.period}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed pl-0 sm:pl-14">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
