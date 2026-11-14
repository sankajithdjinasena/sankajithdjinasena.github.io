import React from 'react';
import { motion } from 'motion/react';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const getAssetPath = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

const Hero = () => {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-24 pb-16 px-0 flex flex-col items-center justify-center lg:min-h-screen lg:py-0 lg:px-6"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 w-full max-w-5xl min-w-0 px-4 sm:px-6 lg:px-8"
      >
        {/* Availability Status Badge */}
        {personal.availability.status && (
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{personal.availability.text}</span>
          </motion.div>
        )}

        {/* Intro Tag */}
        <motion.p
          variants={itemVariants}
          className="text-[#aaa] text-sm sm:text-base uppercase tracking-[0.25em] mb-2 font-mono font-medium"
        >
          Hi, I'm
        </motion.p>

        {/* Main Name */}
        <motion.h1
          variants={itemVariants}
          className="text-[clamp(1.65rem,5.2vw,5rem)] mb-3 sm:mb-4 font-bold tracking-tight text-white leading-tight font-poppins whitespace-nowrap"
        >
          {personal.name}
        </motion.h1>

        {/* Clean Static Subtitle without Any Boxes or Keyword Cycling */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-moonstone font-poppins font-semibold tracking-wide mb-6"
        >
          Data Science Undergraduate
        </motion.div>

        {/* Profile Bio from Latest CV */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 font-normal px-2"
        >
          {personal.shortBio}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto mb-10"
        >
          <a
            href={getAssetPath(personal.cvUrl)}
            target="_blank"
            rel="noopener noreferrer"
            download={personal.cvName}
            className="w-full sm:w-auto btn-shine inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-moonstone text-zinc-950 font-bold text-sm sm:text-base bg-moonstone hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(224,231,255,0.25)]"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto btn-shine inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm sm:text-base bg-white/5 hover:bg-white hover:text-zinc-950 transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-moonstone" />
            <span>Contact Me</span>
          </a>

          <a
            href="#works"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-transparent text-white/70 hover:text-white font-medium text-sm transition-colors duration-300"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 text-moonstone" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
