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
    <section className="relative py-10 md:py-16 bg-[#0a0a14] overflow-hidden">
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
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        <div
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.015] p-4 sm:p-6 lg:p-8"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-8 items-center">
            {/* Columna Izquierda - Texto */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
                  ¿Necesitas ayuda?
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-snug">
                ¿Necesitas ayuda con tu{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  equipo
                </span>
                ?
              </h2>
              <p className="text-blue-200/55 text-sm md:text-base mb-6 max-w-lg">
                Nosotros te ayudamos a solucionarlo de forma rápida y eficiente.
              </p>

              {/* Lista de problemas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 text-blue-200/70 text-sm group hover:text-blue-300 transition-colors duration-300"
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                    data-aos-duration="450"
                  >
                    <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-blue-400/30 transition-all duration-300"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/25 flex items-center justify-center text-blue-300 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-white">Soporte Remoto</h3>
                  </div>
                  <p className="text-blue-200/45 text-xs leading-relaxed">
                    Conéctate desde cualquier lugar de forma segura y rápida. Ideal para problemas de software, configuraciones y más.
                  </p>
                </div>

                {/* Soporte Presencial */}
                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-purple-400/30 transition-all duration-300"
                  data-aos="fade-left"
                  data-aos-duration="600"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-400/25 flex items-center justify-center text-purple-300 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-white">Soporte Presencial</h3>
                  </div>
                  <p className="text-blue-200/45 text-xs leading-relaxed">
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
              <div className="pointer-events-none absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-blue-600/25 via-purple-600/15 to-transparent blur-2xl"></div>
              <div className="pointer-events-none absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-blue-400/20"></div>
              <div className="pointer-events-none absolute w-40 h-40 rounded-full border border-purple-400/20"></div>

              <img
                src="/img/sopo.png"
                alt="Soporte Técnico DevTech"
                className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto drop-shadow-[0_20px_45px_rgba(37,99,235,0.25)] soporte-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioSoporteWhy;