import React, { useState } from 'react';
import {
  Check,
  Clock,
  Compass,
  Copy,
  ExternalLink,
  MapPin,
  Navigation,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteContent } from '../data/siteContent';

/**
 * Sección dedicada #ubicacion ("Centro Operativo y Cobertura Regional")
 * con tarjetas de sede + 3 distritos operativos, copiado rápido de GPS y mapa panorámico Google Maps.
 */
export default function LocationSection({ variant = 'executive' }) {
  const { contact, locationSection } = siteContent;
  const map = contact?.map;
  const zones = locationSection?.zones || [];
  const [copied, setCopied] = useState(false);

  const isHighTech = variant === 'hightech';
  const isEditorial = variant === 'editorial';

  if (!map) return null;

  const decimalCoords = `${map.lat}, ${map.lng}`;

  const handleCopyCoords = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(decimalCoords);
      } else {
        const helper = document.createElement('textarea');
        helper.value = decimalCoords;
        helper.setAttribute('readonly', '');
        helper.style.position = 'absolute';
        helper.style.left = '-9999px';
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        document.body.removeChild(helper);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="ubicacion"
      className={`py-20 sm:py-24 border-t ${
        isHighTech
          ? 'bg-[#071120] text-white border-[#4b7da4]/25'
          : isEditorial
            ? 'bg-[#f4f7fa] text-[#0f1f38] border-[#aabbc8]/40'
            : 'bg-white bg-grid-light text-[#0f1f38] border-[#aabbc8]/35'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={locationSection.eyebrow}
          title={locationSection.title}
          subtitle={locationSection.subtitle}
          dark={isHighTech}
        />

        {/* Tarjetas de Sede Central y Distritos Operativos */}
        {zones.length > 0 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {zones.map((zone) => {
              const highlighted = Boolean(zone.highlight);
              return (
                <div
                  key={zone.code}
                  className={`rounded-xl p-5 border transition-colors ${
                    isHighTech
                      ? highlighted
                        ? 'bg-[#122646] border-[#5c85f5] shadow-lg'
                        : 'bg-[#122646]/65 border-[#4b7da4]/30'
                      : highlighted
                        ? 'bg-[#2a4aa1] text-white border-[#2a4aa1] shadow-md'
                        : isEditorial
                          ? 'bg-white border-[#aabbc8]/50'
                          : 'bg-[#f4f7fa]/85 border-[#aabbc8]/45'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                        highlighted
                          ? isHighTech
                            ? 'bg-[#2a4aa1] text-white'
                            : 'bg-white/20 text-white'
                          : isHighTech
                            ? 'bg-[#4b7da4]/20 text-[#8bbce0]'
                            : 'bg-[#4b7da4]/15 text-[#2a4aa1]'
                      }`}
                    >
                      {zone.code}
                    </span>
                    <Compass
                      className={`w-4 h-4 ${
                        highlighted
                          ? 'text-[#8bbce0]'
                          : isHighTech
                            ? 'text-[#4b7da4]'
                            : 'text-[#4b7da4]'
                      }`}
                    />
                  </div>

                  <h3
                    className={`mt-3 text-base font-extrabold leading-snug ${
                      highlighted || isHighTech ? 'text-white' : 'text-[#0f1f38]'
                    }`}
                  >
                    {zone.name}
                  </h3>
                  <p
                    className={`mt-0.5 text-xs font-semibold ${
                      highlighted
                        ? 'text-[#dce6ef]'
                        : isHighTech
                          ? 'text-[#8bbce0]'
                          : 'text-[#4b7da4]'
                    }`}
                  >
                    {zone.role}
                  </p>
                  <p
                    className={`mt-2 text-xs leading-relaxed ${
                      highlighted
                        ? 'text-[#dce6ef]/95'
                        : isHighTech
                          ? 'text-[#aabbc8]'
                          : 'text-slate-600'
                    }`}
                  >
                    {zone.detail}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Bloque Panorámico Principal de Google Maps */}
        <div
          className={`mt-8 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border shadow-xl ${
            isHighTech
              ? 'bg-[#122646]/85 border-[#4b7da4]/40 text-white'
              : 'bg-white border-[#aabbc8]/50 text-[#0f1f38]'
          }`}
        >
          {/* Panel lateral de coordenadas y acciones */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4b7da4]/15 text-[#4b7da4] text-[11px] font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Ubicación GPS Verificada</span>
              </div>

              <h3
                className={`mt-4 text-xl sm:text-2xl font-extrabold leading-snug ${
                  isHighTech ? 'text-white' : 'text-[#2a4aa1]'
                }`}
              >
                {map.title}
              </h3>

              <p
                className={`mt-2 text-sm font-semibold ${
                  isHighTech ? 'text-[#dce6ef]' : 'text-[#0f1f38]'
                }`}
              >
                {map.regionLabel}
              </p>

              <p
                className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                  isHighTech ? 'text-[#aabbc8]' : 'text-slate-600'
                }`}
              >
                {map.referenceNote}
              </p>

              {/* Caja de Coordenadas DMS + Decimales + Copiar */}
              <div
                className={`mt-5 p-4 rounded-xl border ${
                  isHighTech
                    ? 'bg-[#071120]/85 border-[#4b7da4]/40 text-[#dce6ef]'
                    : 'bg-[#f4f7fa] border-[#aabbc8]/50 text-[#0f1f38]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="font-mono">
                    <span className="block text-[10px] uppercase tracking-wider text-[#4b7da4] font-bold">
                      Coordenadas Exactas (DMS)
                    </span>
                    <strong className="text-sm font-extrabold block mt-0.5">
                      {map.coordinatesDms}
                    </strong>
                    <span
                      className={`block text-[11px] mt-1 ${
                        isHighTech ? 'text-[#aabbc8]' : 'text-slate-500'
                      }`}
                    >
                      Decimal: {decimalCoords}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCoords}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider border transition-colors shrink-0 cursor-pointer ${
                      copied
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : isHighTech
                          ? 'bg-[#122646] hover:bg-[#2a4aa1] border-[#4b7da4]/50 text-white'
                          : 'bg-white hover:bg-[#2a4aa1] hover:text-white border-[#aabbc8]/70 text-[#2a4aa1]'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar GPS</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div
                className={`mt-4 flex items-center gap-2 text-xs ${
                  isHighTech ? 'text-[#aabbc8]' : 'text-slate-600'
                }`}
              >
                <Clock className="w-4 h-4 text-[#4b7da4] shrink-0" />
                <span>{contact.schedule}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Cómo llegar</span>
              </a>
              <a
                href={map.openMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-colors ${
                  isHighTech
                    ? 'border-[#4b7da4]/50 text-[#dce6ef] hover:bg-white/10'
                    : 'border-[#aabbc8]/70 text-[#2a4aa1] hover:bg-[#f4f7fa]'
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Contenedor panorámico del iframe Google Maps */}
          <div className="lg:col-span-8 flex flex-col bg-[#0b192e]">
            <div className="px-4 py-2.5 bg-[#0b192e] border-b border-[#4b7da4]/30 flex flex-wrap items-center justify-between gap-2 text-xs text-[#dce6ef]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-semibold">
                  Mapa Interactivo · Eje El Tigre – San José de Guanipa
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#8bbce0]">{decimalCoords}</span>
            </div>

            <iframe
              title="Ubicación iQUÁNTICA en Google Maps"
              src={map.embedUrl}
              className="w-full flex-1 min-h-[380px] sm:min-h-[450px] border-0 bg-[#e8eef4]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
