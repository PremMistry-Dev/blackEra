import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MessageSquare } from 'lucide-react';

export default function Collections({ onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Brand Jeans', 'Casual Shirts', 'Oversized Tees', 'Outerwear'];

  const products = [
    {
      id: 1,
      category: 'Brand Jeans',
      title: 'Royal Obsidian Slim-Fit Brand Jeans',
      tag: 'Best Seller',
      fabric: 'Stretch Premium Denim',
      fit: 'Slim / Tapered Fit',
      image: `${import.meta.env.BASE_URL}images/jeans.png`,
      description: 'Crafted with premium stretch denim fabric for all-day comfort and effortless movement. Signature dark wash finish.',
      features: ['Durable Double Stitching', 'Breathable Fabric Blend', 'Available in sizes 28 to 38']
    },
    {
      id: 2,
      category: 'Brand Jeans',
      title: 'Classic Indigo Regular Cut Jeans',
      tag: 'Customer Favorite',
      fabric: '100% Cotton Heavy Denim',
      fit: 'Regular Straight Fit',
      image: `${import.meta.env.BASE_URL}images/jeans.png`,
      description: 'The quintessential classic indigo blue denim with deep color retention and reinforced pocket linings.',
      features: ['Fade Resistant Wash', 'Heavyweight Comfort', 'Authentic Brand Leather Patch']
    },
    {
      id: 3,
      category: 'Casual Shirts',
      title: 'Olive Linen-Cotton Blend Casual Shirt',
      tag: 'Summer Special',
      fabric: 'Natural Linen & Cotton',
      fit: 'Sharp Tailored Fit',
      image: `${import.meta.env.BASE_URL}images/shirts.png`,
      description: 'Lightweight, ultra-breathable casual button-down shirt ideal for Vasai weather. Pairs perfectly with brand jeans.',
      features: ['Anti-Warp Collar', 'Breathable Weave', 'Pre-washed Soft Touch']
    },
    {
      id: 4,
      category: 'Casual Shirts',
      title: 'Charcoal Matte Oxford Casual Shirt',
      tag: 'New Arrival',
      fabric: 'Premium Oxford Cotton',
      fit: 'Modern Slim Fit',
      image: `${import.meta.env.BASE_URL}images/shirts.png`,
      description: 'Sophisticated charcoal casual shirt crafted for evening outings, casual Fridays, and royal confidence.',
      features: ['Wrinkle Resistant Finish', 'Pearl Button Details', 'Precision Tailoring']
    },
    {
      id: 5,
      category: 'Oversized Tees',
      title: 'Heavyweight Matte Black Drop-Shoulder Tee',
      tag: 'Streetwear Trend',
      fabric: '240 GSM Combed Cotton',
      fit: 'Relaxed Oversized Fit',
      image: `${import.meta.env.BASE_URL}images/tees.png`,
      description: 'High-density premium combed cotton oversized t-shirt designed for maximum comfort and sharp urban aesthetic.',
      features: ['240 GSM Heavy Fabric', 'Ribbed Crew Collar', 'Zero Shrinkage Guaranteed']
    },
    {
      id: 6,
      category: 'Outerwear',
      title: 'Black Era Signature Denim Jacket',
      tag: 'Limited Edition',
      fabric: 'Raw Denim & Cotton',
      fit: 'Classic Tailored Jacket',
      image: `${import.meta.env.BASE_URL}images/hero.png`,
      description: 'Iconic dark washed denim jacket with metal button accents and interior stash pockets.',
      features: ['Reinforced Seams', 'Dual Chest Pockets', 'Versatile Layering Piece']
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="collections" className="page-section bg-[#050505]">
      <div className="page-container">
        
        {/* Section Header */}
        <header className="section-heading">
          <h2>
            FEATURED <span className="text-gold-gradient">COLLECTIONS</span>
          </h2>
          <p>
            Explore our handpicked range of brand jeans, casual shirts, oversized tees, and menswear in Vasai West.
          </p>
        </header>

        {/* Section Content */}
        <div className="section-content">
          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#F5D76E] to-[#D4AF37] text-[#050505] shadow-md shadow-[#D4AF37]/20'
                    : 'bg-white/5 border border-white/10 text-[#B8B8B8] hover:border-[#D4AF37]/40 hover:text-[#F8F8F8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="glass-panel group overflow-hidden flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors min-w-0 rounded-[20px]"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-[#111111] w-full">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full max-w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-[#050505]/90 border border-[#D4AF37]/30 px-3 py-1 rounded-full text-[11px] font-bold text-[#F5D76E]">
                      {product.tag}
                    </div>
                  </div>

                  {/* Info Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                        {product.category} • {product.fit}
                      </div>
                      <h3 className="text-lg font-bold text-[#F8F8F8] font-display group-hover:text-[#F5D76E] transition-colors leading-snug">
                        {product.title}
                      </h3>
                      <p className="text-xs text-[#B8B8B8] mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                      <button
                        onClick={() => onSelectItem(product)}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-[#F8F8F8] flex items-center justify-center gap-2 transition-all hover:border-[#D4AF37]/40"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                        Details
                      </button>

                      <a
                        href={`https://wa.me/919876543210?text=Hi%20Black%20Era!%20I'm%20interested%20in%20inquiring%20about%20${encodeURIComponent(product.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                        title="Inquire Stock on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Ask Price
                      </a>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
