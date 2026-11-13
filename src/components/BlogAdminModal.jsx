import React, { useState } from 'react';
import {
  Check,
  Edit2,
  Plus,
  RotateCcw,
  Star,
  Trash2,
  Upload,
  X,
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

const emptyDraft = {
  title: '',
  category: 'Promoción',
  date: 'Noviembre 2026',
  relatedService: siteContent.services[0]?.shortTitle || '',
  ctaLabel: 'Solicitar Información',
  image: siteContent.localGallery[0]?.src || './images/hero-refinery.jpg',
  summary: '',
  content: '',
  featured: false,
};

export default function BlogAdminModal({
  isOpen,
  onClose,
  posts,
  onAdd,
  onUpdate,
  onDelete,
  onSetFeatured,
  onReset,
}) {
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [draft, setDraft] = useState(emptyDraft);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const editableCategories = siteContent.blogCategories.filter((c) => c !== 'Todas');

  const startCreate = () => {
    setEditingId(null);
    setDraft(emptyDraft);
    setFormError('');
    setShowForm(true);
  };

  const startEdit = (post) => {
    setEditingId(post.id);
    setDraft({
      title: post.title || '',
      category: post.category || 'Promoción',
      date: post.date || 'Noviembre 2026',
      relatedService: post.relatedService || siteContent.services[0]?.shortTitle || '',
      ctaLabel: post.ctaLabel || 'Solicitar Información',
      image: post.image || siteContent.localGallery[0]?.src,
      summary: post.summary || '',
      content: post.content || '',
      featured: Boolean(post.featured),
    });
    setFormError('');
    setShowForm(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setDraft((prev) => ({ ...prev, image: reader.result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!draft.title.trim() || !draft.summary.trim() || !draft.content.trim()) {
      setFormError('Completa título, resumen corto y contenido detallado antes de publicar.');
      return;
    }

    if (editingId) {
      onUpdate(editingId, draft);
    } else {
      onAdd(draft);
    }
    setShowForm(false);
    setEditingId(null);
    setFormError('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b192e]/80 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white text-[#0f1f38] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#aabbc8]/45 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del panel */}
        <div className="px-6 py-5 bg-[#0b192e] text-white flex items-start justify-between gap-4 shrink-0">
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#4b7da4]/30 border border-[#4b7da4]/50 text-[11px] font-bold uppercase tracking-wider text-[#dce6ef]">
              Autogestión en Vivo (localStorage)
            </span>
            <h3 id="admin-modal-title" className="text-lg sm:text-xl font-extrabold mt-1.5">
              Gestor de Novedades, Productos y Promociones (Modo Demo)
            </h3>
            <p className="text-xs sm:text-sm text-[#aabbc8] mt-1">
              Crea, modifica o destaca anuncios en tiempo real para demostrar cómo el cliente actualizará su web sin programar.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer shrink-0"
            aria-label="Cerrar gestor demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#f4f7fa]">
          {showForm ? (
            <form
              onSubmit={handleSave}
              className="bg-white rounded-xl p-6 border border-[#aabbc8]/45 shadow-xs space-y-5"
            >
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <h4 className="text-base font-bold text-[#2a4aa1]">
                  {editingId ? 'Editar Publicación' : 'Nueva Publicación / Promoción'}
                </h4>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#0f1f38] cursor-pointer"
                >
                  ← Volver al listado
                </button>
              </div>

              {formError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Título del Anuncio o Artículo *
                  </label>
                  <input
                    type="text"
                    value={draft.title}
                    onChange={(e) => setDraft((p) => ({ ...p, title: e.target.value }))}
                    placeholder="Ej. Nuevo Servicio de Termografía Industrial en Campo"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f4f7fa] border border-[#aabbc8]/60 focus:border-[#2a4aa1] focus:bg-white focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Categoría
                  </label>
                  <select
                    value={draft.category}
                    onChange={(e) => setDraft((p) => ({ ...p, category: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f4f7fa] border border-[#aabbc8]/60 focus:border-[#2a4aa1] focus:bg-white focus:outline-none text-sm"
                  >
                    {editableCategories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Fecha o Vigencia
                  </label>
                  <input
                    type="text"
                    value={draft.date}
                    onChange={(e) => setDraft((p) => ({ ...p, date: e.target.value }))}
                    placeholder="Ej. Noviembre 2026"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f4f7fa] border border-[#aabbc8]/60 focus:border-[#2a4aa1] focus:bg-white focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Servicio Relacionado (al cotizar)
                  </label>
                  <select
                    value={draft.relatedService}
                    onChange={(e) => setDraft((p) => ({ ...p, relatedService: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f4f7fa] border border-[#aabbc8]/60 focus:border-[#2a4aa1] focus:bg-white focus:outline-none text-sm"
                  >
                    {siteContent.services.map((s) => (
                      <option key={s.id} value={s.shortTitle}>
                        {s.shortTitle}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Texto del Botón Comercial (CTA)
                  </label>
                  <input
                    type="text"
                    value={draft.ctaLabel}
                    onChange={(e) => setDraft((p) => ({ ...p, ctaLabel: e.target.value }))}
                    placeholder="Ej. Cotizar Nuevo Servicio"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#f4f7fa] border border-[#aabbc8]/60 focus:border-[#2a4aa1] focus:bg-white focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Selector de imagen reutilizando galería local + subida opcional */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Imagen de Portada (elige una foto del proyecto o sube una propia)
                  </label>
                  <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f4f7fa] hover:bg-[#aabbc8]/25 border border-[#aabbc8]/50 text-xs font-semibold text-[#2a4aa1] cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Subir imagen local</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {siteContent.localGallery.map((img) => {
                    const selected = draft.image === img.src;
                    return (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setDraft((p) => ({ ...p, image: img.src }))}
                        className={`relative rounded-lg overflow-hidden border-2 text-left transition-all cursor-pointer ${
                          selected
                            ? 'border-[#2a4aa1] ring-2 ring-[#2a4aa1]/25'
                            : 'border-transparent opacity-80 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.label}
                          className="w-full h-16 object-cover"
                        />
                        <span className="block px-1.5 py-1 bg-white text-[10px] font-semibold text-slate-700 truncate">
                          {img.label}
                        </span>
                        {selected && (
                          <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-[#2a4aa1] text-white flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Resumen Corto (visible en tarjeta) *
                </label>
                <textarea
                  rows={2}
                  value={draft.summary}
                  onChange={(e) => setDraft((p) => ({ ...p, summary: e.target.value }))}
                  placeholder="Descripción breve y atractiva del nuevo servicio, producto o promoción..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f4f7fa] border border-[#aabbc8]/60 focus:border-[#2a4aa1] focus:bg-white focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Contenido Completo (visible al abrir detalle) *
                </label>
                <textarea
                  rows={4}
                  value={draft.content}
                  onChange={(e) => setDraft((p) => ({ ...p, content: e.target.value }))}
                  placeholder="Detalle técnico, beneficios, alcance y condiciones..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#f4f7fa] border border-[#aabbc8]/60 focus:border-[#2a4aa1] focus:bg-white focus:outline-none text-sm"
                />
              </div>

              <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={draft.featured}
                  onChange={(e) => setDraft((p) => ({ ...p, featured: e.target.checked }))}
                  className="w-4 h-4 accent-[#2a4aa1]"
                />
                <span>Mostrar como anuncio principal destacado</span>
              </label>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2.5 rounded-lg border border-[#aabbc8]/60 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  {editingId ? 'Guardar Cambios' : 'Publicar en la Web'}
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={startCreate}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2a4aa1] hover:bg-[#4b7da4] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-colors cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Nueva Publicación</span>
                </button>

                <button
                  type="button"
                  onClick={onReset}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-100 border border-[#aabbc8]/50 text-xs font-semibold text-slate-600 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer ejemplos</span>
                </button>
              </div>

              <div className="space-y-3">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl p-4 border border-[#aabbc8]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs"
                  >
                    <div className="flex items-start gap-3.5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-16 rounded-lg object-cover shrink-0 bg-[#0b192e]"
                      />
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-[#4b7da4]/15 text-[#2a4aa1] text-[10px] font-bold uppercase tracking-wider">
                            {post.category}
                          </span>
                          {post.featured && (
                            <span className="px-2 py-0.5 rounded bg-[#2a4aa1] text-white text-[10px] font-bold uppercase tracking-wider">
                              Destacado
                            </span>
                          )}
                          <span className="text-xs text-slate-400">{post.date}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-[#0f1f38] mt-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <button
                        type="button"
                        onClick={() => onSetFeatured(post.id)}
                        title="Marcar como anuncio principal destacado"
                        className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                          post.featured
                            ? 'bg-[#2a4aa1] text-white border-[#2a4aa1]'
                            : 'bg-[#f4f7fa] text-slate-500 hover:text-[#2a4aa1] border-[#aabbc8]/40'
                        }`}
                      >
                        <Star className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => startEdit(post)}
                        title="Editar publicación"
                        className="p-2 rounded-lg bg-[#f4f7fa] hover:bg-[#4b7da4]/15 text-[#2a4aa1] border border-[#aabbc8]/40 transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete(post.id)}
                        title="Eliminar publicación"
                        className="p-2 rounded-lg bg-[#f4f7fa] hover:bg-red-50 text-red-600 border border-[#aabbc8]/40 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
