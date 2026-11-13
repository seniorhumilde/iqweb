import React from 'react';

/**
 * Logotipo corporativo oficial de iQUÁNTICA extraído del manual de marca del cliente.
 * - layout="horizontal": versión barra superior / navbar (iQUÁNTICA con Q isotipo).
 * - layout="stacked": logotipo completo con isotipo Q superior y RIF J-402909497.
 * - variant="light" | "dark": adapta el contraste sobre fondos claros u oscuros.
 */
export default function BrandLogo({
  variant = 'light',
  layout = 'horizontal',
  className = '',
}) {
  const isDark = variant === 'dark';
  const isStacked = layout === 'stacked';

  const src = isStacked
    ? isDark
      ? './images/logo-completo-dark.png'
      : './images/logo-completo.png'
    : isDark
      ? './images/logo-horizontal-dark.png'
      : './images/logo-horizontal.png';

  return (
    <a
      href="#inicio"
      className={`inline-flex items-center group focus:outline-none ${className}`}
      aria-label="iQUÁNTICA - Ir al inicio"
    >
      <img
        src={src}
        alt="iQUÁNTICA Ingeniería Multidisciplinaria"
        className={`w-auto object-contain select-none transition-opacity duration-200 group-hover:opacity-90 ${
          isStacked ? 'h-24 sm:h-28' : 'h-8 sm:h-9'
        }`}
      />
    </a>
  );
}
