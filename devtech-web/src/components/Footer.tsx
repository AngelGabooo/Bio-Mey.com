import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a14] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Grid principal - Muy compacto */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          
          {/* BioMey */}
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-[10px]">
                B
              </div>
              <span className="text-xs font-bold text-white">BioMey</span>
              <span className="text-[8px] text-blue-300/40">SOLUCIONES DIGITALES</span>
            </div>
            <p className="text-[8px] text-blue-200/30 leading-relaxed">
              Soluciones tecnológicas para tu negocio.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-[10px] font-semibold text-white/60 uppercase tracking-wider mb-1.5">Servicios</h4>
            <ul className="space-y-0.5">
              <li><Link to="/servicios/desarrollo-web" className="text-[9px] text-blue-200/40 hover:text-blue-300 transition-colors">Desarrollo Web</Link></li>
              <li><Link to="/servicios/aplicaciones-moviles" className="text-[9px] text-blue-200/40 hover:text-blue-300 transition-colors">Apps Móviles</Link></li>
              <li><Link to="/servicios/mantenimiento-pc" className="text-[9px] text-blue-200/40 hover:text-blue-300 transition-colors">Mantenimiento PC</Link></li>
              <li><Link to="/servicios/soporte-tecnico" className="text-[9px] text-blue-200/40 hover:text-blue-300 transition-colors">Soporte Técnico</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-[10px] font-semibold text-white/60 uppercase tracking-wider mb-1.5">Empresa</h4>
            <ul className="space-y-0.5">
              <li><Link to="/#nosotros" className="text-[9px] text-blue-200/40 hover:text-blue-300 transition-colors">Nosotros</Link></li>
              <li><Link to="/#portafolio" className="text-[9px] text-blue-200/40 hover:text-blue-300 transition-colors">Portafolio</Link></li>
              <li><Link to="/tecnologias" className="text-[9px] text-blue-200/40 hover:text-blue-300 transition-colors">Tecnologías</Link></li>
              <li><Link to="/#contacto" className="text-[9px] text-blue-200/40 hover:text-blue-300 transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[10px] font-semibold text-white/60 uppercase tracking-wider mb-1.5">Contacto</h4>
            <div className="space-y-0.5">
              <p className="text-[9px] text-blue-200/40 flex items-center gap-1">
                <span className="text-[10px]">📞</span> 961 123 4567
              </p>
              <p className="text-[9px] text-blue-200/40 flex items-center gap-1">
                <span className="text-[10px]">📧</span> hola@biomey.com
              </p>
              <p className="text-[9px] text-blue-200/40 flex items-start gap-1">
                <span className="text-[10px]">📍</span> Tuxtla Gtz., Chiapas
              </p>
            </div>
            <Link
              to="#contacto"
              className="inline-block mt-1.5 px-3 py-0.5 text-[9px] font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Cotizar
            </Link>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="my-3 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        {/* Copyright - Muy compacto */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5">
          <p className="text-[8px] text-blue-200/20">
            © 2026 BioMey Soluciones Digitales. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <Link to="#" className="text-[8px] text-blue-200/20 hover:text-blue-300 transition-colors">Aviso de privacidad</Link>
            <span className="text-blue-200/10">|</span>
            <Link to="#" className="text-[8px] text-blue-200/20 hover:text-blue-300 transition-colors">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;