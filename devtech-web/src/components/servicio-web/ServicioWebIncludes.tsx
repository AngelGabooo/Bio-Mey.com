import { useEffect, useRef, useState } from 'react';

/* ---------- Reveal-on-scroll hook (zero deps, replaces AOS) ---------- */
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

const ServicioWebIncludes = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const accents = [
    'text-cyan-500 border-cyan-400/40',
    'text-cyan-500 border-cyan-400/40',
    'text-cyan-500 border-cyan-400/40',
    'text-cyan-500 border-cyan-400/40',
    'text-cyan-500 border-cyan-400/40',
    'text-cyan-500 border-cyan-400/40',
    'text-cyan-500 border-cyan-400/40',
    'text-cyan-500 border-cyan-400/40',
  ];

  const benefits = [
    {
      id: 1,
      title: 'Visibilidad 24/7',
      description: 'Tu negocio disponible para clientes en cualquier momento y lugar, sin horarios de atención limitados.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Credibilidad y confianza',
      description: 'Una página web profesional genera confianza en tus clientes y posiciona tu marca como un negocio serio y establecido.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Alcance ilimitado',
      description: 'Llega a clientes más allá de tu ubicación física. Una página web te permite expandir tu mercado sin fronteras.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Generación de leads y ventas',
      description: 'Convierte visitantes en clientes potenciales a través de formularios, llamadas a la acción y estrategias de conversión.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Marketing digital efectivo',
      description: 'Tu página web es el centro de todas tus estrategias de marketing: redes sociales, email marketing, Google Ads y más.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Optimización para buscadores (SEO)',
      description: 'Aparece en los primeros resultados de Google y atrae tráfico orgánico de calidad a tu sitio web.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: 'Ahorro de tiempo y costos',
      description: 'Automatiza procesos, responde preguntas frecuentes y reduce la carga de atención al cliente con información disponible 24/7.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 8,
      title: 'Adaptabilidad y escalabilidad',
      description: 'Tu sitio web crece contigo. Puedes agregar nuevas secciones, productos o funcionalidades a medida que tu negocio evoluciona.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '70%', label: 'investiga un negocio en línea antes de visitarlo' },
    { value: '88%', label: 'confía más en negocios con página web' },
    { value: '56%', label: 'de las compras inicia con una búsqueda en Google' },
    { value: '90%', label: 'de empresas dice que su sitio genera leads' },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Glow de fondo - Cian suave */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <Reveal className="text-center mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-cyan-300 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span
              className="text-[11px] text-cyan-600 tracking-[0.2em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Beneficios
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ¿Por qué tu negocio{' '}
            <span className="text-cyan-500">
              necesita una página web
            </span>
            ?
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Descubre los beneficios clave de tener presencia en línea y cómo puede transformar tu negocio
          </p>
        </Reveal>

        {/* Barra de estadísticas */}
        <Reveal className="mb-14 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4 py-6 md:py-7 bg-white">
                <div
                  className="text-3xl md:text-4xl font-semibold text-cyan-600"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </div>
                <p className="text-gray-500 text-xs md:text-sm mt-1.5 leading-snug px-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Lista editorial de beneficios */}
        <div className="rounded-2xl border border-gray-200 bg-white divide-y divide-gray-100 overflow-hidden">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.id}
              delay={index * 50}
              className="group flex items-start gap-4 md:gap-6 px-5 md:px-8 py-6 hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Índice */}
              <span
                className="hidden sm:block text-gray-300 text-sm w-7 pt-1 flex-shrink-0"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icono */}
              <div
                className={`w-11 h-11 flex-shrink-0 rounded-xl bg-transparent border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${accents[index]}`}
              >
                {benefit.icon}
              </div>

              {/* Texto */}
              <div className="min-w-0 flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-6">
                <h3
                  className="text-gray-900 font-semibold text-base md:text-lg sm:w-64 flex-shrink-0"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-1 sm:mt-0">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicioWebIncludes;