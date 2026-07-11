import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioMantenimientoHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 pb-8 md:pb-12 min-h-[70vh] flex items-center overflow-hidden bg-white">
      <div className="container-custom relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div className="space-y-4 md:space-y-5 order-2 lg:order-1">
            {/* Badge - Cian */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
                Mantenimiento de PC
              </span>
            </div>

            {/* Título - Gradiente Cian */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tighter"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="text-gray-900">Mantenimiento preventivo</span>
              <br />
              <span className="text-gray-900">y correctivo para</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                tu equipo
              </span>
            </h1>

            {/* Descripción */}
            <p 
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              Mantén tu computadora funcionando como nueva con servicios de limpieza, 
              optimización y reparación. Seguridad, velocidad y rendimiento garantizados.
            </p>

            {/* Botones CTA */}
            <div 
              className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <a
                href="https://wa.me/528144384806"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 text-gray-700 font-semibold rounded-full 
                         bg-gray-100 border border-gray-300 
                         hover:bg-gray-200 transition-all duration-300 
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
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-500 text-xs">Limpieza total</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-gray-500 text-xs">Seguridad</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-500 text-xs">Optimización</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0a9 9 0 01-12.728 0m12.728 0A9 9 0 015.636 5.636m12.728 0A9 9 0 015.636 18.364M12 8v4l3 3m-3-11a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
                <span className="text-gray-500 text-xs">Soporte</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div 
            className="relative flex items-center justify-end h-[300px] sm:h-[400px] md:h-[500px] lg:min-h-[550px] xl:min-h-[600px] w-full overflow-visible order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            {/* Glow de fondo - Cian */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] bg-gradient-to-r from-cyan-100/40 to-cyan-200/30 rounded-full blur-3xl"></div>
            </div>
            
            {/* Efectos decorativos - Cian */}
            <div className="absolute -top-16 -right-8 sm:-top-20 sm:-right-12 md:-top-32 md:-right-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-cyan-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-6 sm:-bottom-20 sm:-right-10 md:-bottom-32 md:-right-16 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-cyan-200/30 rounded-full blur-3xl"></div>

            {/* Imagen - PC / Mantenimiento */}
            <div className="relative z-10 animate-float w-full h-full flex items-center justify-end">
              <div className="transform scale-110 sm:scale-125 md:scale-140 lg:scale-160 xl:scale-175 2xl:scale-190 origin-center">
                <img
                  src="/img/mante.png"
                  alt="Mantenimiento de PC DevTech"
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

export default ServicioMantenimientoHero;