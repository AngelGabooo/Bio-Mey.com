import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicioEnConstruccion = () => {
  // Scroll automático al inicio al montar el componente
  useEffect(() => {
    // Forzar scroll al inicio de la página
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Resplandor ambiental de fondo - Cian suave */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        {/* Logo con imagen */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
              <img
                src="/img/bio.jpeg"
                alt="BioMey"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.className = 'w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0';
                    parent.innerHTML = 'B';
                  }
                }}
              />
            </div>
            <span className="text-xl font-bold text-gray-900">BioMey</span>
            <span className="text-xs font-medium text-cyan-500/60 ml-1">AGENCIA DIGITAL</span>
          </div>
        </div>

        {/* Icono de construcción */}
        <div className="relative inline-block mb-6">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
            <svg className="w-9 h-9 md:w-11 md:h-11 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.25} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091.99-.203 2.003-.877 2.726L7.5 12.5" />
            </svg>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs font-bold ring-4 ring-white animate-pulse">
            !
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          Estamos mejorando la experiencia de este servicio
        </h1>

        <p className="text-gray-500 text-base md:text-lg mt-3 max-w-2xl mx-auto">
          Muy pronto estará disponible con nuevas funcionalidades y una experiencia mejorada.
        </p>

        {/* Barra de progreso */}
        <div className="max-w-md mx-auto mt-6">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-1.5">
            <span>Progreso</span>
            <span className="font-medium text-cyan-500">75%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 border border-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-cyan-500 rounded-full" />
          </div>
        </div>

        {/* Características en desarrollo */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8 max-w-2xl mx-auto">
          {[
            { label: 'Nuevo diseño', path: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' },
            { label: 'Más rápido', path: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
            { label: 'Mobile first', path: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3' },
            { label: 'Más seguro', path: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
            { label: 'Interfaz moderna', path: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5' },
            { label: 'Soporte 24/7', path: 'M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155' },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center hover:bg-gray-100 hover:border-cyan-300 transition-colors">
              <svg className="w-5 h-5 mx-auto text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
              </svg>
              <span className="block text-xs text-gray-600 mt-1.5">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            to="/"
            className="px-6 py-2.5 rounded-full bg-cyan-500 text-white font-medium text-sm shadow-lg shadow-cyan-500/40 hover:bg-cyan-600 transition-all duration-300 hover:scale-105"
          >
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/528144384806"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 font-medium text-sm hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193a48.11 48.11 0 01-3.478.397M20.25 8.511c-.884-.284-1.5-1.128-1.5-2.097M3.75 8.511c.11-.021.219-.043.328-.065C4.978 8.257 5.987 8 7 8s2.022.257 2.922.446M3.75 8.511a3 3 0 00-1.5 2.097v4.286c0 1.136.847 2.1 1.98 2.193.32.026.641.049.964.068m14.302-9.02L15 12l-1.5 1.5M3.75 8.511L9 12l1.5 1.5" />
            </svg>
            Consultar disponibilidad
          </a>
        </div>

        {/* Notificación */}
        <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-medium text-cyan-600">Pronto disponible</span>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                <img
                  src="/img/bio.jpeg"
                  alt="BioMey"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.className = 'w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-[10px] flex-shrink-0';
                      parent.innerHTML = 'B';
                    }
                  }}
                />
              </div>
              <span className="font-bold text-gray-900">BioMey</span>
              <span className="text-cyan-500/40 text-xs">SOLUCIONES DIGITALES</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <Link to="/servicios/desarrollo-web" className="hover:text-cyan-600 transition-colors">Desarrollo Web</Link>
              <Link to="/servicios/aplicaciones-moviles" className="hover:text-cyan-600 transition-colors">Apps Móviles</Link>
              <Link to="/" className="hover:text-cyan-600 transition-colors">Inicio</Link>
              <Link to="/nosotros" className="hover:text-cyan-600 transition-colors">Nosotros</Link>
            </div>
            <div className="flex flex-col items-end text-gray-400 text-xs">
              <span>81 4438 4806</span>
              <span>soporte-biomey-tux@outlook.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicioEnConstruccion;