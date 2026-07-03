import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioMantenimientoServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    {
      title: 'Mantenimiento preventivo',
      description: 'Limpieza interna y externa, revisión de componentes, optimización del sistema y prevención de fallas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Mantenimiento correctivo',
      description: 'Diagnóstico y reparación de fallas de hardware y software.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Instalación de sistemas operativos',
      description: 'Instalación y configuración de Windows, drivers y actualizaciones.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Instalación de programas',
      description: 'Instalamos cualquier software que necesites para tu trabajo, estudio o entretenimiento.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Paquetería Office',
      description: 'Instalación y activación de Microsoft Office (Word, Excel, PowerPoint, etc.).',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Antivirus y seguridad',
      description: 'Instalación y configuración de antivirus para proteger tu información.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Recuperación de datos',
      description: 'Recuperamos información eliminada o de discos dañados.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
        </svg>
      ),
    },
    {
      title: 'Actualizaciones',
      description: 'Actualizamos tu sistema y programas para mejor rendimiento y seguridad.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const leftColumn = services.slice(0, 4);
  const rightColumn = services.slice(4, 8);

  const ServiceRow = ({ service, index, delay }) => (
    <div
      className="group flex items-center gap-4 px-5 sm:px-6 py-4 hover:bg-white/[0.03] transition-colors duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="450"
    >
      <span className="w-6 flex-shrink-0 text-[11px] font-mono text-blue-400/30 group-hover:text-blue-400/70 transition-colors duration-300">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="w-10 h-10 rounded-lg border border-blue-400/20 bg-white/[0.03] flex items-center justify-center text-blue-300/80 flex-shrink-0 group-hover:border-blue-400/40 group-hover:text-blue-200 transition-all duration-300">
        {service.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-blue-200/45 text-[12.5px] leading-relaxed mt-0.5">
          {service.description}
        </p>
      </div>
      <svg
        className="w-4 h-4 text-blue-400/0 group-hover:text-blue-400/70 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 hidden sm:block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  return (
    <section className="relative py-10 md:py-16 bg-[#0a0a14] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        <div
          className="text-center mb-6 md:mb-10"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
              Servicios
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Servicios que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ofrecemos
            </span>
          </h2>
          <p className="text-blue-200/60 text-sm md:text-base max-w-2xl mx-auto">
            Soluciones completas para el cuidado y rendimiento de tu equipo
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <div
            className="rounded-2xl border border-white/10 bg-white/[0.02] divide-y divide-white/[0.06] overflow-hidden"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            {leftColumn.map((service, i) => (
              <ServiceRow key={service.title} service={service} index={i} delay={i * 60} />
            ))}
          </div>
          <div
            className="rounded-2xl border border-white/10 bg-white/[0.02] divide-y divide-white/[0.06] overflow-hidden"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            {rightColumn.map((service, i) => (
              <ServiceRow key={service.title} service={service} index={i + 4} delay={i * 60} />
            ))}
          </div>
        </div>

        <div
          className="text-center mt-10"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transform"
          >
            Solicitar servicio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicioMantenimientoServices;