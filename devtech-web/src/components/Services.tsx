import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    // ── SERVICIOS DIGITALES ──
    {
      id: 1,
      title: 'Desarrollo Web',
      description: 'Páginas web modernas, rápidas y optimizadas para destacar tu negocio.',
      link: '/servicios/desarrollo-web',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Aplicaciones Móviles',
      description: 'Apps para Android e iOS con diseño intuitivo y alto rendimiento.',
      link: '/servicios/aplicaciones-moviles',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Mantenimiento de PC',
      description: 'Mantenimiento preventivo y correctivo para que tu equipo funcione como nuevo.',
      link: '/servicios/mantenimiento-pc',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Soporte Técnico',
      description: 'Asistencia técnica presencial y remota para resolver tus problemas.',
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0a9 9 0 01-12.728 0m12.728 0A9 9 0 015.636 5.636m12.728 0A9 9 0 015.636 18.364M12 8v4l3 3m-3-11a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Trámites Digitales',
      description: 'Te ayudamos a realizar tus trámites oficiales de forma rápida y segura.',
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Asesoría IT',
      description: 'Te asesoramos para tomar las mejores decisiones tecnológicas para tu negocio.',
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Instalación de Software',
      description: 'Instalación y configuración de Windows, drivers, impresoras, paquetería Office y programas especializados.',
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Formateo y Flasheo de Celulares',
      description: 'Formateo de dispositivos móviles, flasheo de ROMs, desbloqueo de patrones y recuperación de datos.',
      link: '#',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a14] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div 
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
              Nuestros Servicios
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Soluciones completas para tu negocio
          </h2>
          <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
            Ofrecemos servicios tecnológicos de calidad para impulsar tu empresa
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid de servicios - 2 columnas en móvil, 3 en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10 
                       hover:border-blue-400/50 transition-all duration-300 
                       hover:shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
            >
              {/* Icono - más pequeño en móvil */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-2 md:mb-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 border border-blue-400/20">
                  {service.icon}
                </div>
              </div>

              {/* Título - más pequeño en móvil */}
              <h3 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Descripción - oculta en móvil, visible en desktop */}
              <p className="hidden md:block text-blue-200/60 text-sm md:text-base leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Descripción corta en móvil */}
              <p className="block md:hidden text-blue-200/60 text-xs leading-relaxed mb-2">
                {service.description.length > 60 ? service.description.substring(0, 60) + '...' : service.description}
              </p>

              {/* Enlace "Ver más" */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-1 md:gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 text-xs md:text-sm font-medium group-hover:gap-2 md:group-hover:gap-3"
              >
                Ver más
                <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;