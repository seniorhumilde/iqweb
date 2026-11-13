import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
  Send,
  Share2,
  ShieldCheck,
  X,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import SocialIcon from './SocialIcons';
import { siteContent } from '../data/siteContent';

export default function ContactSection({
  preselectedService,
  presetMessage = '',
  variant = 'executive',
}) {
  const { contact, services, socialMedia } = siteContent;
  const activeSocialLinks = (socialMedia?.links || []).filter((item) => item.enabled);
  const isHighTech = variant === 'hightech';
  const isEditorial = variant === 'editorial';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: services[0]?.shortTitle || '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      setSubmitted(false);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (presetMessage) {
      setFormData((prev) => ({ ...prev, message: presetMessage }));
      setSubmitted(false);
    }
  }, [presetMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Por favor completa nombre, empresa, correo corporativo y descripción del requerimiento.');
      return;
    }
    setSubmitted(true);
  };

  const handleDownloadBrochure = () => {
    const summaryText = [
      'iQUÁNTICA — DOSSIER CORPORATIVO DE CAPACIDADES TÉCNICAS',
      '========================================================',
      'Sector: Ingeniería Multidisciplinaria Industrial, Petróleo y Gas',
      'Trayectoria: +14 años de experiencia comprobada',
      'Estatus Legal: RNC — Inscrita y Habilitada',
      'Impacto: 90k+ Horas-Hombre Ejecutadas (Distrito Junín, Cabrutica y San Tomé)',
      '',
      'LÍNEAS DE SERVICIO:',
      ...services.map((s, idx) => `${idx + 1}. ${s.title}`),
      '',
      'ESTÁNDARES APLICADOS: PDVSA, API, ASME, ANSI/IEEE, ISO 9001, PMI, SIHO-A',
      '',
      `Contacto Comercial: ${contact.email} | ${contact.phonePrimary}`,
    ].join('\n');

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'iQUANTICA-Ficha-Corporativa.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setBrochureDownloaded(true);
  };

  const inputClass = isHighTech
    ? 'w-full px-4 py-2.5 rounded-lg bg-[#071120]/85 border border-[#4b7da4]/40 focus:border-[#5c85f5] focus:outline-none text-sm text-white placeholder:text-[#aabbc8]/55'
    : 'w-full px-4 py-2.5 rounded-lg bg-[#f4f7fa] border border-[#aabbc8]/60 focus:border-[#2a4aa1] focus:bg-white focus:outline-none text-sm text-[#0f1f38]';

  return (
    <section
      id="contacto"
      className={`py-20 sm:py-24 ${
        isHighTech
          ? 'bg-[#0b192e] text-white border-t border-[#4b7da4]/25'
          : isEditorial
            ? 'bg-white text-[#0f1f38]'
            : 'bg-[#f4f7fa] text-[#0f1f38]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isEditorial ? (
          <div className="max-w-3xl">
            <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#4b7da4] mb-3">
              [ 07 · CANALES CORPORATIVOS ]
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1f38] leading-tight">
              {contact.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {contact.subtitle}
            </p>
          </div>
        ) : (
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            subtitle={contact.subtitle}
            dark={isHighTech}
          />
        )}

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Columna izquierda: Canales directos + Brochure */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`rounded-2xl p-6 sm:p-7 space-y-5 ${
                isHighTech
                  ? 'bg-[#122646]/80 border border-[#4b7da4]/35'
                  : isEditorial
                    ? 'bg-[#f4f7fa] border border-[#aabbc8]/50'
                    : 'bg-white border border-[#aabbc8]/35 shadow-xs'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isHighTech
                      ? 'bg-[#4b7da4]/20 text-[#aabbc8]'
                      : 'bg-[#2a4aa1]/10 text-[#2a4aa1]'
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4b7da4]">
                    Correo Corporativo
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className={`text-sm sm:text-base font-semibold transition-colors ${
                      isHighTech
                        ? 'text-white hover:text-[#aabbc8]'
                        : 'text-[#0f1f38] hover:text-[#2a4aa1]'
                    }`}
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isHighTech
                      ? 'bg-[#4b7da4]/20 text-[#aabbc8]'
                      : 'bg-[#2a4aa1]/10 text-[#2a4aa1]'
                  }`}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4b7da4]">
                    Atención Comercial e Ingeniería
                  </p>
                  <p
                    className={`text-sm sm:text-base font-semibold ${
                      isHighTech ? 'text-white' : 'text-[#0f1f38]'
                    }`}
                  >
                    {contact.phonePrimary}
                  </p>
                  <p className={`text-xs mt-0.5 ${isHighTech ? 'text-[#aabbc8]' : 'text-slate-500'}`}>
                    {contact.phoneSecondary}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isHighTech
                      ? 'bg-[#4b7da4]/20 text-[#aabbc8]'
                      : 'bg-[#2a4aa1]/10 text-[#2a4aa1]'
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4b7da4]">
                    Presencia y Cobertura
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      isHighTech ? 'text-[#dce6ef]' : 'text-slate-700'
                    }`}
                  >
                    {contact.locations}
                  </p>
                  <a
                    href="#ubicacion"
                    className={`mt-1.5 inline-flex items-center gap-1 text-xs font-bold transition-colors ${
                      isHighTech
                        ? 'text-[#8bbce0] hover:text-white'
                        : 'text-[#2a4aa1] hover:text-[#4b7da4]'
                    }`}
                  >
                    <span>Ver ubicación exacta en el mapa ↓</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isHighTech
                      ? 'bg-[#4b7da4]/20 text-[#aabbc8]'
                      : 'bg-[#2a4aa1]/10 text-[#2a4aa1]'
                  }`}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#4b7da4]">
                    Horario de Atención
                  </p>
                  <p className={`text-sm ${isHighTech ? 'text-[#dce6ef]' : 'text-slate-700'}`}>
                    {contact.schedule}
                  </p>
                </div>
              </div>

              <div
                className={`pt-4 border-t flex items-center gap-2.5 text-xs font-bold ${
                  isHighTech
                    ? 'border-[#4b7da4]/25 text-white'
                    : 'border-slate-200/70 text-[#2a4aa1]'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#4b7da4]" />
                <span>Empresa Inscrita y Habilitada en el RNC</span>
              </div>
            </div>

            {/* Tarjeta de Redes y Canales Digitales */}
            {activeSocialLinks.length > 0 && (
              <div
                className={`rounded-2xl p-6 sm:p-7 border ${
                  isHighTech
                    ? 'bg-[#122646]/80 border-[#4b7da4]/35 text-white'
                    : isEditorial
                      ? 'bg-[#f4f7fa] border-[#aabbc8]/50 text-[#0f1f38]'
                      : 'bg-white border-[#aabbc8]/35 shadow-xs text-[#0f1f38]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      isHighTech
                        ? 'bg-[#4b7da4]/20 text-[#aabbc8]'
                        : 'bg-[#2a4aa1]/10 text-[#2a4aa1]'
                    }`}
                  >
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#4b7da4]">
                      {socialMedia.eyebrow}
                    </p>
                    <h3
                      className={`text-base font-bold leading-snug ${
                        isHighTech ? 'text-white' : 'text-[#0f1f38]'
                      }`}
                    >
                      {socialMedia.title}
                    </h3>
                  </div>
                </div>

                <p
                  className={`mt-2.5 text-xs leading-relaxed ${
                    isHighTech ? 'text-[#aabbc8]' : 'text-slate-600'
                  }`}
                >
                  {socialMedia.description}
                </p>

                <div className="mt-4 space-y-2.5">
                  {activeSocialLinks.map((net) => (
                    <a
                      key={net.id}
                      href={net.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between gap-3 p-3 rounded-xl border transition-colors ${
                        isHighTech
                          ? 'bg-[#071120]/65 border-[#4b7da4]/30 hover:border-[#8bbce0] hover:bg-[#071120]'
                          : isEditorial
                            ? 'bg-white border-[#aabbc8]/50 hover:border-[#2a4aa1] hover:bg-[#f4f7fa]/60'
                            : 'bg-[#f4f7fa]/75 border-[#aabbc8]/40 hover:border-[#2a4aa1] hover:bg-[#f4f7fa]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isHighTech
                              ? 'bg-[#4b7da4]/20 text-[#8bbce0] group-hover:bg-[#2a4aa1] group-hover:text-white'
                              : 'bg-white border border-[#aabbc8]/40 text-[#2a4aa1] group-hover:bg-[#2a4aa1] group-hover:text-white group-hover:border-[#2a4aa1]'
                          }`}
                        >
                          <SocialIcon networkId={net.id} className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-xs font-bold ${
                                isHighTech ? 'text-white' : 'text-[#0f1f38]'
                              }`}
                            >
                              {net.name}
                            </span>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                isHighTech
                                  ? 'bg-[#4b7da4]/20 text-[#8bbce0]'
                                  : 'bg-[#4b7da4]/12 text-[#4b7da4]'
                              }`}
                            >
                              {net.badge}
                            </span>
                          </div>
                          <p
                            className={`text-xs truncate ${
                              isHighTech ? 'text-[#aabbc8]' : 'text-slate-600'
                            }`}
                          >
                            {net.handle}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isHighTech
                            ? 'text-[#8bbce0]'
                            : 'text-slate-400 group-hover:text-[#2a4aa1]'
                        }`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tarjeta Brochure Corporativo */}
            <div
              className={`rounded-2xl p-6 sm:p-7 border shadow-lg ${
                isHighTech
                  ? 'bg-[#071120] border-[#4b7da4]/50 text-white'
                  : 'bg-[#0b192e] border-[#4b7da4]/40 text-white'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#4b7da4]/25 border border-[#4b7da4]/50 flex items-center justify-center shrink-0 text-[#aabbc8]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {contact.brochure.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#aabbc8] leading-relaxed">
                    {contact.brochure.description}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setBrochureModalOpen(true)}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#4b7da4] hover:bg-[#3d6b8f] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Solicitar / Descargar Brochure Corporativo</span>
              </button>
            </div>
          </div>

          {/* Columna derecha: Formulario B2B */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-2xl p-6 sm:p-9 border-b-4 border-b-[#2a4aa1] ${
                isHighTech
                  ? 'bg-[#122646]/85 border border-[#4b7da4]/35 shadow-2xl'
                  : 'bg-white border border-[#aabbc8]/45 shadow-md'
              }`}
            >
              {submitted ? (
                <div className="py-10 text-center max-w-md mx-auto">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
                      isHighTech
                        ? 'bg-[#4b7da4]/25 text-white'
                        : 'bg-[#4b7da4]/15 text-[#2a4aa1]'
                    }`}
                  >
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3
                    className={`mt-5 text-2xl font-extrabold ${
                      isHighTech ? 'text-white' : 'text-[#2a4aa1]'
                    }`}
                  >
                    Solicitud Recibida
                  </h3>
                  <p
                    className={`mt-3 text-sm sm:text-base leading-relaxed ${
                      isHighTech ? 'text-[#dce6ef]' : 'text-slate-600'
                    }`}
                  >
                    Gracias,{' '}
                    <span className={`font-semibold ${isHighTech ? 'text-white' : 'text-[#0f1f38]'}`}>
                      {formData.name}
                    </span>
                    . Nuestro equipo técnico revisará su requerimiento para{' '}
                    <span className={`font-semibold ${isHighTech ? 'text-white' : 'text-[#0f1f38]'}`}>
                      {formData.company}
                    </span>{' '}
                    en el área de{' '}
                    <span className="font-semibold text-[#4b7da4]">{formData.service}</span> y le
                    contactará a la brevedad.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData((prev) => ({ ...prev, message: '' }));
                    }}
                    className="mt-7 px-6 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        isHighTech ? 'text-white' : 'text-[#0f1f38]'
                      }`}
                    >
                      Solicitar Cotización o Reunión Técnica
                    </h3>
                    <p
                      className={`mt-1 text-xs sm:text-sm ${
                        isHighTech ? 'text-[#aabbc8]' : 'text-slate-500'
                      }`}
                    >
                      Complete los datos de su proyecto para asignarle un especialista.
                    </p>
                  </div>

                  {errorMsg && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 font-medium"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                          isHighTech ? 'text-[#dce6ef]' : 'text-slate-700'
                        }`}
                      >
                        Nombre y Apellido *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Carlos Mendoza"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                          isHighTech ? 'text-[#dce6ef]' : 'text-slate-700'
                        }`}
                      >
                        Empresa / Organización *
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Ej. Operadora Energética S.A."
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                          isHighTech ? 'text-[#dce6ef]' : 'text-slate-700'
                        }`}
                      >
                        Correo Corporativo *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="nombre@empresa.com"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                          isHighTech ? 'text-[#dce6ef]' : 'text-slate-700'
                        }`}
                      >
                        Teléfono de Contacto
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+58 414 000 0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                        isHighTech ? 'text-[#dce6ef]' : 'text-slate-700'
                      }`}
                    >
                      Área de Servicio Requerida
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      {services.map((srv) => (
                        <option
                          key={srv.id}
                          value={srv.shortTitle}
                          className="text-[#0f1f38] bg-white"
                        >
                          {srv.shortTitle}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${
                        isHighTech ? 'text-[#dce6ef]' : 'text-slate-700'
                      }`}
                    >
                      Descripción del Requerimiento *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Indique ubicación del proyecto, especialidad requerida y plazo estimado..."
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Requerimiento</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Brochure Corporativo */}
      {brochureModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b192e]/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brochure-modal-title"
          onClick={() => setBrochureModalOpen(false)}
        >
          <div
            className="bg-white text-[#0f1f38] rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#aabbc8]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#4b7da4]">
                  Presentación Ejecutiva
                </span>
                <h3 id="brochure-modal-title" className="text-xl font-extrabold text-[#2a4aa1] mt-1">
                  {contact.brochure.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setBrochureModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#f4f7fa] hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
                aria-label="Cerrar ventana de brochure"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              {contact.brochure.description}
            </p>

            <div className="mt-5 p-4 rounded-xl bg-[#f4f7fa] border border-[#aabbc8]/35">
              <p className="text-xs font-bold uppercase tracking-wider text-[#2a4aa1] mb-2.5">
                Contenido del Dossier:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {contact.brochure.sections.map((sec) => (
                  <li key={sec} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4b7da4] shrink-0" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {brochureDownloaded && (
              <div className="mt-4 p-3 rounded-lg bg-[#4b7da4]/12 border border-[#4b7da4]/30 text-xs font-semibold text-[#2a4aa1]">
                Ficha corporativa descargada. Puede reemplazar este archivo de demostración por el PDF oficial del cliente cuando esté listo.
              </div>
            )}

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setBrochureModalOpen(false)}
                className="px-4 py-2.5 rounded-lg border border-[#aabbc8]/50 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={handleDownloadBrochure}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Ficha</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
