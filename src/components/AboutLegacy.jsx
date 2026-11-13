import React from 'react';
import { Award, CheckCircle2, Layers, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteContent } from '../data/siteContent';

const pillarIcons = [Layers, TrendingUp, Award];

export default function AboutLegacy() {
  const { about } = siteContent;

  return (
    <section id="nosotros" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Columna izquierda: Narrativa y pilares */}
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} />

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              {about.description}
            </p>

            <div className="mt-9 space-y-5">
              {about.pillars.map((pillar, index) => {
                const Icon = pillarIcons[index % pillarIcons.length];
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#f4f7fa] border border-[#aabbc8]/30 hover:border-[#4b7da4]/50 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white border border-[#aabbc8]/40 flex items-center justify-center text-[#2a4aa1] shrink-0 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0f1f38]">{pillar.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Columna derecha: Fotografía + Tarjeta RNC fiel a la referencia */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#aabbc8]/35 bg-[#f4f7fa]">
                <img
                  src={about.image}
                  alt={about.imageAlt}
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>

              {/* Tarjeta RNC con borde inferior en #2a4aa1 como en el boceto del cliente */}
              <div className="mt-5 sm:mt-0 sm:relative sm:-mt-14 sm:mx-6 bg-white rounded-xl p-5 sm:p-6 shadow-xl border border-[#aabbc8]/35 border-b-4 border-b-[#2a4aa1]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#2a4aa1] tracking-tight">
                        {about.rncCard.code}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#4b7da4]/12 text-[#4b7da4] text-[11px] font-bold uppercase tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Vigente
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#4b7da4]">
                      {about.rncCard.status}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {about.rncCard.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
