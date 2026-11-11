import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const References = () => {
  const { references } = portfolioData;

  return (
    <section id="references" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
            ACADEMIC & PROFESSIONAL REFERENCES
          </h2>
          <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
            / ENDORSEMENTS
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {references.map((ref) => (
          <div
            key={ref.id}
            className="glass-card rounded-2xl border border-white/10 p-6 sm:p-8 hover:border-moonstone/40 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />
            
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-moonstone-dim border border-moonstone-border/30 flex items-center justify-center text-moonstone shrink-0">
                <Users size={22} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-poppins">
                  {ref.name}
                </h3>
                <p className="text-sm text-moonstone font-medium">
                  {ref.title}
                </p>
                <p className="text-xs text-white/60 mt-0.5">
                  {ref.institution}
                </p>
              </div>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/5 text-xs sm:text-sm">
              <a
                href={`mailto:${ref.email}`}
                className="flex items-center gap-2.5 text-white/80 hover:text-moonstone transition-colors font-mono"
              >
                <Mail size={15} className="text-moonstone shrink-0" />
                <span>{ref.email}</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/80 font-mono">
                <Phone size={15} className="text-moonstone shrink-0" />
                <span>{ref.mobile}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
