import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import PhotoSlider from '../components/PhotoSlider';

const Achievements: React.FC = () => {
  const { achievements } = portfolioData;
  const [showAll, setShowAll] = useState(false);

  const ITEMS_LIMIT = 9;
  const hasMore = achievements.length > ITEMS_LIMIT;
  const visibleItems = showAll ? achievements : achievements.slice(0, ITEMS_LIMIT);

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
            MY ACHIEVEMENTS
          </h2>
          <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
            / RECOGNITION & HACKATHONS ({achievements.length})
          </span>
        </div>
      </div>

      {/* 3 cards per row on desktop with strictly aligned vertical coordinates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              className="glass-card rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between hover:border-moonstone/40 transition-all duration-300 relative group overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />
              
              <div className="flex flex-col h-full">
                {/* Fixed-height Title Header for uniform alignment across 1-line and 2-line titles */}
                <div className="flex items-start justify-between gap-3 min-h-[3.5rem] mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-white font-poppins leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-lg bg-moonstone-dim border border-moonstone-border/30 flex items-center justify-center text-moonstone shrink-0 mt-0.5">
                    <Trophy size={15} />
                  </div>
                </div>

                {/* Fixed-height Team Badge Slot so photo slider always starts at exact same Y position */}
                <div className="h-7 flex items-center mb-2">
                  {item.team ? (
                    <span className="inline-block text-[11px] font-mono text-moonstone bg-moonstone-dim border border-moonstone-border/20 px-2.5 py-0.5 rounded-full">
                      {item.team}
                    </span>
                  ) : (
                    <span className="inline-block text-[11px] font-mono text-white/30 px-1 py-0.5">
                      Individual / Open
                    </span>
                  )}
                </div>

                {/* Uniform Photo Slider */}
                {item.photos && item.photos.length > 0 && (
                  <PhotoSlider photos={item.photos} title={item.title} />
                )}

                {/* Description */}
                <p className="text-xs text-white/80 leading-relaxed mt-2 flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Toggle Button if items exceed limit */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-moonstone/40 bg-zinc-900/60 hover:bg-moonstone hover:text-zinc-950 text-moonstone text-sm font-semibold transition-all duration-300 shadow-lg group backdrop-blur-md"
          >
            <span>{showAll ? 'Show Less' : `Show More (${achievements.length - ITEMS_LIMIT} more)`}</span>
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

export default Achievements;