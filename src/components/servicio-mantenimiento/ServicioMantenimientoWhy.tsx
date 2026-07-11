import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioMantenimientoWhy = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const preventive = [
    'Mejora el rendimiento del equipo',
    'Evita fallas inesperadas',
    'Prolonga la vida útil del hardware',
    'Ahorra dinero en reparaciones',
  ];

  const corrective = [
    'Reparación de fallas de hardware',
    'Eliminación de virus y malware',
    'Recuperación de datos',
    'Soluciones rápidas y efectivas',
  ];

  return (
    <section className="relative py-10 md:py-16 bg-white overflow-hidden">
      <style>{`
        @keyframes mante-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .mante-float {
          animation: mante-float 5s ease-in-out infinite;
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
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
                  Importancia
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 leading-snug">
                ¿Por qué es importante darle mantenimiento a tu{' '}
                <span className="text-cyan-500">computadora</span>
                ?
              </h2>
              <p className="text-gray-500 text-sm md:text-base mb-8 max-w-lg">
                El mantenimiento correcto prolonga la vida útil de tu equipo y te evita problemas costosos.
              </p>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center bg-white border border-cyan-300 shadow-lg shadow-cyan-500/20">
                  <span className="text-xs font-extrabold text-cyan-500">VS</span>
                </div>

                <div
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-500 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Preventivo</h3>
                  </div>
                  <p className="text-gray-500 text-[12px] mb-4">Evita fallas y problemas futuros.</p>
                  <ul className="space-y-2.5">
                    {preventive.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[12.5px] text-gray-700"
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                        data-aos-duration="450"
                      >
                        <svg className="w-3.5 h-3.5 mt-0.5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex sm:hidden items-center justify-center gap-3 -my-1">
                  <span className="h-px flex-1 bg-gray-200"></span>
                  <span className="text-xs font-extrabold text-cyan-500">VS</span>
                  <span className="h-px flex-1 bg-gray-200"></span>
                </div>

                <div
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                  data-aos="fade-left"
                  data-aos-duration="600"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-300 flex items-center justify-center text-cyan-500 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-gray-900">Correctivo</h3>
                  </div>
                  <p className="text-gray-500 text-[12px] mb-4">Soluciona fallas que ya están afectando.</p>
                  <ul className="space-y-2.5">
                    {corrective.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[12.5px] text-gray-700"
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                        data-aos-duration="450"
                      >
                        <svg className="w-3.5 h-3.5 mt-0.5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

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
                src="/img/mante1.png"
                alt="Mantenimiento preventivo y correctivo de computadoras"
                className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto drop-shadow-[0_20px_45px_rgba(6,182,212,0.15)] mante-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioMantenimientoWhy;