import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Phone, MapPin, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const initialFormState = {
  name: '',
  email: '',
  mobile: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const { socials } = portfolioData;
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_r6z6ijf',
          template_id: 'template_b768mtw',
          user_id: 'uIwRJGRZPTy001VY1',
          template_params: {
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile || 'Not provided',
            subject: formData.subject,
            message: formData.message,
            from_name: formData.name,
            reply_to: formData.email,
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(initialFormState);
      } else {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to send message via EmailJS');
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong while sending your message. Please reach out via direct email.'
      );
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 max-w-6xl mx-auto px-0 lg:px-6 min-w-0">
      {/* Section Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
        }}
        className="mb-10 sm:mb-12 lg:mb-16 border-b border-white/10 pb-4 flex items-center justify-between"
      >
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins">
            GET IN TOUCH
          </h2>
          <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
            / SEND A MESSAGE OR CONNECT
          </span>
        </div>
      </motion.div>

      {/* Two Column Layout: Form on Left, Direct Details & Socials on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* EmailJS Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass-card p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2rem] border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />
          
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-poppins mb-1">
              Send Me a Message
            </h3>
            <p className="text-xs sm:text-sm text-white/60">
              Have a question, collaboration inquiry, or internship opportunity? Drop your details below.
            </p>
          </div>

          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2 font-poppins">
                Message Sent Successfully!
              </h4>
              <p className="text-sm text-white/70 max-w-md mb-6 leading-relaxed">
                Thank you for getting in touch! Your message has been delivered to my inbox. I will review and reply within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors border border-white/10"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-start gap-3">
                  <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-400" />
                  <div>
                    <span className="font-semibold block mb-0.5">Failed to send message:</span>
                    <span>{errorMessage || 'Please try again or email directly at ' + socials.email}</span>
                  </div>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-white/70 mb-2">
                    Full Name <span className="text-moonstone">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-moonstone focus:ring-1 focus:ring-moonstone transition-all placeholder:text-white/30"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-white/70 mb-2">
                    Email Address <span className="text-moonstone">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-moonstone focus:ring-1 focus:ring-moonstone transition-all placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Mobile & Subject Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobile" className="block text-xs font-mono text-white/70 mb-2">
                    Mobile Number <span className="text-white/40">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="e.g. +94 71 123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-moonstone focus:ring-1 focus:ring-moonstone transition-all placeholder:text-white/30"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-white/70 mb-2">
                    Subject <span className="text-moonstone">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-moonstone focus:ring-1 focus:ring-moonstone transition-all placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-white/70 mb-2">
                  Your Message <span className="text-moonstone">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-moonstone focus:ring-1 focus:ring-moonstone transition-all placeholder:text-white/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full btn-shine flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl border border-moonstone bg-moonstone hover:bg-white text-zinc-950 font-bold text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(224,231,255,0.25)]"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info & Social Connections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          {/* Direct Details Glass Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />
            
            <h4 className="text-lg font-bold text-white font-poppins mb-5">
              Contact Information
            </h4>

            <div className="space-y-4">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-moonstone/40 hover:bg-white/10 transition-all group/item"
              >
                <div className="w-10 h-10 rounded-lg bg-moonstone-dim border border-moonstone-border/20 flex items-center justify-center text-moonstone shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase text-[#aaa] block">Email</span>
                  <span className="text-xs sm:text-sm text-white font-medium group-hover/item:text-moonstone transition-colors truncate block">
                    {socials.email}
                  </span>
                </div>
              </a>

              {socials.mobile && (
                <a
                  href={`tel:${socials.mobile.replace(/\s+/g, '')}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-moonstone/40 hover:bg-white/10 transition-all group/item"
                >
                  <div className="w-10 h-10 rounded-lg bg-moonstone-dim border border-moonstone-border/20 flex items-center justify-center text-moonstone shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#aaa] block">Phone / Mobile</span>
                    <span className="text-xs sm:text-sm text-white font-medium group-hover/item:text-moonstone transition-colors truncate block">
                      {socials.mobile}
                    </span>
                  </div>
                </a>
              )}

              {socials.location && (
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-moonstone-dim border border-moonstone-border/20 flex items-center justify-center text-moonstone shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-[#aaa] block">Location</span>
                    <span className="text-xs sm:text-sm text-white font-medium block">
                      {socials.location}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-moonstone-dim border border-moonstone-border/20 flex items-center justify-center text-moonstone shrink-0">
                  <Clock size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase text-[#aaa] block">Response Time</span>
                  <span className="text-xs sm:text-sm text-white font-medium block">
                    Within 24 Hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Glass Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-moonstone/40 to-transparent group-hover:via-moonstone transition-all duration-500" />
            
            <h4 className="text-lg font-bold text-white font-poppins mb-4">
              Connect Online
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-moonstone/50 hover:bg-moonstone/10 text-white hover:text-moonstone transition-all text-xs font-mono"
              >
                <Linkedin size={16} className="text-moonstone" />
                <span>LinkedIn</span>
              </a>

              {socials.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-moonstone/50 hover:bg-moonstone/10 text-white hover:text-moonstone transition-all text-xs font-mono"
                >
                  <Github size={16} className="text-moonstone" />
                  <span>GitHub</span>
                </a>
              )}

              {socials.medium && (
                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Medium"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-moonstone/50 hover:bg-moonstone/10 text-white hover:text-moonstone transition-all text-xs font-mono"
                >
                  <span className="text-moonstone font-bold text-sm">M</span>
                  <span>Medium</span>
                </a>
              )}

              {socials.portfolioUrl && (
                <a
                  href={socials.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Portfolio"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-moonstone/50 hover:bg-moonstone/10 text-white hover:text-moonstone transition-all text-xs font-mono"
                >
                  <span className="text-moonstone font-bold text-sm">🌐</span>
                  <span>Portfolio</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
