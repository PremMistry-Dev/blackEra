import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Scissors, Layers } from 'lucide-react';

export default function Differentiators() {
  const benefits = [
    {
      icon: Crown,
      title: 'Famous For Brand Jeans',
      description: 'Curated high-grade brand denim in diverse washes, stretch fits, and durable cuts engineered for daily wear.'
    },
    {
      icon: Layers,
      title: 'Ultra-Comfortable Fabrics',
      description: 'Breathable natural cottons and premium linen blends chosen specifically for softness and all-day comfort.'
    },
    {
      icon: Scissors,
      title: 'Sharp & Tailored Fits',
      description: 'Silhouettes crafted to enhance your body profile — from tapered denim to crisp casual button-downs.'
    }
  ];

  return (
    <section id="why-us" className="page-section bg-[#0B0B0B]">
      <div className="page-container">

        {/* Section Header */}
        <header className="section-heading">
          <h2>
            WHY <span className="text-gold-gradient">BLACK ERA</span>
          </h2>
          <p>
            We curate confidence with premium fabrics, sharp fits, and personal attention in Vasai West.
          </p>
        </header>

        {/* Section Content */}
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#141518] p-7 rounded-[20px] border border-white/5 space-y-4 hover:border-[#D4AF37]/30 transition-colors group min-w-0"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F5D76E] group-hover:border-[#D4AF37] transition-all">
                    <IconComponent className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F8F8F8] font-display group-hover:text-[#F5D76E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B8B8B8] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
