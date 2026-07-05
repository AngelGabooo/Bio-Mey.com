import React, { useState, useEffect, useRef } from 'react';

const ServicioSoftwareProcess = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      title: 'Diagnóstico',
      description: 'Evaluamos tus necesidades y el estado del equipo para determinar qué software instalar.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Selección',
      description: 'Elegimos el software adecuado para ti y te informamos antes de instalar.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7V4h16v3M4 7h16M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12v3m0 0l-2-2m2 2l2-2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Instalación',
      description: 'Instalamos y configuramos todo lo necesario para que funcione correctamente.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v1.5m18 0v10.5A2.25 2.25 0 0118.75 20H5.25A2.25 2.25 0 013 18V7.5m18 0H3" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Pruebas',
      description: 'Verificamos que todo funcione correctamente y sin errores.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Entrega y soporte',
      description: 'Te entregamos tu equipo listo y te brindamos soporte post-instalación.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0a9 9 0 01-12.728 0m12.728 0A9 9 0 015.636 5.636m12.728 0A9 9 0 015.636 18.364M12 8v4l3 3m-3-11a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-14 md:py-20 bg-[#0a0a14] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
              Nuestro proceso
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mt-3">
            Un proceso simple,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              rápido y seguro
            </span>
          </h2>
          <p className="text-blue-200/50 text-sm md:text-base max-w-lg mx-auto mt-3">
            Así te acompañamos en cada paso, sin complicaciones.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-[5%] right-[5%] top-[30px] h-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-blue-600/20"></div>
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/20 via-purple-600/30 to-blue-600/20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col items-center group transition-all duration-600 ${
                  visible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: visible ? `${index * 110}ms` : '0ms' }}
              >
                <div className="relative z-10 flex items-center gap-4 md:gap-0 md:flex-col w-full md:w-auto">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-600/30 z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-600/50">
                    {step.id}
                  </div>

                  <div className="flex-1 md:flex-none md:mt-4 md:text-center">
                    <div className="flex items-center gap-3 md:gap-0 md:flex-col">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center text-blue-400 border border-blue-400/20 md:mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-300">
                        {step.icon}
                      </div>
                      <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-blue-200/50 text-xs md:text-sm leading-relaxed mt-1 md:mt-2 max-w-[180px] md:max-w-none hidden md:block">
                      {step.description}
                    </p>
                    <p className="text-blue-200/50 text-xs leading-relaxed mt-0.5 md:hidden">
                      {step.description.split('.')[0]}.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`flex justify-center mt-10 md:mt-12 transition-all duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center gap-2 text-blue-200/40 text-xs">
            <span>Diagnóstico</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span>Listo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioSoftwareProcess;