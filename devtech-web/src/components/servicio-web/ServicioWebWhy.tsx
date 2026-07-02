import { useEffect, useRef, useState } from 'react';

/* ---------- Reveal-on-scroll hook ---------- */
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

const ServicioWebWhy = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const benefits = [
    {
      id: 1,
      num: '01',
      title: 'Diseños modernos y únicos',
      description: 'Creamos diseños personalizados que destacan tu marca y capturan la atención de tus clientes desde el primer vistazo.',
      accent: 'border-blue-400/40 text-blue-300',
      glow: 'from-blue-600/15 via-purple-600/10',
      span: 'xl:col-span-2',
      hero: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
    {
      id: 2,
      num: '02',
      title: 'Velocidad y rendimiento',
      description: 'Optimizamos cada sitio web para que cargue en segundos, mejorando la experiencia del usuario y el posicionamiento en Google.',
      accent: 'border-cyan-400/40 text-cyan-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      num: '03',
      title: 'Atención al cliente 24/7',
      description: 'Estamos disponibles para resolver tus dudas y brindarte soporte en cualquier momento, sin importar la hora o el día.',
      accent: 'border-purple-400/40 text-purple-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0a9 9 0 01-12.728 0m12.728 0A9 9 0 015.636 5.636m12.728 0A9 9 0 015.636 18.364M12 8v4l3 3m-3-11a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      ),
    },
    {
      id: 4,
      num: '04',
      title: 'Soporte post-lanzamiento',
      description: 'No te dejamos solo después de entregar tu página. Ofrecemos soporte continuo y mantenimiento para garantizar tu éxito.',
      accent: 'border-indigo-400/40 text-indigo-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      num: '05',
      title: 'Resultados garantizados',
      description: 'Nos enfocamos en generar resultados reales: más visitas, más leads y más ventas para tu negocio.',
      accent: 'border-sky-400/40 text-sky-300',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 6,
      num: '06',
      title: 'Equipo de expertos',
      description: 'Contamos con un equipo multidisciplinario de diseñadores, desarrolladores y especialistas en marketing digital.',
      accent: 'border-violet-400/40 text-violet-300',
      span: 'sm:col-span-2 xl:col-span-3',
      wide: true,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a14] overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Glow de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      {/* Cuadrícula sutil */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 50% 15%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 50% 15%, black 30%, transparent 100%)',
        }}
      />

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-400/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span
              className="text-[11px] text-blue-300 tracking-[0.2em] uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              ¿Por qué nosotros?
            </span>
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ¿Por qué elegir{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DevTech
            </span>
            ?
          </h2>
          <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
            Somos la mejor opción para tu proyecto digital. Conoce nuestras fortalezas
          </p>
        </Reveal>

        {/* Bento grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.id}
              delay={index * 70}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 ${benefit.span || ''} ${
                benefit.wide ? 'flex items-center gap-5 p-5 md:p-6' : 'p-6 md:p-7'
              }`}
            >
              {/* Número fantasma de fondo */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 -right-1 text-white/[0.04] select-none leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: benefit.hero ? '9rem' : '6rem' }}
              >
                {benefit.num}
              </span>

              {benefit.hero ? (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.glow} to-transparent opacity-60`} />
                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-xl bg-transparent border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${benefit.accent}`}
                    >
                      {benefit.icon}
                    </div>
                    <span
                      className="block text-xs text-blue-300/70 tracking-widest mb-2"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      N.º {benefit.num}
                    </span>
                    <h3
                      className="text-white font-semibold text-2xl md:text-3xl mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-blue-200/60 text-sm md:text-base leading-relaxed max-w-md">
                      {benefit.description}
                    </p>
                  </div>
                </>
              ) : benefit.wide ? (
                <>
                  <div
                    className={`relative z-10 w-12 h-12 flex-shrink-0 rounded-xl bg-transparent border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${benefit.accent}`}
                  >
                    {benefit.icon}
                  </div>
                  <div className="relative z-10 min-w-0 flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">{benefit.title}</h3>
                      <p className="text-blue-200/50 text-sm">{benefit.description}</p>
                    </div>
                    <span
                      className="hidden sm:inline text-xs text-blue-300/50 tracking-widest whitespace-nowrap"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      N.º {benefit.num}
                    </span>
                  </div>
                </>
              ) : (
                <div className="relative z-10">
                  <div
                    className={`w-11 h-11 rounded-xl bg-transparent border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${benefit.accent}`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1.5">{benefit.title}</h3>
                  <p className="text-blue-200/50 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Llamada a la acción */}
        <Reveal delay={480} className="text-center mt-12 md:mt-16">
          <a
            href="#paquetes"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transform"
          >
            Ver paquetes y precios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicioWebWhy;