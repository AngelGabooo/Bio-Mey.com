import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Grid principal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* BioMey */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl overflow-hidden border border-cyan-400/30 shadow-sm shadow-cyan-500/10 flex-shrink-0">
                <img
                  src="/img/bio.jpeg"
                  alt="BioMey"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback si no carga la imagen
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.className = 'w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-bold text-sm shadow-sm shadow-cyan-500/30 flex-shrink-0';
                      parent.innerHTML = 'B';
                    }
                  }}
                />
              </div>
              <span className="text-sm font-bold text-gray-900">BioMey</span>
            </div>
            <span className="block text-[9px] font-semibold tracking-wider text-cyan-600/70 mb-2">
              SOLUCIONES DIGITALES
            </span>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[180px]">
              Soluciones tecnológicas para tu negocio.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-3">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/servicios/desarrollo-web" className="text-xs text-gray-400 hover:text-cyan-600 transition-colors">Desarrollo Web</Link></li>
              <li><Link to="/servicios/aplicaciones-moviles" className="text-xs text-gray-400 hover:text-cyan-600 transition-colors">Apps Móviles</Link></li>
              <li><Link to="/servicios/mantenimiento-pc" className="text-xs text-gray-400 hover:text-cyan-600 transition-colors">Mantenimiento PC</Link></li>
              <li><Link to="/servicios/soporte-tecnico" className="text-xs text-gray-400 hover:text-cyan-600 transition-colors">Soporte Técnico</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-3">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/nosotros" className="text-xs text-gray-400 hover:text-cyan-600 transition-colors">Nosotros</Link></li>
              <li><Link to="/tecnologias" className="text-xs text-gray-400 hover:text-cyan-600 transition-colors">Tecnologías</Link></li>
              <li><Link to="/aviso-privacidad" className="text-xs text-gray-400 hover:text-cyan-600 transition-colors">Aviso de privacidad</Link></li>
              <li><Link to="/terminos-condiciones" className="text-xs text-gray-400 hover:text-cyan-600 transition-colors">Términos y condiciones</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[11px] font-semibold text-gray-700 uppercase tracking-wider mb-3">Contacto</h4>
            <div className="space-y-2">
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-md bg-cyan-50 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5a2.25 2.25 0 00-2.25 2.25z" />
                  </svg>
                </span>
                81 4438 4806
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-md bg-cyan-50 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                a20624646@gmail.com
              </p>
              <p className="text-xs text-gray-400 flex items-start gap-1.5">
                <span className="w-5 h-5 rounded-md bg-cyan-50 flex items-center justify-center shrink-0 mt-px">
                  <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                Tuxtla Gtz., Chiapas
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-400">
            © 2026 BioMey Soluciones Digitales. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/aviso-privacidad" className="text-[11px] text-gray-400 hover:text-cyan-600 transition-colors">
              Aviso de privacidad
            </Link>
            <span className="text-gray-300">|</span>
            <Link to="/terminos-condiciones" className="text-[11px] text-gray-400 hover:text-cyan-600 transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;