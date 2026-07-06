import { useState, useEffect, useRef } from 'react';

const ServicioAppsTechnologies = () => {
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

  // Logos oficiales servidos desde Simple Icons (cdn.simpleicons.org)
  const technologies = [
    { name: 'React Native', slug: 'react', color: '61DAFB' },
    { name: 'Flutter', slug: 'flutter', color: '02569B' },
    { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
    { name: 'Laravel', slug: 'laravel', color: 'FF2D20' },
    { name: 'Firebase', slug: 'firebase', color: 'FFCA28' },
    { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
  ];

  const technologiesRow2 = [
    { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
    { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
    { name: 'Git', slug: 'git', color: 'F05032' },
    { name: 'Docker', slug: 'docker', color: '2496ED' },
    { name: 'Figma', slug: 'figma', color: 'F24E1E' },
  ];

  const getIconUrl = (tech, variant) =>
    variant === 'mono'
      ? `https://cdn.simpleicons.org/${tech.slug}/9CA3AF`
      : `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;

  const renderRow = (list, direction) => {
    const duplicated = [...list, ...list, ...list];
    return (
      <div className={`flex gap-10 md:gap-14 w-max ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}>
        {duplicated.map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="group flex flex-col items-center gap-2.5 min-w-[64px]">
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              {/* Versión monocromática - gris claro */}
              <img
                src={getIconUrl(tech, 'mono')}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain opacity-30 group-hover:opacity-0 transition-opacity duration-300"
              />
              {/* Versión a color de marca, aparece en hover */}
              <img
                src={getIconUrl(tech, 'color')}
                alt={tech.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="text-[11px] text-gray-400 group-hover:text-gray-700 transition-colors duration-300 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="relative py-14 md:py-20 bg-white overflow-hidden">
      {/* Glow de fondo - Cian suave */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] md:w-[650px] md:h-[650px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-5xl mx-auto px-5">
        {/* Encabezado */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-cyan-500 text-xs font-semibold tracking-wide uppercase">Tecnología</span>
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mt-2">
            Construida con herramientas{' '}
            <span className="text-cyan-500">rápidas y seguras</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mt-2">
            El mismo stack que usan las apps más confiables del mercado.
          </p>
        </div>

        {/* Dos filas en direcciones opuestas */}
        <div
          className={`relative transition-opacity duration-700 delay-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="overflow-hidden py-3">{renderRow(technologies, 'left')}</div>
          <div className="overflow-hidden py-3 mt-2">{renderRow(technologiesRow2, 'right')}</div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 32s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 32s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ServicioAppsTechnologies;