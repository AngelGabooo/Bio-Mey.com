import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ICONS = {
  web: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
  backend: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
  mobile: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0v.75h3v-.75m-3 0h3m-3 18.75h3',
  design: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42',
  devops: 'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.795l-.75-1.3m-7.5-12.99l-.75-1.3m0 13.905l.75-1.3m7.5-12.99l.75-1.3M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z',
  ia: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z',
};

const BENEFIT_ICONS = {
  rendimiento: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  responsive: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0v.75h3v-.75m-3 0h3m-3 18.75h3',
  seguridad: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  escalable: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  seo: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  nube: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z',
  actualizable: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
  soporte: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091.99-.203 2.003-.877 2.726L7.5 12.5',
};

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('web');

  const tabs = [
    { id: 'web', label: 'Desarrollo Web' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Apps Móviles' },
    { id: 'design', label: 'Diseño' },
    { id: 'devops', label: 'DevOps' },
    { id: 'ia', label: 'Inteligencia Artificial' },
  ];

  const techStacks = {
    web: {
      title: 'Desarrollo Web',
      technologies: [
        { name: 'React', description: 'Interfaces rápidas e interactivas.' },
        { name: 'Astro', description: 'Sitios ultrarrápidos y optimizados para SEO.' },
        { name: 'Next.js', description: 'Framework React para producción.' },
        { name: 'JavaScript', description: 'Aplicaciones dinámicas.' },
        { name: 'TypeScript', description: 'Código más seguro y mantenible.' },
        { name: 'Tailwind CSS', description: 'Diseños modernos y responsivos.' },
        { name: 'Framer Motion', description: 'Animaciones fluidas.' },
      ],
    },
    backend: {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', description: 'APIs modernas.' },
        { name: 'Express', description: 'Servicios web rápidos.' },
        { name: 'Firebase', description: 'Autenticación y tiempo real.' },
        { name: 'Supabase', description: 'Backend moderno.' },
        { name: 'PostgreSQL', description: 'Base de datos empresarial.' },
        { name: 'MongoDB', description: 'Información flexible.' },
      ],
    },
    mobile: {
      title: 'Aplicaciones Móviles',
      technologies: [
        { name: 'Flutter', description: 'Una sola aplicación para Android e iOS.' },
        { name: 'Dart', description: 'Lenguaje moderno.' },
        { name: 'Firebase', description: 'Notificaciones push.' },
        { name: 'Google Maps', description: 'Geolocalización.' },
        { name: 'Cloud Storage', description: 'Archivos en la nube.' },
      ],
    },
    design: {
      title: 'Diseño',
      technologies: [
        { name: 'Figma', description: 'Diseño UI/UX.' },
        { name: 'Adobe Photoshop', description: 'Edición de imágenes.' },
        { name: 'Adobe Illustrator', description: 'Logotipos y vectores.' },
        { name: 'Canva', description: 'Contenido digital.' },
      ],
    },
    devops: {
      title: 'DevOps',
      technologies: [
        { name: 'Git', description: 'Control de versiones.' },
        { name: 'GitHub', description: 'Repositorios colaborativos.' },
        { name: 'Docker', description: 'Contenedores.' },
        { name: 'Vercel', description: 'Despliegue continuo.' },
        { name: 'Netlify', description: 'Hosting moderno.' },
        { name: 'Cloudflare', description: 'CDN y seguridad.' },
        { name: 'VS Code', description: 'Editor de código.' },
        { name: 'Android Studio', description: 'Desarrollo móvil.' },
        { name: 'Cursor AI', description: 'Asistente de código.' },
      ],
    },
    ia: {
      title: 'Inteligencia Artificial',
      technologies: [
        { name: 'ChatGPT', description: 'Generación de contenido.' },
        { name: 'GitHub Copilot', description: 'Desarrollo asistido.' },
        { name: 'IA para diseño', description: 'Creación de recursos gráficos.' },
        { name: 'Automatización', description: 'Optimización de procesos.' },
      ],
    },
  };

  const benefits = [
    { key: 'rendimiento', title: 'Alto rendimiento' },
    { key: 'responsive', title: 'Responsive' },
    { key: 'seguridad', title: 'Seguridad' },
    { key: 'escalable', title: 'Escalable' },
    { key: 'seo', title: 'SEO' },
    { key: 'nube', title: 'En la nube' },
    { key: 'actualizable', title: 'Actualizable' },
    { key: 'soporte', title: 'Soporte' },
  ];

  const currentStack = techStacks[activeTab];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white pt-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-cyan-500 font-mono text-sm font-bold">// TECNOLOGÍAS</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mt-2 leading-tight">
                Desarrollamos soluciones utilizando tecnologías modernas y de alto rendimiento.
              </h1>
              <p className="text-lg text-gray-500 mt-4 leading-relaxed">
                Utilizamos herramientas líderes en la industria para crear páginas web,
                aplicaciones móviles, sistemas y plataformas escalables.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[ICONS.web, ICONS.backend, ICONS.mobile, ICONS.design, ICONS.devops, ICONS.ia, ICONS.web, ICONS.backend, ICONS.mobile, ICONS.design, ICONS.devops, ICONS.ia].map((path, index) => (
                <div
                  key={index}
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border border-gray-200 shadow-sm hover:border-cyan-400 hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <svg className="w-7 h-7 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 bg-gray-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-cyan-500 font-mono text-sm font-bold">// STACK</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Nuestro Stack Tecnológico
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-cyan-300'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[tab.id]} />
                </svg>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">{currentStack.title}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentStack.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:border-cyan-400 hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[activeTab]} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-500">{tech.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-cyan-500 font-mono text-sm font-bold">// BENEFICIOS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Beneficios de nuestra tecnología
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {benefits.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-4 border border-gray-200 text-center hover:border-cyan-300 hover:shadow-cyan-500/5 transition-all duration-300">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={BENEFIT_ICONS[item.key]} />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            ¿Tienes un proyecto?
          </h2>
          <p className="text-white/80 mt-4 text-lg">
            Desarrollémoslo con las mejores tecnologías.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="https://wa.me/528144384806"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white text-cyan-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Technologies;