import { useState } from 'react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  const linkGroups = [
    {
      key: 'servicios',
      title: 'Servicios',
      items: [
        'Desarrollo Web',
        'Apps Móviles',
        'Sistemas Web',
        'Tiendas en Línea',
        'Mantenimiento de PC',
        'Soporte Técnico',
        'Trámites Digitales',
      ],
    },
    {
      key: 'empresa',
      title: 'Empresa',
      items: ['Nosotros', 'Portafolio', 'Tecnologías', 'Blog', 'Contacto'],
    },
  ];

  const socials = [
    {
      name: 'Facebook',
      href: '#',
      path: 'M13 22v-8h2.7l.4-3H13V8.9c0-.9.2-1.5 1.6-1.5H16V4.8C15.7 4.8 14.7 4.7 13.6 4.7c-2.3 0-3.9 1.4-3.9 4V11H7v3h2.7v8h3.3z',
    },
    {
      name: 'Instagram',
      href: '#',
      path: null,
      icon: 'instagram',
    },
    {
      name: 'WhatsApp',
      href: '#',
      path: null,
      icon: 'whatsapp',
    },
  ];

  return (
    <footer className="relative bg-[#0a0a14] border-t border-white/5 overflow-hidden text-sm">
      {/* Glow de fondo, más sutil y pequeño */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[360px] h-[360px] md:w-[480px] md:h-[480px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 px-5 py-8 md:py-10">
        {/* Fila superior: marca + redes */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-white/5">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-white tracking-tight">
              Bio<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mey</span>
            </span>
            <span className="text-[9px] font-semibold text-blue-400/60 tracking-widest uppercase">
              Soluciones Digitales
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="group flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-transparent hover:border-blue-400/40 hover:bg-blue-500/5 transition-all duration-300"
              >
                <svg
                  className="w-3.5 h-3.5 text-blue-200/60 group-hover:text-blue-300 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  {s.icon === 'instagram' && (
                    <>
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
                    </>
                  )}
                  {s.icon === 'whatsapp' && (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.5 20.5l1.4-4.2A8 8 0 1112 20a7.9 7.9 0 01-4.1-1.1L3.5 20.5z M8.2 8.8c.2-.5.5-.5.7-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.5.6 1.6.1.1.1.3 0 .5-.1.2-.2.3-.3.4l-.4.4c-.1.1-.2.3 0 .5.2.4.8 1.2 1.6 1.9.9.8 1.5 1 1.8 1.1.2.1.4.1.5-.1l.6-.6c.2-.2.3-.2.5-.1l1.4.7c.2.1.3.1.4.3.1.2.1.9-.2 1.2-.3.4-1 .8-1.8.8-1.6 0-3.3-.9-4.5-2s-2-2.7-2.1-4.4c0-.7.3-1.4.7-1.8z"
                    />
                  )}
                  {s.path && <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Fila media: enlaces + contacto, compacta */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.1fr] gap-x-8 gap-y-1 py-6">
          {linkGroups.map((group) => (
            <div key={group.key} className="border-b border-white/5 md:border-none">
              {/* Encabezado: acordeón en móvil, texto simple en desktop */}
              <button
                onClick={() => toggleSection(group.key)}
                className="w-full flex items-center justify-between py-2.5 md:py-0 md:pointer-events-none text-left"
              >
                <h3 className="text-white/90 font-semibold text-[13px] md:mb-2.5">{group.title}</h3>
                <svg
                  className={`w-3.5 h-3.5 text-blue-300/50 md:hidden transition-transform duration-300 ${
                    openSection === group.key ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <ul
                className={`overflow-hidden transition-all duration-300 md:!max-h-none md:!block ${
                  openSection === group.key ? 'max-h-96 pb-2' : 'max-h-0'
                } md:max-h-none flex-col gap-1.5 md:flex`}
              >
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block py-1 md:py-0.5 text-blue-200/45 hover:text-blue-300 transition-colors duration-200 text-[13px]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contacto, en línea y compacto */}
          <div className="pt-3 md:pt-0">
            <h3 className="text-white/90 font-semibold text-[13px] mb-2.5 hidden md:block">Contacto</h3>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2.5 text-blue-200/45 text-[13px]">
                <svg className="w-3.5 h-3.5 text-blue-400/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>961 123 4567</span>
              </li>
              <li className="flex items-center gap-2.5 text-blue-200/45 text-[13px]">
                <svg className="w-3.5 h-3.5 text-blue-400/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hola@biomey.com</span>
              </li>
              <li className="flex items-center gap-2.5 text-blue-200/45 text-[13px]">
                <svg className="w-3.5 h-3.5 text-blue-400/60 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Tuxtla Gutiérrez, Chiapas</span>
              </li>
            </ul>
            <a
              href="#contacto"
              className="mt-3 inline-block px-4 py-1.5 text-white text-[12px] font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md shadow-blue-600/20 hover:shadow-blue-600/40"
            >
              Solicitar cotización
            </a>
          </div>
        </div>

        {/* Línea final */}
        <div className="border-t border-white/5 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-blue-200/35 text-[11px] text-center md:text-left">
            © {new Date().getFullYear()} BioMey Soluciones Digitales. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-200/35 hover:text-blue-300 transition-colors duration-300 text-[11px]">
              Aviso de privacidad
            </a>
            <a href="#" className="text-blue-200/35 hover:text-blue-300 transition-colors duration-300 text-[11px]">
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;