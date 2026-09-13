import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, Building, Calendar, MessageSquare } from 'lucide-react';

export default function StoreInfo() {
  return (
    <section id="store-info" className="page-section bg-[#0B0B0B]">
      <div className="page-container">
        
        {/* Section Header */}
        <header className="section-heading">
          <h2>
            VISIT OUR <span className="text-gold-gradient">STORE</span>
          </h2>
          <p>
            Located in Navghar Manikpur, Vasai West. Drop by anytime between 10:30 AM and 10:00 PM daily.
          </p>
        </header>

        {/* Section Content */}
        <div className="section-content">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-8 items-stretch">
            
            {/* Left Column — Location & Hours */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#141518] p-6 sm:p-8 rounded-[20px] border border-white/5 flex flex-col justify-between space-y-8 min-w-0"
            >
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#F8F8F8] font-display pb-4 border-b border-white/10 flex items-center gap-3">
                  <Building className="w-5 h-5 text-[#D4AF37]" />
                  Store Location & Hours
                </h3>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                      Address
                    </div>
                    <div className="text-sm font-bold text-[#F8F8F8] mt-0.5 font-display">
                      Black Era Crafted For King's
                    </div>
                    <p className="text-xs text-[#B8B8B8] mt-1 leading-relaxed">
                      9RFG+XH2, Navghar Manikpur, Vasai West, Vasai-Virar, Maharashtra 401202 (Kotak Mahindra Bank Bldg)
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      Hours
                    </div>
                    <div className="text-sm font-bold text-[#F8F8F8] mt-0.5 font-display">
                      10:30 AM – 10:00 PM
                    </div>
                    <div className="text-xs text-[#B8B8B8] mt-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B8B8B8]" />
                      <span>Open 7 Days a Week</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Black+Era+Crafted+For+King's+Vasai+West"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-gold py-3 text-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Black%20Era!%20I'm%20planning%20to%20visit%20your%20Vasai%20West%20store."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp py-3 text-xs px-5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </motion.div>

            {/* Right Column — Google Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#141518] p-2.5 rounded-[20px] border border-white/5 overflow-hidden min-h-[420px] flex flex-col min-w-0"
            >
              <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="Black Era Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.593259837947!2d72.8252278!3d19.3860007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec8c09a8039%3A0x6b876543210abcdef!2sNavghar%20Manikpur%2C%20Vasai%20West%2C%20Maharashtra%20401202!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) invert(0.9) hue-rotate(180deg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full max-w-full h-full min-h-[420px] block"
                ></iframe>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
