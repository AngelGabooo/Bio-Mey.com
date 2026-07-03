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
      <label className="flex items-center gap-1.5 text-blue-200/60 text-sm mb-1.5">
        {icon}
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-white/5 border text-left transition-colors duration-300 focus:outline-none ${
          open ? 'border-blue-400/60 ring-1 ring-blue-400/30' : 'border-white/10 hover:border-white/20'
        }`}
      >
        <span className={`truncate text-sm ${value ? 'text-white' : 'text-blue-200/30'}`}>
          {value || placeholder}
        </span>
        <svg
          className={`w-4 h-4 shrink-0 text-blue-300 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute z-30 mt-2 w-full origin-top rounded-xl border border-white/10 bg-[#0d0d18]/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden transition-all duration-200 ${
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
                      ? 'bg-gradient-to-r from-blue-600/25 to-purple-600/25 text-white'
                      : isHighlighted
                      ? 'bg-white/5 text-white'
                      : 'text-blue-100/70'
                  }`}
                >
                  <span className="truncate">{opt}</span>
                  {isSelected && (
                    <svg className="w-4 h-4 text-blue-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 999px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </div>
  );
};

const ServicioMantenimientoPricing = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: form.nombre,
          from_email: form.correo,
          user_phone: form.telefono || 'No proporcionado',
          device_type: form.equipo || 'No especificado',
          service: form.servicio || 'No especificado',
          message: `
