import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-6 md:pb-10 min-h-screen flex items-center overflow-hidden">
      <div className="container-custom relative z-10 w-full max-w-[1400px]">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 lg:gap-12 xl:gap-16 items-center min-h-[85vh]">
          
          {/* Columna Izquierda - Texto */}
          <div className="space-y-4 sm:space-y-5 md:space-y-7 py-4 sm:py-6 order-2 lg:order-1">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
                Soluciones Digitales
              </span>
            </div>

            {/* Título */}
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tighter"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="text-white">Desarrollamos soluciones</span>
              <br />
              <span className="text-white">digitales que</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                impulsan tu negocio
              </span>
            </h1>

            {/* Descripción */}
            <p 
              className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-200/80 leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              Creamos páginas web, aplicaciones móviles, sistemas y soluciones 
              tecnológicas a la medida para ayudarte a crecer en el mundo digital.
            </p>

            {/* Botones CTA */}
            <div 
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-1 sm:pt-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <a
                href="#servicios"
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white font-semibold rounded-full 
                         bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:from-blue-700 hover:to-purple-700 
                         transition-all duration-300 
                         shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 
                         hover:scale-105 transform text-center text-xs sm:text-sm md:text-base"
              >
                Conoce nuestros servicios
              </a>
              <a
                href="https://wa.me/9611234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white font-semibold rounded-full 
                         bg-white/10 backdrop-blur-sm border border-white/20 
                         hover:bg-white/20 transition-all duration-300 
                         text-center text-xs sm:text-sm md:text-base"
              >
                Hablar por WhatsApp
              </a>
            </div>

            {/* Estadísticas */}
            <div 
              className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-2 sm:pt-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">+250</div>
                <div className="text-[8px] sm:text-xs text-blue-200/60">Proyectos completados</div>
              </div>
              <div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">98%</div>
                <div className="text-[8px] sm:text-xs text-blue-200/60">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">24/7</div>
                <div className="text-[8px] sm:text-xs text-blue-200/60">Soporte disponible</div>
              </div>
              <div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">100%</div>
                <div className="text-[8px] sm:text-xs text-blue-200/60">Compromiso con tu éxito</div>
              </div>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div 
            className="relative flex items-center justify-end h-[300px] sm:h-[400px] md:h-[500px] lg:min-h-[650px] xl:min-h-[750px] w-full overflow-visible order-1 lg:order-2"
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

            {/* Imagen */}
            <div className="relative z-10 animate-float w-full h-full flex items-center justify-end">
              <div className="transform scale-110 sm:scale-125 md:scale-140 lg:scale-160 xl:scale-175 2xl:scale-190 origin-center">
                <img
                  src="/img/fodo.png"
                  alt="Plataforma DevTech en laptop y móvil"
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

export default Hero;