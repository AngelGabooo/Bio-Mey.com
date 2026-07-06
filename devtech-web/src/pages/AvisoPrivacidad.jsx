import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AvisoPrivacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="mb-12">
            <span className="text-cyan-500 font-mono text-sm font-bold">// LEGAL</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
              Aviso de Privacidad
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mt-4 rounded-full" />
            <p className="text-gray-500 mt-4">
              Última actualización: 6 de julio de 2026
            </p>
          </div>

          {/* Contenido */}
          <div className="space-y-8 text-gray-600 leading-relaxed">
            {/* Introducción */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Responsable del tratamiento</h2>
                  <p className="mt-1">
                    BioMey Soluciones Digitales, con domicilio en Tuxtla Gutiérrez, Chiapas, México, 
                    es el responsable del tratamiento de sus datos personales.
                  </p>
                </div>
              </div>
            </div>

            {/* Sección 1 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                1. Datos personales que recopilamos
              </h2>
              <p className="mt-3">
                Para ofrecer nuestros servicios, podemos recopilar los siguientes datos personales:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'Nombre completo',
                  'Correo electrónico',
                  'Número de teléfono',
                  'Dirección',
                  'Información de su empresa o negocio',
                  'Datos de su proyecto o requerimiento',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-cyan-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sección 2 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                2. Finalidad del tratamiento
              </h2>
              <p className="mt-3">
                Sus datos personales serán utilizados para las siguientes finalidades:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'Proporcionar los servicios solicitados',
                  'Contactarlo para dar seguimiento a su proyecto',
                  'Enviar información sobre nuestros servicios',
                  'Mejorar nuestra atención y servicios',
                  'Cumplir con obligaciones legales',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-cyan-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sección 3 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                3. Protección de sus datos
              </h2>
              <p className="mt-3">
                Implementamos medidas de seguridad físicas, electrónicas y administrativas para 
                proteger sus datos personales contra acceso no autorizado, pérdida o alteración.
              </p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: '🔒', label: 'Cifrado SSL' },
                  { icon: '🛡️', label: 'Firewall' },
                  { icon: '🔐', label: 'Acceso restringido' },
                  { icon: '📋', label: 'Políticas internas' },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sección 4 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                4. Derechos ARCO
              </h2>
              <p className="mt-3">
                Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de 
                sus datos personales (derechos ARCO). Para ejercer estos derechos, puede contactarnos en:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>a20624646@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5a2.25 2.25 0 00-2.25 2.25z" />
                  </svg>
                  <span>81 4438 4806</span>
                </div>
              </div>
            </div>

            {/* Sección 5 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                5. Transferencia de datos
              </h2>
              <p className="mt-3">
                No compartimos sus datos personales con terceros, excepto cuando sea necesario para 
                cumplir con obligaciones legales o para prestar el servicio solicitado.
              </p>
            </div>

            {/* Sección 6 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                6. Cambios al aviso de privacidad
              </h2>
              <p className="mt-3">
                Nos reservamos el derecho de actualizar el presente aviso de privacidad. Cualquier 
                cambio será publicado en nuestro sitio web.
              </p>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan-50 to-cyan-100/50 rounded-2xl p-6 border border-cyan-200 text-center">
              <p className="text-gray-700 text-sm">
                ¿Tienes preguntas sobre nuestro aviso de privacidad?
              </p>
              <Link
                to="https://wa.me/528144384806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Contactar con privacidad
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AvisoPrivacidad;