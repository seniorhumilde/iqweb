import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { siteContent } from '../data/siteContent';

/**
 * Barra de navegación superior corporativa (Dark Glass).
 */
export default function Navbar() {
  const { navLinks } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#071120]/95 backdrop-blur-xl border-b border-[#4b7da4]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        <BrandLogo variant="dark" />

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#aabbc8] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-5 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#2a4aa1]/30 transition-colors"
          >
            Contacto
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((p) => !p)}
          className="lg:hidden p-2.5 rounded-lg bg-[#122646] border border-[#4b7da4]/40 text-white"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#0b192e] border-t border-[#4b7da4]/30 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-[#dce6ef] hover:bg-[#122646]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-4 py-2.5 rounded-lg bg-[#2a4aa1] text-white text-xs font-bold uppercase tracking-wider"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
