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

  // Renderizar link (interno o externo)
  const renderLink = (link: { label: string; href: string }) => {
    const isExternal = link.href.startsWith('http') || link.href.startsWith('https');
    const isWhatsApp = link.href.includes('wa.me');

    if (isExternal) {
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
        >
          {link.label}
          {isWhatsApp && (
            <span className="absolute -top-1 -right-4 text-[10px]">💬</span>
          )}
          <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.href}
        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
      >
        {link.label}
        <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    );
  };

  // Renderizar link móvil (interno o externo)
  const renderMobileLink = (link: { label: string; href: string }) => {
    const isExternal = link.href.startsWith('http') || link.href.startsWith('https');

    if (isExternal) {
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors font-medium text-sm"
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.href}
        className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors font-medium text-sm"
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <div
      className={`fixed top-3 md:top-5 inset-x-0 z-50 px-4 transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[130%] opacity-0 pointer-events-none'
      }`}
    >
      <nav
        className={`max-w-5xl mx-auto rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-gray-200/50 shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
            : 'bg-white/80 backdrop-blur-md border-gray-200/30'
        }`}
      >
        <div className="px-4 sm:px-5 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo con imagen - RUTA CORREGIDA */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-cyan-400/30 shadow-md shadow-cyan-500/10 bg-white">
                <img
                  src="/img/bio.jpeg"
                  alt="BioMey"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback si la imagen no carga
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.className = 'w-9 h-9 rounded-lg border border-cyan-400/40 bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg';
                      parent.innerHTML = 'B';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-lg font-bold tracking-tight text-gray-900"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  BioMey
                </span>
                <span
                  className="hidden sm:inline text-[9px] text-gray-400 tracking-[0.2em] uppercase mt-0.5"
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
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group flex items-center gap-1"
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
                        <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                      </button>

                      <div
                        className={`absolute left-0 mt-2 w-56 rounded-xl border border-gray-200/50 bg-white/95 backdrop-blur-xl shadow-xl shadow-black/5 overflow-hidden transition-all duration-200 origin-top ${
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
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return renderLink(link);
              })}
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors"
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

      {/* Menú Móvil */}
      <div
        className={`lg:hidden max-w-5xl mx-auto transition-all duration-300 ease-out origin-top ${
          isOpen ? 'max-h-[36rem] opacity-100 scale-y-100 mt-2' : 'max-h-0 opacity-0 scale-y-95 mt-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="rounded-2xl border border-gray-200/50 bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              if (link.label === 'Servicios') {
                return (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors font-medium text-sm"
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
                    
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileServicesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="ml-4 pl-2 border-l border-gray-200 space-y-0.5">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.label}
                            to={service.href}
                            className="block px-4 py-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors font-medium text-sm"
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

              return renderMobileLink(link);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;