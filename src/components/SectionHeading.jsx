import React from 'react';

/**
 * Encabezado de sección reutilizable con barra vertical izquierda en #4b7da4
 * inspirada directamente en el diseño de referencia del cliente.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  className = '',
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-[0.18em] mb-3 ${
            dark ? 'text-[#aabbc8]' : 'text-[#4b7da4]'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <div className="flex items-stretch gap-3.5 sm:gap-4">
        <span
          className="w-1.5 rounded-full bg-[#4b7da4] shrink-0"
          aria-hidden="true"
        />
        <h2
          className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
            dark ? 'text-white' : 'text-[#2a4aa1]'
          }`}
        >
          {title}
        </h2>
      </div>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-[#aabbc8]' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
