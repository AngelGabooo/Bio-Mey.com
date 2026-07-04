import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioSoftwareHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-20 min-h-[80vh] flex items-center overflow-hidden">
      <div className="container-custom relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div className="space-y-5 md:space-y-7 order-2 lg:order-1">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
                Instalación de Software
              </span>
            </div>

            {/* Título */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tighter"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="text-white">Instalación y</span>
              <br />
              <span className="text-white">configuración de</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                software profesional
              </span>
            </h1>

            {/* Descripción */}
            <p 
              className="text-sm sm:text-base md:text-lg text-blue-200/80 leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              Instalamos y configuramos Windows, drivers, impresoras, paquetería Office 
              y programas especializados para que tu equipo funcione al 100%.
            </p>

            {/* Botones CTA */}
            <div 
              className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <a
                href="#contacto"
                className="px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-full 
                         bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:from-blue-700 hover:to-purple-700 
                         transition-all duration-300 
                         shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 
                         hover:scale-105 transform text-center text-sm md:text-base"
              >
                Solicitar instalación
              </a>
              <a
                href="https://wa.me/528144384806"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-full 
                         bg-white/10 backdrop-blur-sm border border-white/20 
                         hover:bg-white/20 transition-all duration-300 
                         text-center text-sm md:text-base"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* Características rápidas */}
            <div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 sm:pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-200/70 text-xs">Instalación rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-200/70 text-xs">Configuración completa</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-200/70 text-xs">Software original</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-200/70 text-xs">Soporte técnico</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div 
            className="relative flex items-center justify-end h-[300px] sm:h-[400px] md:h-[500px] lg:min-h-[600px] xl:min-h-[700px] w-full overflow-visible order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            {/* Glow de fondo */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] bg-gradient-to-r from-blue-600/25 to-purple-600/25 rounded-full blur-3xl"></div>
            </div>
            
            {/* Efectos decorativos */}
            <div className="absolute -top-16 -right-8 sm:-top-20 sm:-right-12 md:-top-32 md:-right-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-blue-600/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-6 sm:-bottom-20 sm:-right-10 md:-bottom-32 md:-right-16 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-purple-600/15 rounded-full blur-3xl"></div>

            {/* Imagen - Software */}
            <div className="relative z-10 animate-float w-full h-full flex items-center justify-end">
              <div className="transform scale-110 sm:scale-125 md:scale-140 lg:scale-160 xl:scale-175 2xl:scale-190 origin-center">
                <img
                  src="/img/wind.png"
                  alt="Instalación de Software DevTech"
                  className="w-full max-w-none h-auto drop-shadow-2xl select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioSoftwareHero;