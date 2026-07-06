import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioSoporteServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      title: 'Diagnóstico de fallas',
      description: 'Identificamos el problema de tu equipo de forma rápida y precisa.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Soporte de software',
      description: 'Instalación, configuración y solución de errores en tus programas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Eliminación de virus',
      description: 'Protegemos tu equipo y eliminamos amenazas de forma segura.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Optimización del sistema',
      description: 'Mejoramos el rendimiento y velocidad de tu equipo.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Redes e internet',
      description: 'Configuración y solución de problemas de conexión de red.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Respaldo de información',
      description: 'Protegemos y recuperamos tus archivos importantes.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      title: 'Asesoría técnica',
      description: 'Te guiamos para que tomes las mejores decisiones tecnológicas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Instalación de equipos',
      description: 'Configuramos e instalamos tus dispositivos correctamente.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 3v2m6-2v2M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zM9 7h6M9 11h6M9 15h4" />
        </svg>
      ),
    },
  ];

  const leftColumn = services.slice(0, 4);
  const rightColumn = services.slice(4, 8);

  const ServiceRow = ({ service, index, delay }) => (
    <div
      className="group flex items-center gap-4 px-5 sm:px-6 py-4 hover:bg-gray-50 transition-colors duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="450"
    >
      <span className="w-6 flex-shrink-0 text-[11px] font-mono text-cyan-300 group-hover:text-cyan-500 transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="w-10 h-10 rounded-lg border border-cyan-300 bg-white flex items-center justify-center text-cyan-500 flex-shrink-0 group-hover:border-cyan-400 group-hover:text-cyan-600 transition-all duration-300">
        {service.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-gray-900 text-sm font-semibold group-hover:text-cyan-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-500 text-[12.5px] leading-relaxed mt-0.5">
          {service.description}
        </p>
      </div>
      <svg
        className="w-4 h-4 text-cyan-300/0 group-hover:text-cyan-400/70 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 hidden sm:block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  return (
    <section className="relative py-10 md:py-16 bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        {/* Encabezado */}
        <div
          className="text-center mb-6 md:mb-10"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
              Servicios
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
            Servicios de{' '}
            <span className="text-cyan-500">soporte técnico</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Soluciones efectivas para cualquier tipo de inconveniente técnico.
          </p>
        </div>

        {/* Lista de servicios en dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <div
            className="rounded-2xl border border-gray-200 bg-white divide-y divide-gray-100 overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            {leftColumn.map((service, i) => (
              <ServiceRow key={service.title} service={service} index={i} delay={i * 60} />
            ))}
          </div>
          <div
            className="rounded-2xl border border-gray-200 bg-white divide-y divide-gray-100 overflow-hidden"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            {rightColumn.map((service, i) => (
              <ServiceRow key={service.title} service={service} index={i + 4} delay={i * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioSoporteServices;