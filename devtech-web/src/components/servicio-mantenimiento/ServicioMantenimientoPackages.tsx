import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioMantenimientoPackages = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const packages = [
    {
      id: 1,
      title: 'Diagnóstico',
      subtitle: 'Revisión inicial del equipo',
      description: 'Realizamos una revisión completa para identificar el estado de tu equipo y determinar las acciones necesarias.',
      note: 'El diagnóstico es el primer paso para ofrecerte la mejor solución.',
      accent: 'cyan',
      features: [
        'Revisión completa del hardware y software',
        'Detección de fallas y problemas',
        'Recomendación de soluciones',
        'Presupuesto sin compromiso',
      ],
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Mantenimiento Preventivo',
      subtitle: 'Evita fallas y problemas futuros',
      description: 'Mantén tu equipo en óptimas condiciones con un mantenimiento regular que prolonga su vida útil.',
      note: 'Ideal para mantener tu equipo en óptimas condiciones y alargar su vida útil.',
      accent: 'cyan',
      features: [
        'Limpieza interna y externa',
        'Optimización del sistema',
        'Revisión de componentes',
        'Actualización de controladores',
        'Mejora del rendimiento',
      ],
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Mantenimiento Correctivo',
      subtitle: 'Soluciona fallas y errores',
      description: 'Diagnosticamos y reparamos cualquier falla que esté afectando el rendimiento de tu equipo.',
      note: 'El costo dependerá del problema encontrado y las reparaciones necesarias.',
      accent: 'cyan',
      features: [
        'Reparación de fallas de hardware',
        'Eliminación de virus y malware',
        'Recuperación de datos',
        'Reinstalación y configuración',
        'Soluciones personalizadas',
      ],
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const accentStyles = {
    cyan: {
      ring: 'border-cyan-400/40',
      glow: 'shadow-cyan-500/30',
      iconBg: 'from-cyan-500/20 to-cyan-400/10',
      iconText: 'text-cyan-400',
      subtitle: 'text-cyan-500',
      check: 'text-cyan-500',
      noteBorder: 'border-cyan-400/20',
      noteBg: 'bg-cyan-50/30',
      noteIcon: 'text-cyan-500',
      hoverBorder: 'hover:border-cyan-400/60',
      hoverShadow: 'hover:shadow-cyan-500/10',
      hoverTitle: 'group-hover:text-cyan-500',
    },
  };

  return (
    <section className="relative py-10 md:py-16 bg-white overflow-hidden">
      {/* Glow de fondo - Cian suave */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="flex items-center justify-center gap-4 md:gap-10 mb-8 md:mb-10">
          <div className="hidden md:flex relative shrink-0 items-center justify-center w-32 h-32 lg:w-40 lg:h-40">
            <div className="absolute inset-0 rounded-full bg-cyan-100/30 blur-2xl"></div>
            <div className="relative w-full h-full rounded-full border border-cyan-300 flex items-center justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border-2 border-cyan-400/50 flex items-center justify-center bg-cyan-50/30">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <span className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-white border border-cyan-300 flex items-center justify-center text-cyan-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="6" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeWidth={1.5} d="M20 20l-3.5-3.5" />
                </svg>
              </span>
            </div>
          </div>

          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
                Paquetes
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
              Nuestros paquetes de{' '}
              <span className="text-cyan-500">mantenimiento</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
              El precio de cada servicio depende del diagnóstico de tu equipo. Realizamos una revisión completa para ofrecerte la mejor solución.
            </p>
          </div>

          <div className="hidden md:flex relative shrink-0 items-center justify-center w-32 h-32 lg:w-40 lg:h-40">
            <div className="absolute inset-0 rounded-full bg-cyan-100/30 blur-2xl"></div>
            <div className="relative w-full h-full rounded-full border border-cyan-300 flex items-center justify-center">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border-2 border-cyan-400/50 flex items-center justify-center bg-cyan-50/30">
                <svg className="w-10 h-10 lg:w-12 lg:h-12 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L1.5 3l1.5-1.5L7.5 4.5v1.409l4.26 4.26" />
                </svg>
              </div>
              <span className="absolute -bottom-2 -left-2 w-9 h-9 rounded-full bg-white border border-cyan-300 flex items-center justify-center text-cyan-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Badges de confianza */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-10 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="600"
        >
          <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200">
            <span className="shrink-0 w-10 h-10 rounded-full border border-cyan-300 flex items-center justify-center text-cyan-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.86 8.25-8.625 8.25S3.75 16.556 3.75 12 7.61 3.75 12.375 3.75 21 7.444 21 12z" />
              </svg>
            </span>
            <div>
              <p className="text-gray-900 font-semibold text-sm">No trabajamos con precios fijos.</p>
              <p className="text-gray-500 text-xs mt-1 max-w-xs">
                Cada equipo es diferente, por eso el costo final se determina después del diagnóstico.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200">
            <span className="shrink-0 w-10 h-10 rounded-full border border-cyan-300 flex items-center justify-center text-cyan-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </span>
            <div>
              <p className="text-gray-900 font-semibold text-sm">Transparencia total</p>
              <p className="text-gray-500 text-xs mt-1 max-w-xs">
                Te explicamos el problema, las opciones y el costo antes de realizar cualquier trabajo.
              </p>
            </div>
          </div>
        </div>

        {/* Grid de paquetes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {packages.map((pkg, index) => {
            const styles = accentStyles[pkg.accent];
            return (
              <div
                key={pkg.id}
                className={`group flex flex-col bg-white rounded-2xl border border-gray-200 ${styles.hoverBorder} transition-all duration-300 hover:shadow-lg ${styles.hoverShadow} hover:-translate-y-1 p-6 md:p-8`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="600"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full border ${styles.ring} bg-gradient-to-br ${styles.iconBg} flex items-center justify-center ${styles.iconText} mb-5`}>
                  {pkg.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1 transition-colors duration-300">
                  {pkg.title}
                </h3>
                <p className={`text-sm font-medium mb-4 ${styles.subtitle}`}>
                  {pkg.subtitle}
                </p>

                <div className="w-full h-px bg-gray-200 mb-4"></div>

                <ul className="space-y-2.5 mb-5 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg className={`w-4 h-4 ${styles.check} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-start gap-2.5 px-4 py-3 rounded-xl border ${styles.noteBorder} ${styles.noteBg}`}>
                  <span className={`shrink-0 w-5 h-5 rounded-full border ${styles.ring} flex items-center justify-center ${styles.noteIcon} mt-0.5`}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <p className="text-gray-600 text-xs leading-relaxed">{pkg.note}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Barra inferior */}
        <div
          className="mt-10 md:mt-12 rounded-2xl bg-gradient-to-r from-cyan-50 to-cyan-100/50 border border-cyan-200 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="flex items-start md:items-center gap-3 p-5 md:p-6 flex-1">
              <span className="shrink-0 w-11 h-11 rounded-full border border-cyan-300 flex items-center justify-center text-cyan-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </span>
              <div>
                <span className="text-gray-900 font-semibold text-sm">Importante</span>
                <p className="text-gray-600 text-sm mt-1">
                  El costo final de cualquier servicio se determina después de realizar el diagnóstico y puede variar según el tipo de falla, refacciones necesarias y tiempo de reparación.
                </p>
              </div>
            </div>

            <div className="flex items-start md:items-center gap-3 p-5 md:p-6 flex-1">
              <span className="shrink-0 w-11 h-11 rounded-full border border-cyan-300 flex items-center justify-center text-cyan-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.86 8.25-8.625 8.25S3.75 16.556 3.75 12 7.61 3.75 12.375 3.75 21 7.444 21 12z" />
                </svg>
              </span>
              <p className="text-gray-700 text-sm">
                Todos nuestros servicios incluyen garantía y soporte técnico.
              </p>
            </div>
          </div>
        </div>        
      </div>
    </section>
  );
};

export default ServicioMantenimientoPackages;