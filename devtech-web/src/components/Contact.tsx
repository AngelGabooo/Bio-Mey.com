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

// ── CONFIGURACIÓN DE LÍMITE ──
const LIMITE_CONFIG = {
  MAX_ENVIOS: 1, // 1 envío
  PERIODO_HORAS: 24, // cada 24 horas
};

interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label: string;
  placeholder: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
}

/**
 * Dropdown personalizado - Versión clara
 */
const CustomSelect = ({ label, placeholder, value, options, onChange, disabled }: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={wrapperRef} className="relative">
      <label className="block text-gray-500 text-sm mb-1.5">{label}</label>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-white border text-left transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
          open ? 'border-cyan-400' : 'border-gray-200 hover:border-cyan-300'
        }`}
      >
        <span className={`text-sm truncate ${selected ? 'text-gray-900' : 'text-gray-400'}`}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        role="listbox"
        className={`absolute left-0 right-0 z-30 mt-2 origin-top rounded-xl border border-gray-200 bg-white shadow-xl shadow-black/5 overflow-hidden py-1.5 transition-all duration-200 ${
          open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
        }`}
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            role="option"
            aria-selected={value === opt.value}
            onClick={() => {
              onChange(opt.value);
              setOpen(false);
            }}
            className={`relative w-full flex items-center justify-center px-8 py-2.5 text-sm transition-colors duration-150 ${
              value === opt.value
                ? 'bg-cyan-50 text-cyan-600 font-medium'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span className="text-center">{opt.label}</span>
            {value === opt.value && (
              <svg className="absolute right-3 w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  // Detectar el plan desde la URL
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planName = params.get('plan');
    const planPrice = params.get('price');
    if (planName && planPrice) {
      setSelectedPlan({ name: planName, price: planPrice });
    }
  }, []);

  // Estado del formulario
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_company: '',
    business_type: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // ── FUNCIONES DE LÍMITE DE ENVÍOS ──
  const getLimiteKey = () => 'biomey_contact_limite';

  const getLimiteData = () => {
    try {
      const stored = localStorage.getItem(getLimiteKey());
      if (stored) {
        const data = JSON.parse(stored);
        // Verificar si el formato es válido
        if (data && typeof data.conteo === 'number' && data.fechaInicio) {
          return data;
        }
      }
      return null;
    } catch {
      return null;
    }
  };

  const guardarLimiteData = (conteo: number) => {
    const data = {
      conteo: conteo,
      fechaInicio: new Date().toISOString(),
    };
    localStorage.setItem(getLimiteKey(), JSON.stringify(data));
  };

  const resetearLimite = () => {
    localStorage.removeItem(getLimiteKey());
  };

  const puedeEnviar = (): { permitido: boolean; mensaje?: string; tiempoRestante?: string } => {
    const limiteData = getLimiteData();

    // Si no hay datos guardados, permitir envío
    if (!limiteData) {
      return { permitido: true };
    }

    const ahora = new Date();
    const fechaInicio = new Date(limiteData.fechaInicio);
    const horasPasadas = (ahora.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60);

    // Si pasaron más de 24 horas, resetear y permitir
    if (horasPasadas >= LIMITE_CONFIG.PERIODO_HORAS) {
      resetearLimite();
      return { permitido: true };
    }

    // Si ya envió el máximo permitido
    if (limiteData.conteo >= LIMITE_CONFIG.MAX_ENVIOS) {
      const horasRestantes = Math.ceil(LIMITE_CONFIG.PERIODO_HORAS - horasPasadas);
      return {
        permitido: false,
        mensaje: `Has alcanzado el límite de ${LIMITE_CONFIG.MAX_ENVIOS} mensaje por día.`,
        tiempoRestante: `Puedes enviar otro mensaje en ${horasRestantes} horas.`,
      };
    }

    return { permitido: true };
  };

  // ── FIN FUNCIONES DE LÍMITE ──

  // Descripción de cada plan
  const planDescriptions: Record<string, string> = {
    'Landing Page': '✅ Página de una sola vista perfecta para campañas\n✅ Diseño profesional y moderno\n✅ Adaptable a todos los dispositivos\n✅ Botón directo a WhatsApp\n✅ Formulario de contacto\n✅ SEO básico\n✅ Entrega en 5 días\n✅ 1 ronda de cambios',
    'Página Web para Negocios': '✅ Hasta 6 páginas o secciones\n✅ Diseño totalmente personalizado\n✅ Dominio .com por 1 año\n✅ Hosting por 1 año\n✅ Correos empresariales\n✅ Google Maps integrado\n✅ SEO básico\n✅ Capacitación básica',
    'Página Web Profesional': '✅ Hasta 15 páginas o secciones\n✅ Blog administrable\n✅ Portafolio de proyectos\n✅ SEO avanzado\n✅ Google Analytics y Search Console\n✅ WhatsApp flotante\n✅ Panel básico CMS\n✅ 30 días de soporte',
    'Página Web Empresarial': '✅ Páginas o secciones ilimitadas\n✅ Panel administrativo CMS completo\n✅ Catálogo de productos\n✅ Blog y noticias administrables\n✅ Sistema de cotizaciones\n✅ Agenda de citas\n✅ Integración con CRM\n✅ 60 días de soporte',
  };

  // Información sobre el plan para mostrar en el formulario
  const getPlanInfo = () => {
    if (!selectedPlan) return null;
    const description = planDescriptions[selectedPlan.name] || 'Consulta nuestro paquete para más detalles.';
    return {
      name: selectedPlan.name,
      price: selectedPlan.price,
      description: description,
    };
  };
  const planInfo = getPlanInfo();

  // Manejar cambios en los inputs de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar cambios en los CustomSelect
  const handleSelectChange = (field: 'business_type' | 'service') => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ── VERIFICAR LÍMITE DE ENVÍOS ──
    const limite = puedeEnviar();
    if (!limite.permitido) {
      setSubmitStatus({
        success: false,
        message: `${limite.mensaje} ${limite.tiempoRestante || ''}`,
      });
      return;
    }
    // ── FIN VERIFICACIÓN ──

    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.user_name,
          from_email: formData.user_email,
          user_phone: formData.user_phone,
          user_company: formData.user_company,
          business_type: formData.business_type,
          service: formData.service,
          message: `
📋 **Datos del cliente**
Nombre: ${formData.user_name}
Correo: ${formData.user_email}
Teléfono: ${formData.user_phone}
Empresa: ${formData.user_company}
Tipo de negocio: ${formData.business_type}

📌 **Servicio seleccionado:** ${formData.service}
${planInfo ? `

💼 **Plan seleccionado:** ${planInfo.name}
💰 **Precio:** $${planInfo.price} MXN
📝 **Descripción del plan:**
${planInfo.description}
` : ''}

📝 **Mensaje del cliente:**
${formData.message}
          `.trim(),
        }
      );
      if (result.text === 'OK') {
        // ── GUARDAR LÍMITE DE ENVÍO ──
        const limiteData = getLimiteData();
        if (limiteData) {
          guardarLimiteData(limiteData.conteo + 1);
        } else {
          guardarLimiteData(1);
        }
        // ── FIN GUARDAR LÍMITE ──

        setSubmitStatus({
          success: true,
          message: `¡Mensaje enviado con éxito! ${
            planInfo ? `Te contactaremos pronto para hablar sobre el plan "${planInfo.name}".` : 'Te contactaremos pronto.'
          }`,
        });
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          user_company: '',
          business_type: '',
          service: '',
          message: '',
        });
        formRef.current?.reset();
        setSelectedPlan(null);
        window.history.replaceState({}, '', window.location.pathname);
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
      value: '+52 81 4438 4806'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Correo',
      value: 'a20624646@gmail.com'
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
      value: 'Lunes a Domingo 9:00 AM - 10:00 PM'
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: '+52 81 4438 4806'
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

  const businessTypes = [
    'Restaurante',
    'Tienda / E-commerce',
    'Clínica / Consultorio',
    'Otro'
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="contacto">
      {/* Glow de fondo - Cian suave */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-medium text-cyan-600 tracking-wider uppercase">
              Contacto
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Hablemos de tu <span className="text-cyan-500">proyecto</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            {planInfo
              ? `Estás interesado en el plan "${planInfo.name}". Cuéntanos más sobre tu proyecto.`
              : 'Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad.'
            }
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Plan seleccionado */}
        {planInfo && (
          <div
            className="mb-8 p-6 rounded-2xl bg-cyan-50 border border-cyan-200"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  📌 Plan seleccionado: <span className="text-cyan-600">{planInfo.name}</span>
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Precio: <span className="text-gray-900 font-semibold">${planInfo.price} MXN</span>
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-100 text-cyan-700 border border-cyan-200">
                  Plan elegido
                </span>
                <button
                  onClick={() => {
                    setSelectedPlan(null);
                    window.history.replaceState({}, '', window.location.pathname);
                  }}
                  className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-500 hover:text-gray-700 hover:bg-gray-200 border border-gray-200 transition-all duration-300"
                >
                  Cambiar plan
                </button>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-white border border-gray-200">
              <p className="text-gray-600 text-sm whitespace-pre-wrap">
                {planInfo.description}
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Columna Izquierda - Información de contacto */}
          <div
            className="lg:col-span-2 space-y-4"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Información de contacto
            </h3>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-cyan-300 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
                data-aos-duration="500"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-500 group-hover:text-cyan-600 transition-colors duration-300 flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-gray-900 text-sm md:text-base font-medium">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna Derecha - Formulario */}
          <div
            className="lg:col-span-3"
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Envíanos un mensaje
              </h3>

              {submitStatus && (
                <div className={`mb-4 p-4 rounded-xl ${
                  submitStatus.success
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-sm mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-1.5">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-500 text-sm mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      placeholder="961 123 4567"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-sm mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="user_company"
                      value={formData.user_company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CustomSelect
                    label="Tipo de negocio"
                    placeholder="¿A qué se dedica tu negocio?"
                    value={formData.business_type}
                    onChange={handleSelectChange('business_type')}
                    disabled={isSubmitting}
                    options={businessTypes.map((type) => ({ value: type, label: type }))}
                  />
                  <CustomSelect
                    label="Servicio de interés"
                    placeholder="Selecciona un servicio"
                    value={formData.service}
                    onChange={handleSelectChange('service')}
                    disabled={isSubmitting}
                    options={services.map((service) => ({ value: service, label: service }))}
                  />
                </div>

                <div>
                  <label className="block text-gray-500 text-sm mb-1.5">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={planInfo
                      ? `Me interesa el plan "${planInfo.name}" y me gustaría saber más sobre...`
                      : 'Describe tu proyecto, ideas o necesidades...'
                    }
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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

                {/* Indicador de límite */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-4">
                  <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Límite de {LIMITE_CONFIG.MAX_ENVIOS} mensaje cada {LIMITE_CONFIG.PERIODO_HORAS} horas</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;