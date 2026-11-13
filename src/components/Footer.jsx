import React from 'react';
import { ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';
import SocialIcon from './SocialIcons';
import { siteContent } from '../data/siteContent';

export default function Footer() {
  const { brand, navLinks, services, contact, socialMedia } = siteContent;
  const activeSocialLinks = (socialMedia?.links || []).filter((item) => item.enabled);

  return (
    <footer className="bg-[#0b192e] text-[#aabbc8] border-t border-[#4b7da4]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-20 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Identidad */}
          <div className="lg:col-span-5">
            <BrandLogo variant="dark" layout="stacked" />
            <p className="mt-4 text-sm leading-relaxed text-[#aabbc8] max-w-md">
              Evolución y excelencia en servicios de ingeniería multidisciplinaria, procura y
              ejecución de proyectos para la industria petrolera, gasífera y manufacturera.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#122646] border border-[#4b7da4]/40 text-xs font-bold text-white">
              <ShieldCheck className="w-4 h-4 text-[#4b7da4]" />
              <span>{brand.rncStatus}</span>
            </div>

            {activeSocialLinks.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#aabbc8]/80">
                  Canales Digitales Oficiales
                </p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                  {activeSocialLinks.map((net) => (
                    <a
                      key={net.id}
                      href={net.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${net.name} (${net.handle})`}
                      title={`${net.name} · ${net.handle}`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#122646] hover:bg-[#2a4aa1] border border-[#4b7da4]/40 text-white text-xs font-semibold transition-colors"
                    >
                      <SocialIcon networkId={net.id} className="w-4 h-4 text-[#8bbce0]" />
                      <span>{net.shortName || net.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Enlaces */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-white transition-colors">
                  Ubicación GPS
                </a>
              </li>
            </ul>
          </div>

          {/* Especialidades */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-white mb-4">
              Líneas de Servicio
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((srv) => (
                <li key={srv.id} className="truncate">
                  <a href="#servicios" className="hover:text-white transition-colors">
                    {srv.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#4b7da4] font-semibold">
              {contact.email} · {contact.phonePrimary}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-[#aabbc8]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#aabbc8]/80">
          <p>
            © {brand.copyrightYear} {brand.name} · RIF {brand.rif}. Todos los derechos reservados.
          </p>
          <p>Distrito Junín · Cabrutica · San Tomé · Venezuela</p>
        </div>
      </div>
    </footer>
  );
}
