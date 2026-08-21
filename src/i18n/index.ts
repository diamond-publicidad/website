export const localeSlugs = ['es-co', 'en-us'] as const;

export type LocaleSlug = (typeof localeSlugs)[number];

export const siteVersion = '0.1.0' as const;
export const siteVersionDate = '20-08-2026' as const;

export interface Locale {
  code: 'es-CO' | 'en-US';
  slug: LocaleSlug;
}

const esCO = {
  metadata: {
    title: 'Diamond Publicidad | Publicidad y soluciones gráficas',
    description: 'Diamond Publicidad: publicidad, impresión digital y soluciones gráficas en Colombia.',
  },
  navigation: {
    primary: 'Navegación principal',
    heading: 'Navegación',
    services: 'Servicios',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    home: 'Diamond Publicidad, inicio',
  },
  language: {
    heading: 'Idioma',
    label: 'Seleccionar idioma',
    esCO: 'Español (Colombia)',
    enUS: 'English (United States)',
  },
  theme: {
    heading: 'Configuración',
    label: 'Tema oscuro',
    dark: 'Tema oscuro',
    light: 'Tema claro',
  },
  backToTop: {
    label: 'Volver al inicio',
    text: 'Arriba',
  },
  footer: {
    copyright: 'Todos los derechos reservados.',
    madeBy: 'Hecho por',
    developerLabel: 'Julian Ospina Dev en GitHub',
    versionLabel: 'Versión',
    dateLabel: 'Fecha',
    aboutSite: 'Sobre el sitio',
  },
  home: {
    hero: {
      eyebrow: 'Diamond Publicidad',
      title: 'Publicidad que toma forma.',
      description: 'Empresa colombiana dedicada a la publicidad, la impresión digital y las soluciones gráficas.',
      primaryAction: 'Hablemos de tu proyecto',
      secondaryAction: 'Conoce más',
      identityLabel: 'Identidad de Diamond Publicidad',
      identityEyebrow: 'Soluciones gráficas',
      identityText: 'Una presencia clara para una marca que comunica.',
    },
    services: {
      eyebrow: 'Lo que hacemos',
      title: 'Servicios',
      description: 'Soluciones gráficas para llevar una idea desde el diseño hasta una pieza lista para comunicar.',
      largeFormat: {
        title: 'Impresión digital a gran formato',
        description: 'Materiales para piezas de gran formato:',
        items: ['Banner', 'Vinilo adhesivo', 'Microperforado'],
      },
      outdoor: {
        title: 'Avisos y publicidad exterior',
        description: 'Piezas para identificar, promocionar y dar visibilidad:',
        items: ['Avisos', 'Avisos en cajas de luz', 'Vallas y pendones'],
      },
      design: {
        title: 'Diseño y piezas impresas',
        description: 'Recursos para comunicar una marca en distintos formatos:',
        items: ['Tarjetas de presentación', 'Botones y volantes', 'Diseños'],
      },
    },
    portfolio: {
      eyebrow: 'Trabajo real',
      title: 'Portafolio',
      description: 'El portafolio estará disponible cuando existan piezas aprobadas para compartir.',
      status: 'Próximamente',
    },
    clients: {
      eyebrow: 'Clientes',
      title: 'Confían en nosotros',
      description: 'Una selección de clientes y proyectos con los que Diamond Publicidad ha trabajado de forma clara y directa.',
      providerNote: 'Trabajamos como proveedor de impresión digital de gran formato para otros publicistas y agencias que necesitan una ejecución clara y precisa.',
      listLabel: 'Lista de clientes',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos.',
      description: 'Encuentra a Diamond Publicidad en Funza, Colombia.',
      whatsapp: 'Escribir por WhatsApp',
      whatsappMessage: 'Hola, me comunico para cotizar',
      channels: 'Canales',
      location: 'Ubicación',
      phonePrefix: 'Tel.',
      facebook: 'Facebook',
      externalPage: 'abrir página externa',
      openMap: 'Abrir en Google Maps',
      mapTitle: 'Mapa de ubicación: {address}',
    },
  },
} as const;

