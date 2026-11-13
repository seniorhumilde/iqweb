import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  DraftingCompass,
  HardHat,
  PackageCheck,
  Pause,
  Play,
  Volume2,
  Wrench,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteContent } from '../data/siteContent';

const serviceIconMap = {
  DraftingCompass,
  ClipboardCheck,
  PackageCheck,
  Wrench,
  Cpu,
  HardHat,
};

function extractYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return match ? match[1] : null;
}

/**
 * Explorador interactivo oscuro de Servicios Multidisciplinarios por pestañas (Propuesta 3 / Final)
 * con información técnica inmediata y reproductor de video 16:9 compacto a la derecha.
 */
export default function ServicesTabbedDark({ onSelectService }) {
  const { services, servicesSection } = siteContent;
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [pausedByUser, setPausedByUser] = useState(false);
  const [playTrigger, setPlayTrigger] = useState(0);

  const sectionRef = useRef(null);
  const detailPanelRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setIsInView(entry.isIntersecting);
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const currentService = services[activeServiceIdx] || services[0];
  const ActiveServiceIcon = serviceIconMap[currentService.icon] || DraftingCompass;
  const videoId = extractYouTubeId(currentService.videoUrl);
  const shouldPlay = isInView && !pausedByUser && Boolean(videoId);
  const activeStepCode = String(activeServiceIdx + 1).padStart(2, '0');

  const handleSelectServiceTab = (idx) => {
    setActiveServiceIdx(idx);
    setPausedByUser(false);
    setPlayTrigger((prev) => prev + 1);

    if (typeof window !== 'undefined' && window.innerWidth < 1024 && detailPanelRef.current) {
      const rect = detailPanelRef.current.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.65 || rect.top < 72) {
        const y = Math.max(0, rect.top + window.scrollY - 84);
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-14 sm:py-18 bg-[#071120] text-white border-t border-[#4b7da4]/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-50" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          subtitle={servicesSection.subtitle}
          dark
        />

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          {/* Selector lateral de especialidades */}
          <div className="lg:col-span-4 space-y-2" role="tablist" aria-label="Especialidades">
            {services.map((srv, idx) => {
              const active = idx === activeServiceIdx;
              return (
                <button
                  key={srv.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleSelectServiceTab(idx)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    active
                      ? 'bg-[#2a4aa1] border-[#5c85f5] text-white shadow-lg'
                      : 'bg-[#122646]/55 border-[#4b7da4]/25 text-[#aabbc8] hover:border-[#4b7da4] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-xs font-bold opacity-80 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-xs sm:text-sm font-bold leading-snug">{srv.title}</span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 ${active ? 'opacity-100' : 'opacity-40'}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Tarjeta derecha balanceada: Información técnica + Reproductor compacto */}
          <div
            ref={detailPanelRef}
            className="lg:col-span-8 bg-[#122646]/80 backdrop-blur-md border border-[#4b7da4]/40 rounded-2xl p-5 sm:p-7 shadow-2xl flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Subcolumna de Información Técnica (lectura inmediata sin bajar) */}
              <div className="md:col-span-7">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#4b7da4]/20 border border-[#4b7da4]/50 text-[#dce6ef] flex items-center justify-center shrink-0">
                    <ActiveServiceIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] font-bold uppercase tracking-widest text-[#8bbce0]">
                      Especialidad {activeStepCode}
                    </span>
                    <h3 className="mt-0.5 text-lg sm:text-xl font-extrabold text-white leading-snug">
                      {currentService.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2.5 text-sm text-[#dce6ef] leading-relaxed">
                  {currentService.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#4b7da4]/25">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#aabbc8] mb-2">
                    Entregables y Alcance Técnico:
                  </p>
                  <ul className="space-y-2">
                    {currentService.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-white"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#4b7da4] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService && onSelectService(currentService.shortTitle, '')}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#4b7da4] hover:bg-[#2a4aa1] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Solicitar Cotización de esta Especialidad</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Subcolumna de Video Compacto */}
              <div className="md:col-span-5 max-w-sm md:max-w-none w-full mx-auto">
                <div className="rounded-xl overflow-hidden border border-[#4b7da4]/45 bg-[#071120] shadow-lg">
                  <div className="px-3 py-1.5 bg-[#071120]/95 border-b border-[#4b7da4]/30 flex items-center justify-between gap-2 text-[11px]">
                    <div className="flex items-center gap-1.5 font-semibold text-[#dce6ef] truncate">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          shouldPlay ? 'bg-emerald-400 animate-pulse' : 'bg-[#aabbc8]/60'
                        }`}
                      />
                      <span className="truncate">
                        {shouldPlay ? `Reproduciendo · ${activeStepCode}` : `En espera · ${activeStepCode}`}
                      </span>
                    </div>

                    {videoId && (
                      <button
                        type="button"
                        onClick={() => setPausedByUser((prev) => !prev)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#122646] hover:bg-[#2a4aa1] border border-[#4b7da4]/45 text-[10px] font-bold uppercase tracking-wider text-white transition-colors shrink-0 cursor-pointer"
                      >
                        {shouldPlay ? (
                          <>
                            <Pause className="w-3 h-3" />
                            <span>Pausar</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3" />
                            <span>Play</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <div className="relative aspect-video w-full bg-[#071120]">
                    {shouldPlay ? (
                      <iframe
                        key={`${currentService.id}-${playTrigger}`}
                        title={`Video demostrativo: ${currentService.title}`}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-[#071120] via-[#0b192e] to-[#122646]">
                        <button
                          type="button"
                          onClick={() => {
                            setPausedByUser(false);
                            setPlayTrigger((prev) => prev + 1);
                          }}
                          aria-label={`Reproducir video de ${currentService.title}`}
                          className="w-12 h-12 rounded-full bg-[#2a4aa1] hover:bg-[#4b7da4] border border-[#8bbce0]/50 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer"
                        >
                          <Play className="w-5 h-5 ml-0.5" />
                        </button>
                        <p className="mt-2.5 text-xs font-semibold text-white line-clamp-2">
                          {currentService.videoCaption || currentService.title}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="px-3 py-2 bg-[#0b192e]/90 border-t border-[#4b7da4]/25 text-[11px] text-[#aabbc8] space-y-1">
                    <p className="font-medium text-[#dce6ef] leading-snug line-clamp-2">
                      {currentService.videoCaption || currentService.title}
                    </p>
                    <p className="inline-flex items-center gap-1 text-[10px] text-[#8bbce0]">
                      <Volume2 className="w-3 h-3 shrink-0" />
                      <span>Audio y pantalla completa en el reproductor</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
