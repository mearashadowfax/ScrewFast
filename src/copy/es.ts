import faqs from '@data/es/faqs.json';
import features from '@data/es/features.json';
import pricing from '@data/es/pricing.json';
import type { Copy } from './index';

/** Spanish copy table. Must satisfy `Copy` (the shape of `./en.ts`). */
export const es: Copy = {
  site: {
    description:
      'ScrewFast ofrece herramientas de primera calidad y servicios de construcción expertos para cada necesidad de su proyecto. Explore nuestra oferta y contacte con nuestro equipo de ventas para una calidad y fiabilidad superiores.',
    descriptionShort:
      'ScrewFast ofrece herramientas de primera calidad y servicios de construcción expertos para cada necesidad de su proyecto.',
    ogTitle: 'ScrewFast: Herramientas y servicios de construcción',
    ogDescription:
      'Equipe sus proyectos con las herramientas de alta calidad y los servicios de construcción expertos de ScrewFast. Con la confianza de los líderes del sector, ScrewFast combina sencillez, asequibilidad y fiabilidad. Descubra la diferencia con un diseño centrado en el usuario y herramientas de vanguardia. ¡Empiece a explorar ahora!',
  },

  layout: {
    skipToContent: 'Saltar al contenido',
    changeLanguage: 'Cambiar idioma',
    toggleNavigation: 'Mostrar u ocultar la navegación',
    darkTheme: 'Activar el tema oscuro',
    lightTheme: 'Activar el tema claro',
    toggleTheme: 'Cambiar de tema',
  },

  nav: {
    labels: {
      home: 'Inicio',
      products: 'Productos',
      services: 'Servicios',
      blog: 'Blog',
      contact: 'Contacto',
    },
    footer: {
      sectionTitles: {
        ecosystem: 'Ecosistema',
        company: 'Empresa',
      },
      links: {
        documentation: 'Documentación',
        tools: 'Herramientas y equipos',
        services: 'Servicios de construcción',
        about: 'Sobre nosotros',
        blog: 'Blog',
        careers: 'Empleo',
        customers: 'Clientes',
      },
      hiringBadge: '¡Estamos contratando!',
      stayUpToDate: 'Manténgase al día',
      stayUpToDateContent:
        'Manténgase informado sobre las últimas herramientas y ofertas exclusivas.',
      craftedBy: 'Creado por',
      newsletterDemoMessage:
        '¡Gracias! (Demo: conecte un servicio de correo para recopilar suscriptores reales.)',
    },
    megaMenu: {
      services: {
        guides: {
          title: 'Explorar guías y explicaciones',
          description:
            'Sumérjase en guías útiles y explicaciones sobre todas las funciones de ScrewFast',
        },
        integrations: {
          title: 'Descubrir integraciones',
          description:
            'Potencie su flujo de trabajo. Integraciones fluidas con todas sus herramientas favoritas',
        },
        experts: {
          title: 'Servicios de expertos',
          description:
            'Vaya más allá de las herramientas con los servicios de expertos de ScrewFast',
        },
        tools: {
          title: 'Herramientas de vanguardia',
          description:
            'Construya de forma más inteligente y rápida. Descubra una eficiencia sin precedentes con las herramientas de construcción de vanguardia de ScrewFast',
        },
        plans: {
          title: 'Planes sencillos',
          description:
            'Aumente su eficiencia con los planes claros y rentables de ScrewFast',
        },
        community: {
          title: 'Foro de la comunidad',
          description:
            'Aprenda, comparta y debata con otros usuarios de ScrewFast',
        },
      },
      successStories: 'Casos de éxito',
      successStory: {
        description:
          'Descubra cómo ScrewFast ha ayudado a empresas de todos los tamaños a lograr resultados extraordinarios.',
        imageAlt: 'Retrato de una persona sonriente',
      },
      learnMore: 'Saber más',
    },
  },

  forms: {
    email: 'Correo electrónico',
    emailAddress: 'Dirección de correo electrónico',
    emailPlaceholder: 'Introduzca su correo electrónico',
    emailInvalid:
      'Indique una dirección de correo electrónico válida para que podamos responderle',
    subscribe: 'Suscribirse',
    phone: 'Número de teléfono',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    forgotPassword: '¿Ha olvidado su contraseña?',
    passwordHint: '8 caracteres como mínimo',
    passwordMismatch: 'Las contraseñas no coinciden',
    rememberMe: 'Recordarme',
    acceptTerms: 'Acepto los ',
    termsAndConditions: 'Términos y condiciones',
    or: 'O',
    demoFallbackMessage:
      'Solo demo: este formulario no está conectado a ningún backend.',
  },

  auth: {
    logIn: 'Iniciar sesión',
    signIn: 'Iniciar sesión',
    signUp: 'Registrarse',
    signInWithGoogle: 'Iniciar sesión con Google',
    signUpWithGoogle: 'Registrarse con Google',
    noAccountYet: '¿Aún no tiene una cuenta?',
    signUpHere: 'Regístrese aquí',
    alreadyHaveAccount: '¿Ya tiene una cuenta?',
    signInHere: 'Inicie sesión aquí',
    forgotPasswordTitle: '¿Ha olvidado su contraseña?',
    rememberYourPassword: '¿Recuerda su contraseña?',
    resetPassword: 'Restablecer contraseña',
    credentialsDemoNotice:
      'Solo demo: conecte un proveedor de autenticación real antes de recopilar credenciales.',
    recoveryDemoNotice:
      'Solo demo: la recuperación de contraseña no está conectada a ningún backend.',
    signInDemoMessage:
      'Solo demo: el inicio de sesión no está conectado a ningún backend.',
    registerDemoMessage:
      'Solo demo: el registro no está conectado a ningún backend.',
    recoverDemoMessage:
      'Solo demo: la recuperación de contraseña no está conectada a ningún backend.',
  },

  share: {
    share: 'Compartir',
    shareOn: (platform: string) => `Compartir en ${platform}`,
    copied: 'Copiado',
    copyLink: 'Copiar enlace',
  },

  banner: {
    dismiss: 'Cerrar',
    region: 'Aviso informativo',
  },

  blog: {
    readMore: 'Leer más',
    minRead: (minutes: number) => `${minutes} min de lectura`,
    relatedArticles: 'Artículos relacionados',
    wasHelpful: '¿Le ha resultado útil este artículo?',
    yes: 'Sí',
    no: 'No',
    ogSection: 'Blog',
  },

  insights: {
    readMore: 'Leer más',
    tableOfContents: 'Índice:',
    ogSection: 'Perspectivas',
  },

  products: {
    ogSection: 'Herramientas',
    tabs: 'Pestañas',
  },

  notFound: {
    title: 'Página no encontrada',
    subTitle: '¡Vaya, esta no es la herramienta que buscaba!',
    content:
      'No deje que este contratiempo le frene. Volvamos a construir su obra maestra.',
    goHome: 'Ir al inicio',
    goBack: 'Volver',
  },

  home: {
    banner: 'Explore ScrewFast en GitHub',
    hero: {
      title:
        'Equipe sus proyectos con <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span>',
      subTitle:
        'Herramientas de primera calidad y servicios de construcción expertos para cada necesidad de su proyecto.',
      primaryBtn: 'Empezar a explorar',
      secondaryBtn: 'Contactar con ventas',
      rating: '<span class="font-bold">4,8</span> / 5',
      reviews: 'De más de <span class="font-bold">12.800</span> reseñas',
      imageAlt:
        'Pila de cajas de productos ScrewFast con herramientas variadas',
    },
    clients: {
      title: 'Con la confianza de los líderes del sector',
      subTitle:
        'Descubra la fiabilidad que eligen los gigantes de la industria.',
    },
    featuresGeneral: {
      title: 'A la altura de las exigencias del sector',
      subTitle:
        'En ScrewFast afrontamos los retos específicos de los sectores de la ferretería y la construcción. Desde herramientas de vanguardia hasta servicios de expertos, nos dedicamos a ayudarle a superar obstáculos y alcanzar sus objetivos.',
      imageAlt: 'Productos ScrewFast en cajas flotantes',
    },
    featuresNavs: {
      title:
        'Adapte la oferta de <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span> a sus necesidades exactas de herramientas y construcción.',
      tabs: {
        tools: {
          heading: 'Herramientas de vanguardia',
          content:
            'Potencie sus proyectos con las herramientas de vanguardia de ScrewFast. Gane eficiencia en la gestión de obras con nuestras sofisticadas soluciones automatizadas.',
          alt: 'Maquinaria pesada amarilla y negra sobre un campo de hierba seca',
        },
        dashboard: {
          heading: 'Paneles intuitivos',
          content:
            'Muévase con facilidad por los paneles intuitivos de ScrewFast. Configure y supervise sus proyectos sin fricciones, con interfaces pensadas para una gestión del flujo de trabajo rápida y eficaz.',
          alt: 'Captura de pantalla o representación gráfica del panel intuitivo',
        },
        features: {
          heading: 'Funciones robustas',
          content:
            'Menos complejidad, más productividad. Las funciones robustas de ScrewFast están diseñadas para agilizar su proceso de construcción y ofrecer resultados que destacan por su excelencia.',
          alt: 'Estructura metálica gris de un edificio junto a una grúa torre durante el día',
        },
      },
    },
    testimonials: {
      title: 'Acelere sus proyectos',
      subTitle:
        'En ScrewFast garantizamos un arranque rápido con la configuración instantánea de su cuenta. Descubra la construcción a otra velocidad.',
      quotes: [
        {
          content:
            'ScrewFast ha disparado la eficiencia de nuestros proyectos. La configuración fue instantánea y sus tiempos de respuesta son fenomenales. ¡Un verdadero antes y después en el soporte de herramientas y construcción!',
          author: 'Samantha Ruiz',
          role: 'Directora de Operaciones | ConstructIt Inc.',
        },
      ],
      statistics: [
        {
          count: '70k+',
          description:
            'clientes equipados: desde aficionados al bricolaje hasta grandes constructoras',
        },
        {
          count: '35%',
          description:
            'de aumento en la eficiencia de los proyectos con las herramientas y servicios de ScrewFast',
        },
        {
          count: '15,3%',
          description:
            'de reducción en costes de mantenimiento según clientes de larga duración',
        },
        {
          count: '2x',
          description:
            'más rapidez de montaje con soluciones de fijación innovadoras',
        },
      ],
    },
    faqTitle: 'Preguntas<br />frecuentes',
    heroAlt: {
      title: 'Construyamos juntos',
      subTitle:
        'ScrewFast es una plantilla de código abierto, elaborada con esmero con Astro, Tailwind CSS y Preline UI.',
      btn: 'Continuar con GitHub',
    },
  },

  services: {
    title: 'Servicios',
    metaDescription:
      'Uniendo la experiencia con su visión, ScrewFast ofrece un servicio excepcional y soluciones integrales en el sector de la ferretería y la construcción, desde la consultoría hasta la finalización del proyecto.',
    ogTitle: 'Servicios de consultoría experta | ScrewFast',
    intro: {
      title: 'Uniendo la experiencia con su visión',
      subTitle:
        'En ScrewFast nos enorgullece ofrecer soluciones integrales y un servicio excepcional en el sector de la ferretería y la construcción. Nuestro experimentado equipo acompaña su proyecto desde la concepción hasta la finalización con una gama de servicios especializados.',
      cta: 'Programar una consulta',
    },
    articles: {
      guidance: {
        title: 'Asesoramiento experto',
        subTitle:
          'Emprender un proyecto de construcción puede resultar abrumador. Con nuestros servicios de consultoría profesional le guiamos en cada etapa para que tome decisiones informadas. Tanto si es un aficionado al bricolaje como un contratista experimentado, nuestros expertos le asesoran de forma personalizada sobre la selección de productos, el alcance del proyecto y el cumplimiento de la normativa local.',
        imageAlts: [
          'Planos y tableta digital con planes de construcción.',
          'Persona trabajando en la oficina',
        ],
      },
      craftsmanship: {
        title: 'Convertir los diseños en realidad',
        subTitle:
          'Nuestros artesanos cualificados aportan precisión y excelencia a cada proyecto de construcción. Desde instalaciones menores hasta obras estructurales de envergadura, ScrewFast ofrece servicios de construcción fiables para convertir sus planes en resultados tangibles. Garantizamos los más altos estándares de seguridad y acabado, con herramientas y materiales de alta calidad de nuestro amplio inventario.',
        imageAlts: ['Obra de construcción antes y después'],
        cta: 'Saber más',
      },
      oversight: {
        title: 'Proyectos con supervisión profesional',
        subTitle:
          'Una gestión de proyectos eficaz es la base de toda construcción exitosa. ScrewFast ofrece una planificación exhaustiva y servicios de gestión sólidos que mantienen su proyecto en plazo y dentro del presupuesto. Déjenos gestionar la coordinación del flujo de trabajo, la asignación de recursos y la comunicación con las partes interesadas mientras usted se centra en su visión.',
        imageAlts: [
          'Trabajadores de la construcción coordinando un proyecto',
          'Vista aérea de una obra gestionada',
        ],
      },
      maintenance: {
        title: 'Rendimiento duradero garantizado',
        subTitle:
          'Nuestro compromiso con su proyecto no termina al finalizarlo. ScrewFast ofrece servicios continuos de mantenimiento y soporte para garantizar la longevidad y el rendimiento de su construcción. Desde revisiones periódicas hasta asistencia de emergencia, nuestro equipo está siempre disponible para darle un soporte sin fisuras.',
        imageAlts: [
          'Hombre con chaleco naranja y negro y casco blanco sosteniendo una herramienta eléctrica amarilla y negra',
        ],
      },
      bespoke: {
        title: 'Estrategias a medida para retos únicos',
        subTitle:
          'Para nuestros grandes clientes corporativos, ScrewFast ofrece soluciones personalizadas diseñadas para afrontar los retos específicos del sector. Al entender sus necesidades únicas, diseñamos estrategias a medida para optimizar sus operaciones, mejorar la eficiencia e impulsar su negocio.',
        imageAlts: [
          'Estructura de un edificio en construcción',
          'Edificio marrón y gris en construcción',
        ],
        cta: 'Leer más',
      },
    },
    stats: {
      title: 'En cifras',
      subTitle:
        'Nuestro compromiso con la calidad y la fiabilidad se refleja en cada proyecto que emprendemos. En ScrewFast nos dedicamos a ofrecer servicios líderes en el sector para que sus proyectos de construcción estén hechos para durar.',
      mainStatTitle: '96%',
      mainStatSubTitle:
        'de nuestros clientes califican su experiencia con ScrewFast como excepcional',
      stats: [
        { stat: '99,8%', description: 'de proyectos finalizados' },
        { stat: '5.000+', description: 'instalaciones con éxito' },
        { stat: '85%', description: 'de crecimiento anual de clientes' },
      ],
    },
  },

  contact: {
    title: 'Contacto',
    metaDescription:
      '¿Tiene preguntas o quiere hablar de un proyecto? Póngase en contacto con nosotros y creemos juntos la solución perfecta con nuestras herramientas y servicios.',
    ogTitle: 'Contacto | ScrewFast',
    heading: 'Contacte con nosotros',
    subTitle:
      '¿Tiene preguntas o quiere hablar de un proyecto? Póngase en contacto con nosotros y creemos juntos la solución perfecta con nuestras herramientas y servicios.',
    formTitle: 'Rellene el siguiente formulario',
    formSubTitle: 'Le responderemos en un plazo de 1 a 2 días laborables.',
    firstName: 'Nombre',
    lastName: 'Apellidos',
    details: 'Detalles',
    send: 'Enviar mensaje',
    demoMessage:
      '¡Gracias! (Demo: conecte un endpoint para recibir mensajes reales.)',
    knowledgeHeading: 'Base de conocimientos',
    knowledgeContent:
      'Consulte todos los artículos de nuestra base de conocimientos.',
    knowledgeLink: 'Ver guías y tutoriales',
    faqHeading: 'Preguntas frecuentes',
    faqContent:
      'Consulte nuestras preguntas frecuentes para obtener respuestas rápidas y claras a las dudas más comunes.',
    faqLink: 'Ver preguntas frecuentes',
    officeHeading: 'Visite nuestra oficina',
    officeContent: 'ScrewFast UK',
    emailHeading: 'Escríbanos por correo electrónico',
    emailContent: '¿Prefiere escribirnos? Envíenos un correo electrónico a',
  },

  blogIndex: {
    title: 'Blog',
    metaDescription:
      'Manténgase al día de las últimas tendencias y novedades del sector de la construcción con las perspectivas del equipo de expertos de ScrewFast.',
    ogTitle: 'Blog del sector de la construcción | ScrewFast',
    heading: 'Su puerta a la excelencia en la construcción',
    subTitle:
      'Explore las últimas noticias, consejos y perspectivas de ScrewFast para mejorar sus proyectos de construcción. Desde novedades de producto hasta estrategias de gestión de proyectos, nuestro blog es su recurso de referencia para todo lo relacionado con herramientas y construcción.',
    insightsHeading: 'Perspectivas',
    insightsSubTitle:
      'Manténgase al día de las últimas tendencias y novedades del sector de la construcción con las perspectivas del equipo de expertos de ScrewFast.',
    noPosts: 'Aún no hay artículos. Vuelva pronto.',
    noInsights: 'Aún no hay perspectivas. Vuelva pronto.',
  },

  productsIndex: {
    title: 'Productos',
    metaDescription:
      'Descubra la durabilidad y precisión de las herramientas ScrewFast, diseñadas tanto para profesionales como para aficionados.',
    ogTitle: 'Herramientas | ScrewFast',
    heading: 'Productos',
    subTitle:
      'Descubra la durabilidad y precisión de las herramientas ScrewFast, diseñadas tanto para profesionales como para aficionados. Cada uno de nuestros productos está fabricado con precisión y hecho para durar, para que siempre tenga la herramienta adecuada para cada trabajo.',
    customerStories: 'Historias de clientes',
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      quotes: [
        {
          content:
            'Desde que cambiamos a las herramientas de ScrewFast, la eficiencia en nuestras obras se ha disparado. La durabilidad de los pernos hexagonales y la precisión de los tornillos de máquina no tienen comparación. Es un alivio trabajar con una empresa que entiende de verdad las exigencias diarias del sector.',
          author: 'Jason Clark',
          role: 'Jefe de obra | TopBuild',
          avatarAlt: 'Descripción de la imagen',
        },
        {
          content:
            'Como interiorista, siempre busco materiales y herramientas de alta calidad que me ayuden a dar vida a mis ideas. El surtido de tornillos variados de ScrewFast ha cambiado por completo mis proyectos, con la combinación perfecta de calidad y variedad. ¡Y la excelente atención al cliente fue la guinda del pastel!',
          author: 'Maria Gonzalez',
          role: 'Interiorista | Creative Spaces',
          avatarAlt: 'Descripción de la imagen',
        },
        {
          content:
            'Llevo más de 15 años como carpintero profesional y puedo decir con sinceridad que los pernos y tuercas de ScrewFast están entre los mejores que he usado. Agarran como ningún otro y confío plenamente en cada unión y cada fijación. Además, el servicio es impecable: se preocupan de verdad por el éxito de mi proyecto.',
          author: 'Richard Kim',
          role: 'Maestro carpintero | WoodWright',
          avatarAlt: 'Descripción de la imagen',
        },
      ],
    },
    stats: {
      title: '¿Por qué elegir ScrewFast?',
      subTitle:
        'Convierta sus ideas en resultados tangibles con las herramientas ScrewFast. Tanto si empieza con un boceto en una servilleta como si se lanza a un proyecto de construcción completo, nuestras herramientas están diseñadas para ayudarle a construir con confianza.',
      benefits: [
        'Herramientas robustas y fiables para un rendimiento duradero.',
        'Soluciones innovadoras adaptadas a las necesidades de la construcción moderna.',
        'Atención al cliente dedicada al éxito de su proyecto.',
      ],
    },
  },

  data: { faqs, features, pricing },
};
