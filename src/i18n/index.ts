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
    title: 'Publicidad y soluciones gráficas | Diamond Publicidad',
    description: 'Diamond Publicidad: publicidad, impresión digital y soluciones gráficas en Colombia.',
  },
  navigation: {
    primary: 'Navegación principal',
    heading: 'Navegación',
    services: 'Servicios',
    story: 'Nuestra historia',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    home: 'Diamond Publicidad, inicio',
  },
  story: {
    metaTitle: 'Nuestra historia | Diamond Publicidad',
    metaDescription: 'Conoce la historia de Diamond Publicidad, una microempresa colombiana cercana, práctica y creativa en publicidad, impresión digital y soluciones gráficas.',
    hero: {
      eyebrow: 'Nuestra historia',
      title: 'Una forma de trabajar cercana y clara.',
      intro: 'Diamond Publicidad nació de la necesidad de ayudar a negocios y marcas a comunicar mejor su idea, con piezas que se entienden rápido y se sienten bien hechas.',
      lead: 'Empezó como una alternativa práctica, cercana y visualmente cuidada para quienes necesitaban diseño, impresión y soluciones gráficas sin perder claridad ni tiempo.',
      primaryAction: 'Hablemos de tu proyecto',
      secondaryAction: 'Ver servicios',
      imageCaption: 'Cll 12 # 16 - 18, Funza, Colombia',
    },
    narrative: {
      eyebrow: 'Origen',
      title: 'Una mirada honesta sobre cómo nació el trabajo.',
      moments: {
        origin: {
          label: 'Origen',
          title: 'Desde la necesidad real.',
          body: 'Diamond Publicidad surgió como respuesta práctica a la necesidad de resolver comunicación visual de carácter claro, útil y cercano. La idea era acompañar a personas, negocios y marcas pequeñas o medianas con soluciones que se entendieran bien y se ejecutaran con criterio.',
        },
        method: {
          label: 'Forma de trabajo',
          title: 'Escuchar, proponer y ejecutar.',
          body: 'La forma de trabajo se construyó a partir de una relación directa con el cliente: entender la necesidad, observar el detalle y proponer piezas que funcionen en la realidad del negocio. El trabajo no se basa en ruido visual ni promesas vacías, sino en decisiones útiles y bien hechas.',
        },
        today: {
          label: 'Hoy',
          title: 'Creatividad con criterio.',
          body: 'Hoy la empresa sigue guiándose por la misma idea: combinar creatividad, producción y atención al detalle para ofrecer soluciones gráficas que comuniquen de manera efectiva, con un enfoque práctico, moderno y cercano.',
        },
      },
    },
    values: {
      eyebrow: 'Valores',
      title: 'Cómo trabajamos',
      creative: {
        title: 'Creatividad útil',
        description: 'Diseñamos pensando en claridad, intención y reconocimiento, sin perder la sobriedad de una buena pieza gráfica.',
      },
      print: {
        title: 'Material gráfico',
        description: 'Entendemos la impresión como parte esencial del mensaje: calidad, proporción y acabado que se ve bien en la realidad.',
      },
      detail: {
        title: 'Atención al detalle',
        description: 'Cada decisión de diseño, corte, fondo o tipografía se revisa con criterio para que la pieza responda bien al objetivo.',
      },
      production: {
        title: 'Producción cercana',
        description: 'Acompañamos el proceso desde la idea hasta la materialización, con una logística operativa clara y práctica.',
      },
      communication: {
        title: 'Comunicación visual',
        description: 'Buscamos que cada pieza comunique rápido, sin ruido y con una identidad que ayude a la marca a sentirse más clara.',
      },
      support: {
        title: 'Acompañamiento',
        description: 'Trabajamos de cerca con cada cliente para entender necesidades reales y entregar soluciones funcionales y adecuadas.',
      },
    },
    cta: {
      eyebrow: 'Continuemos',
      title: 'Si necesitas una comunicación más clara, aquí estamos.',
      description: 'Diamond Publicidad sigue trabajando con criterio, producción y sensibilidad visual para acompañar marcas y negocios con soluciones gráficas bien pensadas.',
      primaryAction: 'Contáctanos',
      secondaryAction: 'Ver servicios',
    },
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
    githubLabel: 'Perfil de GitHub de Julian Ospina Dev',
    linkedinLabel: 'Perfil de LinkedIn de Julian Ospina Dev',
    developerDescription: 'Sitios web y software a medida',
    versionLabel: 'Versión',
    dateLabel: 'Fecha',
    aboutSite: 'Sobre el sitio',
  },
  services: {
    metaTitle: 'Servicios | Diamond Publicidad',
    metaDescription: 'Conoce los servicios de Diamond Publicidad en publicidad, impresión digital y soluciones gráficas.',
    hero: {
      eyebrow: 'Servicios',
      title: 'Soluciones para comunicar con claridad.',
      intro: 'Conoce los servicios de Diamond Publicidad en publicidad, impresión digital y soluciones gráficas.',
      description: 'Diseño, producción y acompañamiento para piezas que ayuden a una marca a sentirse presente y clara en cada punto de contacto.',
      primaryAction: 'Hablemos de tu proyecto',
      secondaryAction: 'Volver al inicio',
    },
    overview: {
      eyebrow: 'Qué resolvemos',
      title: 'Tres líneas de trabajo con enfoque práctico.',
      description: 'Cada servicio responde a una necesidad concreta de comunicación visual, desde piezas de gran formato hasta piezas de apoyo para la marca y la presencia comercial.',
    },
    cards: {
      largeFormat: {
        title: 'Impresión digital a gran formato',
        description: 'Piezas para comunicar con presencia en espacios interiores y exteriores.',
        items: ['Banner', 'Vinilo adhesivo', 'Microperforado'],
        lead: 'La impresión digital a gran formato ayuda a que una marca se vea claramente en espacios públicos, comerciales y de alta visibilidad.',
        body: 'Desde banners y vinilos adhesivos hasta microperforados, este tipo de piezas se usa cuando la comunicación necesita volumen, legibilidad y presencia inmediata. La idea es que el mensaje funcione a distancia y al mismo tiempo mantenga un acabado profesional.',
        highlights: ['Banners para eventos y medios de comunicación visual', 'Vinilos adhesivos para vitrinas, vehículos y puntos de venta', 'Microperforado para fachada y control visual'],
      },
      signage: {
        title: 'Impresos y señalización',
        description: 'Materiales para reforzar la identidad visual y la información en puntos de contacto.',
        items: ['Tarjetas de presentación', 'Avisos', 'Vallas y pendones'],
        lead: 'La señalización y los impresos aportan claridad en los puntos donde la marca necesita presentarse con orden, confianza y buen criterio visual.',
        body: 'Estos materiales se usan para reforzar la identidad corporativa, apoyar la información y acompañar la atención directa. El objetivo es que cada pieza funcione como apoyo de una comunicación más sólida y reconocible.',
        highlights: ['Tarjetas de presentación para contacto y profesionalismo', 'Avisos para fachadas, locales y puntos de atención', 'Vallas y pendones para visibilidad y promoción'],
      },
      advertising: {
        title: 'Piezas publicitarias',
        description: 'Soportes gráficos pensados para promocionar, invitar y reforzar una campaña.',
        items: ['Botones', 'Volantes', 'Avisos en cajas de luz', 'Diseños'],
        lead: 'Las piezas publicitarias ayudan a anunciar, invitar y recordar una oferta con un diseño claro y útil para el público.',
        body: 'Cuando la intención es generar atención o impulsar una campaña, estas piezas aportan volumen visual y reforzan la presencia del mensaje. En Diamond Publicidad se trabajan con un enfoque práctico, con piezas que comunican rápido y se entienden sin esfuerzo.',
        highlights: ['Botones y volantes para difusión directa', 'Diseños para reforzar campañas y promociones', 'Avisos en cajas de luz para visibilidad puntual'],
      },
    },
  },
  home: {
    hero: {
      eyebrow: 'Diamond Publicidad',
      title: 'Publicidad que toma forma.',
      description: 'Empresa colombiana dedicada a la publicidad, la impresión digital y las soluciones gráficas.',
      primaryAction: 'Hablemos de tu proyecto',
      secondaryAction: 'Ver servicios',
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
        description: 'Materiales para piezas de gran formato y presencia visual.',
      },
      outdoor: {
        title: 'Impresos y señalización',
        description: 'Piezas para reforzar la identidad y la información comercial.',
      },
      design: {
        title: 'Piezas publicitarias',
        description: 'Recursos de apoyo para promocionar una marca o campaña.',
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
    title: 'Advertising and graphic solutions | Diamond Publicidad',
    description: 'Diamond Publicidad: advertising, digital printing, and graphic solutions in Colombia.',
  },
  navigation: {
    primary: 'Primary navigation',
    heading: 'Navigation',
    services: 'Services',
    story: 'Our story',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    home: 'Diamond Publicidad, home',
  },
  story: {
    metaTitle: 'Our story | Diamond Publicidad',
    metaDescription: 'Learn about Diamond Publicidad, a Colombian microcompany focused on clear, practical, and creative advertising, digital printing, and graphic solutions.',
    hero: {
      eyebrow: 'Our story',
      title: 'A practical and close way of working.',
      intro: 'Diamond Publicidad was born from the need to help businesses and brands communicate their idea more clearly, with pieces that are easy to understand and well made.',
      lead: 'It began as a practical, close, and visually careful alternative for people who needed design, printing, and graphic solutions without losing clarity or time.',
      primaryAction: 'Let us talk about your project',
      secondaryAction: 'See services',
      imageCaption: 'Cll 12 # 16 - 18, Funza, Colombia',
    },
    narrative: {
      eyebrow: 'Origin',
      title: 'An honest look at how the work began.',
      moments: {
        origin: {
          label: 'Origin',
          title: 'From a real need.',
          body: 'Diamond Publicidad emerged as a practical response to the need for clear, useful, and close visual communication. The idea was to support people, businesses, and small or medium brands with solutions that were easy to understand and executed with good judgment.',
        },
        method: {
          label: 'Way of working',
          title: 'Listen, propose and execute.',
          body: 'The way of working was built around a direct relationship with the client: understanding the need, paying attention to detail and proposing pieces that work in the reality of the business. The work is not based on visual noise or empty promises, but on useful and well-made decisions.',
        },
        today: {
          label: 'Today',
          title: 'Creativity with criteria.',
          body: 'Today, the company continues to follow the same idea: combining creativity, production and attention to detail to offer graphic solutions that communicate effectively, with a practical, modern and close approach.',
        },
      },
    },
    values: {
      eyebrow: 'Values',
      title: 'How we work',
      creative: {
        title: 'Useful creativity',
        description: 'We design with clarity, intention and recognition in mind, without losing the sobriety of a good graphic piece.',
      },
      print: {
        title: 'Graphic material',
        description: 'We understand printing as an essential part of the message: quality, proportion and finish that look good in real life.',
      },
      detail: {
        title: 'Attention to detail',
        description: 'Each decision on design, cutting, background and typography is reviewed with judgment so that the piece responds effectively to the objective.',
      },
      production: {
        title: 'Close production',
        description: 'We accompany the process from idea to materialization, with a clear and practical operational flow.',
      },
      communication: {
        title: 'Visual communication',
        description: 'We look for each piece to communicate quickly, without noise and with an identity that helps the brand feel clearer.',
      },
      support: {
        title: 'Support',
        description: 'We work closely with each client to understand real needs and deliver functional and appropriate solutions.',
      },
    },
    cta: {
      eyebrow: 'Let us continue',
      title: 'If you need clearer communication, we are here.',
      description: 'Diamond Publicidad continues to work with criteria, production and visual sensitivity to support businesses and brands with well-thought graphic solutions.',
      primaryAction: 'Contact us',
      secondaryAction: 'See services',
    },
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
    githubLabel: 'Julian Ospina Dev GitHub profile',
    linkedinLabel: 'Julian Ospina Dev LinkedIn profile',
    developerDescription: 'Custom websites and software',
    versionLabel: 'Version',
    dateLabel: 'Date',
    aboutSite: 'About this site',
  },
  services: {
    metaTitle: 'Services | Diamond Publicidad',
    metaDescription: 'Learn about Diamond Publicidad services in advertising, digital printing, and graphic solutions.',
    hero: {
      eyebrow: 'Services',
      title: 'Solutions designed to communicate clearly.',
      intro: 'Conoce los servicios de Diamond Publicidad en publicidad, impresión digital y soluciones gráficas.',
      description: 'Design, production, and guidance for pieces that help a brand feel present and clear at every touchpoint.',
      primaryAction: 'Let us talk about your project',
      secondaryAction: 'Back to home',
    },
    overview: {
      eyebrow: 'What we solve',
      title: 'Three lines of work with a practical focus.',
      description: 'Each service addresses a concrete visual communication need, from large-format pieces to supporting materials for brand visibility and commercial presence.',
    },
    cards: {
      largeFormat: {
        title: 'Large-format digital printing',
        description: 'Pieces built to communicate with impact in indoor and outdoor spaces.',
        items: ['Banner', 'Adhesive vinyl', 'Microperforated vinyl'],
        lead: 'Large-format digital printing helps a brand be seen clearly in public, commercial and highly visible spaces.',
        body: 'From banners and adhesive vinyl to microperforated prints, this type of material is used when communication needs volume, readability and immediate presence. The goal is for the message to work at a distance while keeping a professional finish.',
        highlights: ['Banners for events and visual communication spaces', 'Adhesive vinyl for storefronts, vehicles and points of sale', 'Microperforation for facades and controlled visibility'],
      },
      signage: {
        title: 'Printed materials and signage',
        description: 'Materials that reinforce identity and information at the key points of contact.',
        items: ['Business cards', 'Notices', 'Billboards and banners'],
        lead: 'Printed materials and signage bring clarity to the spaces where a brand needs to present itself with order, confidence and good visual judgment.',
        body: 'These materials are used to reinforce corporate identity, support information and accompany direct attention. The goal is for each piece to work as part of a stronger and more recognizable communication system.',
        highlights: ['Business cards for contact and professionalism', 'Notices for storefronts, shops and attention points', 'Billboards and banners for visibility and promotion'],
      },
      advertising: {
        title: 'Promotional pieces',
        description: 'Graphic supports designed to promote, invite, and strengthen a campaign.',
        items: ['Buttons', 'Flyers', 'Lightbox notices', 'Designs'],
        lead: 'Promotional pieces help announce, invite and remind an offer with clear, useful messaging for the audience.',
        body: 'When the goal is to generate attention or drive a campaign, these pieces add visual volume and strengthen the message. At Diamond Publicidad they are developed with a practical mindset so the communication is fast and easy to understand.',
        highlights: ['Buttons and flyers for direct dissemination', 'Designs to reinforce campaigns and promotions', 'Lightbox notices for precise visibility'],
      },
    },
  },
  home: {
    hero: {
      eyebrow: 'Diamond Publicidad',
      title: 'Advertising that takes shape.',
      description: 'A Colombian company dedicated to advertising, digital printing, and graphic solutions.',
      primaryAction: 'Let us talk about your project',
      secondaryAction: 'See services',
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
        description: 'Materials for large-format visual presence.',
      },
      outdoor: {
        title: 'Printed materials and signage',
        description: 'Pieces that reinforce identity and commercial information.',
      },
      design: {
        title: 'Promotional pieces',
        description: 'Support resources for brand and campaign communication.',
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