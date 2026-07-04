import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type SoftwareItem = {
  name: string;
  slug: string | null; // slug válido en cdn.simpleicons.org, o null si no existe ahí
  color: string; // hex sin '#'
  category: string;
};

const ServicioSoftwareSoftware = () => {
  const [failedIcons, setFailedIcons] = useState<Set<string>>(new Set());

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Logos desde Simple Icons (cdn.simpleicons.org).
  // NOTA: Windows, el paquete de Microsoft Office, Adobe (Photoshop, Illustrator,
  // Premiere, After Effects), SolidWorks, MATLAB, Visual Studio/VS Code, Java,
  // Edge y Canva NO tienen ícono disponible en Simple Icons (marcas registradas
  // con logos complejos que esa librería excluye). Para esos se muestra una
  // insignia con el nombre en el color oficial de la marca en vez de un ícono roto.
  const softwareList: SoftwareItem[] = [
    // ── SISTEMAS OPERATIVOS ──
    { name: 'Windows', slug: null, color: '0078D4', category: 'Sistema' },
    { name: 'Windows 11', slug: null, color: '0078D4', category: 'Sistema' },
    // ── PAQUETERÍA OFFICE ──
    { name: 'Microsoft Office', slug: null, color: 'D83B01', category: 'Ofimática' },
    { name: 'Word', slug: null, color: '2B579A', category: 'Ofimática' },
    { name: 'Excel', slug: null, color: '217346', category: 'Ofimática' },
    { name: 'PowerPoint', slug: null, color: 'D24726', category: 'Ofimática' },
    { name: 'Outlook', slug: null, color: '0072C6', category: 'Ofimática' },
    // ── DISEÑO Y CREATIVIDAD ──
    { name: 'Adobe', slug: null, color: 'FF0000', category: 'Diseño' },
    { name: 'Photoshop', slug: null, color: '31A8FF', category: 'Diseño' },
    { name: 'Illustrator', slug: null, color: 'FF9A00', category: 'Diseño' },
    { name: 'Premiere Pro', slug: null, color: '9999FF', category: 'Diseño' },
    { name: 'After Effects', slug: null, color: '9999FF', category: 'Diseño' },
    { name: 'Canva', slug: null, color: '00C4CC', category: 'Diseño' },
    // ── INGENIERÍA Y ARQUITECTURA ──
    { name: 'AutoCAD', slug: 'autocad', color: 'E51050', category: 'Ingeniería' },
    { name: 'Revit', slug: 'autodeskrevit', color: '186B9E', category: 'Ingeniería' },
    { name: 'SolidWorks', slug: null, color: 'FF0000', category: 'Ingeniería' },
    { name: 'MATLAB', slug: null, color: '0076A8', category: 'Ingeniería' },
    // ── PROGRAMACIÓN Y DESARROLLO ──
    { name: 'Visual Studio', slug: null, color: '5C2D91', category: 'Desarrollo' },
    { name: 'VS Code', slug: null, color: '007ACC', category: 'Desarrollo' },
    { name: 'Git', slug: 'git', color: 'F05032', category: 'Desarrollo' },
    { name: 'GitHub', slug: 'github', color: 'FFFFFF', category: 'Desarrollo' },
    { name: 'Node.js', slug: 'nodedotjs', color: '339933', category: 'Desarrollo' },
    { name: 'Python', slug: 'python', color: '3776AB', category: 'Desarrollo' },
    { name: 'Java', slug: null, color: '007396', category: 'Desarrollo' },
    // ── NAVEGADORES Y COMUNICACIÓN ──
    { name: 'Google Chrome', slug: 'googlechrome', color: '4285F4', category: 'Comunicación' },
    { name: 'Firefox', slug: 'firefoxbrowser', color: 'FF7139', category: 'Comunicación' },
    { name: 'Edge', slug: null, color: '0078D4', category: 'Comunicación' },
    { name: 'Zoom', slug: 'zoom', color: '2D8CFF', category: 'Comunicación' },
    { name: 'TeamViewer', slug: 'teamviewer', color: '004680', category: 'Comunicación' },
    { name: 'WhatsApp', slug: 'whatsapp', color: '25D366', category: 'Comunicación' },
    // ── HERRAMIENTAS DE ESTUDIO ──
    { name: 'Google Classroom', slug: 'googleclassroom', color: '4E8CFF', category: 'Estudio' },
    { name: 'Moodle', slug: 'moodle', color: 'F98012', category: 'Estudio' },
    // ── SEGURIDAD ──
    { name: 'Bitdefender', slug: 'bitdefender', color: 'ED1C24', category: 'Seguridad' },
    { name: 'McAfee', slug: 'mcafee', color: 'C01818', category: 'Seguridad' },
    { name: 'Kaspersky', slug: 'kaspersky', color: '006C5C', category: 'Seguridad' },
  ];

  const getIconUrl = (item: SoftwareItem) => `https://cdn.simpleicons.org/${item.slug}/${item.color}`;

  const getInitials = (name: string) => {
    const words = name.split(' ').filter(Boolean);
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  };

  const hexToRgba = (hex: string, alpha: number) => {
    const clean = hex.replace('#', '');
    const bigint = parseInt(clean, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const handleIconError = (slug: string) => {
    setFailedIcons((prev) => new Set(prev).add(slug));
  };

  const renderTile = (software: SoftwareItem, index: number) => {
    const showIcon = software.slug && !failedIcons.has(software.slug);
    const glow = hexToRgba(software.color, 0.35);
    const ring = hexToRgba(software.color, 0.45);
    const bg = hexToRgba(software.color, 0.12);

    return (
      <div
        key={`${software.name}-${index}`}
        className="flex flex-col items-center gap-2.5 min-w-[92px] md:min-w-[108px] group"
        style={{ '--tile-glow': glow, '--tile-ring': ring, '--tile-bg': bg } as React.CSSProperties}
      >
        <div
          className="tile-icon relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-3.5 md:p-4 transition-all duration-300 group-hover:-translate-y-1"
        >
          {showIcon ? (
            <img
              src={getIconUrl(software)}
              alt={software.name}
              loading="lazy"
              className="w-full h-full object-contain"
              onError={() => software.slug && handleIconError(software.slug)}
            />
          ) : (
            <span
              className="w-full h-full rounded-lg flex items-center justify-center font-bold text-sm md:text-base"
              style={{ backgroundColor: bg, color: `#${software.color}` }}
            >
              {getInitials(software.name)}
            </span>
          )}
        </div>
        <span className="text-[11px] md:text-xs text-blue-200/60 group-hover:text-white transition-colors duration-300 text-center leading-tight px-1">
          {software.name}
        </span>
      </div>
    );
  };

  // Dividimos la lista en dos filas para el efecto de doble marquee
  const rowA = softwareList.filter((_, i) => i % 2 === 0);
  const rowB = softwareList.filter((_, i) => i % 2 !== 0);
  const rowADuplicated = [...rowA, ...rowA];
  const rowBDuplicated = [...rowB, ...rowB];

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
              Software
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Software que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              instalamos
            </span>
          </h2>
          <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
            Trabajamos con las mejores herramientas y marcas del mercado
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Doble carrusel infinito con máscara de fundido en los bordes */}
        <div
          className="relative space-y-6 md:space-y-8 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <div className="overflow-hidden py-2">
            <div className="animate-scroll-left flex gap-6 md:gap-8 w-max">
              {rowADuplicated.map((software, index) => renderTile(software, index))}
            </div>
          </div>

          <div className="overflow-hidden py-2">
            <div className="animate-scroll-right flex gap-6 md:gap-8 w-max">
              {rowBDuplicated.map((software, index) => renderTile(software, index))}
            </div>
          </div>
        </div>

        {/* Mensaje adicional */}
        <div
          className="text-center mt-10"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="600"
        >
          <p className="text-blue-200/40 text-sm">
            Y muchos más • Instalamos el software que necesites
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        .tile-icon:hover {
          border-color: var(--tile-ring);
          background-color: var(--tile-bg);
          box-shadow: 0 8px 24px -4px var(--tile-glow);
        }
      `}</style>
    </section>
  );
};

export default ServicioSoftwareSoftware;