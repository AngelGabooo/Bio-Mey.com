import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo tarda un proyecto?',
      answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, mientras que proyectos más complejos como aplicaciones móviles o sistemas personalizados pueden tomar 2-6 meses. Siempre proporcionamos un cronograma detallado al inicio del proyecto.'
    },
    {
      question: '¿Trabajan con empresas pequeñas?',
      answer: '¡Por supuesto! Trabajamos con empresas de todos los tamaños, desde emprendedores y startups hasta grandes corporaciones. Adaptamos nuestras soluciones a las necesidades y presupuesto de cada cliente.'
    },
    {
      question: '¿Qué incluye el mantenimiento de PC?',
      answer: 'Nuestro servicio de mantenimiento incluye limpieza física y de software, optimización del sistema, actualización de controladores, eliminación de virus y malware, respaldo de datos, y mejoras de rendimiento. Ofrecemos mantenimiento preventivo y correctivo.'
    },
    {
      question: '¿Puedo solicitar soporte remoto?',
      answer: 'Sí, ofrecemos soporte técnico remoto a través de conexión segura. Podemos acceder a tu equipo con tu autorización para diagnosticar y resolver problemas de forma rápida y eficiente, sin necesidad de que te desplaces.'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos diversos métodos de pago: transferencia bancaria, tarjetas de crédito/débito, PayPal, y criptomonedas. También ofrecemos planes de pago flexibles para proyectos grandes, con la posibilidad de pagar por etapas.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a14] overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda - Encabezado e Imagen con AOS */}
          <div 
            className="lg:sticky lg:top-24"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Preguntas <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">frecuentes</span>
            </h2>
            <p className="text-blue-200/60 text-base md:text-lg mb-8">
              Resolvemos las dudas más comunes
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8"></div>

            <div className="flex justify-center items-center">
              <img
                src="/img/signo.png"
                alt="Preguntas frecuentes"
                className="w-[280px] md:w-[320px] lg:w-[360px] h-auto drop-shadow-[0_20px_50px_rgba(59,130,246,0.25)] hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-center text-blue-200/40 text-sm mt-4">
              ¿Tienes más preguntas? Contáctanos
            </p>
          </div>

          {/* Columna Derecha - Lista de FAQ SIN AOS */}
          <div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white/[0.03] backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                    openIndex === index 
                      ? 'border-blue-400/40 bg-white/[0.06] shadow-lg shadow-blue-600/5' 
                      : 'border-white/10 hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                >
                  {/* Pregunta - SIEMPRE VISIBLE */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`hidden sm:flex w-6 h-6 rounded-full items-center justify-center text-xs font-medium transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                          : 'bg-white/5 text-blue-400/50 border border-white/10'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="text-white font-medium text-sm md:text-base group-hover:text-blue-300 transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent shadow-lg shadow-blue-600/25'
                          : 'bg-white/5 border-white/10 group-hover:border-blue-400/50'
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Respuesta - Se expande/contrae */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-4 md:pb-5">
                      <div className="h-px bg-gradient-to-r from-blue-600/20 to-purple-600/20 mb-4"></div>
                      <div className="flex gap-3">
                        <div className="w-1 h-auto rounded-full bg-gradient-to-b from-blue-600/30 to-purple-600/30 flex-shrink-0"></div>
                        <p className="text-blue-200/70 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-blue-200/40 text-sm">
                ¿No encuentras tu pregunta? 
                <a href="#contacto" className="text-blue-400 hover:text-blue-300 transition-colors ml-1">
                  Contáctanos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;