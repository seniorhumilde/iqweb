import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

/**
 * Sección Hero principal (#inicio) con tarjeta fotográfica y métricas clave.
 */
export default function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="inicio"
      className="relative overflow-hidden py-16 sm:py-24 bg-[#071120] text-white"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-70" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-[#2a4aa1]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122646] border border-[#4b7da4]/50 text-[#aabbc8] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-[#4b7da4] animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
              {hero.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#aabbc8] leading-relaxed">
              {hero.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#4b7da4] hover:bg-[#2a4aa1] text-white text-sm font-bold transition-colors shadow-lg shadow-[#2a4aa1]/25"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#122646]/70 hover:bg-[#122646] border border-[#4b7da4]/50 text-white text-sm font-semibold transition-colors"
              >
                <span>{hero.secondaryCta.label}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#4b7da4]/45 bg-[#122646] shadow-2xl">
              <div className="relative bg-[#071120]">
                <img
                  src={hero.image}
                  alt="Infraestructura petrolera e industrial iQUÁNTICA"
                  className="w-full h-72 sm:h-96 object-cover opacity-95"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#071120]/70 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-10 p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#122646] border-t border-[#4b7da4]/45">
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-[#4b7da4] pl-3">
                    <p
                      className={`font-display text-xl sm:text-2xl font-extrabold ${
                        stat.accent ? 'text-[#8bbce0]' : 'text-white'
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#dce6ef] leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
