import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, MessageSquare, Ruler } from 'lucide-react';

export default function FitGuideModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          ></motion.div>

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-[#111111] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#B8B8B8] hover:text-[#F8F8F8] transition-colors border border-white/10"
              aria-label="Close fit guide"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#F5D76E]">
                <Ruler className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F8F8F8] font-display">
                  Black Era Size & Fit Guide
                </h3>
                <p className="text-xs text-[#B8B8B8]">
                  Find your ideal denim waist & sharp shirt silhouette
                </p>
              </div>
            </div>

            {/* Content Breakdown */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
                  1. Brand Jeans Fits Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-sm font-bold text-[#F8F8F8] mb-1 font-display">Slim Tapered Cut</div>
                    <p className="text-xs text-[#B8B8B8] leading-relaxed">Snug through the thigh, narrowing cleanly at the ankle. Gives a sleek modern look without restricting movement.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-sm font-bold text-[#F8F8F8] mb-1 font-display">Regular Straight Fit</div>
                    <p className="text-xs text-[#B8B8B8] leading-relaxed">Timeless straight cut from hip to hem. Perfect for classic comfort and versatile daily wear.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-sm font-bold text-[#F8F8F8] mb-1 font-display">Comfort Stretch Denim</div>
                    <p className="text-xs text-[#B8B8B8] leading-relaxed">2% elastane blend denim that flexes as you walk, sit, or ride. Ideal for all-day active comfort.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="text-sm font-bold text-[#F8F8F8] mb-1 font-display">Relaxed Streetwear Fit</div>
                    <p className="text-xs text-[#B8B8B8] leading-relaxed">Roomier thigh clearance with modern break. Pairs best with oversized tees and sneakers.</p>
                  </div>
                </div>
              </div>

              {/* Waist Size Table */}
              <div>
                <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-3">
                  2. Denim Waist Size Reference (Inches)
                </h4>
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#D4AF37]/15 border-b border-[#D4AF37]/25 text-[#F5D76E] font-bold">
                        <th className="p-3">Tag Size</th>
                        <th className="p-3">Waist (Inches)</th>
                        <th className="p-3">Length (Inches)</th>
                        <th className="p-3">Recommended Build</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[#B8B8B8]">
                      <tr>
                        <td className="p-3 font-bold text-[#F8F8F8]">28 - 30</td>
                        <td className="p-3">28" – 30"</td>
                        <td className="p-3">30" – 32"</td>
                        <td className="p-3">Slim / Athletic</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-[#F8F8F8]">32 - 34</td>
                        <td className="p-3">32" – 34"</td>
                        <td className="p-3">32" – 34"</td>
                        <td className="p-3">Medium / Standard</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-[#F8F8F8]">36 - 38</td>
                        <td className="p-3">36" – 38"</td>
                        <td className="p-3">34"</td>
                        <td className="p-3">Broad / Relaxed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#B8B8B8]">
                  Not sure about your size? We offer in-store try-ons and alterations in Vasai West!
                </div>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Black%20Era!%20Can%20you%20help%20me%20determine%20the%20right%20jeans%20size?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-2.5 px-5 text-xs shrink-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  Ask Fit Specialist
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
