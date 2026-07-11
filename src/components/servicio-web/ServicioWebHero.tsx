import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioWebHero = () => {
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
                Desarrollo Web
              </span>
            </div>

            {/* Título - Gradiente Cian */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tighter"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <span className="text-gray-900">Desarrollamos páginas web</span>
              <br />
              <span className="text-gray-900">modernas, rápidas y</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                efectivas
              </span>
            </h1>

            {/* Descripción */}
            <p 
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              Creamos sitios web profesionales, optimizados para SEO, adaptables a cualquier dispositivo 
              y enfocados en convertir visitantes en clientes.
            </p>

            {/* Botones CTA */}
            <div 
              className="flex flex-col sm:flex-row gap-3 pt-1 sm:pt-2"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="600"
            >
              <a
                href="#paquetes"
                className="px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-full 
                         bg-gradient-to-r from-cyan-500 to-cyan-600 
                         hover:from-cyan-600 hover:to-cyan-700 
                         transition-all duration-300 
                         shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 
                         hover:scale-105 transform text-center text-sm md:text-base"
              >
                Ver paquetes y precios
              </a>
            </div>
          </div>

          {/* Columna Derecha - Imagen */}
          <div 
            className="relative flex items-center justify-end h-[300px] sm:h-[400px] md:h-[500px] lg:min-h-[600px] xl:min-h-[700px] w-full overflow-visible order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px] xl:w-[1100px] xl:h-[1100px] bg-gradient-to-r from-cyan-100/40 to-cyan-200/30 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute -top-16 -right-8 sm:-top-20 sm:-right-12 md:-top-32 md:-right-20 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-cyan-100/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -right-6 sm:-bottom-20 sm:-right-10 md:-bottom-32 md:-right-16 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] bg-cyan-200/30 rounded-full blur-3xl"></div>
            <div className="relative z-10 animate-float w-full h-full flex items-center justify-end">
              <div className="transform scale-110 sm:scale-125 md:scale-140 lg:scale-160 xl:scale-175 2xl:scale-190 origin-center">
                <img
                  src="/img/fonfoo.png"
                  alt="Desarrollo Web"
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

export default ServicioWebHero;