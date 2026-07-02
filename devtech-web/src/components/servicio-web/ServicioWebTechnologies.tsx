import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicioWebTechnologies = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Logos oficiales servidos desde Simple Icons (cdn.simpleicons.org)
  const technologies = [
    { name: 'React', slug: 'react', color: '61DAFB' },
    { name: 'Next.js', slug: 'nextdotjs', color: 'FFFFFF' },
    { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
    { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
    { name: 'Python', slug: 'python', color: '3776AB' },
    { name: 'Flutter', slug: 'flutter', color: '02569B' },
    { name: 'Firebase', slug: 'firebase', color: 'FFCA28' },
    { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
    { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
    { name: 'Git', slug: 'git', color: 'F05032' },
    { name: 'Docker', slug: 'docker', color: '2496ED' },
    { name: 'AWS', slug: 'amazonwebservices', color: 'FF9900' },
    { name: 'Figma', slug: 'figma', color: 'F24E1E' },
  ];

  const getIconUrl = (tech: { slug: string; color: string }) => 
    `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`;

  // Duplicamos para el efecto infinito
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a14] overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Encabezado con animación */}
        <div 
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
              Tecnologías
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Tecnologías que utilizamos en <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">desarrollo web</span>
          </h2>
          <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
            Trabajamos con herramientas modernas y confiables para crear sitios web de alto rendimiento
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Carrusel infinito con animación */}
        <div 
          className="relative overflow-hidden py-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <div className="animate-scroll flex gap-8 md:gap-12 w-max">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center gap-2 min-w-[80px] md:min-w-[100px] group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-4 group-hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:bg-white/10">
                  <img
                    src={getIconUrl(tech)}
                    alt={tech.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.innerHTML = `<span class="text-white/70 text-lg font-bold">${tech.name.charAt(0)}</span>`;
                    }}
                  />
                </div>
                <span className="text-xs text-blue-200/60 group-hover:text-blue-300 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ServicioWebTechnologies;