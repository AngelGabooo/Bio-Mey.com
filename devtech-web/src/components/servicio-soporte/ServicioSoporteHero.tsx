import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioSoporteHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-20 min-h-[80vh] flex items-center overflow-hidden bg-white">
      <div className="container-custom relative z-10 w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div className="space-y-5 md:space-y-7 order-2 lg:order-1">
            {/* Badge - Cian */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
                Soporte Técnico
              </span>
            </div>

            {/* Título - Gradiente Cian */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tighter"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="text-gray-900">Soporte técnico</span>
              <br />
              <span className="text-gray-900">rápido, confiable y</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                a tu alcance
              </span>
            </h1>

            {/* Descripción */}
            <p 
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              Brindamos asistencia técnica presencial y remota para resolver cualquier problema 
              en tu equipo o software. Estamos listos para ayudarte cuando más lo necesitas.
            </p>

            {/* Características rápidas */}
            <div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 sm:pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-500 text-xs">Atención rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-500 text-xs">Soporte remoto</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-500 text-xs">Técnicos certificados</span>
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
            {/* Glow de fondo - Cian */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] bg-gradient-to-r from-cyan-100/40 to-cyan-200/30 rounded-full blur-3xl"></div>
            </div>
            
            {/* Efectos decorativos - Cian */}
            <div className="absolute -top-16 -right-8 sm:-top-20 sm:-right-12 md:-top-32 md:-right-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-cyan-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-6 sm:-bottom-20 sm:-right-10 md:-bottom-32 md:-right-16 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-cyan-200/30 rounded-full blur-3xl"></div>

            {/* Imagen - Soporte Técnico */}
            <div className="relative z-10 animate-float w-full h-full flex items-center justify-end">
              <div className="transform scale-110 sm:scale-125 md:scale-140 lg:scale-160 xl:scale-175 2xl:scale-190 origin-center">
                <img
                  src="/img/sopo.png"
                  alt="Soporte Técnico DevTech"
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

export default ServicioSoporteHero;