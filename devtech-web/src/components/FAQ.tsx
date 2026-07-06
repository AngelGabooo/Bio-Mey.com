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
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Glow de fondo - Cian suave */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Columna Izquierda - Encabezado e Imagen */}
          <div 
            className="lg:sticky lg:top-24"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Preguntas <span className="text-cyan-500">frecuentes</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-8">
              Resolvemos las dudas más comunes
            </p>

            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mb-8"></div>

            <div className="flex justify-center items-center">
              <img
                src="/img/signo.png"
                alt="Preguntas frecuentes"
                className="w-[280px] md:w-[320px] lg:w-[360px] h-auto drop-shadow-[0_20px_50px_rgba(6,182,212,0.15)] hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-center text-gray-400 text-sm mt-4">
              ¿Tienes más preguntas? Contáctanos
            </p>
          </div>

          {/* Columna Derecha - Lista de FAQ */}
          <div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    openIndex === index 
                      ? 'border-cyan-400 shadow-lg shadow-cyan-500/10' 
                      : 'border-gray-200 hover:border-cyan-300 hover:shadow-md'
                  }`}
                >
                  {/* Pregunta */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`hidden sm:flex w-6 h-6 rounded-full items-center justify-center text-xs font-medium transition-all duration-300 ${
                        openIndex === index 
                          ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white' 
                          : 'bg-gray-100 text-gray-400 border border-gray-200'
                      }`}>
                        {index + 1}
                      </span>
                      <span className={`text-gray-900 font-medium text-sm md:text-base transition-colors duration-300 ${
                        openIndex === index ? 'text-cyan-600' : 'group-hover:text-cyan-600'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 border-transparent shadow-lg shadow-cyan-500/25'
                          : 'bg-white border-gray-200 group-hover:border-cyan-400'
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

                  {/* Respuesta */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-4 md:pb-5">
                      <div className="h-px bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 mb-4"></div>
                      <div className="flex gap-3">
                        <div className="w-1 h-auto rounded-full bg-gradient-to-b from-cyan-400/30 to-cyan-500/30 flex-shrink-0"></div>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                ¿No encuentras tu pregunta? 
                <a href="#contacto" className="text-cyan-500 hover:text-cyan-600 transition-colors ml-1">
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