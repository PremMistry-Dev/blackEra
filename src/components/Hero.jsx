import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Navigation } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section id="hero" className="page-section overflow-hidden bg-[#050505]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left min-w-0"
          >
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8F8F8] font-display leading-[1.08] tracking-tight uppercase">
              CRAFTED FOR <span className="text-gold-gradient">KINGS</span>. <br />
              DEFINED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F8F8F8] to-[#B8B8B8]">SHARP FITS.</span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-[#B8B8B8] max-w-[60ch] font-normal leading-relaxed">
              Vasai West's premier men's fashion store. Specializing in high-grade brand jeans, comfortable casual shirts, oversized tees, and sharp tailored fits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#collections"
                onClick={onExploreClick}
                className="btn-gold group"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://maps.google.com/?q=Black+Era+Crafted+For+King's+Vasai+West"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Get Store Directions</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column — Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative min-w-0"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none group rounded-3xl overflow-hidden border border-white/10 bg-[#111111] shadow-2xl">
              <img
                src="/images/hero.png"
                alt="Black Era Crafted For King's Store Showcase"
                className="w-full max-w-full h-[460px] lg:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
