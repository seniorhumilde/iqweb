import React, { useCallback, useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { siteContent } from '../data/siteContent';

/**
 * Navegador inteligente combinado entre secciones:
 * 1) Riel lateral de puntos activos en escritorio (xl+) para saltar a cualquier bloque.
 * 2) Botón flotante de scroll suave hacia la siguiente sección o retorno al inicio al final.
 */
export default function SectionNavigator({ hidden = false }) {
  const [sections, setSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const measureAndSync = useCallback(() => {
    const items = siteContent.sectionNav || [];
    const measured = [];

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top + window.scrollY;
      // En propuestas donde #cifras está anidado dentro de #nosotros (< 140px), omitimos el duplicado
      if (measured.length > 0 && Math.abs(top - measured[measured.length - 1].top) < 140) {
        continue;
      }
      measured.push({ id: item.id, label: item.label, top });
    }

    setSections(measured);

    if (measured.length === 0) {
      setActiveIndex(0);
      return;
    }

    const nearBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
    if (nearBottom) {
      setActiveIndex(measured.length - 1);
      return;
    }

    const probeY = window.scrollY + window.innerHeight * 0.34;
    let current = 0;
    for (let i = 0; i < measured.length; i += 1) {
      if (measured[i].top <= probeY) {
        current = i;
      }
    }
    setActiveIndex(current);
  }, []);

  useEffect(() => {
    let rafId = null;

    const handleScrollOrResize = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        measureAndSync();
      });
    };

    const timerId = window.setTimeout(measureAndSync, 80);
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.clearTimeout(timerId);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
  }, [measureAndSync]);

  const scrollToSection = (id) => {
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(id);
    if (!target) return;
    const headerOffset = 76;
    const y = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  if (hidden || sections.length === 0) return null;

  const isAtEnd = activeIndex >= sections.length - 1;
  const nextSection = !isAtEnd ? sections[activeIndex + 1] : null;

  return (
    <>
      {/* 1) Riel lateral de secciones activas en escritorio */}
      <nav
        aria-label="Navegador rápido de secciones"
        className="fixed right-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-2 py-3 px-2 rounded-full bg-[#0b192e]/85 backdrop-blur-md border border-[#4b7da4]/45 shadow-xl"
      >
        {sections.map((sec, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => scrollToSection(sec.id)}
              aria-label={`Ir a ${sec.label}`}
              aria-current={isActive ? 'true' : undefined}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            >
              <span className="pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity absolute right-9 px-2.5 py-1 rounded-md bg-[#0b192e]/95 text-white text-[11px] font-bold tracking-wide border border-[#4b7da4]/45 whitespace-nowrap shadow-lg">
                {sec.label}
              </span>
              <span
                className={
                  isActive
                    ? 'block w-2.5 h-6 rounded-full bg-[#4b7da4] ring-2 ring-[#8bbce0]/50 transition-all'
                    : 'block w-2.5 h-2.5 rounded-full bg-[#aabbc8]/45 group-hover:bg-white transition-all'
                }
              />
            </button>
          );
        })}
      </nav>

      {/* 2) Botón flotante de avance secuencial / volver arriba */}
      <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-30 transition-all">
        {isAtEnd ? (
          <button
            type="button"
            onClick={() => scrollToSection('inicio')}
            aria-label="Volver arriba al inicio"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2a4aa1] hover:bg-[#4b7da4] text-white border border-[#8bbce0]/45 shadow-xl shadow-[#0b192e]/30 text-xs font-bold tracking-wide transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => nextSection && scrollToSection(nextSection.id)}
            aria-label={`Siguiente sección: ${nextSection?.label}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0b192e]/92 hover:bg-[#2a4aa1] text-white border border-[#4b7da4]/55 backdrop-blur-md shadow-xl text-xs font-bold tracking-wide transition-colors cursor-pointer"
          >
            <span className="sm:hidden">Siguiente</span>
            <span className="hidden sm:inline">Siguiente: {nextSection?.label}</span>
            <ArrowDown className="w-4 h-4 text-[#8bbce0]" />
          </button>
        )}
      </div>
    </>
  );
}
