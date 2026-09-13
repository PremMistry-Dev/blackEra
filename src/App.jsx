import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Differentiators from './components/Differentiators';
import Testimonials from './components/Testimonials';
import StoreInfo from './components/StoreInfo';
import ContactForm from './components/ContactForm';
import FitGuideModal from './components/FitGuideModal';
import Footer from './components/Footer';
import { MessageSquare, Phone, X, Check } from 'lucide-react';

export default function App() {
  const [isFitGuideOpen, setIsFitGuideOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#F8F8F8] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#050505] overflow-x-hidden">
      
      {/* 1. Header Navbar */}
      <Header onOpenFitGuide={() => setIsFitGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="w-full flex-1">
        {/* 2. Hero Section */}
        <Hero onExploreClick={() => {
          const el = document.getElementById('collections');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
        
        {/* 3. Featured Collections */}
        <Collections onSelectItem={(item) => setSelectedProduct(item)} />

        {/* 4. Why Black Era */}
        <Differentiators />

        {/* 5. Customer Reviews */}
        <Testimonials />

        {/* 6. Visit Our Store */}
        <StoreInfo />

        {/* 7. Contact Form */}
        <ContactForm />
      </main>

      {/* 8. Footer */}
      <Footer onOpenFitGuide={() => setIsFitGuideOpen(true)} />

      {/* Floating Bottom Sticky Bar for Mobile Devices */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-xl border-t border-white/10 p-3 flex items-center gap-3 shadow-2xl">
        <a
          href="tel:+919876543210"
          className="flex-1 py-3 rounded-full bg-white/5 border border-white/15 text-[#F8F8F8] font-bold text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          Call Store
        </a>

        <a
          href="https://wa.me/919876543210?text=Hi%20Black%20Era!%20I'd%20like%20to%20inquire%20about%20your%20Brand%20Jeans."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 hover:bg-emerald-500 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          WhatsApp Us
        </a>
      </div>

      {/* Size & Fit Guide Modal */}
      <FitGuideModal
        isOpen={isFitGuideOpen}
        onClose={() => setIsFitGuideOpen(false)}
      />

      {/* Product Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#111111] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-[#B8B8B8] hover:text-[#F8F8F8] transition-colors"
                aria-label="Close product quick view"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="gold-badge text-[10px]">
                  {selectedProduct.tag}
                </span>
                <span className="text-xs text-[#B8B8B8] font-semibold">
                  {selectedProduct.category}
                </span>
              </div>

              <div className="h-52 rounded-2xl overflow-hidden mb-4 bg-[#050505] border border-white/10 relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-[#050505]/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] text-[#F5D76E] font-semibold">
                  {selectedProduct.fit}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#F8F8F8] font-display mb-2">
                {selectedProduct.title}
              </h3>

              <p className="text-xs text-[#B8B8B8] mb-4 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6 space-y-2">
                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Product Highlights</div>
                {selectedProduct.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#F8F8F8]">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 btn-outline text-xs py-3"
                >
                  Close
                </button>

                <a
                  href={`https://wa.me/919876543210?text=Hi%20Black%20Era!%20I'm%20inquiring%20about%20the%20${encodeURIComponent(selectedProduct.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-whatsapp text-xs py-3"
                >
                  <MessageSquare className="w-4 h-4" />
                  Ask Stock on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
