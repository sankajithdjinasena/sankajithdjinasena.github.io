import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ShieldCheck, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  const ITEMS_LIMIT = 9;
  const hasMore = certifications.length > ITEMS_LIMIT;
  const visibleItems = showAll ? certifications : certifications.slice(0, ITEMS_LIMIT);

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
            MY CERTIFICATIONS
          </h2>
          <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
            / VERIFIED CREDENTIALS ({certifications.length})
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((cert, index) => {
            const isFeatured = cert.featured || cert.id === 'cert-datacamp-dsa';

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                className={`glass-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden h-full ${
                  isFeatured
                    ? 'border-amber-400/50 hover:border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.12)] bg-gradient-to-b from-amber-500/[0.08] via-zinc-950/70 to-zinc-950/90'
                    : 'border-white/10 hover:border-moonstone/40'
                }`}
              >
                {/* Gold accent line for featured certificate, moonstone for regular */}
                <div
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                    isFeatured
                      ? 'h-[3px] bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-500 shadow-[0_0_12px_rgba(251,191,36,0.7)]'
                      : 'h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone'
                  }`}
                />

                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isFeatured
                          ? 'bg-amber-400/15 border border-amber-400/40 text-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.25)]'
                          : 'bg-moonstone-dim border border-moonstone-border/20 text-moonstone'
                      }`}
                    >
                      {isFeatured ? <Award size={18} /> : <ShieldCheck size={18} />}
                    </div>

                    <div className="flex items-center gap-2">
                      {cert.year && (
                        <span
                          className={`text-xs font-mono px-2.5 py-0.5 rounded ${
                            isFeatured
                              ? 'text-amber-200 bg-amber-400/10 border border-amber-400/30'
                              : 'text-moonstone bg-white/5 border border-white/10'
                          }`}
                        >
                          {cert.year}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="min-h-[3rem] mb-1">
                    <h3
                      className={`text-base sm:text-lg font-bold font-poppins leading-snug line-clamp-2 transition-colors ${
                        isFeatured
                          ? 'text-white group-hover:text-amber-300'
                          : 'text-white group-hover:text-moonstone'
                      }`}
                    >
                      {cert.title}
                    </h3>
                  </div>

                  <p
                    className={`text-xs font-semibold mb-3 font-mono h-5 truncate ${
                      isFeatured ? 'text-amber-400' : 'text-moonstone'
                    }`}
                  >
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-white/70 leading-relaxed mb-4 flex-grow">
                    {cert.description}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-mono transition-colors border-t pt-3 mt-auto ${
                        isFeatured
                          ? 'text-amber-400 hover:text-amber-200 border-amber-400/20'
                          : 'text-moonstone hover:text-white border-white/5'
                      }`}
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Toggle Button if items exceed limit */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-moonstone/40 bg-zinc-900/60 hover:bg-moonstone hover:text-zinc-950 text-moonstone text-sm font-semibold transition-all duration-300 shadow-lg group backdrop-blur-md"
          >
            <span>{showAll ? 'Show Less' : `Show More (${certifications.length - ITEMS_LIMIT} more)`}</span>
            {showAll ? (
              <ChevronUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Certifications;
