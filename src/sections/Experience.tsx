import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getAssetPath = (path: string) => {
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

const Experience: React.FC = () => {
  const { workExperience } = portfolioData;

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
            MY EXPERIENCE
          </h2>
          <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
            / CAREER PATH
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {workExperience.map((item) => (
          <div
            key={item.id}
            className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-moonstone/40 transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                {item.logo && (
                  <div className="w-16 h-14 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0">
                    <img
                      src={getAssetPath(item.logo)}
                      alt={item.organization}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-poppins">
                    {item.role}
                  </h3>
                  <p className="text-sm text-moonstone font-medium">
                    {item.organization}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#aaa] mt-0.5">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                </div>
              </div>

              {item.contract && (
                <p className="text-xs font-mono text-white/60 mb-3 bg-white/5 border border-white/10 px-3 py-1 rounded-md inline-block">
                  {item.contract}
                </p>
              )}

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
