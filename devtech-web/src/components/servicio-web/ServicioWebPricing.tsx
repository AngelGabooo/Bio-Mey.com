import { useEffect, useRef, useState } from 'react';

/* ---------- Reveal-on-scroll hook (replaces AOS, zero deps) ---------- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- Ticket perforation strip (signature element) ---------- */
function Perforation() {
  return (
    <div className="relative -mx-6 md:-mx-8 mb-6 h-px border-t border-dashed border-white/15">
      <span className="absolute -top-1.5 left-4 w-3 h-3 rounded-full bg-[#0a0a14] ring-1 ring-white/10" />
      <span className="absolute -top-1.5 right-4 w-3 h-3 rounded-full bg-[#0a0a14] ring-1 ring-white/10" />
    </div>
  );
}

const ServicioWebPricing = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const plans = [
    {
      id: 1,
      code: '01',
      name: 'Landing Page',
      description: 'Ideal para campañas publicitarias, promociones, eventos o presentar un producto o servicio.',
      price: '2,500',
      period: 'Pago en dos exhibiciones',
      features: [
        'Diseño profesional y moderno',
        'Página de una sola vista',
        'Responsive y adaptable a todos los dispositivos',
        'Botón directo a WhatsApp',
        'Formulario de contacto',
        'Google Maps',
        'Redes sociales',
        'SEO básico',
        'Optimización de velocidad',
        'Certificado SSL',
        'Entrega aproximada: 5 días',
        '1 ronda de cambios',
      ],
      popular: false,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      id: 2,
      code: '02',
      name: 'Página Web para Negocios',
      description: 'Para restaurantes, cafeterías, consultorios, escuelas, gimnasios, talleres y pequeños negocios.',
      price: '6,500',
      period: 'Pago en dos exhibiciones',
      features: [
        'Hasta 6 páginas o secciones',
        'Inicio, Nosotros, Servicios, Galería y Contacto',
        'Diseño totalmente personalizado',
        'Responsive y adaptable a todos los dispositivos',
        'Botón directo a WhatsApp',
        'Formulario de contacto',
        'Google Maps',
        'Redes sociales',
        'SEO básico',
        'Dominio .com por 1 año',
        'Hosting por 1 año',
        'Certificado SSL',
        'Correos empresariales',
        'Optimización de velocidad',
        'Capacitación básica',
        'Soporte durante la entrega',
      ],
      popular: false,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      id: 3,
      code: '03',
      name: 'Página Web Profesional',
      description: 'Para empresas que desean destacar frente a su competencia y atraer más clientes.',
      price: '11,500',
      period: 'Pago en dos exhibiciones',
      features: [
        'Hasta 15 páginas o secciones',
        'Todo lo del paquete para negocios',
        'Blog administrable',
        'Portafolio de proyectos',
        'Sección de testimonios',
        'Preguntas frecuentes',
        'Formularios avanzados',
        'Animaciones modernas',
        'SEO avanzado',
        'Google Analytics',
        'Google Search Console',
        'Chat de WhatsApp flotante',
        'Panel básico para administrar contenido',
        'Optimización avanzada de imágenes',
        'Integración con Facebook e Instagram',
        'Capacitación incluida',
        '30 días de soporte',
      ],
      popular: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 21.03a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
    {
      id: 4,
      code: '04',
      name: 'Página Web Empresarial',
      description: 'Para empresas que necesitan una plataforma completa, profesional y preparada para crecer.',
      price: '18,500',
      period: 'Pago en dos exhibiciones',
      features: [
        'Diseño completamente personalizado',
        'Páginas o secciones avanzadas',
        'Todo lo del paquete profesional',
        'Panel administrativo CMS',
        'Catálogo de productos',
        'Blog y noticias administrables',
        'Múltiples formularios',
        'Sistema de cotizaciones',
        'Agenda de citas',
        'Integración con CRM',
        'Integración con APIs externas',
        'Correos empresariales',
        'SEO Premium',
        'Optimización de rendimiento',
        'Seguridad avanzada',
        'Capacitación personalizada',
        '60 días de soporte',
      ],
      popular: false,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      ),
    },
  ];

  const extraServices = [
    { name: 'Tienda en Línea (E-commerce)', price: '$15,000 MXN' },
    { name: 'Catálogo Digital Profesional', price: '$7,500 MXN' },
    { name: 'Sistema Web Personalizado', price: '$35,000 MXN' },
    { name: 'Panel Administrativo (CMS)', price: '$12,000 MXN' },
    { name: 'Blog Administrable', price: '$4,500 MXN' },
    { name: 'Sistema de Reservaciones', price: '$10,000 MXN' },
    { name: 'Sistema de Agenda y Citas', price: '$8,500 MXN' },
    { name: 'Pasarela de Pago', price: '$8,000 MXN' },
    { name: 'Chat en Línea / WhatsApp Business', price: '$2,500 MXN' },
    { name: 'Chatbot Inteligente', price: '$8,000 MXN' },
    { name: 'Sitio Web Multilenguaje (2 idiomas)', price: '$8,500 MXN' },
    { name: 'SEO Avanzado', price: '$9,500 MXN' },
    { name: 'Google Analytics + Search Console + Métricas', price: '$4,500 MXN' },
    { name: 'Optimización de Velocidad (Core Web Vitals)', price: '$7,500 MXN' },
    { name: 'Auditoría SEO Completa', price: '$6,000 MXN' },
    { name: 'Correos Empresariales', price: 'Desde $2,500 MXN' },
    { name: 'Hosting Profesional (1 año)', price: 'Desde $3,500 MXN' },
    { name: 'Dominio (.com, .mx, etc.)', price: 'Desde $1,200 MXN' },
    { name: 'Certificado SSL Premium', price: 'Desde $2,000 MXN' },
    { name: 'Mantenimiento Web Mensual', price: 'Desde $2,500 MXN/mes' },
    { name: 'Respaldos Automáticos', price: 'Desde $2,000 MXN' },
    { name: 'Migración de Sitio Web', price: 'Desde $5,000 MXN' },
    { name: 'Conversión de sitio a PWA', price: 'Desde $10,000 MXN' },
    { name: 'Integración con APIs', price: 'Desde $8,000 MXN' },
    { name: 'Google Maps personalizado', price: 'Desde $3,500 MXN' },
    { name: 'Generación de PDF / Reportes', price: 'Desde $5,000 MXN' },
    { name: 'Sistema de envío de correos automáticos', price: 'Desde $6,000 MXN' },
    { name: 'Fotografía Profesional para el sitio', price: 'Cotización' },
    { name: 'Video Corporativo para la página', price: 'Cotización' },
    { name: 'Redacción de Contenido Profesional', price: 'Desde $7,500 MXN' },
    { name: 'Diseño de Banners e Ilustraciones Personalizadas', price: 'Desde $5,000 MXN' },
  ];

  return (
    <section
      className="relative py-16 md:py-24 bg-[#0a0a14] overflow-hidden"
      id="paquetes"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Fondo: cuadrícula tipo plano técnico */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)',
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
        {/* Encabezado */}
        <Reveal className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-400/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span
              className="text-[11px] text-blue-300 tracking-[0.2em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Cotización de proyecto
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Elige el paquete ideal para tu{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              proyecto
            </span>
          </h2>
          <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
            Cuatro fichas de trabajo, cuatro alcances distintos. Encuentra la que se ajusta al tamaño de tu negocio.
          </p>
        </Reveal>

        {/* Grid de paquetes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.id}
              as="div"
              delay={index * 90}
              className={`group relative flex flex-col h-full rounded-lg p-6 md:p-8 pt-8 border transition-all duration-500 hover:-translate-y-2
                ${
                  plan.popular
                    ? 'bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent border-blue-400/60 shadow-2xl shadow-blue-600/30 xl:scale-[1.03]'
                    : 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/40'
                }`}
            >
              {/* Sello "más pedido" */}
              {plan.popular && (
                <div
                  className="absolute -top-3 -right-3 w-20 h-20 flex items-center justify-center rotate-12"
                  aria-hidden="true"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-blue-400 flex items-center justify-center">
                    <span
                      className="text-[8px] leading-tight text-center text-blue-300 tracking-wider uppercase px-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Más pedido
                    </span>
                  </div>
                </div>
              )}

              {/* Encabezado de ficha: código + ícono (transparente, solo borde) */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`text-xs tracking-widest ${plan.popular ? 'text-blue-300' : 'text-blue-200/50'}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  FICHA {plan.code}/04
                </span>
                <div
                  className={`w-11 h-11 rounded-md flex items-center justify-center bg-transparent border transition-colors duration-300 ${
                    plan.popular
                      ? 'border-blue-400/50 text-blue-300'
                      : 'border-white/15 text-blue-400 group-hover:border-blue-400/40 group-hover:text-blue-300'
                  }`}
                >
                  {plan.icon}
                </div>
              </div>

              {/* Perforación tipo boleto */}
              <Perforation tone={plan.popular ? 'popular' : 'default'} />

              {/* Nombre y descripción */}
              <h3
                className="text-xl font-semibold text-[#EDEFF3] mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {plan.name}
              </h3>
              <p className="text-[#9096A6] text-sm leading-relaxed mb-6 min-h-[3.5rem]">{plan.description}</p>

              {/* Precio estilo factura */}
              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-3xl md:text-4xl font-semibold text-[#EDEFF3]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    ${plan.price}
                  </span>
                  <span className="text-[#9096A6] text-sm">MXN</span>
                </div>
                <p className="text-[#9096A6]/70 text-xs mt-1">{plan.period}</p>
              </div>

              {/* Lista de partidas */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[#9096A6] text-sm group-hover:text-[#c3c8d4] transition-colors duration-300">
                    <span
                      className={`mt-0.5 flex-shrink-0 ${plan.popular ? 'text-[#D4A657]' : 'text-white/30'}`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      &gt;
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <a
                href="#contacto"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-medium transition-all duration-300 mt-auto text-sm
                  ${
                    plan.popular
                      ? 'bg-[#D4A657] text-[#0B0E14] hover:bg-[#e0b874]'
                      : 'bg-transparent border border-white/20 text-[#EDEFF3] hover:border-[#D4A657]/50 hover:text-[#D4A657]'
                  }`}
              >
                Elegir plan
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Servicios adicionales */}
        <div className="mt-20 md:mt-24">
          <Reveal className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/15 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9096A6]" />
              <span
                className="text-[11px] text-[#9096A6] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Anexo de servicios
              </span>
            </div>
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EDEFF3] mb-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Amplía tu proyecto con servicios extra
            </h3>
            <p className="text-[#9096A6] text-base max-w-2xl mx-auto">
              Agrega funcionalidades avanzadas a cualquiera de los paquetes anteriores.
            </p>
          </Reveal>

          {/* Ledger de servicios: nombre ... línea punteada ... precio */}
          <Reveal className="bg-[#12161F] rounded-lg border border-white/10 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {extraServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-baseline gap-2 py-2.5 border-b border-white/[0.06] last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <span className="text-[#c3c8d4] text-sm whitespace-nowrap">{service.name}</span>
                  <span className="flex-1 border-b border-dotted border-white/15 translate-y-[-3px]" />
                  <span
                    className="text-[#D4A657] text-sm whitespace-nowrap"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="text-center text-[#9096A6]/60 text-xs mt-5">
            * Los precios son referenciales y pueden variar según la complejidad del proyecto. Cotiza tu proyecto personalizado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicioWebPricing;