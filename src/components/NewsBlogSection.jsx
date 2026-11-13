import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Edit3,
  Newspaper,
  Sparkles,
  Tag,
  X,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteContent } from '../data/siteContent';

function getCategoryBadgeClass(category, isDark) {
  switch (category) {
    case 'Promoción':
      return isDark
        ? 'bg-[#2a4aa1] text-white border border-[#5c85f5]/50'
        : 'bg-[#2a4aa1] text-white';
    case 'Nuevo Servicio':
      return isDark
        ? 'bg-[#4b7da4]/30 text-[#dce6ef] border border-[#4b7da4]/60'
        : 'bg-[#4b7da4] text-white';
    case 'Nuevo Producto':
      return isDark
        ? 'bg-[#1b3b66] text-[#aabbc8] border border-[#aabbc8]/40'
        : 'bg-[#0b192e] text-white';
    default:
      return isDark
        ? 'bg-[#122646] text-[#aabbc8] border border-[#aabbc8]/30'
        : 'bg-[#f4f7fa] text-[#2a4aa1] border border-[#aabbc8]/60';
  }
}

export default function NewsBlogSection({
  variant = 'executive',
  posts = [],
  onOpenAdmin,
  onRequestPostCta,
}) {
  const { blogSection, blogCategories } = siteContent;
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [readingPost, setReadingPost] = useState(null);

  const isHighTech = variant === 'hightech';
  const isEditorial = variant === 'editorial';

  const filteredPosts =
    activeCategory === 'Todas'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPost =
    activeCategory === 'Todas'
      ? filteredPosts.find((p) => p.featured) || filteredPosts[0]
      : null;

  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  const handleQuotePost = (post) => {
    setReadingPost(null);
    if (onRequestPostCta) {
      onRequestPostCta(post);
    }
  };

  return (
    <section
      id="novedades"
      className={`py-20 sm:py-24 ${
        isHighTech
          ? 'bg-[#071120] text-white border-t border-[#4b7da4]/20'
          : isEditorial
            ? 'bg-[#f4f7fa] text-[#0f1f38] border-y border-[#aabbc8]/35'
            : 'bg-[#f4f7fa] text-[#0f1f38]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera de sección + botón Editor Demo */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          {isEditorial ? (
            <div className="max-w-3xl">
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#4b7da4] mb-3">
                [ 05 · ACTUALIDAD Y PROMOCIONES ]
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0f1f38] leading-tight">
                {blogSection.title}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                {blogSection.subtitle}
              </p>
            </div>
          ) : (
            <SectionHeading
              eyebrow={blogSection.eyebrow}
              title={blogSection.title}
              subtitle={blogSection.subtitle}
              dark={isHighTech}
            />
          )}

          {onOpenAdmin && (
            <button
              type="button"
              onClick={onOpenAdmin}
              className={`self-start lg:self-end inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                isHighTech
                  ? 'bg-[#122646] hover:bg-[#2a4aa1] text-[#dce6ef] border border-[#4b7da4]/50'
                  : 'bg-white hover:bg-[#2a4aa1] text-[#2a4aa1] hover:text-white border border-[#2a4aa1]/35 shadow-2xs'
              }`}
            >
              <Edit3 className="w-4 h-4" />
              <span>Gestionar Publicaciones (Demo)</span>
            </button>
          )}
        </div>

        {/* Filtros por categoría */}
        <div
          className="mt-8 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label="Filtrar novedades por categoría"
        >
          {blogCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isEditorial ? 'rounded-md' : 'rounded-lg'
                } ${
                  isActive
                    ? 'bg-[#2a4aa1] text-white shadow-sm'
                    : isHighTech
                      ? 'bg-[#122646]/70 text-[#aabbc8] hover:text-white border border-[#4b7da4]/25'
                      : 'bg-white text-slate-600 hover:text-[#2a4aa1] border border-[#aabbc8]/45'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Estado vacío si se filtraron o borraron publicaciones */}
        {filteredPosts.length === 0 ? (
          <div
            className={`mt-10 rounded-2xl p-10 text-center border ${
              isHighTech
                ? 'bg-[#122646]/50 border-[#4b7da4]/30 text-[#aabbc8]'
                : 'bg-white border-[#aabbc8]/40 text-slate-600'
            }`}
          >
            <Newspaper className="w-10 h-10 mx-auto text-[#4b7da4] mb-3" />
            <p className="text-base font-semibold">
              No hay publicaciones registradas en esta categoría todavía.
            </p>
            {onOpenAdmin && (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="mt-4 px-5 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Crear Publicación en el Editor Demo
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Publicación Destacada */}
            {featuredPost && (
              <article
                className={`mt-10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${
                  isHighTech
                    ? 'rounded-2xl bg-[#122646]/80 backdrop-blur-md border border-[#4b7da4]/40 shadow-2xl'
                    : isEditorial
                      ? 'rounded-xl bg-white border border-[#aabbc8]/60 shadow-sm'
                      : 'rounded-2xl bg-[#0b192e] text-white shadow-xl border border-[#4b7da4]/35'
                }`}
              >
                <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[320px] bg-[#0b192e]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a4aa1] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Destacado</span>
                  </div>
                </div>

                <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${getCategoryBadgeClass(
                          featuredPost.category,
                          !isEditorial,
                        )}`}
                      >
                        {featuredPost.category}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                          isEditorial ? 'text-slate-500' : 'text-[#aabbc8]'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#4b7da4]" />
                        {featuredPost.date}
                      </span>
                    </div>

                    <h3
                      className={`mt-4 text-2xl sm:text-3xl font-extrabold leading-snug ${
                        isEditorial ? 'text-[#0f1f38]' : 'text-white'
                      }`}
                    >
                      {featuredPost.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm sm:text-base leading-relaxed ${
                        isEditorial ? 'text-slate-600' : 'text-[#dce6ef]'
                      }`}
                    >
                      {featuredPost.summary}
                    </p>
                  </div>

                  <div className="mt-7 pt-5 border-t border-[#aabbc8]/20 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleQuotePost(featuredPost)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#4b7da4] hover:bg-[#3d6b8f] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>{featuredPost.ctaLabel || 'Cotizar esta novedad'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setReadingPost(featuredPost)}
                      className={`px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                        isEditorial
                          ? 'border border-[#aabbc8]/60 text-[#2a4aa1] hover:bg-[#f4f7fa]'
                          : 'border border-[#aabbc8]/40 text-white hover:bg-white/10'
                      }`}
                    >
                      Leer detalle completo
                    </button>
                  </div>
                </div>
              </article>
            )}

            {/* Grilla de tarjetas secundarias */}
            {gridPosts.length > 0 && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {gridPosts.map((post) => (
                  <article
                    key={post.id}
                    className={`group overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                      isHighTech
                        ? 'rounded-2xl bg-[#122646]/70 backdrop-blur-md border border-[#4b7da4]/30 hover:border-[#4b7da4]'
                        : isEditorial
                          ? 'rounded-xl bg-white border border-[#aabbc8]/55 hover:border-[#2a4aa1] shadow-2xs'
                          : 'rounded-2xl bg-white border border-[#aabbc8]/35 hover:border-[#4b7da4] shadow-xs hover:shadow-xl'
                    }`}
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden bg-[#0b192e]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span
                          className={`absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${getCategoryBadgeClass(
                            post.category,
                            isHighTech,
                          )}`}
                        >
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div
                          className={`flex items-center gap-1.5 text-xs font-medium ${
                            isHighTech ? 'text-[#aabbc8]' : 'text-slate-500'
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5 text-[#4b7da4]" />
                          <span>{post.date}</span>
                        </div>

                        <h3
                          className={`mt-2.5 text-lg font-bold leading-snug ${
                            isHighTech
                              ? 'text-white group-hover:text-[#aabbc8]'
                              : 'text-[#0f1f38] group-hover:text-[#2a4aa1]'
                          } transition-colors`}
                        >
                          {post.title}
                        </h3>

                        <p
                          className={`mt-2.5 text-sm leading-relaxed line-clamp-3 ${
                            isHighTech ? 'text-[#dce6ef]/85' : 'text-slate-600'
                          }`}
                        >
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`px-6 pb-6 pt-4 border-t flex items-center justify-between gap-3 ${
                        isHighTech ? 'border-[#4b7da4]/20' : 'border-slate-100'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setReadingPost(post)}
                        className={`text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                          isHighTech
                            ? 'text-[#aabbc8] hover:text-white'
                            : 'text-slate-600 hover:text-[#2a4aa1]'
                        }`}
                      >
                        Leer detalle
                      </button>

                      <button
                        type="button"
                        onClick={() => handleQuotePost(post)}
                        className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                          isHighTech
                            ? 'text-[#5c85f5] hover:text-white'
                            : 'text-[#2a4aa1] hover:text-[#4b7da4]'
                        }`}
                      >
                        <span>Solicitar</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal de lectura completa */}
      {readingPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b192e]/80 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-read-modal-title"
          onClick={() => setReadingPost(null)}
        >
          <div
            className="bg-white text-[#0f1f38] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#aabbc8]/45 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 bg-[#0b192e] shrink-0">
              <img
                src={readingPost.image}
                alt={readingPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b192e]/90 via-[#0b192e]/25 to-transparent" />
              <button
                type="button"
                onClick={() => setReadingPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-[#0f1f38] flex items-center justify-center shadow-md cursor-pointer"
                aria-label="Cerrar artículo"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold mb-1.5">
                  <span className="px-2.5 py-0.5 rounded bg-[#4b7da4] text-white uppercase tracking-wider text-[11px]">
                    {readingPost.category}
                  </span>
                  <span className="text-[#dce6ef]">{readingPost.date}</span>
                </div>
                <h3 id="blog-read-modal-title" className="text-xl sm:text-2xl font-bold leading-snug">
                  {readingPost.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 overflow-y-auto space-y-4">
              <p className="text-sm sm:text-base font-medium text-[#2a4aa1] leading-relaxed">
                {readingPost.summary}
              </p>
              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                {readingPost.content}
              </div>

              {readingPost.relatedService && (
                <div className="p-3.5 rounded-xl bg-[#f4f7fa] border border-[#aabbc8]/35 flex items-center gap-2.5 text-xs text-slate-700">
                  <Tag className="w-4 h-4 text-[#4b7da4] shrink-0" />
                  <span>
                    Línea técnica asociada:{' '}
                    <strong className="text-[#2a4aa1]">{readingPost.relatedService}</strong>
                  </span>
                </div>
              )}
            </div>

            <div className="px-6 py-4 bg-[#f4f7fa] border-t border-[#aabbc8]/30 flex flex-wrap items-center justify-end gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setReadingPost(null)}
                className="px-4 py-2.5 rounded-lg border border-[#aabbc8]/60 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-white cursor-pointer"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => handleQuotePost(readingPost)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>{readingPost.ctaLabel || 'Cotizar esta novedad'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
