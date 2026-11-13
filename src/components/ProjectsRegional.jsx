import React, { useState } from 'react';
import { Clock, Eye, MapPin, X, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteContent } from '../data/siteContent';

export default function ProjectsRegional() {
  const { projectsSection, projectRegions, projects } = siteContent;
  const [activeRegion, setActiveRegion] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeRegion === 'Todos'
      ? projects
      : projects.filter((proj) => proj.region === activeRegion);

  return (
    <section id="proyectos" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            eyebrow={projectsSection.eyebrow}
            title={projectsSection.title}
            subtitle={projectsSection.subtitle}
          />

          {/* Filtro por distrito operativo */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Filtrar proyectos por región"
          >
            {projectRegions.map((region) => {
              const isActive = activeRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2a4aa1] text-white shadow-sm'
                      : 'bg-[#f4f7fa] text-slate-600 hover:bg-[#aabbc8]/25 hover:text-[#2a4aa1] border border-[#aabbc8]/40'
                  }`}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de proyectos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#aabbc8]/40 hover:border-[#4b7da4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0b192e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0b192e]/85 via-[#0b192e]/20 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b192e]/85 backdrop-blur-xs border border-[#4b7da4]/50 text-white text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#4b7da4]" />
                    {project.region}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[#2a4aa1] text-xs font-bold shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#4b7da4]" />
                    {project.hours}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#aabbc8]">
                    {project.discipline}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f1f38] leading-snug group-hover:text-[#2a4aa1] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.standards.map((std) => (
                      <span
                        key={std}
                        className="px-2.5 py-0.5 rounded-md bg-[#f4f7fa] border border-[#aabbc8]/40 text-[11px] font-semibold text-[#4b7da4]"
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2a4aa1] hover:text-[#4b7da4] transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver Alcance Técnico</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de detalle técnico */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b192e]/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#aabbc8]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-52 sm:h-60 bg-[#0b192e]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b192e]/90 via-[#0b192e]/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#0f1f38] flex items-center justify-center shadow-md cursor-pointer"
                aria-label="Cerrar detalle de proyecto"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#aabbc8] mb-1">
                  <span>{selectedProject.region}</span>
                  <span>·</span>
                  <span>{selectedProject.discipline}</span>
                  <span>·</span>
                  <span className="text-white">{selectedProject.hours}</span>
                </div>
                <h3 id="project-modal-title" className="text-xl font-bold leading-snug">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-sm text-slate-600 leading-relaxed">{selectedProject.summary}</p>

              <h4 className="mt-5 text-xs font-extrabold uppercase tracking-wider text-[#2a4aa1]">
                Entregables y Alcance Ejecutado
              </h4>
              <ul className="mt-3 space-y-2.5">
                {selectedProject.scopeDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#4b7da4] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.standards.map((std) => (
                    <span
                      key={std}
                      className="px-2.5 py-1 rounded-md bg-[#f4f7fa] border border-[#aabbc8]/40 text-xs font-semibold text-[#4b7da4]"
                    >
                      {std}
                    </span>
                  ))}
                </div>
                <a
                  href="#contacto"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Consultar Caso Similar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
