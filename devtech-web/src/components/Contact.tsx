import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

// ── TUS CREDENCIALES DE EMAILJS ──
const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9o1-iq4oNrAxy0XDo',
  SERVICE_ID: 'service_nmcqlce',
  TEMPLATE_ID: 'template_kd0vifi',
};

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Estado del formulario
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_company: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Inicializar EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Enviar el email
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          user_phone: formData.user_phone,
          user_company: formData.user_company,
          service: formData.service,
          message: formData.message,
        }
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: '¡Mensaje enviado con éxito! Te contactaremos pronto.',
        });
        // Resetear formulario
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          user_company: '',
          service: '',
          message: '',
        });
        formRef.current?.reset();
      }
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Teléfono',
      value: '+52 961 123 4567'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Correo',
      value: 'contacto@devtech.com'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Ubicación',
      value: 'Tuxtla Gutiérrez, Chiapas, MX'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Horario',
      value: 'Lunes a Viernes 9:00 AM - 6:00 PM'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: '+52 961 123 4567'
    }
  ];

  const services = [
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'Mantenimiento de PC',
    'Soporte Técnico',
    'Trámites Digitales',
    'Asesoría IT'
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#0a0a14] overflow-hidden" id="contacto">
      {/* Glow de fondo */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Encabezado */}
        <div 
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-blue-300 tracking-wider uppercase">
              Contacto
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Hablemos de tu <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">proyecto</span>
          </h2>
          <p className="text-blue-200/60 text-base md:text-lg max-w-2xl mx-auto">
            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Columna Izquierda - Información de contacto (2/5) */}
          <div 
            className="lg:col-span-2 space-y-4"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              Información de contacto
            </h3>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/30 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-duration="500"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-blue-200/50 text-xs uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-white text-sm md:text-base font-medium">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna Derecha - Formulario (3/5) */}
          <div 
            className="lg:col-span-3"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">
                Envíanos un mensaje
              </h3>

              {/* Mensaje de estado */}
              {submitStatus && (
                <div className={`mb-4 p-4 rounded-xl ${
                  submitStatus.success 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-300' 
                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-200/60 text-sm mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200/60 text-sm mb-1.5">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-200/60 text-sm mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      placeholder="961 123 4567"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-blue-200/60 text-sm mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="user_company"
                      value={formData.user_company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200/60 text-sm mb-1.5">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-400/50 focus:outline-none transition-colors duration-300 appearance-none"
                  >
                    <option value="" className="bg-[#0a0a14]">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-[#0a0a14]">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-blue-200/60 text-sm mb-1.5">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe tu proyecto, ideas o necesidades..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar cotización
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;