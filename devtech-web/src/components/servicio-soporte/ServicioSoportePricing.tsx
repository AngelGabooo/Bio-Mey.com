import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ── TUS CREDENCIALES DE EMAILJS ──
const EMAILJS_CONFIG = {
  PUBLIC_KEY: '9o1-iq4oNrAxy0XDo',
  SERVICE_ID: 'service_nmcqlce',
  TEMPLATE_ID: 'template_kd0vifi',
};

type CustomSelectProps = {
  name: string;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (name: string, value: string) => void;
};

const CustomSelect = ({ name, label, icon, placeholder, options, value, onChange }: CustomSelectProps) => {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectOption = (opt: string) => {
    onChange(name, opt);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else if (highlighted >= 0) {
        selectOption(options[highlighted]);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!open) {
        setOpen(true);
      } else {
        setHighlighted((prev) => Math.min(prev + 1, options.length - 1));
      }
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (open) setHighlighted((prev) => Math.max(prev - 1, 0));
      return;
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <label className="flex items-center gap-1.5 text-gray-500 text-sm mb-1.5">
        {icon}
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-gray-50 border text-left transition-colors duration-300 focus:outline-none ${
          open ? 'border-cyan-400 ring-1 ring-cyan-400/30' : 'border-gray-200 hover:border-cyan-300'
        }`}
      >
        <span className={`truncate text-sm ${value ? 'text-gray-900' : 'text-gray-400'}`}>
          {value || placeholder}
        </span>
        <svg
          className={`w-4 h-4 shrink-0 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute z-30 mt-2 w-full origin-top rounded-xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden transition-all duration-200 ${
          open ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
        }`}
      >
        <ul role="listbox" className="max-h-64 overflow-y-auto py-1.5 custom-scrollbar">
          {options.map((opt, i) => {
            const isSelected = value === opt;
            const isHighlighted = highlighted === i;
            return (
              <li key={opt} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => selectOption(opt)}
                  onMouseEnter={() => setHighlighted(i)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                    isSelected
                      ? 'bg-cyan-50 text-cyan-700 font-medium'
                      : isHighlighted
                      ? 'bg-gray-50 text-gray-900'
                      : 'text-gray-600'
                  }`}
                >
                  <span className="truncate">{opt}</span>
                  {isSelected && (
                    <svg className="w-4 h-4 text-cyan-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 999px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
      `}</style>
    </div>
  );
};

const ServicioSoportePricing = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    equipo: '',
    servicio: '',
    mensaje: '',
  });

  // Estados para validación de campos
  const [nombreError, setNombreError] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  
  // Control de envío por usuario
  const [hasSentMessage, setHasSentMessage] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Función para validar nombre (solo letras y espacios)
  const validateNombre = (value: string): boolean => {
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return nombreRegex.test(value);
  };

  // Función para validar teléfono (solo números y guiones)
  const validateTelefono = (value: string): boolean => {
    const telefonoRegex = /^[0-9\-+]*$/;
    return telefonoRegex.test(value);
  };

  // Función para limpiar el teléfono (eliminar guiones y espacios)
  const cleanTelefono = (value: string): string => {
    return value.replace(/[^0-9+]/g, '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Validación en tiempo real para nombre
    if (name === 'nombre') {
      if (value && !validateNombre(value)) {
        setNombreError('El nombre solo puede contener letras y espacios');
      } else {
        setNombreError('');
      }
      // Eliminar caracteres no permitidos en tiempo real
      const cleanValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
      setForm({
        ...form,
        [name]: cleanValue,
      });
      return;
    }

    // Validación en tiempo real para teléfono
    if (name === 'telefono') {
      if (value && !validateTelefono(value)) {
        setTelefonoError('El teléfono solo puede contener números y guiones');
      } else {
        setTelefonoError('');
      }
      setForm({
        ...form,
        [name]: value,
      });
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verificar si el usuario ya envió un mensaje
    if (hasSentMessage) {
      setSubmitStatus({
        success: false,
        message: 'Ya has enviado un mensaje. Espera nuestra respuesta.',
      });
      return;
    }

    // Validaciones finales antes de enviar
    if (!validateNombre(form.nombre)) {
      setNombreError('El nombre solo puede contener letras y espacios');
      return;
    }

    if (form.telefono && !validateTelefono(form.telefono)) {
      setTelefonoError('El teléfono solo puede contener números y guiones');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Limpiar el teléfono antes de enviar
      const telefonoLimpio = cleanTelefono(form.telefono);
      
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.nombre,
          from_email: form.correo,
          user_phone: telefonoLimpio || 'No proporcionado',
          device_type: form.equipo || 'No especificado',
          service: form.servicio || 'No especificado',
          message: `
📋 **Datos del cliente**
Nombre: ${form.nombre}
Correo: ${form.correo}
Teléfono: ${telefonoLimpio || 'No proporcionado'}

💻 **Tipo de equipo:** ${form.equipo || 'No especificado'}
🔧 **Servicio de interés:** ${form.servicio || 'No especificado'}

📝 **Descripción del problema:**
${form.mensaje}
          `.trim(),
        }
      );

      if (result.text === 'OK') {
        setSubmitStatus({
          success: true,
          message: '¡Mensaje enviado con éxito! Te contactaremos pronto para agendar tu servicio de soporte.',
        });
        setHasSentMessage(true); // Marcar que el usuario ya envió un mensaje
        setForm({
          nombre: '',
          correo: '',
          telefono: '',
          equipo: '',
          servicio: '',
          mensaje: '',
        });
        setNombreError('');
        setTelefonoError('');
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

  const factores = [
    {
      title: 'Tipo de problema',
      description: 'Software, hardware, red o configuración.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Complejidad de la falla',
      description: 'Diagnóstico simple o reparación avanzada.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Tipo de soporte',
      description: 'Remoto o presencial en tu ubicación.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Tiempo de atención',
      description: 'Servicio estándar o atención prioritaria.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Equipo y herramientas',
      description: 'Software especializado o herramientas específicas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Garantía del servicio',
      description: 'Respaldo y seguimiento post-servicio.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const badges = [
    {
      title: 'Diagnóstico completo',
      description: 'Revisamos tu equipo antes de darte un presupuesto.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.2-5.2m1.7-4.8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
        </svg>
      ),
    },
    {
      title: 'Soporte remoto seguro',
      description: 'Conexión rápida y protegida para resolver problemas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Técnicos capacitados',
      description: 'Personal experimentado en todo tipo de fallas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Soporte post-servicio',
      description: 'Te acompañamos después de la reparación.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3zm18 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z" />
        </svg>
      ),
    },
  ];

  const servicios = [
    'Diagnóstico de fallas',
    'Soporte de software',
    'Eliminación de virus',
    'Optimización del sistema',
    'Redes e internet',
    'Respaldo de información',
    'Asesoría técnica',
    'Instalación de equipos',
  ];

  const equipos = [
    'Desktop / PC de Escritorio',
    'Laptop / Notebook',
    'All-in-One',
    'Mac',
    'Servidor',
    'Dispositivo móvil',
    'Otro',
  ];

  const puntosFinales = [
    {
      title: 'Respuesta en menos de 24 horas',
      description: 'Te contactamos rápidamente.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Diagnóstico sin costo',
      description: 'Revisamos tu equipo antes de cobrar.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      title: 'Sin compromiso',
      description: 'Cotización sin costo ni obligación.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: 'Confidencialidad total',
      description: 'Tu información y datos están seguros.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.86 8.25-8.625 8.25S3.75 16.556 3.75 12 7.61 3.75 12.375 3.75 21 7.444 21 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-10 md:py-16 bg-white overflow-hidden" id="precios">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        {/* Encabezado */}
        <div
          className={`text-center mb-8 md:mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cyan-300 mb-5">
            <svg className="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-medium text-cyan-600 tracking-wide">Precios personalizados</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Soporte técnico{' '}
            <span className="text-cyan-500">a tu medida</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Cada problema es diferente, por eso diagnosticamos tu equipo antes de darte un precio, según tus necesidades y objetivos.
          </p>
        </div>

        {/* Badges superiores */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-10 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-200"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-cyan-500">
                {badge.icon}
              </span>
              <div>
                <p className="text-gray-900 font-semibold text-sm leading-tight">{badge.title}</p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dos columnas */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Columna izquierda */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">¿Qué influye en el costo</h3>
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              <span className="text-cyan-500">del soporte técnico?</span>
            </h3>

            <ul className="divide-y divide-gray-100">
              {factores.map((factor, i) => (
                <li key={i} className="flex items-start gap-3 py-3.5 first:pt-0">
                  <span className="shrink-0 w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-cyan-500">
                    {factor.icon}
                  </span>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{factor.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{factor.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-cyan-300 bg-cyan-50">
              <span className="shrink-0 w-9 h-9 rounded-full border border-cyan-300 flex items-center justify-center text-cyan-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.5m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <p className="text-gray-900 font-semibold text-sm">No te preocupes si aún no sabes qué tiene tu equipo</p>
                <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                  Nosotros lo diagnosticamos y te explicamos las opciones antes de cobrar cualquier cosa.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-cyan-100/40 to-cyan-200/20 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="flex items-start justify-between gap-3 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                  Cuéntanos tu problema y te enviamos{' '}
                  <span className="text-cyan-500">un diagnóstico</span>
                </h3>
                <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border border-cyan-300 items-center justify-center text-cyan-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </span>
              </div>

              {submitStatus && (
                <div className={`mb-4 p-4 rounded-xl ${
                  submitStatus.success
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              {hasSentMessage && (
                <div className="mb-4 p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-700">
                  Ya has enviado un mensaje. Nuestro equipo te contactará pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-gray-500 text-sm mb-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      nombreError ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-cyan-400'
                    } text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors duration-300`}
                  />
                  {nombreError && (
                    <p className="mt-1 text-xs text-red-500">{nombreError}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-gray-500 text-sm mb-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-gray-500 text-sm mb-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    WhatsApp / Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="961 123 4567"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border ${
                      telefonoError ? 'border-red-300 focus:border-red-400' : 'border-gray-200 focus:border-cyan-400'
                    } text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors duration-300`}
                  />
                  {telefonoError && (
                    <p className="mt-1 text-xs text-red-500">{telefonoError}</p>
                  )}
                </div>

                <CustomSelect
                  name="equipo"
                  label="Tipo de equipo"
                  icon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  placeholder="¿Qué equipo tienes?"
                  options={equipos}
                  value={form.equipo}
                  onChange={handleSelectChange}
                />

                <div className="sm:col-span-2">
                  <CustomSelect
                    name="servicio"
                    label="Servicio de interés"
                    icon={
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    }
                    placeholder="Selecciona un servicio"
                    options={servicios}
                    value={form.servicio}
                    onChange={handleSelectChange}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-center gap-1.5 text-gray-500 text-sm mb-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Cuéntanos tu problema *
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe la falla, qué equipo es, cuándo comenzó, etc."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || hasSentMessage}
                    className={`w-full px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
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
                        {hasSentMessage ? 'Mensaje ya enviado' : 'Solicitar diagnóstico'}
                        {!hasSentMessage && (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="flex items-center justify-center gap-1.5 text-gray-400 text-[11px] mt-4">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Tu información está 100% protegida. No compartimos tus datos.
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div
          className={`mt-10 md:mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-5 md:p-6 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {puntosFinales.map((punto, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-cyan-500">
                  {punto.icon}
                </span>
                <div>
                  <p className="text-gray-900 font-semibold text-sm leading-tight">{punto.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{punto.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          className={`flex items-center justify-center gap-2 text-gray-500 text-sm mt-8 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
          </svg>
          Resolvemos tus problemas técnicos para que tu trabajo nunca se detenga.
        </p>
      </div>
    </section>
  );
};

export default ServicioSoportePricing;