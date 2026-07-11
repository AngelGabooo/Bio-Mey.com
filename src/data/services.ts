export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: React.ReactNode;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: 'Desarrollo Web',
    slug: 'desarrollo-web',
    description: 'Páginas web modernas, rápidas y optimizadas para destacar tu negocio.',
    longDescription: 'Creamos sitios web profesionales, optimizados para SEO, adaptables a cualquier dispositivo y enfocados en convertir visitantes en clientes. Utilizamos las últimas tecnologías para garantizar velocidad, seguridad y una experiencia de usuario excepcional.',
    icon: null,
    features: [
      {
        title: 'Diseños a medida',
        description: '100% personalizados para tu marca',
        icon: null
      },
      {
        title: 'Optimización SEO',
        description: 'Mejor posicionamiento en buscadores',
        icon: null
      },
      {
        title: 'Rápido y seguro',
        description: 'Alto rendimiento y protección',
        icon: null
      },
      {
        title: 'Soporte continuo',
        description: 'Siempre a tu lado',
        icon: null
      }
    ],
    benefits: [
      'Diseño 100% personalizado y responsive',
      'Optimización para motores de búsqueda (SEO)',
      'Carga rápida y alto rendimiento',
      'Panel de administración fácil de usar',
      'Soporte y mantenimiento continuo',
      'Integración con herramientas de marketing'
    ],
    ctaText: 'Comienza tu proyecto web',
    ctaLink: '/contacto'
  },
  {
    id: 2,
    title: 'Aplicaciones Móviles',
    slug: 'aplicaciones-moviles',
    description: 'Apps para Android e iOS con diseño intuitivo y alto rendimiento.',
    longDescription: 'Desarrollamos aplicaciones móviles nativas y multiplataforma con experiencias de usuario excepcionales. Desde apps de productividad hasta soluciones complejas para empresas.',
    icon: null,
    features: [
      {
        title: 'Diseño intuitivo',
        description: 'Experiencia de usuario excepcional',
        icon: null
      },
      {
        title: 'Alto rendimiento',
        description: 'Apps rápidas y fluidas',
        icon: null
      }
    ],
    benefits: [
      'Apps nativas y multiplataforma',
      'Diseño centrado en el usuario',
      'Alto rendimiento y optimización',
      'Publicación en App Store y Google Play',
      'Actualizaciones y soporte continuo'
    ],
    ctaText: 'Desarrolla tu app',
    ctaLink: '/contacto'
  },
  // Agrega los demás servicios aquí...
];