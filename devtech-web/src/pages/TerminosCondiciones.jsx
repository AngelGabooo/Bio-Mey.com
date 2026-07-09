import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TerminosCondiciones = () => {
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
              Términos y Condiciones
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Aceptación de los términos</h2>
                  <p className="mt-1">
                    Al utilizar los servicios de BioMey Soluciones Digitales, usted acepta los 
                    presentes Términos y Condiciones. Si no está de acuerdo, por favor no utilice 
                    nuestros servicios.
                  </p>
                </div>
              </div>
            </div>

            {/* Sección 1 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                1. Servicios ofrecidos
              </h2>
              <p className="mt-3">
                BioMey ofrece los siguientes servicios:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'Desarrollo de páginas web y aplicaciones móviles',
                  'Mantenimiento de computadoras y soporte técnico',
                  'Instalación de software y configuración de equipos',
                  'Trámites digitales y asesoría IT',
                  'Diseño de logotipos e identidad visual',
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
                2. Obligaciones del cliente
              </h2>
              <p className="mt-3">
                Al contratar nuestros servicios, usted se compromete a:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'Proporcionar información verídica y completa',
                  'Colaborar activamente en el desarrollo del proyecto',
                  'Realizar los pagos acordados en tiempo y forma',
                  'Respetar los plazos de entrega establecidos',
                  'Utilizar los servicios de manera legal y ética',
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
                3. Propiedad intelectual
              </h2>
              <p className="mt-3">
                Todo el código, diseño, contenido y materiales desarrollados por BioMey para 
                sus proyectos son propiedad de BioMey hasta que se complete el pago total del 
                servicio. Una vez pagado, el cliente adquiere la propiedad del producto final.
              </p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: '💻', label: 'Código fuente' },
                  { icon: '🎨', label: 'Diseños' },
                  { icon: '📄', label: 'Contenido' },
                  { icon: '🛡️', label: 'Propiedad intelectual' },
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
                4. Pagos y facturación
              </h2>
              <p className="mt-3">
                Los precios de nuestros servicios se cotizan en pesos mexicanos (MXN). 
                Los métodos de pago aceptados incluyen:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  'Transferencia bancaria',
                  'Depósito en Oxxo',
                  'Tarjeta de crédito/débito',
                  'Pago en efectivo (para servicios presenciales)',
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

            {/* Sección 5 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                5. Garantía y soporte
              </h2>
              <p className="mt-3">
                Todos nuestros servicios incluyen garantía por el trabajo realizado. 
                Ofrecemos soporte post-entrega para asegurar la correcta operación del producto.
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>Garantía de 30 días en todos los servicios</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                  <span>Soporte técnico post-entrega incluido</span>
                </div>
              </div>
            </div>

            {/* Sección 6 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                6. Limitación de responsabilidad
              </h2>
              <p className="mt-3">
                BioMey no se hace responsable por daños indirectos, pérdida de datos o 
                interrupción del negocio que puedan derivarse del uso de nuestros servicios.
              </p>
            </div>

            {/* Sección 7 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                7. Modificaciones
              </h2>
              <p className="mt-3">
                Nos reservamos el derecho de actualizar estos términos en cualquier momento. 
                Las modificaciones serán publicadas en nuestro sitio web.
              </p>
            </div>

            {/* Sección 8 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-1 h-6 bg-cyan-400 rounded-full" />
                8. Contacto
              </h2>
              <p className="mt-3">
                Para cualquier duda sobre estos términos, puede contactarnos en:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>soporte-biomey-tux@outlook.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5a2.25 2.25 0 00-2.25 2.25z" />
                  </svg>
                  <span>81 4438 4806</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-cyan-50 to-cyan-100/50 rounded-2xl p-6 border border-cyan-200 text-center">
              <p className="text-gray-700 text-sm">
                ¿Tienes preguntas sobre nuestros términos y condiciones?
              </p>
              <Link
                to="https://wa.me/528144384806"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                Contactar con soporte
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TerminosCondiciones;