import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Md Rizwan',
      initials: 'MR',
      rating: 5,
      review: 'Recently purchased this outfit and I’m really happy with my choice. Perfect fit and great quality!'
    },
    {
      name: 'Farman Siddiki',
      initials: 'FS',
      rating: 5,
      review: 'Clothing is very comfortable and good febric I\'m so happy 😊'
    },
    {
      name: 'C R',
      initials: 'CR',
      rating: 5,
      review: 'Good collection Brand jeans and sharp tailored fits.'
    }
  ];

  return (
    <section id="reviews" className="page-section bg-[#050505]">
      <div className="page-container">
        
        {/* Section Header */}
        <header className="section-heading">
          <h2>
            CUSTOMER <span className="text-gold-gradient">REVIEWS</span>
          </h2>
          <p>
            Real feedback from our shoppers in Vasai West.
          </p>
        </header>

        {/* Section Content */}
        <div className="section-content">
          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#111214] p-7 rounded-[20px] border border-white/5 flex flex-col justify-between hover:border-[#D4AF37]/30 transition-colors min-w-0"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-sm text-[#F8F8F8] leading-relaxed font-medium italic">
                    "{rev.review}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs text-[#F5D76E]">
                    {rev.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#F8F8F8] font-display">
                      {rev.name}
                    </div>
                    <div className="text-[11px] text-[#B8B8B8]">
                      Google Review
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Section Footer — Read Google Reviews link */}
          <div className="section-footer mt-10 text-center">
            <a
              href="https://maps.google.com/?q=Black+Era+Crafted+For+King's+Vasai+West"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F5D76E] hover:text-white transition-colors"
            >
              <span className="underline underline-offset-4">Read Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
