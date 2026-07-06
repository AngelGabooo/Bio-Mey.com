import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioWebProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Planeación',
      description: 'Entendemos tu negocio, objetivos y necesidades del proyecto. Definimos alcance, funcionalidades y estrategia digital.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Diseño',
      description: 'Creamos un diseño moderno, atractivo y alineado a tu marca. Te presentamos las primeras propuestas visuales para tu aprobación.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Desarrollo',
      description: 'Desarrollamos tu sitio web con las mejores prácticas y tecnologías modernas. Codificamos cada sección con atención al detalle.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Revisión',
      description: 'Revisas el proyecto en un entorno de prueba y solicitas ajustes para perfeccionar cada detalle antes del lanzamiento.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Publicación',
      description: 'Publicamos tu sitio web en tu dominio y hosting. Realizamos las pruebas finales para asegurar que todo funcione correctamente.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Soporte',
      description: 'Te brindamos soporte y mantenimiento continuo para garantizar el éxito de tu proyecto a largo plazo.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0a9 9 0 01-12.728 0m12.728 0A9 9 0 015.636 5.636m12.728 0A9 9 0 015.636 18.364M12 8v4l3 3m-3-11a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="proceso">
      {/* Glow de fondo - Cian suave */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div 
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
              Nuestro proceso
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Así desarrollamos tu <span className="text-cyan-500">página web</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Un proceso claro, transparente y enfocado en resultados.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Proceso - Horizontal en desktop, vertical en móvil */}
        <div className="relative">
          {/* Línea horizontal en desktop */}
          <div className="hidden md:block absolute left-[10%] right-[10%] top-1/2 h-0.5 bg-gradient-to-r from-cyan-400/20 via-cyan-500/30 to-cyan-400/20 -translate-y-1/2"></div>
          
          {/* Línea vertical en móvil */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/20 via-cyan-500/30 to-cyan-400/20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                {/* Círculo numerado con conexión */}
                <div className="relative z-10 flex items-center gap-4 md:gap-0 md:flex-col w-full md:w-auto">
                  {/* Círculo */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/30 z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-cyan-500/50">
                    {step.id}
                  </div>

                  {/* Contenido - En móvil a la derecha, en desktop abajo */}
                  <div className="flex-1 md:flex-none md:mt-4 md:text-center">
                    <div className="flex items-center gap-3 md:gap-0 md:flex-col">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white border border-cyan-300 flex items-center justify-center text-cyan-500 md:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600 group-hover:border-cyan-400">
                        {step.icon}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-1 md:mt-2 max-w-[200px] md:max-w-none hidden md:block">
                      {step.description}
                    </p>
                    {/* Descripción corta en móvil */}
                    <p className="text-gray-500 text-xs leading-relaxed mt-0.5 md:hidden">
                      {step.description.split('.')[0]}.
                    </p>
                  </div>
                </div>

                {/* Conector visual entre pasos en móvil */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/30 to-cyan-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de flujo */}
        <div className="flex justify-center mt-10 md:mt-12">
          <div className="flex items-center gap-2 text-cyan-400/40 text-xs">
            <span>Inicio</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span>Final</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioWebProcess;