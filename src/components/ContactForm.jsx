import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Brand Jeans',
    size: '32',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hi Black Era Crafted For King's!%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Interested In:* ${encodeURIComponent(formData.category)} (Size: ${encodeURIComponent(formData.size)})%0A*Message:* ${encodeURIComponent(formData.message || 'I would like to check stock/visit store.')}`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="page-section bg-[#050505]">
      <div className="page-container">
        
        {/* Section Header */}
        <header className="section-heading">
          <h2>
            CONTACT <span className="text-gold-gradient">BLACK ERA</span>
          </h2>
          <p>
            Have a size question or looking for a specific brand jean fit? Send us a message or reach out via WhatsApp.
          </p>
        </header>

        {/* Section Content */}
        <div className="section-content contact-content">
          <div className="contact-form-card shadow-2xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#F8F8F8] font-display">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-[#B8B8B8] mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#F5D76E] font-bold">{formData.name}</span>. We will check stock availability for size {formData.size} in {formData.category}.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="btn-whatsapp text-xs py-3.5 px-6 h-12"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Forward to WhatsApp
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline text-xs py-3.5 px-6 h-12"
                    >
                      Submit Another
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 w-full">
                  
                  {/* Row 1: Name | Phone */}
                  <div className="contact-form-grid">
                    <div className="space-y-1.5 min-w-0">
                      <label className="block text-xs font-bold text-[#F8F8F8] uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Farman Siddiki"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full max-w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#F8F8F8] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-[#71717A] box-border"
                      />
                    </div>

                    <div className="space-y-1.5 min-w-0">
                      <label className="block text-xs font-bold text-[#F8F8F8] uppercase tracking-wider">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full max-w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#F8F8F8] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-[#71717A] box-border"
                      />
                    </div>
                  </div>

                  {/* Row 2: Category | Size */}
                  <div className="contact-form-grid">
                    <div className="space-y-1.5 min-w-0">
                      <label className="block text-xs font-bold text-[#F8F8F8] uppercase tracking-wider">
                        Item Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full max-w-full px-4 py-3.5 rounded-xl bg-[#111214] border border-white/10 text-[#F8F8F8] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all box-border"
                      >
                        <option value="Brand Jeans">Brand Jeans Collection</option>
                        <option value="Casual Shirts">Casual Shirts (Linen / Cotton)</option>
                        <option value="Oversized Tees">Oversized T-Shirts & Polos</option>
                        <option value="Outerwear">Denim Jackets & Jackets</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 min-w-0">
                      <label className="block text-xs font-bold text-[#F8F8F8] uppercase tracking-wider">
                        Preferred Waist / Size
                      </label>
                      <select
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                        className="w-full max-w-full px-4 py-3.5 rounded-xl bg-[#111214] border border-white/10 text-[#F8F8F8] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all box-border"
                      >
                        <option value="28">28 Inch Waist</option>
                        <option value="30">30 Inch Waist</option>
                        <option value="32">32 Inch Waist</option>
                        <option value="34">34 Inch Waist</option>
                        <option value="36">36 Inch Waist</option>
                        <option value="38">38 Inch Waist</option>
                        <option value="S">Small (S)</option>
                        <option value="M">Medium (M)</option>
                        <option value="L">Large (L)</option>
                        <option value="XL">Extra Large (XL)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-1.5 w-full">
                    <label className="block text-xs font-bold text-[#F8F8F8] uppercase tracking-wider">
                      Message / Fit Details
                    </label>
                    <textarea
                      rows="4"
                      placeholder="e.g. Looking for dark wash slim fit brand jeans..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full max-w-full min-h-[140px] px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#F8F8F8] text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all placeholder:text-[#71717A] box-border"
                    ></textarea>
                  </div>

                  {/* Row 4: Buttons */}
                  <div className="contact-actions pt-2">
                    <button
                      type="submit"
                      className="w-full min-w-0 btn-gold h-12 text-xs flex items-center justify-center font-extrabold"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="w-full min-w-0 btn-whatsapp h-12 text-xs flex items-center justify-center font-extrabold"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Direct</span>
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