📋 **Datos del cliente**
Nombre: ${form.nombre}
Correo: ${form.correo}
Teléfono: ${form.telefono || 'No proporcionado'}

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
          message: '¡Mensaje enviado con éxito! Te contactaremos pronto para agendar tu diagnóstico.',
        });
        setForm({
          nombre: '',
          correo: '',
          telefono: '',
          equipo: '',
          servicio: '',
          mensaje: '',
        });
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

  // Qué influye en el precio de un mantenimiento
  const factores = [
    {
      title: 'Tipo de equipo',
      description: 'Desktop, laptop, all-in-one o servidor.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Tipo de falla',
      description: 'Problemas de software, hardware o ambos.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Repuestos necesarios',
      description: 'Piezas originales, compatibles o especializadas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v.5a1 1 0 001 1h2.5a1 1 0 011 1V9a1 1 0 01-1 1H18a2 2 0 100 4h.5a1 1 0 011 1v2.5a1 1 0 01-1 1H16a1 1 0 00-1 1v.5a2 2 0 11-4 0V19a1 1 0 00-1-1H7.5a1 1 0 01-1-1V15a1 1 0 011-1H8a2 2 0 100-4h-.5a1 1 0 01-1-1V6.5a1 1 0 011-1H10a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      title: 'Diagnóstico y complejidad',
      description: 'Tiempo y dificultad para identificar el problema.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.2-5.2m1.7-4.8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
        </svg>
      ),
    },
    {
      title: 'Urgencia del servicio',
      description: 'Atención estándar o prioritaria.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Tiempo estimado',
      description: 'Duración del servicio según la falla.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  // Badges superiores
  const badges = [
    {
      title: 'Diagnóstico personalizado',
      description: 'Revisamos tu equipo a fondo antes de darte cualquier presupuesto.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.2-5.2m1.7-4.8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
        </svg>
      ),
    },
    {
      title: 'Repuestos de calidad',
      description: 'Usamos refacciones originales o compatibles certificadas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
        </svg>
      ),
    },
    {
      title: 'Servicio seguro y confiable',
      description: 'Cuidamos tu equipo y tu información en cada paso.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.86 8.25-8.625 8.25S3.75 16.556 3.75 12 7.61 3.75 12.375 3.75 21 7.444 21 12z" />
        </svg>
      ),
    },
    {
      title: 'Soporte post-servicio',
      description: 'Te acompañamos después de la reparación para resolver dudas.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3zm18 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z" />
        </svg>
      ),
    },
  ];

  const servicios = [
    'Mantenimiento Preventivo',
    'Mantenimiento Correctivo',
    'Diagnóstico',
    'Instalación de Sistemas Operativos',
    'Instalación de Programas',
    'Paquetería Office',
    'Antivirus y Seguridad',
    'Recuperación de Datos',
    'Actualizaciones',
  ];

  const equipos = [
    'Desktop / PC de Escritorio',
    'Laptop / Notebook',
    'All-in-One',
    'Mac',
    'Servidor',
    'No estoy seguro',
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
      description: 'Tu equipo y tus datos están seguros con nosotros.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.86 8.25-8.625 8.25S3.75 16.556 3.75 12 7.61 3.75 12.375 3.75 21 7.444 21 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-10 md:py-16 bg-[#0a0a14] overflow-hidden" id="paquetes">
      {/* Glow de fondo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        {/* Encabezado */}
        <div
          className={`text-center mb-8 md:mb-10 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] backdrop-blur-sm border border-blue-400/20 mb-5">
            <svg className="w-3.5 h-3.5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs font-medium text-blue-300 tracking-wide">Precios personalizados</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Mantenimiento de equipos{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              a la medida
            </span>
          </h2>
          <p className="text-blue-200/50 text-sm md:text-base max-w-2xl mx-auto">
            Cada falla es diferente, por eso diagnosticamos tu equipo antes de darte un precio, según tus necesidades y objetivos.
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
              className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-300">
                {badge.icon}
              </span>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{badge.title}</p>
                <p className="text-blue-200/50 text-xs mt-1 leading-relaxed">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dos columnas: factores de precio + formulario */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Columna izquierda: qué influye en el precio */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">¿Qué influye en el precio</h3>
            <h3 className="text-xl md:text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                de un mantenimiento?
              </span>
            </h3>

            <ul className="divide-y divide-white/[0.06]">
              {factores.map((factor, i) => (
                <li key={i} className="flex items-start gap-3 py-3.5 first:pt-0">
                  <span className="shrink-0 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-300">
                    {factor.icon}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{factor.title}</p>
                    <p className="text-blue-200/50 text-sm mt-0.5">{factor.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl border border-purple-400/20 bg-purple-600/5">
              <span className="shrink-0 w-9 h-9 rounded-full border border-purple-400/40 flex items-center justify-center text-purple-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.5m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <p className="text-white font-semibold text-sm">No te preocupes si aún no sabes qué tiene tu equipo</p>
                <p className="text-blue-200/60 text-xs mt-1 leading-relaxed">
                  Nosotros lo diagnosticamos y te explicamos las opciones antes de cobrar cualquier cosa.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: formulario */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-8">
            <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-blue-600/15 to-purple-600/15 rounded-full blur-3xl"></div>

            <div className="relative">
              <div className="flex items-start justify-between gap-3 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  Cuéntanos tu problema y te enviamos{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    un diagnóstico
                  </span>
                </h3>
                <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border border-purple-400/40 items-center justify-center text-purple-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </span>
              </div>

              {submitStatus && (
                <div className={`mb-4 p-4 rounded-xl ${
                  submitStatus.success
                    ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                    : 'bg-red-500/20 border border-red-500/30 text-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1.5 text-blue-200/60 text-sm mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-blue-200/60 text-sm mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1.5 text-blue-200/60 text-sm mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300"
                  />
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
                  <label className="flex items-center gap-1.5 text-blue-200/60 text-sm mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="sm:col-span-2">
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
                        Solicitar diagnóstico
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="flex items-center justify-center gap-1.5 text-blue-200/35 text-[11px] mt-4">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Tu información está 100% protegida. No compartimos tus datos.
              </p>
            </div>
          </div>
        </div>

        {/* Barra inferior de puntos de confianza */}
        <div
          className={`mt-10 md:mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {puntosFinales.map((punto, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-300">
                  {punto.icon}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{punto.title}</p>
                  <p className="text-blue-200/50 text-xs mt-1">{punto.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cierre */}
        <p
          className={`flex items-center justify-center gap-2 text-blue-200/60 text-sm mt-8 transition-all duration-700 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.368-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
          </svg>
          Cuidamos tus equipos para que tu trabajo nunca se detenga.
        </p>
      </div>
    </section>
  );
};

export default ServicioMantenimientoPricing;