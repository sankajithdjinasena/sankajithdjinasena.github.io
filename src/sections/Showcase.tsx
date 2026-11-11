import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  ExternalLink,
  FileText,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bot,
  BarChart3,
  Globe,
  Database,
  Layers,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';
import { portfolioData, ProjectItem } from '../data/portfolioData';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const getImagePath = (path: string | null) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

const Showcase: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'powerbi' | 'analytics' | 'web'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Auto-play / Automatic change feature
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const AUTOPLAY_DURATION = 6000; // 6 seconds per project

  // Filter projects by category
  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'powerbi') return p.category === 'powerbi' || p.category === 'analytics';
    return p.category === selectedCategory;
  });

  // Clamp index if filtered list changes
  useEffect(() => {
    setCurrentIndex(0);
    setActiveImageIndex(0);
  }, [selectedCategory]);

  const currentProject: ProjectItem = filteredProjects[currentIndex] || filteredProjects[0];

  const nextProject = () => {
    setDirection(1);
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setActiveImageIndex(0);
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // Automatic slide changing timer
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveImageIndex(0);
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isAutoPlay, isHovered, filteredProjects.length, currentIndex]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredProjects.length]);

  // Touch gesture support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextProject(); // Swiped left -> next
    if (diff < -50) prevProject(); // Swiped right -> prev
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      filter: 'blur(4px)',
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.45,
        ease: EASE,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      filter: 'blur(4px)',
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    }),
  };

  // Helper icon for blueprint placeholder
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai':
        return <Bot className="w-12 h-12 text-moonstone" />;
      case 'powerbi':
      case 'analytics':
        return <BarChart3 className="w-12 h-12 text-moonstone" />;
      case 'web':
        return <Globe className="w-12 h-12 text-moonstone" />;
      default:
        return <Cpu className="w-12 h-12 text-moonstone" />;
    }
  };

  // Images for the active project
  const availableImages = currentProject.images && currentProject.images.length > 0
    ? currentProject.images
    : currentProject.image
    ? [currentProject.image]
    : [];

  const currentActiveImage = availableImages[activeImageIndex] || null;

  const targetLink = currentProject.github || currentProject.live || currentProject.pdf;

  return (
    <section
      id="works"
      className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Section Heading & Category Filter Bar */}
      <div className="mb-8 sm:mb-12 border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
            FEATURED WORK
          </h2>
          <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
            / INTERACTIVE SHOWCASE ({currentIndex + 1} of {filteredProjects.length})
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {(
            [
              { key: 'all', label: 'All Projects' },
              { key: 'ai', label: 'AI & Machine Learning' },
              { key: 'powerbi', label: 'Power BI & Analytics' },
              { key: 'web', label: 'Web Applications' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
                selectedCategory === tab.key
                  ? 'bg-moonstone text-zinc-950 font-bold shadow-[0_0_12px_rgba(224,231,255,0.4)]'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Carousel Stage with Swap Left/Right */}
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Floating Header (Counter + Auto-Play Toggle + Next/Prev Buttons) */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-moonstone px-3 py-1 rounded-full bg-moonstone-dim border border-moonstone-border/20">
              PROJECT {String(currentIndex + 1).padStart(2, '0')} / {String(filteredProjects.length).padStart(2, '0')}
            </span>

            {/* Auto-Play Toggle Option */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border transition-all duration-300 ${
                isAutoPlay
                  ? 'bg-moonstone/15 border-moonstone/40 text-moonstone hover:bg-moonstone/25 shadow-[0_0_10px_rgba(224,231,255,0.2)]'
                  : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10'
              }`}
              title={isAutoPlay ? 'Click to Pause Auto-Play' : 'Click to Enable Auto-Play'}
            >
              {isAutoPlay ? <Pause size={11} /> : <Play size={11} />}
              <span>{isAutoPlay ? 'Auto-Cycle ON' : 'Auto-Cycle OFF'}</span>
            </button>
          </div>

          {/* Swap Left/Right Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-moonstone hover:text-zinc-950 text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextProject}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-moonstone hover:text-zinc-950 text-white flex items-center justify-center transition-all duration-300 shadow-md active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Slide Container */}
        <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 glass-card">
          {/* Animated Autoplay Progress Bar */}
          {isAutoPlay && !isHovered && (
            <motion.div
              key={currentIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: AUTOPLAY_DURATION / 1000, ease: 'linear' }}
              className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-moonstone to-white z-30 shadow-[0_0_10px_rgba(224,231,255,0.6)]"
            />
          )}

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center h-full"
            >
              {/* Left Column: Project Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full min-w-0">
                <div>
                  {/* Category & Period Pill */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-moonstone-dim text-moonstone border border-moonstone-border/20">
                      {currentProject.category.toUpperCase()}
                    </span>
                    {currentProject.period && (
                      <span className="text-[11px] font-mono text-white/50">
                        {currentProject.period}
                      </span>
                    )}
                  </div>

                  {/* Project Name & Tagline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-poppins mb-2 tracking-tight leading-tight">
                    {currentProject.name}
                  </h3>
                  <p className="text-sm sm:text-base text-moonstone font-medium mb-4 leading-snug">
                    {currentProject.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                    {currentProject.description}
                  </p>

                  {/* Key Highlights Bulleted */}
                  {currentProject.keyHighlights && currentProject.keyHighlights.length > 0 && (
                    <div className="space-y-2 mb-6 border-l-2 border-moonstone/40 pl-4 py-1">
                      {currentProject.keyHighlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                          <CheckCircle2 size={14} className="text-moonstone mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono tracking-wider text-white/80 border border-white/10 bg-white/5 px-3 py-1 rounded-lg uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links directly to specific repo / demo */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-moonstone bg-moonstone hover:bg-white text-zinc-950 font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(224,231,255,0.25)]"
                    >
                      <Github size={16} />
                      <span>View GitHub Repository</span>
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  )}

                  {currentProject.live && currentProject.live !== currentProject.github && (
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white hover:text-zinc-950 text-white font-medium text-xs tracking-wider uppercase transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Showcase</span>
                    </a>
                  )}

                  {currentProject.pdf && (
                    <a
                      href={currentProject.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white hover:text-zinc-950 text-white font-medium text-xs tracking-wider uppercase transition-all duration-300"
                    >
                      <FileText size={16} />
                      <span>Project Report / PDF</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Preview or Blueprint Canvas (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                {currentActiveImage ? (
                  /* Project Image Container with Gallery Switcher */
                  <div className="w-full relative group">
                    <a
                      href={targetLink || '#'}
                      target={targetLink ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950/60 aspect-[16/10] sm:aspect-[16/11] flex items-center justify-center cursor-pointer group"
                    >
                      <img
                        src={getImagePath(currentActiveImage) || ''}
                        alt={currentProject.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity pointer-events-none" />
                      
                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono border border-white/20">
                          <ExternalLink size={12} className="text-moonstone" />
                          <span>Open Project</span>
                        </span>
                      </div>
                    </a>

                    {/* Multi-Image Switcher Dots if project has multiple images */}
                    {availableImages.length > 1 && (
                      <div className="flex items-center justify-center gap-2 mt-3">
                        {availableImages.map((_, imgIdx) => (
                          <button
                            key={imgIdx}
                            onClick={() => setActiveImageIndex(imgIdx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              activeImageIndex === imgIdx
                                ? 'w-6 bg-moonstone shadow-[0_0_10px_rgba(224,231,255,0.4)]'
                                : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                            aria-label={`View photo ${imgIdx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* High-Tech Blueprint Mockup Canvas (Linked directly to repo) */
                  <a
                    href={targetLink || '#'}
                    target={targetLink ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/60 p-6 sm:p-8 flex flex-col items-center justify-between min-h-[300px] sm:min-h-[340px] shadow-inner text-center group cursor-pointer hover:border-moonstone/40 transition-all duration-300"
                  >
                    {/* Top status tag */}
                    <div className="w-full flex items-center justify-between text-[11px] font-mono text-white/40 border-b border-white/5 pb-3">
                      <span className="flex items-center gap-1.5 text-moonstone">
                        <span className="w-2 h-2 rounded-full bg-moonstone animate-pulse" />
                        ARCHITECTURE VERIFIED
                      </span>
                      <span>PROJECT #{String(currentProject.id).padStart(2, '0')}</span>
                    </div>

                    {/* Central Glowing Icon & Pipeline Flow */}
                    <div className="my-6 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-moonstone-dim border border-moonstone-border/30 flex items-center justify-center shadow-[0_0_30px_rgba(224,231,255,0.15)] group-hover:scale-110 transition-transform duration-500">
                        {getCategoryIcon(currentProject.category)}
                      </div>
                      <div className="text-xs font-mono text-moonstone uppercase tracking-wider group-hover:text-white transition-colors">
                        {currentProject.name.split('–')[0].split('-')[0].trim()}
                      </div>
                      <p className="text-[11px] text-white/50 max-w-xs font-mono">
                        Click to view source code on GitHub
                      </p>
                    </div>

                    {/* Bottom Status Badge */}
                    <div className="w-full pt-3 border-t border-white/5 flex items-center justify-center gap-2 text-[11px] font-mono text-moonstone group-hover:text-white transition-colors">
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub Repository</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Pagination Strip (One-Click Jump to any project) */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {filteredProjects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
                setActiveImageIndex(0);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 sm:w-10 bg-moonstone shadow-[0_0_12px_rgba(224,231,255,0.4)]'
                  : 'w-2 bg-white/20 hover:bg-white/50'
              }`}
              title={p.name}
              aria-label={`Jump to project ${idx + 1}: ${p.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;