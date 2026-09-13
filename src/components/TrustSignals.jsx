import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, ShieldCheck, Clock, CheckCircle, MessageSquare } from 'lucide-react';

export default function TrustSignals() {
  const cards = [
    {
      icon: Star,
      title: '5.0 Google Rating',
      subtitle: 'Based on authentic local reviews',
      highlight: '⭐ 5.0 / 5.0'
    },
    {
      icon: ShieldCheck,
      title: '500+ Denim Styles',
      subtitle: 'Skinny, Slim, Straight & Regular',
      highlight: '👖 Brand Jeans'
    },
    {
      icon: Clock,
      title: 'Open Daily',
      subtitle: '10:30 AM – 10:00 PM Mon to Sun',
      highlight: '🕒 7 Days / Week'
    },
    {
      icon: CheckCircle,
      title: 'Premium Brands',
      subtitle: 'Ultra-comfort long lasting fabrics',
      highlight: '✔ Guaranteed Quality'
    }
  ];

  return (
    <section className="py-16 bg-[#050505] border-y border-white/5 relative z-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* 4 Equal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel p-6 rounded-2xl flex flex-col justify-between group hover:border-[#D4AF37]/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full">
                    {card.highlight}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F5D76E] group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F8F8F8] font-display mb-1 group-hover:text-[#F5D76E] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#B8B8B8] leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlighted WhatsApp Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#D4AF37]/15 via-[#111111] to-[#111111] border border-[#D4AF37]/25 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#F5D76E]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F8F8F8] font-display">
                Looking for the Perfect Fit & Premium Denim in Vasai?
              </h3>
              <p className="text-xs text-[#B8B8B8] mt-0.5">
                Black Era Crafted For King's is locally trusted for offering high-grade brand jeans that last long and fit exceptionally sharp.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Black%20Era!%20I'd%20like%20to%20check%20available%20jeans%20sizes%20and%20fits."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp whitespace-nowrap text-xs py-3 px-6 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            Check Sizes on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
