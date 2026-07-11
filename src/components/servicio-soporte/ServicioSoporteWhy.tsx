import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioSoporteWhy = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const problems = [
    'Problemas de rendimiento',
    'Errores de sistema o software',
    'Virus y seguridad',
    'Configuración de dispositivos',
    'Conexión de redes e internet',
    'Y mucho más...',
  ];

  return (
    <section className="relative py-10 md:py-16 bg-white overflow-hidden">
      <style>{`
        @keyframes soporte-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .soporte-float {
          animation: soporte-float 5s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        <div
          className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-4 sm:p-6 lg:p-8 shadow-sm"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-8 items-center">
            {/* Columna Izquierda - Texto */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
                  ¿Necesitas ayuda?
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-snug">
                ¿Necesitas ayuda con tu{' '}
                <span className="text-cyan-500">equipo</span>
                ?
              </h2>
              <p className="text-gray-500 text-sm md:text-base mb-6 max-w-lg">
                Nosotros te ayudamos a solucionarlo de forma rápida y eficiente.
              </p>

              {/* Lista de problemas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 text-gray-600 text-sm group hover:text-cyan-600 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    data-aos-duration="450"
                  >
                    <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {problem}
                  </div>
                ))}
              </div>

              {/* Tipos de soporte */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Soporte Remoto */}
                <div
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-4 hover:border-cyan-300 transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-500 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">Soporte Remoto</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Conéctate desde cualquier lugar de forma segura y rápida. Ideal para problemas de software, configuraciones y más.
                  </p>
                </div>

                {/* Soporte Presencial */}
                <div
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-4 hover:border-cyan-300 transition-all duration-300"
                  data-aos="fade-left"
                  data-aos-duration="600"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-500 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">Soporte Presencial</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Atención técnica en tu domicilio u oficina. Para fallas de hardware, instalaciones y revisiones físicas.
                  </p>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Imagen */}
            <div
              className="relative flex items-center justify-center py-4 lg:py-0"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="700"
            >
              <div className="pointer-events-none absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-cyan-400/20 via-cyan-300/10 to-transparent blur-2xl"></div>
              <div className="pointer-events-none absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-cyan-300"></div>
              <div className="pointer-events-none absolute w-40 h-40 rounded-full border border-cyan-300/60"></div>

              <img
                src="/img/sopo.png"
                alt="Soporte Técnico DevTech"
                className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto drop-shadow-[0_20px_45px_rgba(6,182,212,0.15)] soporte-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioSoporteWhy;