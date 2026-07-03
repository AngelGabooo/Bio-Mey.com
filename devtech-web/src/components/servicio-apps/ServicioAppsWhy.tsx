import { useState, useEffect, useRef } from 'react';

const ServicioAppsWhy = () => {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      title: 'Android',
      description: 'Para millones de dispositivos, en Google Play.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 16V8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2zm3-11l1 2m8-2l-1 2M9 20h6" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'iPhone',
      description: 'Nativa y optimizada para la mejor experiencia iOS.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm4-3.2h.01" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'En la nube',
      description: 'Tu información disponible desde cualquier lugar.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Seguridad',
      description: 'Tu información y la de tus clientes, protegida.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const capabilities = [
    'Mostrar tus productos o servicios',
    'Permitir compras en línea',
    'Gestionar citas o reservaciones',
    'Enviar notificaciones a tus clientes',
    'Procesar pagos de forma segura',
    'Mostrar promociones y novedades',
    'Administrar pedidos y entregas',
    'Llevar el control de tu negocio',
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-28 bg-[#0a0a14] overflow-hidden">
      {/* Glows de fondo, más grandes y difusos para sensación "moderna" */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[130px] -z-10"></div>

      <div className="container-custom relative z-10 max-w-7xl mx-auto px-5">
        {/* Fila principal */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr_0.85fr] gap-8 lg:gap-4 items-center mb-20 md:mb-28">
          {/* Texto */}
          <div
            className={`transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <span className="inline-block text-[11px] font-semibold tracking-[0.15em] text-blue-400 uppercase mb-5">
              ¿Qué es una aplicación móvil?
            </span>

            <h2 className="text-4xl md:text-[2.75rem] font-black text-white mb-6 leading-[1.08] tracking-tight">
              Tu negocio,
              <br />
              en el{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                bolsillo
              </span>{' '}
              de tus clientes
            </h2>

            <p className="text-blue-200/50 text-[15px] leading-relaxed mb-8 max-w-sm">
              Un software para teléfonos que conecta tu empresa con tus clientes, optimiza procesos y ofrece experiencias más rápidas y personalizadas.
            </p>

            <a
              href="#contacto"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:shadow-purple-600/25 transition-all duration-300"
            >
              Solicitar cotización
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

          {/* Imagen del celular */}
          <div
            className={`relative flex justify-center items-center py-6 lg:py-0 transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Halo suave detrás de la imagen */}
            <div className="pointer-events-none absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-[70px]"></div>

            <img
              src="/img/cel1.png"
              alt="Aplicación móvil BioMey"
              className="relative z-10 w-[240px] sm:w-[300px] md:w-[360px] h-auto drop-shadow-2xl select-none pointer-events-none"
            />

            {/* Insignias flotantes, totalmente transparentes (solo borde) */}
            <div className="absolute top-4 right-2 md:right-8 z-20 w-11 h-11 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md flex items-center justify-center">
              <svg className="w-4.5 h-4.5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <div className="absolute top-1/3 right-0 md:-right-6 z-20 w-12 h-12 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 3h2l.4 2M7 13h10l3.6-7.6H5.4M7 13L5.4 5.4M7 13l-2.3 2.3A1 1 0 005.4 17H17M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </div>
            <div className="absolute bottom-8 left-0 md:-left-8 z-20 w-11 h-11 rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-md flex items-center justify-center">
              <svg className="w-4.5 h-4.5 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 3v18h18M8 17V10m4 7V7m4 10v-4" />
              </svg>
            </div>
          </div>

          {/* Checklist en tarjeta de cristal */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
            }`}
          >
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-6 md:p-7">
              <h3 className="text-lg font-bold text-white mb-5 leading-snug">
                ¿Qué puede hacer{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  una aplicación
                </span>
                ?
              </h3>
              <ul className="flex flex-col gap-3.5">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center gap-3 text-blue-200/60 text-[13px] group">
                    <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full border border-blue-400/40 flex items-center justify-center group-hover:border-blue-400/80 transition-colors duration-300">
                      <svg className="w-2.5 h-2.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="group-hover:text-blue-200 transition-colors duration-300">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fila de características, íconos completamente transparentes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] hover:border-blue-400/25 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: visible ? `${index * 90}ms` : '0ms' }}
            >
              <div className="w-10 h-10 rounded-full border border-blue-400/25 flex items-center justify-center text-blue-300/80 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-[15px] mb-1.5">{feature.title}</h3>
              <p className="text-blue-200/40 text-[13px] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicioAppsWhy;