import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Instagram, Github, Mail, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const { socials } = portfolioData;
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#works', id: 'works' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Volunteering', href: '#volunteering', id: 'volunteering' },
    { name: 'Certificates', href: '#certifications', id: 'certifications' },
    { name: 'References', href: '#references', id: 'references' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, id, _href) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMobileMenuOpen(false);
  };

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: socials.linkedin },
    ...(socials.instagram ? [{ icon: <Instagram size={20} />, href: socials.instagram }] : []),
    { icon: <Github size={20} />, href: socials.github },
    { icon: <Mail size={20} />, href: `mailto:${socials.email}` },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-[90px] xl:w-[130px] z-50 hidden lg:flex flex-col items-start pl-4 xl:pl-6 justify-center">
        <div className="flex flex-col items-start space-y-2 py-6 overflow-y-auto max-h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id, link.href)}
              className={`relative group text-[11px] xl:text-[12px] tracking-[0.18em] uppercase transition-colors duration-300 py-1 flex items-center whitespace-nowrap font-mono ${
                activeSection === link.id ? 'text-moonstone font-bold' : 'text-[#888] hover:text-white'
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-[-2px] h-[1.5px] bg-moonstone transition-transform duration-300 ease-out origin-left ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
                style={{ width: '100%' }}
              />
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile Nav Top Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 lg:hidden px-4 sm:px-6 py-3 sm:py-4 flex justify-end items-center pointer-events-none">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white min-h-[44px] min-w-[44px] flex items-center justify-center pointer-events-auto"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 sm:gap-8 px-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id, link.href)}
                className={`text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.3em] min-h-11 flex items-center transition-colors duration-300 ${
                  activeSection === link.id ? 'text-white font-bold' : 'text-[#aaa]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 text-[#aaa]">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors min-h-11 min-w-11 flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
