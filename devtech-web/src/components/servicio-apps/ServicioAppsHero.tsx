import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioAppsHero = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-[50%_50%] gap-8 lg:gap-12 xl:gap-16 items-center">
          
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
                Aplicaciones Móviles
              </span>
            </div>

            {/* Título */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tighter"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="text-white">Desarrollamos aplicaciones</span>
              <br />
              <span className="text-white">modernas, rápidas y</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                seguras
              </span>
            </h1>

            {/* Descripción */}
            <p 
              className="text-sm sm:text-base md:text-lg text-blue-200/80 leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              Creamos aplicaciones móviles y web personalizadas, escalables y enfocadas 
              en brindar la mejor experiencia a tus usuarios.
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
                Solicitar cotización
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-blue-200/70 text-xs">Alto rendimiento</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-blue-200/70 text-xs">100% Seguras</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-blue-200/70 text-xs">Diseño UX/UI</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0a9 9 0 01-12.728 0m12.728 0A9 9 0 015.636 5.636m12.728 0A9 9 0 015.636 18.364M12 8v4l3 3m-3-11a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
                <span className="text-blue-200/70 text-xs">Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Imagen más abajo */}
          <div 
            className="relative flex items-center justify-center lg:justify-end h-[280px] sm:h-[350px] md:h-[420px] lg:min-h-[450px] xl:min-h-[500px] w-full overflow-visible order-1 lg:order-2 mt-8 sm:mt-10 md:mt-12 lg:mt-16"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            {/* Glow de fondo - más pequeño */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end -z-10">
              <div className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] bg-gradient-to-r from-blue-600/25 to-purple-600/25 rounded-full blur-3xl lg:-mr-12"></div>
            </div>
            
            {/* Efectos decorativos - más pequeños */}
            <div className="absolute -top-12 -right-6 sm:-top-16 sm:-right-8 md:-top-20 md:-right-12 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] bg-blue-600/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -right-4 sm:-bottom-16 sm:-right-6 md:-bottom-20 md:-right-8 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] bg-purple-600/15 rounded-full blur-3xl"></div>

            {/* Imagen - Tamaño reducido y bajada */}
            <div className="relative z-10 animate-float w-full h-full flex items-center justify-center lg:justify-end">
              <div className="transform scale-100 sm:scale-105 md:scale-110 lg:scale-115 xl:scale-120 origin-center translate-y-4 sm:translate-y-6 md:translate-y-8 lg:translate-y-10">
                <img
                  src="/img/cel.png"
                  alt="Aplicaciones Móviles DevTech"
                  className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] h-auto drop-shadow-2xl select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioAppsHero;