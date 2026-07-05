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
    <section className="relative py-10 md:py-16 bg-[#0a0a14] overflow-hidden">
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
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
                  Importancia
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-snug">
                ¿Por qué es importante darle mantenimiento a tu{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  computadora
                </span>
                ?
              </h2>
              <p className="text-blue-200/55 text-sm md:text-base mb-8 max-w-lg">
                El mantenimiento correcto prolonga la vida útil de tu equipo y te evita problemas costosos.
              </p>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full items-center justify-center bg-[#0a0a14] border border-purple-400/30 shadow-lg shadow-purple-600/20">
                  <span className="text-xs font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    VS
                  </span>
                </div>

                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/25 flex items-center justify-center text-blue-300 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-white">Preventivo</h3>
                  </div>
                  <p className="text-blue-200/45 text-[12px] mb-4">Evita fallas y problemas futuros.</p>
                  <ul className="space-y-2.5">
                    {preventive.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[12.5px] text-blue-100/80"
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                        data-aos-duration="450"
                      >
                        <svg className="w-3.5 h-3.5 mt-0.5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex sm:hidden items-center justify-center gap-3 -my-1">
                  <span className="h-px flex-1 bg-white/10"></span>
                  <span className="text-xs font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    VS
                  </span>
                  <span className="h-px flex-1 bg-white/10"></span>
                </div>

                <div
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  data-aos="fade-left"
                  data-aos-duration="600"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-400/25 flex items-center justify-center text-purple-300 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-bold text-white">Correctivo</h3>
                  </div>
                  <p className="text-blue-200/45 text-[12px] mb-4">Soluciona fallas que ya están afectando.</p>
                  <ul className="space-y-2.5">
                    {corrective.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-[12.5px] text-blue-100/80"
                        data-aos="fade-up"
                        data-aos-delay={index * 80}
                        data-aos-duration="450"
                      >
                        <svg className="w-3.5 h-3.5 mt-0.5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="pointer-events-none absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-blue-600/25 via-purple-600/15 to-transparent blur-2xl"></div>
              <div className="pointer-events-none absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-blue-400/20"></div>
              <div className="pointer-events-none absolute w-40 h-40 rounded-full border border-purple-400/20"></div>

              <img
                src="/img/mante1.png"
                alt="Mantenimiento preventivo y correctivo de computadoras"
                className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto drop-shadow-[0_20px_45px_rgba(37,99,235,0.25)] mante-float"
              />
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ServicioMantenimientoWhy;