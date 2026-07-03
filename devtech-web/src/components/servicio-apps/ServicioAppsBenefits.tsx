import { useState, useEffect, useRef } from 'react';

const ServicioAppsBenefits = () => {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      id: 1,
      title: 'Mejora la experiencia del cliente',
      description: 'Brinda una experiencia rápida, intuitiva y personalizada.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 100-8" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Aumenta tus ventas',
      description: 'Facilita la compra, reserva o contratación de servicios.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-9 9-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Disponibilidad 24/7',
      description: 'Tu negocio al alcance de tus clientes todo el tiempo.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Automatiza procesos',
      description: 'Optimiza tareas y reduce costos operativos.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Más seguridad y control',
      description: 'Protegemos tu información y la de tus usuarios.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Escalabilidad ilimitada',
      description: 'Tu aplicación crecerá junto con tu negocio.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-14 md:py-20 bg-[#0a0a14] overflow-hidden">
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        {/* Encabezado: título a la izquierda, texto de apoyo a la derecha */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div>
            <span className="text-blue-400 text-xs font-semibold tracking-wide">Beneficios</span>
            <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-extrabold text-white leading-tight mt-2 max-w-md">
              ¿Por qué es{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                necesario
              </span>{' '}
              tener una{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                aplicación
              </span>
              ?
            </h2>
          </div>
          <p className="text-blue-200/50 text-sm md:text-[15px] leading-relaxed max-w-sm lg:text-right">
            Hoy en día, la mayoría de las personas utiliza su teléfono para buscar información, realizar compras, 
            reservar servicios o comunicarse con las empresas. Tener una aplicación móvil permite que tu negocio 
            esté siempre al alcance de tus clientes, brindando una experiencia más rápida, profesional y personalizada.          </p>
        </div>

        {/* Grid de beneficios: fila compacta */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`group bg-white/[0.03] rounded-xl p-4 md:p-5 border border-white/[0.06] hover:border-blue-400/30 hover:bg-white/[0.05] transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: visible ? `${index * 80}ms` : '0ms', transitionDuration: '600ms' }}
            >
              {/* Icono transparente con anillo */}
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-blue-300/80 bg-transparent border border-blue-400/25 group-hover:border-blue-400/60 group-hover:text-blue-300 group-hover:shadow-[0_0_12px_rgba(96,165,250,0.25)] transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-white text-[13px] md:text-sm font-semibold leading-snug mb-1.5">
                {benefit.title}
              </h3>
              <p className="text-blue-200/40 text-[11.5px] md:text-xs leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicioAppsBenefits;