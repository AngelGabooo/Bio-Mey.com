import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { label: 'Innovación', path: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z' },
    { label: 'Calidad', path: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H11.25m0-4.5H8.25m2.25 0V5.625c0-.621.504-1.125 1.125-1.125h.375m-2.25 4.5h5.25m-5.25 0v4.5m5.25-4.5V5.625c0-.621-.504-1.125-1.125-1.125h-.375m1.5 4.5h2.25c.621 0 1.125.504 1.125 1.125v3.375' },
    { label: 'Compromiso', path: 'M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z' },
    { label: 'Confianza', path: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
    { label: 'Creatividad', path: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' },
    { label: 'Crecimiento', path: 'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941' },
  ];

  const timeline = [
    { title: 'Descubrimos', path: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
    { title: 'Diseñamos', path: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42' },
    { title: 'Desarrollamos', path: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' },
    { title: 'Implementamos', path: 'M4.5 12.75l6 6 9-13.5' },
    { title: 'Optimizamos', path: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
    { title: 'Crecemos contigo', path: 'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941' },
  ];

  const stats = [
    { title: 'Más de 4 años', description: 'Impulsando empresas mediante tecnología.', path: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' },
    { title: 'Software a medida', description: 'Creamos soluciones adaptadas a cada negocio.', path: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' },
    { title: 'Atención personalizada', description: 'Acompañamos a nuestros clientes antes, durante y después del proyecto.', path: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
    { title: 'Enfoque en resultados', description: 'Diseñamos soluciones que ayudan a conseguir más clientes y hacer crecer el negocio.', path: 'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO - Sobre Nosotros */}
      <section className="pt-32 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Lado Izquierdo - Imagen con edificio y letrero BioMey */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-gray-200/50">
                <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  {/* Imagen del edificio */}
                  <img
                    src="/img/bio.jpeg"
                    alt="Edificio BioMey"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback si no carga la imagen
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.className = 'relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center';
                        // Mostrar contenido alternativo
                        const fallback = document.createElement('div');
                        fallback.className = 'text-center text-white/30';
                        fallback.innerHTML = `
                          <div class="text-6xl mb-4">🏢</div>
                          <p class="text-lg font-light">BioMey</p>
                          <p class="text-sm opacity-50">Sede corporativa</p>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                  
                  {/* Overlay con gradiente para mejor visibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  
                </div>
              </div>

              {/* Tarjeta flotante */}
              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-200/50">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">4 años creando soluciones digitales.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Derecho - Texto */}
            <div>
              <span className="text-cyan-500 font-mono text-sm font-bold">// SOBRE NOSOTROS</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 leading-tight">
                Sobre BioMey
              </h1>
              <p className="text-xl text-gray-600 mt-4 font-light">
                Transformamos ideas en experiencias digitales que impulsan negocios.
              </p>
              <p className="text-gray-500 mt-6 leading-relaxed">
                BioMey es una empresa chiapaneca especializada en el desarrollo de software, páginas web,
                aplicaciones móviles, inteligencia artificial y soluciones digitales personalizadas.
              </p>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Durante más de cuatro años hemos ayudado a emprendedores, empresas y organizaciones a
                modernizar sus procesos, fortalecer su presencia digital y atraer nuevos clientes
                mediante tecnología de alto nivel.
              </p>
              <p className="text-gray-500 mt-4 leading-relaxed">
                Nuestro objetivo no es únicamente desarrollar software, sino convertirnos en el aliado
                tecnológico de nuestros clientes, creando herramientas que aumenten sus ventas,
                optimicen su operación y aceleren el crecimiento de sus negocios.
              </p>
              <p className="text-gray-500 mt-4 leading-relaxed font-medium text-cyan-600">
                Creemos que cada empresa tiene el potencial de crecer cuando la tecnología se utiliza de manera estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarjetas de estadísticas */}
      <section className="py-12 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-3 group-hover:bg-cyan-100 transition-colors">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.path} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-cyan-500 font-mono text-sm font-bold">// VALORES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Nuestros Valores
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200/50 text-center hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-3 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-colors">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.path} />
                  </svg>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {value.label}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-cyan-500 font-mono text-sm font-bold">// PROCESO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Nuestra forma de trabajar
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-cyan-500 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
                      <span className="text-sm font-mono text-cyan-500">0{index + 1}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                    </div>
                  </div>

                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50/30 to-cyan-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 shadow-2xl shadow-cyan-500/5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              ¿Listo para impulsar tu negocio?
            </h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
              En BioMey convertimos tus ideas en soluciones digitales modernas,
              escalables y enfocadas en resultados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                to="/#contacto"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                Solicitar cotización
              </Link>
              <Link
                to="/#portafolio"
                className="px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-cyan-400 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300"
              >
                Conocer nuestros proyectos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;