/**
 * ARCHIVO CENTRAL DE CONTENIDOS — iQUÁNTICA
 * -----------------------------------------------------------------------------
 * Edita aquí textos, cifras, servicios, proyectos y datos de contacto del cliente
 * sin necesidad de modificar los componentes visuales de la interfaz.
 */

export const siteContent = {
  brand: {
    name: 'iQUÁNTICA',
    rif: 'J-402909497',
    tagline: 'Ingeniería Multidisciplinaria Industrial y Petrolera',
    rncStatus: 'RNC · Inscrita y Habilitada',
    copyrightYear: new Date().getFullYear(),
  },

  navLinks: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Impacto', href: '#cifras' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Novedades', href: '#novedades' },
    { label: 'Calidad HSE', href: '#calidad' },
  ],

  sectionNav: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'cifras', label: 'Impacto' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'novedades', label: 'Novedades' },
    { id: 'calidad', label: 'Calidad HSE' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'ubicacion', label: 'Ubicación' },
  ],

  localGallery: [
    {
      src: './images/hero-refinery.jpg',
      label: 'Complejo de Refinación',
    },
    {
      src: './images/engineering-team.jpg',
      label: 'Equipo de Ingeniería CAD/P&ID',
    },
    {
      src: './images/project-junin.jpg',
      label: 'Facilidades Distrito Junín',
    },
    {
      src: './images/project-cabrutica.jpg',
      label: 'Estación de Flujo Cabrutica',
    },
    {
      src: './images/project-santome.jpg',
      label: 'Instrumentación San Tomé',
    },
  ],

  blogCategories: ['Todas', 'Promoción', 'Nuevo Servicio', 'Nuevo Producto', 'Noticia'],

  blogSection: {
    eyebrow: 'ACTUALIDAD Y LANZAMIENTOS',
    title: 'Novedades, Productos y Servicios',
    subtitle:
      'Manténgase al día con nuestras nuevas líneas técnicas, suministros especializados, promociones operativas y avances de proyectos.',
  },

  initialBlogPosts: [
    {
      id: 'post-diagnostico-facilidades',
      category: 'Promoción',
      date: 'Noviembre 2026',
      title: 'Diagnóstico Técnico Preliminar para Adecuación de Facilidades Industriales',
      summary:
        'Evaluación inicial de integridad mecánica, hidráulica y lazos de control con condiciones preferenciales para operadoras industriales y petroleras durante el trimestre.',
      content:
        'Como parte de nuestra campaña de impulso operativo, iQUÁNTICA ofrece a empresas del sector industrial, petróleo y gas un paquete de diagnóstico técnico preliminar en sitio o remoto sobre facilidades de superficie, múltiples de producción y sistemas auxiliares.\n\nEl alcance incluye levantamiento de oportunidades de optimización, revisión de cuellos de botella hidráulicos y hoja de ruta priorizada con estimación de horas-hombre y retorno operacional bajo códigos API y ASME.',
      image: './images/project-cabrutica.jpg',
      ctaLabel: 'Solicitar Diagnóstico Promocional',
      relatedService: 'Mantenimiento Industrial y Confiabilidad',
      featured: true,
    },
    {
      id: 'post-levantamiento-3d',
      category: 'Nuevo Servicio',
      date: 'Noviembre 2026',
      title: 'Nueva Unidad de Levantamiento As-Built y Modelado 3D de Plantas',
      summary:
        'Incorporamos flujos digitales integrados para actualización de planos P&ID, isométricos de tuberías y maquetas 3D con cero retrabajo en campo.',
      content:
        'Nuestro departamento de Ingeniería Multidisciplinaria amplía sus capacidades con la unidad especializada de Levantamiento As-Built y Modelado 3D para plantas existentes.\n\nEsta nueva línea permite digitalizar instalaciones con alta precisión geométrica antes de ejecutar paradas de planta o interconexiones (tie-ins), reduciendo interferencias constructivas y acelerando la emisión de paquetes de procura y construcción.',
      image: './images/engineering-team.jpg',
      ctaLabel: 'Cotizar Levantamiento As-Built',
      relatedService: 'Ingeniería Conceptual, Básica y de Detalle',
      featured: false,
    },
    {
      id: 'post-instrumentacion-inteligente',
      category: 'Nuevo Producto',
      date: 'Octubre 2026',
      title: 'Suministro Prioritario de Válvulas de Control e Instrumentación Inteligente Certificada',
      summary:
        'Disponibilidad de procura técnica directa para transmisores de presión, actuadores neumáticos y válvulas de proceso con trazabilidad MTR y certificación internacional.',
      content:
        'A través de nuestra división de Procura Técnica y Gestión de Suministros, habilitamos líneas de entrega prioritaria para instrumentación de campo certificada para áreas clasificadas Clase I Div. 1 y 2.\n\nCada lote de suministro incluye dossiers completos de calidad, certificados de materiales (MTR), pruebas hidrostáticas y acompañamiento técnico en calibración y pre-comisionamiento en planta.',
      image: './images/project-santome.jpg',
      ctaLabel: 'Consultar Disponibilidad de Equipos',
      relatedService: 'Procura Técnica y Gestión de Suministros',
      featured: false,
    },
    {
      id: 'post-hito-90k-hh',
      category: 'Noticia',
      date: 'Octubre 2026',
      title: 'iQUÁNTICA supera las 90,000 Horas-Hombre con Excelencia SIHO-A en la Faja del Orinoco',
      summary:
        'Consolidamos más de 14 años de trayectoria ejecutando proyectos multidisciplinarios de alta complejidad en Distrito Junín, Cabrutica y San Tomé.',
      content:
        'Nuestro equipo multidisciplinario celebra haber superado el hito de las 90,000 horas-hombre acumuladas en servicios de ingeniería, gerencia IPC y asistencia técnica en campo.\n\nEste logro reafirma nuestro compromiso con la entrega oportuna en tiempos y costos, el cumplimiento estricto de los protocolos SIHO-A y la formación continua del talento profesional venezolano.',
      image: './images/project-junin.jpg',
      ctaLabel: 'Conocer Credenciales Corporativas',
      relatedService: 'Gerencia y Ejecución de Proyectos (IPC)',
      featured: false,
    },
  ],

  hero: {
    badge: 'Ingeniería Multidisciplinaria · Sector Industrial, Petróleo y Gas',
    title: 'Transformando Visiones Industriales en Realidades Operativas',
    subtitle:
      'Evolución y excelencia en servicios de ingeniería multidisciplinaria para el sector industrial y petrolero.',
    primaryCta: { label: 'Ver Servicios', href: '#servicios' },
    secondaryCta: { label: 'Nuestra Historia', href: '#nosotros' },
    image: './images/hero-refinery.jpg',
    stats: [
      { value: '90k+', label: 'Horas-Hombre', accent: false },
      { value: '14+', label: 'Años Experiencia', accent: false },
      { value: 'RNC', label: 'Habilitada', accent: true },
      { value: '3 Zonas', label: 'Faja del Orinoco', accent: false },
    ],
  },

  about: {
    eyebrow: 'NUESTRA TRAYECTORIA',
    title: 'Legado de Excelencia',
    description:
      'iQUÁNTICA nace como la evolución y expansión de una sólida trayectoria de más de 14 años en la industria del petróleo y gas. Respaldada por un legado de excelencia en proyectos de gran complejidad y altos estándares de calidad, la empresa establece sus cimientos para continuar ofreciendo soluciones de ingeniería innovadoras y eficientes, adaptadas con precisión a las demandas del mercado moderno.',
    image: './images/engineering-team.jpg',
    imageAlt: 'Equipo multidisciplinario de ingeniería de iQUÁNTICA revisando planos técnicos',
    rncCard: {
      code: 'RNC',
      status: 'INSCRITA Y HABILITADA',
      detail:
        'Registro Nacional de Contratistas vigente para contratación pública y privada en obras, ingeniería y servicios especializados.',
    },
    pillars: [
      {
        title: 'Precisión Multidisciplinaria',
        description:
          'Integración coordinada de Procesos, Mecánica, Tuberías, Civil, Electricidad e Instrumentación bajo un mismo estándar técnico.',
      },
      {
        title: 'Eficiencia en Tiempos y Costos',
        description:
          'Planificación rigurosa y control de avance orientado a garantizar entregas oportunas sin desviaciones presupuestarias.',
      },
      {
        title: 'Estándares Internacionales',
        description:
          'Entregables auditables alineados con normativas PDVSA, API, ASME, ANSI/IEEE e ISO 9001 para activos críticos.',
      },
    ],
  },

  impact: {
    eyebrow: 'RESULTADOS COMPROBADOS',
    title: 'Impacto en Cifras',
    description:
      'Nuestra experiencia se traduce en miles de horas dedicadas a proyectos de gran complejidad técnica en el Distrito Junín, Cabrutica y San Tomé. Garantizamos entrega oportuna en tiempos, costos y estándares de calidad internacional, fomentando la mejora continua del talento humano.',
    stats: [
      {
        id: 'horas-hombre',
        value: 90,
        suffix: 'k+',
        label: 'HORAS-HOMBRE EJECUTADAS',
        detail: 'En ingeniería y ejecución de proyectos de alta complejidad técnica',
        featured: true,
      },
      {
        id: 'trayectoria',
        value: 14,
        suffix: '+',
        label: 'AÑOS DE TRAYECTORIA',
        detail: 'Respaldo continuo en la industria del petróleo, gas y manufactura',
        featured: false,
      },
      {
        id: 'distritos',
        value: 3,
        suffix: '',
        label: 'DISTRITOS OPERATIVOS CLAVE',
        detail: 'Presencia sólida en Distrito Junín, Cabrutica y San Tomé',
        featured: false,
      },
      {
        id: 'compromiso',
        value: 100,
        suffix: '%',
        label: 'COMPROMISO SIHO Y CALIDAD',
        detail: 'Apego estricto a normativas técnicas y seguridad operacional',
        featured: false,
      },
    ],
  },

  servicesSection: {
    eyebrow: 'PORTAFOLIO TÉCNICO',
    title: 'Servicios Multidisciplinarios',
    subtitle:
      'Soluciones integrales adaptadas a cada etapa del ciclo de vida de sus instalaciones industriales, petroleras y energéticas.',
  },

  // Reemplaza cada "videoUrl" con el enlace de YouTube definitivo de cada especialidad
  services: [
    {
      id: 'ingenieria-cbd',
      icon: 'DraftingCompass',
      title: 'Ingeniería Conceptual, Básica y de Detalle',
      shortTitle: 'Ingeniería Conceptual, Básica y de Detalle',
      description:
        'Desarrollo integral de paquetes de ingeniería en Procesos, Mecánica, Tuberías, Civil, Electricidad e Instrumentación para nuevas facilidades o adecuaciones.',
      deliverables: [
        'Planos P&ID, isométricos y arreglos de planta',
        'Memorias de cálculo y especificaciones técnicas',
        'Cómputos métricos y estimados de costos',
      ],
      videoUrl: 'https://www.youtube.com/watch?v=ZsbxCdWN-7Q',
      videoCaption: 'Demostración técnica · Ingeniería Conceptual, Básica y de Detalle',
    },
    {
      id: 'gerencia-ipc',
      icon: 'ClipboardCheck',
      title: 'Gerencia y Ejecución de Proyectos (IPC)',
      shortTitle: 'Gerencia y Ejecución de Proyectos (IPC)',
      description:
        'Dirección estratégica y control de proyectos bajo metodología PMI, integrando ingeniería, procura y construcción con foco en rentabilidad y plazo.',
      deliverables: [
        'Planificación maestra y control de cronogramas',
        'Gestión de riesgos, alcance y control presupuestario',
        'Coordinación multidisciplinaria de contratistas',
      ],
      videoUrl: 'https://www.youtube.com/watch?v=ZsbxCdWN-7Q',
      videoCaption: 'Demostración técnica · Gerencia y Ejecución de Proyectos IPC',
    },
    {
      id: 'procura-tecnica',
      icon: 'PackageCheck',
      title: 'Procura Técnica y Gestión de Suministros',
      shortTitle: 'Procura Técnica y Gestión de Suministros',
      description:
        'Abastecimiento especializado de equipos rotativos, válvulas, tuberías, instrumentación y materiales críticos bajo estricta trazabilidad técnica.',
      deliverables: [
        'Requisiciones técnicas y evaluación de ofertas',
        'Expediting y seguimiento de fabricación',
        'Inspección en fábrica y certificación de calidad',
      ],
      videoUrl: 'https://www.youtube.com/watch?v=ZsbxCdWN-7Q',
      videoCaption: 'Demostración técnica · Procura Técnica y Trazabilidad de Suministros',
    },
    {
      id: 'mantenimiento-confiabilidad',
      icon: 'Wrench',
      title: 'Mantenimiento Industrial y Confiabilidad',
      shortTitle: 'Mantenimiento Industrial y Confiabilidad',
      description:
        'Estrategias de integridad mecánica, paradas de planta y optimización de facilidades de superficie para maximizar la disponibilidad operativa.',
      deliverables: [
        'Adecuación y rehabilitación de estaciones de flujo',
        'Planificación de paradas y mantenimiento mayor',
        'Análisis de integridad y continuidad operativa',
      ],
      videoUrl: 'https://www.youtube.com/watch?v=ZsbxCdWN-7Q',
      videoCaption: 'Demostración técnica · Mantenimiento Industrial y Paradas de Planta',
    },
    {
      id: 'automatizacion-electricidad',
      icon: 'Cpu',
      title: 'Automatización, Instrumentación y Electricidad',
      shortTitle: 'Automatización, Instrumentación y Electricidad',
      description:
        'Modernización de sistemas de control industrial, instrumentación de campo, media/baja tensión y respaldo energético confiable.',
      deliverables: [
        'Arquitectura SCADA, PLC y lazos de control',
        'Subestaciones, tableros y puestas a tierra',
        'Pruebas de lazo, calibración y comisionamiento',
      ],
      videoUrl: 'https://www.youtube.com/watch?v=ZsbxCdWN-7Q',
      videoCaption: 'Demostración técnica · Automatización SCADA/PLC y Sistemas Eléctricos',
    },
    {
      id: 'asistencia-qaqc',
      icon: 'HardHat',
      title: 'Asistencia Técnica e Inspección QA/QC',
      shortTitle: 'Asistencia Técnica e Inspección QA/QC',
      description:
        'Supervisión especializada en sitio para garantizar que la ejecución en campo cumpla al 100% con planos, códigos aplicables y seguridad industrial.',
      deliverables: [
        'Inspección multidisciplinaria de obras en campo',
        'Dossier de calidad, ensayos y certificaciones',
        'Soporte en pre-comisionamiento y arranque seguro',
      ],
      videoUrl: 'https://www.youtube.com/watch?v=ZsbxCdWN-7Q',
      videoCaption: 'Demostración técnica · Asistencia Técnica en Campo e Inspección QA/QC',
    },
  ],

  projectsSection: {
    eyebrow: 'PRESENCIA OPERATIVA',
    title: 'Proyectos y Alcance Regional',
    subtitle:
      'Experiencia consolidada en la Faja Petrolífera del Orinoco y complejos industriales del oriente venezolano.',
  },

  projectRegions: ['Todos', 'Distrito Junín', 'Cabrutica', 'San Tomé'],

  projects: [
    {
      id: 'proj-junin-facilidades',
      region: 'Distrito Junín',
      discipline: 'Ingeniería de Detalle & Tuberías',
      title: 'Adecuación de Múltiples de Producción y Facilidades de Superficie',
      hours: '28,500+ HH',
      image: './images/project-junin.jpg',
      summary:
        'Desarrollo de ingeniería de detalle y soporte técnico en campo para optimización de cabezales de recolección, líneas de flujo y manejo de crudo pesado.',
      scopeDetails: [
        'Levantamiento de campo y actualización de planos P&ID conforme a obra.',
        'Análisis de flexibilidad de tuberías y diseño de soportes estructurales.',
        'Elaboración de cómputos métricos y paquetes de licitación para construcción.',
      ],
      standards: ['PDVSA', 'ASME B31.3', 'API 1104'],
    },
    {
      id: 'proj-cabrutica-bombeo',
      region: 'Cabrutica',
      discipline: 'Gerencia IPC & Integridad Mecánica',
      title: 'Modernización de Estación de Flujo y Sistema de Bombeo Multifásico',
      hours: '32,000+ HH',
      image: './images/project-cabrutica.jpg',
      summary:
        'Ingeniería básica y de detalle junto a gerencia técnica para ampliación de capacidad de bombeo, racks de tuberías y sistemas auxiliares de proceso.',
      scopeDetails: [
        'Dimensionamiento hidráulico y selección de equipos rotativos críticos.',
        'Diseño de fundaciones de concreto armado para bombas y tanques.',
        'Planificación de interconexiones (tie-ins) durante ventanas operativas programadas.',
      ],
      standards: ['API 610', 'ASME Sec. VIII', 'ACI 318'],
    },
    {
      id: 'proj-santome-control',
      region: 'San Tomé',
      discipline: 'Automatización, Control & Electricidad',
      title: 'Actualización de Lazo de Instrumentación y Respaldo Eléctrico de Planta',
      hours: '19,400+ HH',
      image: './images/project-santome.jpg',
      summary:
        'Renovación tecnológica de transmisores inteligentes, válvulas de control automatizadas y tableros de distribución eléctrica en área clasificada.',
      scopeDetails: [
        'Ingeniería de lazos, listas de señales I/O y diagramas de conexionado.',
        'Especificación de equipos para áreas clasificadas Clase I Div. 1 y 2.',
        'Supervisión QA/QC en pruebas de aceptación en sitio (SAT) y arranque.',
      ],
      standards: ['ANSI/ISA', 'NFPA 70 (NEC)', 'IEEE'],
    },
    {
      id: 'proj-junin-procura',
      region: 'Distrito Junín',
      discipline: 'Procura Técnica & QA/QC',
      title: 'Gestión de Procura y Aseguramiento Técnico para Parada de Planta',
      hours: '12,800+ HH',
      image: './images/hero-refinery.jpg',
      summary:
        'Suministro especializado de válvulas de proceso, bridas de alta presión e instrumentación con seguimiento integral e inspección previa al despacho.',
      scopeDetails: [
        'Evaluación técnica comparativa de fabricantes nacionales e internacionales.',
        'Control de trazabilidad de certificados de materiales (MTR) y pruebas hidrostáticas.',
        'Entrega oportuna sincronizada con la ruta crítica de parada de planta.',
      ],
      standards: ['ISO 9001', 'API 6D', 'ASME B16.5'],
    },
  ],

  qualityHse: {
    eyebrow: 'EXCELENCIA OPERACIONAL',
    title: 'Calidad, Seguridad y Talento Humano',
    subtitle:
      'Cada hora-hombre ejecutada está respaldada por protocolos estrictos de Seguridad Industrial, Higiene Ocupacional y Ambiente (SIHO-A) y un programa continuo de capacitación técnica.',
    pillars: [
      {
        title: 'Seguridad Industrial e Higiene (SIHO-A)',
        description:
          'Cultura preventiva de cero accidentes en oficina y campo, análisis de riesgos en cada tarea y cumplimiento estricto de permisología operacional.',
      },
      {
        title: 'Aseguramiento y Control de Calidad (QA/QC)',
        description:
          'Revisión interdisciplinaria cruzada de entregables, trazabilidad documental y verificación rigurosa contra códigos internacionales.',
      },
      {
        title: 'Mejora Continua del Talento',
        description:
          'Formación permanente de ingenieros especialistas y transferencia tecnológica para responder a los desafíos energéticos modernos.',
      },
    ],
    standards: ['PDVSA', 'API', 'ASME', 'ANSI / IEEE', 'ISO 9001', 'PMI', 'SIHO-A'],
  },

  contact: {
    eyebrow: 'CANALES CORPORATIVOS',
    title: 'Impulsemos su Próximo Proyecto Industrial',
    subtitle:
      'Nuestro equipo de ingeniería y gerencia de proyectos está disponible para evaluar sus requerimientos técnicos, licitaciones o necesidades de asistencia especializada.',
    email: 'comercial@iquantica.com.ve',
    phonePrimary: '+58 (281) 280-0000',
    phoneSecondary: '+58 (414) 800-0000',
    locations: 'Eje El Tigre – San José de Guanipa, Anzoátegui · Cobertura Junín, Cabrutica y San Tomé',
    schedule: 'Lunes a Viernes · 8:00 a.m. – 5:00 p.m.',
    map: {
      title: 'Ubicación de Oficina y Centro Operativo',
      regionLabel: 'Eje El Tigre – San José de Guanipa, Estado Anzoátegui, Venezuela',
      referenceNote:
        'Punto estratégico de atención comercial y despliegue hacia Distrito Junín, Cabrutica y San Tomé.',
      coordinatesDms: '8°53\'37.8"N 64°10\'35.6"W',
      lat: 8.893833,
      lng: -64.176556,
      embedUrl: 'https://maps.google.com/maps?q=8.893833,-64.176556&hl=es&z=16&output=embed',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=8.893833,-64.176556',
      openMapUrl: 'https://www.google.com/maps/search/?api=1&query=8.893833,-64.176556',
    },
    brochure: {
      title: 'Dossier & Brochure Corporativo iQUÁNTICA',
      description:
        'Incluye resumen ejecutivo, habilitación RNC, detalle de especialidades multidisciplinarias, historial de horas-hombre y estándares SIHO/QA-QC.',
      sections: [
        '01. Identidad Corporativa y Trayectoria (+14 años)',
        '02. Habilitación RNC y Marco Legal de Contratación',
        '03. Capacidades de Ingeniería Multidisciplinaria e IPC',
        '04. Experiencia Regional: Junín, Cabrutica y San Tomé',
        '05. Política SIHO-A, Aseguramiento QA/QC y Normativas',
      ],
    },
  },

  locationSection: {
    eyebrow: 'PRESENCIA Y UBICACIÓN GPS',
    title: 'Centro Operativo y Cobertura Regional',
    subtitle:
      'Ubicación estratégica en el eje El Tigre – San José de Guanipa con capacidad de despliegue inmediato hacia los principales distritos petroleros e industriales del oriente venezolano.',
    zones: [
      {
        code: 'SEDE CENTRAL',
        name: 'Eje El Tigre – San José de Guanipa',
        role: 'Oficina Comercial, Gerencia e Ingeniería',
        detail: 'Atención corporativa, sala técnica multidisciplinaria y coordinación logística.',
        highlight: true,
      },
      {
        code: 'ZONA 01',
        name: 'Distrito Junín',
        role: 'Faja Petrolífera del Orinoco',
        detail: 'Ingeniería de detalle, adecuación de macollas y estaciones de flujo.',
        highlight: false,
      },
      {
        code: 'ZONA 02',
        name: 'División Cabrutica',
        role: 'Confiabilidad y Operaciones',
        detail: 'Mantenimiento industrial, integridad mecánica y procura especializada.',
        highlight: false,
      },
      {
        code: 'ZONA 03',
        name: 'Eje San Tomé',
        role: 'Asistencia Técnica e IPC',
        detail: 'Automatización, electricidad, instrumentación e inspección QA/QC.',
        highlight: false,
      },
    ],
  },

  socialMedia: {
    eyebrow: 'REDES Y CANALES DIGITALES',
    title: 'Síguenos y Conecta en Línea',
    description:
      'Actualizaciones de proyectos en campo, publicaciones técnicas y contacto directo con nuestra gerencia comercial.',
    // Cambia "enabled: true/false" o reemplaza "url" y "handle" con las cuentas definitivas del cliente
    links: [
      {
        id: 'linkedin',
        name: 'LinkedIn',
        shortName: 'LinkedIn',
        handle: '/company/iquantica-ingenieria',
        badge: 'Corporativo B2B',
        url: 'https://www.linkedin.com/company/iquantica',
        enabled: true,
      },
      {
        id: 'instagram',
        name: 'Instagram',
        shortName: 'Instagram',
        handle: '@iquantica.ve',
        badge: 'Proyectos y Actualidad',
        url: 'https://www.instagram.com/iquantica.ve',
        enabled: true,
      },
      {
        id: 'whatsapp',
        name: 'WhatsApp Corporativo',
        shortName: 'WhatsApp',
        handle: '+58 (414) 800-0000',
        badge: 'Atención Directa',
        url: 'https://wa.me/584148000000?text=Hola%20iQU%C3%81NTICA%2C%20solicito%20informaci%C3%B3n%20corporativa.',
        enabled: true,
      },
      {
        id: 'facebook',
        name: 'Facebook',
        shortName: 'Facebook',
        handle: '/iquantica.ve',
        badge: 'Institucional',
        url: 'https://www.facebook.com/iquantica.ve',
        enabled: false,
      },
      {
        id: 'youtube',
        name: 'YouTube',
        shortName: 'YouTube',
        handle: '@iQUANTICAIngenieria',
        badge: 'Canal Técnico',
        url: 'https://www.youtube.com/@iquantica',
        enabled: false,
      },
    ],
  },
};
