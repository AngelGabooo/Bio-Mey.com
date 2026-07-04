import { useState, useEffect, useRef } from 'react';

const ServicioSoporteProcess = () => {
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
      title: 'Contacto',
      description: 'Cuéntanos tu problema por el medio que prefieres: WhatsApp, llamada o formulario.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Diagnóstico',
      description: 'Analizamos tu caso y detectamos la falla de forma rápida y precisa.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Solución',
      description: 'Aplicamos la solución más efectiva para resolver tu problema.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Pruebas',
      description: 'Verificamos que todo funcione correctamente antes de finalizar.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Seguimiento',
      description: 'Nos aseguramos de que quedes satisfecho y tu equipo funcione al 100%.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0a9 9 0 01-12.728 0m12.728 0A9 9 0 015.636 5.636m12.728 0A9 9 0 015.636 18.364M12 8v4l3 3m-3-11a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-14 md:py-20 bg-[#0a0a14] overflow-hidden">
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        {/* Encabezado */}
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
            Nuestro proceso de{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              soporte
            </span>
          </h2>
          <p className="text-blue-200/50 text-sm md:text-base max-w-lg mx-auto mt-3">
            Así trabajamos para darte la mejor solución.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Proceso - Horizontal en desktop, vertical en móvil */}
        <div className="relative">
          {/* Línea horizontal en desktop */}
          <div className="hidden md:block absolute left-[5%] right-[5%] top-[30px] h-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-blue-600/20"></div>
          
          {/* Línea vertical en móvil */}
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
                {/* Círculo numerado con conexión */}
                <div className="relative z-10 flex items-center gap-4 md:gap-0 md:flex-col w-full md:w-auto">
                  {/* Círculo */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-600/30 z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-600/50">
                    {step.id}
                  </div>

                  {/* Contenido - En móvil a la derecha, en desktop abajo */}
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
                    {/* Descripción corta en móvil */}
                    <p className="text-blue-200/50 text-xs leading-relaxed mt-0.5 md:hidden">
                      {step.description.split('.')[0]}.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de flujo */}
        <div className={`flex justify-center mt-10 md:mt-12 transition-all duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center gap-2 text-blue-200/40 text-xs">
            <span>Inicio</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span>Final</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicioSoporteProcess;