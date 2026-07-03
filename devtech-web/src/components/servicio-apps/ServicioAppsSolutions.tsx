import { useState, useEffect, useRef } from 'react';

const ServicioAppsSolutions = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      id: 1,
      name: 'Restaurantes',
      description: 'Pedidos, reservaciones y menús digitales.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Tiendas en línea',
      description: 'Catálogo, carrito y pagos seguros.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Clínicas y consultorios',
      description: 'Citas, historial y recordatorios automáticos.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12.75l6 6 9-13.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Escuelas y universidades',
      description: 'Plataforma educativa y comunicación con padres.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      id: 5,
      name: 'Logística y repartos',
      description: 'Rastreo en tiempo real y rutas optimizadas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17l6-6-6-6M20 17l-6-6 6-6" transform="rotate(90 12 12)" />
        </svg>
      ),
    },
    {
      id: 6,
      name: 'Cafeterías',
      description: 'Pedidos rápidos y programa de lealtad.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
    {
      id: 7,
      name: 'Gimnasios',
      description: 'Membresías, clases y seguimiento de clientes.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      id: 8,
      name: 'Hoteles',
      description: 'Reservaciones y check-in digital.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: 9,
      name: 'Empresas',
      description: 'Proyectos, equipos y reportes.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v18M3 9h18M3 3h18v18H3V3z" />
        </svg>
      ),
    },
    {
      id: 10,
      name: 'Sistemas internos',
      description: 'Automatización de procesos e inventario.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-[#0a0a14] overflow-hidden">
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/8 to-purple-600/8 rounded-full blur-[130px] -z-10"></div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        {/* Encabezado, compacto */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 md:mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div>
            <span className="text-blue-400 text-xs font-semibold tracking-[0.15em] uppercase">Soluciones</span>
            <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-extrabold text-white leading-tight mt-2">
              Una app para{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                cada tipo de negocio
              </span>
            </h2>
          </div>
          <p className="text-blue-200/45 text-sm md:text-[15px] max-w-sm">
            No importa tu industria, adaptamos la aplicación a la forma en que ya trabajas.
          </p>
        </div>

        {/* Grid de industrias, tarjetas de cristal con ícono transparente */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {industries.map((industry, index) => (
            <div
              key={industry.id}
              className={`group relative overflow-hidden p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-400/30 transition-all duration-400 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: visible ? `${index * 60}ms` : '0ms' }}
            >
              {/* Número decorativo de fondo */}
              <span className="pointer-events-none absolute -top-2 -right-1 text-[2.75rem] font-black text-white/[0.03] leading-none select-none">
                {String(industry.id).padStart(2, '0')}
              </span>

              <div className="relative w-10 h-10 rounded-full border border-blue-400/25 flex items-center justify-center text-blue-300/80 group-hover:border-blue-400/60 group-hover:text-blue-300 group-hover:shadow-[0_0_14px_rgba(96,165,250,0.2)] transition-all duration-300 mb-3.5">
                {industry.icon}
              </div>

              <h3 className="relative text-white text-[13.5px] font-semibold leading-snug mb-1">
                {industry.name}
              </h3>
              <p className="relative text-blue-200/40 text-[11.5px] leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:shadow-purple-600/25 transition-all duration-300"
          >
            Ver todos los servicios
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicioAppsSolutions;