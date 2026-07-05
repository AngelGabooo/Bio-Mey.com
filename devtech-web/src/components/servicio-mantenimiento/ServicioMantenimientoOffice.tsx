import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioMantenimientoOffice = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const features = [
    {
      title: 'Actualización 100% segura',
      description: 'Instalamos la versión más reciente y segura de Microsoft Office.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Versiones actualizadas',
      description: 'Tendrás acceso a las últimas funciones y mejoras de seguridad.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-10 md:py-16 bg-[#0a0a14] overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Columna Izquierda - Texto */}
          <div data-aos="fade-right" data-aos-duration="600">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
                Office
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Instalamos y activamos la{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                paquetería Office
              </span>
            </h2>
            <p className="text-blue-200/60 text-base md:text-lg mb-6">
              Trabaja con las mejores herramientas para ser más productivo.
            </p>

            {/* Características */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-blue-200/70 text-sm md:text-base group hover:text-blue-300 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="400"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-400/20">
                    <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium">{feature.title}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Columna Derecha - Imagen mante1.png */}
          <div 
            className="relative flex items-center justify-center"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="600"
          >
            {/* Anillos decorativos */}
            <div className="pointer-events-none absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/10 to-transparent blur-2xl"></div>
            <div className="pointer-events-none absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-blue-400/20"></div>
            <div className="pointer-events-none absolute w-40 h-40 rounded-full border border-purple-400/20"></div>

            {/* Imagen */}
            <img
              src="/img/offi.png"
              alt="Instalación de Microsoft Office"
              className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] h-auto drop-shadow-[0_20px_45px_rgba(37,99,235,0.25)] animate-float"
            />
          </div>
        </div>
      </div>

      {/* Estilo para la animación de flotación */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicioMantenimientoOffice;