import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Menu, X, Crown, Sparkles } from 'lucide-react';

export default function Header({ onOpenFitGuide }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'collections', 'why-us', 'reviews', 'store-info', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Collections', href: '#collections', id: 'collections' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Store Info', href: '#store-info', id: 'store-info' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl' 
        : 'bg-gradient-to-b from-[#050505] to-transparent py-6'
    }`}>
      <div className="page-container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group text-decoration-none min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5D76E] to-[#D4AF37] flex items-center justify-center shadow-md shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform shrink-0">
            <Crown className="w-5 h-5 text-[#050505]" />
          </div>
          <div>
            <div className="text-xl md:text-2xl font-extrabold tracking-tight text-[#F8F8F8] font-display">
              BLACK ERA
            </div>
            <div className="text-[9px] tracking-[0.25em] text-[#D4AF37] font-bold uppercase -mt-1">
              Crafted For King's
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link-gold text-sm font-semibold transition-colors ${
                activeSection === link.id ? 'text-[#F5D76E] active' : 'text-[#B8B8B8] hover:text-[#F8F8F8]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenFitGuide}
            className="text-xs font-bold px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 text-[#F8F8F8] hover:text-[#F5D76E] transition-all flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            Fit Guide
          </button>

          <a
            href="https://wa.me/919876543210?text=Hi%20Black%20Era!%20I%20want%20to%20inquire%20about%20your%20Brand%20Jeans%20and%20latest%20men's%20collection."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center gap-2 transition-all shadow-md shadow-emerald-950/40"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 text-[#F8F8F8] hover:text-[#D4AF37] border border-white/10 shrink-0"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-6 mt-3 space-y-4 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-1.5 transition-colors ${
                    activeSection === link.id ? 'text-[#F5D76E] font-bold' : 'text-[#B8B8B8] hover:text-[#F8F8F8]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFitGuide();
                }}
                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-[#F5D76E] font-bold text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                Size & Fit Guide
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%20Black%20Era!%20I'd%20like%20to%20know%20more%20about%20your%20Brand%20Jeans%20and%20casual%20wear."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Store Inquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
