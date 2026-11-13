import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteContent } from '../data/siteContent';

function AnimatedCounter({ target, suffix = '', shouldStart }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let frameId;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [shouldStart, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactStats({ variant = 'dark' }) {
  const { impact } = siteContent;
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const isLight = variant === 'light';

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cifras"
      ref={sectionRef}
      className={`relative py-20 sm:py-24 overflow-hidden ${
        isLight
          ? 'bg-[#f4f7fa] bg-grid-light text-[#0f1f38] border-y border-[#aabbc8]/35'
          : 'bg-[#0b192e] text-white'
      }`}
    >
      {!isLight && (
        <>
          <div className="absolute inset-0 bg-grid-pattern opacity-60" aria-hidden="true" />
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#2a4aa1]/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={impact.eyebrow} title={impact.title} dark={!isLight} />
            <p
              className={`mt-5 text-base sm:text-lg leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-[#dce6ef]'
              }`}
            >
              {impact.description}
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-end">
            <div
              className={`inline-flex flex-wrap items-center gap-2.5 px-4 py-3 rounded-xl border ${
                isLight
                  ? 'bg-white border-[#aabbc8]/50 shadow-2xs'
                  : 'bg-[#122646] border-[#4b7da4]/40'
              }`}
            >
              <MapPin
                className={`w-5 h-5 shrink-0 ${isLight ? 'text-[#2a4aa1]' : 'text-[#4b7da4]'}`}
              />
              <span
                className={`text-xs sm:text-sm font-semibold ${
                  isLight ? 'text-[#0f1f38]' : 'text-[#dce6ef]'
                }`}
              >
                Faja Petrolífera del Orinoco: Distrito Junín · Cabrutica · San Tomé
              </span>
            </div>
          </div>
        </div>

        {/* Grid de métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impact.stats.map((stat) =>
            stat.featured ? (
              /* Tarjeta insignia 90k+ con estética blanca y borde inferior #2a4aa1 */
              <div
                key={stat.id}
                className={`bg-white text-[#0f1f38] rounded-xl p-6 sm:p-7 border-b-4 border-b-[#2a4aa1] flex flex-col justify-between ${
                  isLight ? 'shadow-lg ring-1 ring-[#2a4aa1]/15' : 'shadow-xl'
                }`}
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#2a4aa1]/10 text-[#2a4aa1] text-[11px] font-bold uppercase tracking-wider mb-3">
                    Indicador Clave
                  </span>
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#2a4aa1] tracking-tight">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      shouldStart={visible}
                    />
                  </div>
                  <p className="mt-2 text-xs font-extrabold uppercase tracking-wider text-[#4b7da4]">
                    {stat.label}
                  </p>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            ) : (
              <div
                key={stat.id}
                className={`rounded-xl p-6 sm:p-7 transition-colors flex flex-col justify-between ${
                  isLight
                    ? 'bg-white text-[#0f1f38] shadow-xs border border-[#aabbc8]/45 border-b-4 border-b-[#4b7da4] hover:border-b-[#2a4aa1]'
                    : 'bg-[#122646]/90 border border-[#aabbc8]/20 hover:border-[#4b7da4]/60'
                }`}
              >
                <div>
                  <div
                    className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight ${
                      isLight ? 'text-[#2a4aa1]' : 'text-white'
                    }`}
                  >
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      shouldStart={visible}
                    />
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#4b7da4]">
                    {stat.label}
                  </p>
                </div>
                <p
                  className={`mt-4 text-xs sm:text-sm leading-relaxed ${
                    isLight ? 'text-slate-600' : 'text-[#aabbc8]'
                  }`}
                >
                  {stat.detail}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