type TranslationShape<Value> = Value extends string
  ? string
  : Value extends readonly string[]
    ? readonly string[]
    : { [Key in keyof Value]: TranslationShape<Value[Key]> };

const enUS = {
  metadata: {
    title: 'Diamond Publicidad | Advertising and graphic solutions',
    description: 'Diamond Publicidad: advertising, digital printing, and graphic solutions in Colombia.',
  },
  navigation: {
    primary: 'Primary navigation',
    heading: 'Navigation',
    services: 'Services',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    home: 'Diamond Publicidad, home',
  },
  language: {
    heading: 'Language',
    label: 'Select language',
    esCO: 'Español (Colombia)',
    enUS: 'English (United States)',
  },
  theme: {
    heading: 'Settings',
    label: 'Dark theme',
    dark: 'Dark theme',
    light: 'Light theme',
  },
  backToTop: {
    label: 'Back to top',
    text: 'Top',
  },
  footer: {
    copyright: 'All rights reserved.',
    madeBy: 'Made by',
    developerLabel: 'Julian Ospina Dev on GitHub',
    versionLabel: 'Version',
    dateLabel: 'Date',
    aboutSite: 'About this site',
  },
  home: {
    hero: {
      eyebrow: 'Diamond Publicidad',
      title: 'Advertising that takes shape.',
      description: 'A Colombian company dedicated to advertising, digital printing, and graphic solutions.',
      primaryAction: 'Let us talk about your project',
      secondaryAction: 'Learn more',
      identityLabel: 'Diamond Publicidad identity',
      identityEyebrow: 'Graphic solutions',
      identityText: 'A clear presence for a brand that communicates.',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Services',
      description: 'Graphic solutions that take an idea from design to a piece ready to communicate.',
      largeFormat: {
        title: 'Large-format digital printing',
        description: 'Materials for large-format pieces:',
        items: ['Banner', 'Adhesive vinyl', 'Perforated vinyl'],
      },
      outdoor: {
        title: 'Signs and outdoor advertising',
        description: 'Pieces to identify, promote, and give visibility:',
        items: ['Signs', 'Lightbox signs', 'Billboards and banners'],
      },
      design: {
        title: 'Design and printed pieces',
        description: 'Resources to communicate a brand in different formats:',
        items: ['Business cards', 'Buttons and flyers', 'Designs'],
      },
    },
    portfolio: {
      eyebrow: 'Real work',
      title: 'Portfolio',
      description: 'The portfolio will be available when approved pieces are ready to share.',
      status: 'Coming soon',
    },
    clients: {
      eyebrow: 'Clients',
      title: 'They trust us',
      description: 'A selection of clients and projects worked on by Diamond Publicidad in a clear and direct way.',
      providerNote: 'We work as a supplier of large-format digital printing for other publicists and agencies that need a clear and precise execution.',
      listLabel: 'Client list',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us talk.',
      description: 'Find Diamond Publicidad in Funza, Colombia.',
      whatsapp: 'Write on WhatsApp',
      whatsappMessage: 'Hello, I am contacting you for a quote',
      channels: 'Channels',
      location: 'Location',
      phonePrefix: 'Tel.',
      facebook: 'Facebook',
      externalPage: 'open external page',
      openMap: 'Open in Google Maps',
      mapTitle: 'Location map: {address}',
    },
  },
} as const satisfies TranslationShape<typeof esCO>;

export const locales: Record<LocaleSlug, Locale> = {
  'es-co': { code: 'es-CO', slug: 'es-co' },
  'en-us': { code: 'en-US', slug: 'en-us' },
};

export const translations = {
  'es-co': esCO,
  'en-us': enUS,
} satisfies Record<LocaleSlug, TranslationShape<typeof esCO>>;

export type Translations = (typeof translations)[LocaleSlug];

export const defaultLocale: LocaleSlug = 'es-co';
export const languageStorageKey = 'diamond-publicidad-locale';

const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const getLocalePath = (locale: LocaleSlug) => `${basePath}${locale}/`;

export const isLocaleSlug = (value: string): value is LocaleSlug =>
  localeSlugs.includes(value as LocaleSlug);