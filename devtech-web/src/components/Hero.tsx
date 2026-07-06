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
    <section className="relative pt-16 sm:pt-20 md:pt-24 pb-6 md:pb-10 min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container-custom relative z-10 w-full max-w-[1400px]">
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-8 lg:gap-12 xl:gap-16 items-center min-h-[85vh]">
          
          {/* Columna Izquierda - Texto */}
          <div className="space-y-4 sm:space-y-5 md:space-y-7 py-4 sm:py-6 order-2 lg:order-1">
            {/* Badge - Cian */}
            <div 
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-cyan-300"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
                Soluciones Digitales
              </span>
            </div>

            {/* Título - Gradiente Cian */}
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tighter"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="text-gray-900">Desarrollamos soluciones</span>
              <br />
              <span className="text-gray-900">digitales que</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                impulsan tu negocio
              </span>
            </h1>

            {/* Descripción */}
            <p 
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-md"
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
                href="https://wa.me/9611234567"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-gray-700 font-semibold rounded-full 
                         bg-gray-100 border border-gray-300 
                         hover:bg-gray-200 transition-all duration-300 
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
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">+250</div>
                <div className="text-[8px] sm:text-xs text-gray-500">Proyectos completados</div>
              </div>
              <div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">98%</div>
                <div className="text-[8px] sm:text-xs text-gray-500">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-[8px] sm:text-xs text-gray-500">Soporte disponible</div>
              </div>
              <div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">100%</div>
                <div className="text-[8px] sm:text-xs text-gray-500">Compromiso con tu éxito</div>
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
            
            {/* Glow de fondo - Cian */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] bg-gradient-to-r from-cyan-100/40 to-cyan-200/30 rounded-full blur-3xl"></div>
            </div>
            
            {/* Efectos decorativos - Cian */}
            <div className="absolute -top-16 -right-8 sm:-top-20 sm:-right-12 md:-top-32 md:-right-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-cyan-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-6 sm:-bottom-20 sm:-right-10 md:-bottom-32 md:-right-16 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-cyan-200/30 rounded-full blur-3xl"></div>

            {/* Imagen */}
            <div className="relative z-10 animate-float w-full h-full flex items-center justify-end">
              <div className="transform scale-110 sm:scale-125 md:scale-140 lg:scale-160 xl:scale-175 2xl:scale-190 origin-center">
                <img
                  src="/img/fondo3.png"
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