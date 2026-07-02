import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const services = [
    'Desarrollo Web',
    'Apps Móviles',
    'Sistemas Web',
    'Tiendas en Línea',
    'Mantenimiento de PC',
    'Soporte Técnico',
    'Trámites Digitales'
  ];

  const company = [
    'Nosotros',
    'Portafolio',
    'Tecnologías',
    'Blog',
    'Contacto'
  ];

  return (
    <footer className="relative bg-[#0a0a14] border-t border-white/5 overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Columna 1 - Logo y descripción */}
          <div className="lg:col-span-1">
            <div 
              className="flex items-center gap-2 mb-4"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <span className="text-2xl font-extrabold text-white">
                DevTech
              </span>
              <span className="text-[10px] font-semibold text-blue-400/70 tracking-widest uppercase">
                SOLUCIONES DIGITALES
              </span>
            </div>
            <p 
              className="text-blue-200/50 text-sm leading-relaxed max-w-xs"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              Ayudamos a empresas y emprendedores a crecer con soluciones tecnológicas innovadoras, seguras y eficientes.
            </p>
          </div>

          {/* Columna 2 - Servicios */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
            <h3 className="text-white font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-blue-200/50 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Empresa */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="600">
            <h3 className="text-white font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-blue-200/50 hover:text-blue-300 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-blue-200/50 text-sm">
                <svg className="w-4 h-4 text-blue-400/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>961 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200/50 text-sm">
                <svg className="w-4 h-4 text-blue-400/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hola@devtech.com</span>
              </li>
              <li className="flex items-center gap-3 text-blue-200/50 text-sm">
                <svg className="w-4 h-4 text-blue-400/70 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Tuxtla Gutiérrez, Chiapas</span>
              </li>
              <li className="mt-2">
                <a
                  href="#contacto"
                  className="inline-block px-5 py-2 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-105 transform"
                >
                  Solicitar cotización
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/5 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200/40 text-xs text-center md:text-left">
              © {new Date().getFullYear()} DevTech Soluciones Digitales. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-blue-200/40 hover:text-blue-300 transition-colors duration-300 text-xs">
                Aviso de privacidad
              </a>
              <a href="#" className="text-blue-200/40 hover:text-blue-300 transition-colors duration-300 text-xs">
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;