import React from 'react';
import { Crown, MapPin, Clock, Navigation, Instagram, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenFitGuide }) {
  return (
    <footer className="page-section bg-[#030303] text-[#B8B8B8] border-t border-white/10 pt-16 pb-12">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-4 min-w-0">
            <a href="#hero" className="flex items-center gap-3 group text-decoration-none">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F5D76E] to-[#D4AF37] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <Crown className="w-5 h-5 text-[#050505]" />
              </div>
              <div>
                <div className="text-xl font-extrabold tracking-tight text-[#F8F8F8] font-display">
                  BLACK ERA
                </div>
                <div className="text-[9px] tracking-[0.25em] text-[#D4AF37] font-bold uppercase -mt-1">
                  Crafted For King's
                </div>
              </div>
            </a>

            <p className="text-xs text-[#B8B8B8] leading-relaxed max-w-md">
              Vasai West's premier men's fashion boutique. Specializing in high-grade brand jeans, comfortable casual apparel, sharp fits, and personal styling assistance.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3 min-w-0">
            <div className="text-xs font-bold text-[#F8F8F8] uppercase tracking-widest font-display">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#F5D76E] transition-colors">Home</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#F5D76E] transition-colors">Collections</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#F5D76E] transition-colors">Why Black Era</a>
              </li>
              <li>
                <button onClick={onOpenFitGuide} className="hover:text-[#F5D76E] transition-colors text-left">
                  Size & Fitting Guide
                </button>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F5D76E] transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#store-info" className="hover:text-[#F5D76E] transition-colors">Store Info & Map</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Store Contact & Socials */}
          <div className="md:col-span-4 space-y-3 min-w-0">
            <div className="text-xs font-bold text-[#F8F8F8] uppercase tracking-widest font-display">
              Store Contact
            </div>

            <div className="space-y-2 text-xs text-[#B8B8B8]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Navghar Manikpur, Vasai West, MH 401202 (Kotak Mahindra Bank Bldg)</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily 10:30 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20Black%20Era!%20I'd%20like%20to%20know%20more%20about%20your%20clothing%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-pink-600/20 border border-pink-500/30 text-pink-400 text-xs font-bold flex items-center gap-1.5 hover:bg-pink-600 hover:text-white transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </a>

              <a
                href="https://maps.google.com/?q=Black+Era+Crafted+For+King's+Vasai+West"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#F8F8F8] text-xs font-bold flex items-center gap-1.5 hover:border-[#D4AF37]/40 hover:text-[#F5D76E] transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                Directions
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <div>
            © {new Date().getFullYear()} Black Era Crafted For King's. All rights reserved.
          </div>

          <div>
            Crafted for Kings in Vasai West, Maharashtra
          </div>
        </div>

      </div>
    </footer>
  );
}
