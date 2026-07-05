import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { navLinks, serviceLinks } from '../data';

/* ---------- Oculta al bajar, aparece al subir ---------- */
function useScrollVisibility() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const delta = Math.abs(y - lastY.current);

      setScrolled(y > 20);

      if (y < 80) {
        setVisible(true);
      } else if (delta > 4) {
        setVisible(!goingDown);
      }

      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { visible, scrolled };
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { visible, scrolled } = useScrollVisibility();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=JetBrains+Mono:wght@500&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isVisible = visible || isOpen;

  return (
    <div
      className={`fixed top-3 md:top-5 inset-x-0 z-50 px-4 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[130%] opacity-0 pointer-events-none'
      }`}
    >
      <nav
        className={`max-w-5xl mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a14]/80 backdrop-blur-xl border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[#0a0a14]/40 backdrop-blur-md border-white/[0.06]'
        }`}
      >
        <div className="px-4 sm:px-5 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <span
                className="w-9 h-9 rounded-lg border border-blue-400/40 bg-transparent flex items-center justify-center text-transparent bg-gradient-to-br from-blue-400 to-purple-400 bg-clip-text text-lg font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                aria-hidden="true"
              >
                B
              </span>
              <div className="flex flex-col leading-none">
                <span
                  className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  BioMey
                </span>
                <span
                  className="hidden sm:inline text-[9px] text-blue-300/60 tracking-[0.2em] uppercase mt-0.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Agencia digital
                </span>
              </div>
            </Link>

            {/* Menú Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                if (link.label === 'Servicios') {
                  return (
                    <div key={link.label} ref={dropdownRef} className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors duration-200 relative group flex items-center gap-1"
                      >
                        Servicios
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                      </button>

                      <div
                        className={`absolute left-0 mt-2 w-56 rounded-xl border border-white/10 bg-[#0a0a14]/95 backdrop-blur-xl shadow-xl shadow-black/40 overflow-hidden transition-all duration-200 origin-top ${
                          dropdownOpen
                            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                            : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                        }`}
                      >
                        <div className="py-2">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.label}
                              to={service.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-4 py-2.5 text-sm text-blue-100/80 hover:text-white hover:bg-white/5 transition-colors duration-200"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              })}
            </div>

            {/* Botón de acción - Desktop */}
            <div className="hidden lg:flex items-center">
              <Link
                to="#contacto"
                className="px-5 py-2 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transform"
              >
                Solicitar cotización
              </Link>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-blue-100 hover:text-white hover:border-white/25 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Móvil mejorado */}
      <div
        className={`lg:hidden max-w-5xl mx-auto transition-all duration-300 ease-out origin-top ${
          isOpen ? 'max-h-[36rem] opacity-100 scale-y-100 mt-2' : 'max-h-0 opacity-0 scale-y-95 mt-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="rounded-2xl border border-white/10 bg-[#0a0a14]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] p-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              // Para "Servicios" en móvil - con toggle para expandir/contraer
              if (link.label === 'Servicios') {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors font-medium text-sm"
                    >
                      <span>Servicios</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Submenú de servicios en móvil */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileServicesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-4 pl-2 border-l border-white/10 space-y-0.5">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.label}
                            to={service.href}
                            className="block px-4 py-2.5 text-blue-100/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors font-medium text-sm"
                            onClick={() => {
                              setIsOpen(false);
                              setMobileServicesOpen(false);
                            }}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block px-4 py-3 text-blue-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Línea divisoria */}
          <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

          {/* Botón CTA */}
          <Link
            to="#contacto"
            className="block w-full px-6 py-3 text-center text-white text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg shadow-blue-600/30"
            onClick={() => setIsOpen(false)}
          >
            Solicitar cotización  
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;