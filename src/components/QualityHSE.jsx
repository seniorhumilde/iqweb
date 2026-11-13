import React from 'react';
import { Award, ShieldAlert, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteContent } from '../data/siteContent';

const hseIcons = [ShieldAlert, Award, Users];

export default function QualityHSE() {
  const { qualityHse } = siteContent;

  return (
    <section
      id="calidad"
      className="relative py-20 sm:py-24 bg-[#122646] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-45" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={qualityHse.eyebrow}
          title={qualityHse.title}
          subtitle={qualityHse.subtitle}
          dark
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {qualityHse.pillars.map((item, idx) => {
            const Icon = hseIcons[idx % hseIcons.length];
            return (
              <div
                key={item.title}
                className="bg-[#0b192e]/80 border border-[#aabbc8]/20 hover:border-[#4b7da4]/70 rounded-2xl p-7 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4b7da4]/20 border border-[#4b7da4]/40 text-[#aabbc8] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#dce6ef]/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Cintillo de estándares internacionales */}
        <div className="mt-12 pt-8 border-t border-[#aabbc8]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#aabbc8]">
            Marco Normativo y Estándares Aplicados:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {qualityHse.standards.map((std) => (
              <span
                key={std}
                className="px-3.5 py-1.5 rounded-lg bg-[#0b192e] border border-[#4b7da4]/45 text-xs font-bold tracking-wider text-white"
              >
                {std}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
