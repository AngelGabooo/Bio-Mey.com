import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

/**
 * ─────────────────────────────────────────────────────────────
 * CONFIGURA AQUÍ TUS CLAVES DE EMAILJS
 * ─────────────────────────────────────────────────────────────
 */
const EMAILJS_SERVICE_ID = 'service_nmcqlce';
const EMAILJS_TEMPLATE_ID = 'template_kd0vifi';
const EMAILJS_PUBLIC_KEY = '9o1-iq4oNrAxy0XDo';

// ── CONFIGURACIÓN DE LÍMITE DE ENVÍOS ──
const LIMITE_CONFIG = {
  MAX_ENVIOS: 1, // 1 envío por usuario
  PERIODO_HORAS: 24, // cada 24 horas
};

/**
 * Dropdown personalizado - Versión clara
 */
const CustomSelect = ({ icon, label, placeholder, value, options, onChange, disabled }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full flex items-center gap-3 p-3.5 rounded-xl border bg-white transition-colors duration-300 text-left disabled:opacity-50 disabled:cursor-not-allowed ${
          open ? 'border-cyan-400' : 'border-gray-200 hover:border-cyan-300'
        }`}
      >
        <span className="flex-shrink-0 w-4 h-4 text-cyan-500">{icon}</span>
        <span className="flex-1 min-w-0">
          <span className="block text-gray-700 text-[13px] font-semibold mb-0.5">{label}</span>
          <span className={`block text-sm truncate ${selected ? 'text-gray-900' : 'text-gray-400'}`}>
            {selected ? selected.label : placeholder}
          </span>
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
            key={opt.value || 'placeholder'}
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

// Opciones reutilizadas
const NEGOCIO_OPTIONS = [
  { value: 'restaurante', label: 'Restaurante' },
  { value: 'tienda', label: 'Tienda / E-commerce' },
  { value: 'clinica', label: 'Clínica / Consultorio' },
  { value: 'otro', label: 'Otro' },
];

const APP_OPTIONS = [
  { value: 'nativa', label: 'Nativa (Android / iOS)' },
  { value: 'hibrida', label: 'Híbrida' },
  { value: 'web', label: 'Aplicación web' },
];

// ── FUNCIONES DE LÍMITE DE ENVÍOS ──
const getLimiteKey = () => 'biomey_apps_cotizacion_limite';

const getLimiteData = () => {
  try {
    const stored = localStorage.getItem(getLimiteKey());
    if (stored) {
      const data = JSON.parse(stored);
      if (data && typeof data.conteo === 'number' && data.fechaInicio) {
        return data;
      }
    }
    return null;
  } catch {
    return null;
  }
};

const guardarLimiteData = (conteo) => {
  const data = {
    conteo: conteo,
    fechaInicio: new Date().toISOString(),
  };
  localStorage.setItem(getLimiteKey(), JSON.stringify(data));
};

const resetearLimite = () => {
  localStorage.removeItem(getLimiteKey());
};

const puedeEnviar = () => {
  const limiteData = getLimiteData();

  if (!limiteData) {
    return { permitido: true };
  }

  const ahora = new Date();
  const fechaInicio = new Date(limiteData.fechaInicio);
  const horasPasadas = (ahora.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60);

  if (horasPasadas >= LIMITE_CONFIG.PERIODO_HORAS) {
    resetearLimite();
    return { permitido: true };
  }

  if (limiteData.conteo >= LIMITE_CONFIG.MAX_ENVIOS) {
    const horasRestantes = Math.ceil(LIMITE_CONFIG.PERIODO_HORAS - horasPasadas);
    return {
      permitido: false,
      mensaje: `Has alcanzado el límite de ${LIMITE_CONFIG.MAX_ENVIOS} cotización por día.`,
      tiempoRestante: `Puedes enviar otra en ${horasRestantes} horas.`,
    };
  }

  return { permitido: true };
};

// ── VALIDACIONES ──
const soloLetras = (texto) => {
  return /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(texto);
};

const soloNumeros = (texto) => {
  return /^[0-9+\s\-()]*$/.test(texto);
};

const ServicioAppsPricing = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    tipoNegocio: '',
    tipoApp: '',
    idea: '',
  });
  const [status, setStatus] = useState('idle');
  const [errores, setErrores] = useState({ general: '' });

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

  const handleChange = (field) => (e) => {
    const valor = e.target.value;
    
    // Validación en tiempo real para nombre (solo letras)
    if (field === 'nombre') {
      if (valor === '' || soloLetras(valor)) {
        setForm((prev) => ({ ...prev, [field]: valor }));
        setErrores((prev) => ({ ...prev, nombre: '' }));
      } else {
        setErrores((prev) => ({ ...prev, nombre: 'Solo se permiten letras y espacios' }));
      }
      return;
    }

    // Validación en tiempo real para teléfono (solo números)
    if (field === 'telefono') {
      if (valor === '' || soloNumeros(valor)) {
        setForm((prev) => ({ ...prev, [field]: valor }));
        setErrores((prev) => ({ ...prev, telefono: '' }));
      } else {
        setErrores((prev) => ({ ...prev, telefono: 'Solo se permiten números' }));
      }
      return;
    }

    setForm((prev) => ({ ...prev, [field]: valor }));
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validar nombre (solo letras)
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido';
    } else if (!soloLetras(form.nombre)) {
      nuevosErrores.nombre = 'Solo se permiten letras y espacios';
    } else if (form.nombre.length < 2) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar correo
    if (!form.correo) {
      nuevosErrores.correo = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(form.correo)) {
      nuevosErrores.correo = 'Correo electrónico no válido';
    }

    // Validar teléfono (solo números)
    if (form.telefono && !soloNumeros(form.telefono)) {
      nuevosErrores.telefono = 'Solo se permiten números';
    } else if (form.telefono && form.telefono.replace(/\D/g, '').length < 10) {
      nuevosErrores.telefono = 'El teléfono debe tener al menos 10 dígitos';
    }

    // Validar idea
    if (!form.idea.trim()) {
      nuevosErrores.idea = 'Por favor, describe tu idea';
    } else if (form.idea.length < 10) {
      nuevosErrores.idea = 'La descripción debe tener al menos 10 caracteres';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Verificar límite de envíos
    const limite = puedeEnviar();
    if (!limite.permitido) {
      setStatus('error');
      setErrores((prev) => ({
        ...prev,
        general: `${limite.mensaje} ${limite.tiempoRestante || ''}`,
      }));
      return;
    }

    // 2. Validar formulario
    if (!validarFormulario()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrores({});

    const negocioLabel = NEGOCIO_OPTIONS.find((o) => o.value === form.tipoNegocio)?.label;
    const appLabel = APP_OPTIONS.find((o) => o.value === form.tipoApp)?.label;

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nombre,
          from_email: form.correo,
          user_phone: form.telefono || 'No proporcionado',
          user_company: negocioLabel || 'No especificado',
          service: appLabel || 'No especificado',
          message: form.idea || 'Sin mensaje adicional',
          sent_at: new Date().toLocaleString('es-MX', {
            timeZone: 'America/Mexico_City',
            dateStyle: 'short',
            timeStyle: 'short',
          }),
        },
        EMAILJS_PUBLIC_KEY
      );

      // Guardar límite de envío
      const limiteData = getLimiteData();
      if (limiteData) {
        guardarLimiteData(limiteData.conteo + 1);
      } else {
        guardarLimiteData(1);
      }

      setStatus('success');
      setForm({ nombre: '', correo: '', telefono: '', tipoNegocio: '', tipoApp: '', idea: '' });
    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setStatus('error');
      setErrores((prev) => ({
        ...prev,
        general: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
      }));
    }
  };

  const features = [
    {
      title: 'Desarrollo 100% personalizado',
      description: 'Creamos tu aplicación según los requerimientos de tu negocio.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3v18h18M8 17V10m4 7V7m4 10v-4" />
        </svg>
      ),
    },
    {
      title: 'Escalable y flexible',
      description: 'Tu aplicación puede crecer y adaptarse a medida que tu negocio crece.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: 'Segura y confiable',
      description: 'Utilizamos las mejores prácticas para proteger tu información y la de tus clientes.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Soporte y mantenimiento',
      description: 'Te acompañamos después del lanzamiento para asegurar el mejor rendimiento.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a1 1 0 001-1v-4a1 1 0 00-1-1H3m18 0a2 2 0 01-2 2h-1a1 1 0 01-1-1v-4a1 1 0 011-1h3" />
        </svg>
      ),
    },
  ];

  const factors = [
    { title: 'Tipo de aplicación', desc: 'Nativa, híbrida o web.', icon: 'phone' },
    { title: 'Funciones y características', desc: 'Cantidad de módulos, integraciones y funcionalidades.', icon: 'grid' },
    { title: 'Diseño y experiencia de usuario (UI/UX)', desc: 'Un buen diseño mejora la experiencia y los resultados.', icon: 'pencil' },
    { title: 'Plataformas', desc: 'Android, iOS o ambas plataformas.', icon: 'layers' },
    { title: 'Integraciones', desc: 'Pasarelas de pago, APIs, servicios de terceros, etc.', icon: 'link' },
    { title: 'Tiempo de desarrollo', desc: 'Complejidad del proyecto y tiempos estimados.', icon: 'clock' },
  ];

  const factorIcons = {
    phone: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    grid: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5h6v6H4V5zm10 0h6v6h-6V5zM4 15h6v6H4v-6zm10 0h6v6h-6v-6z" />
      </svg>
    ),
    pencil: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
    layers: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4m-16 4l8 4 8-4" />
      </svg>
    ),
    link: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13.5 10.5L21 3m0 0h-5.5M21 3v5.5M10.5 13.5L3 21m0 0h5.5M3 21v-5.5" />
      </svg>
    ),
    clock: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  const guarantees = [
    {
      title: 'Respuesta en menos de 24 horas',
      description: 'Te contactamos rápidamente.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Asesoría gratuita',
      description: 'Te ayudamos a definir tu proyecto.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Sin compromiso',
      description: 'Cotización sin costo ni compromiso.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Confidencialidad total',
      description: 'Tu idea está segura con nosotros.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const inputBase =
    'w-full bg-transparent border-none outline-none text-gray-900 text-sm placeholder:text-gray-400 p-0 disabled:opacity-50';

  const iconBoxBase =
    'flex-shrink-0 flex items-center justify-center rounded-xl border border-cyan-200 bg-white text-cyan-500 transition-all duration-300';

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 bg-white overflow-hidden" id="precios">
      {/* Glow de fondo - Cian suave */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-6xl mx-auto px-5">
        {/* Encabezado */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
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
            Precios de aplicaciones{' '}
            <span className="text-cyan-500">a la medida</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Cada negocio es diferente, por eso desarrollamos aplicaciones personalizadas según tus necesidades y objetivos.
          </p>
        </div>

        {/* Características */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8 transition-all duration-700 delay-100 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start gap-3 p-4 rounded-2xl border border-gray-200 bg-white hover:border-cyan-300 transition-all duration-300"
            >
              <div className={`${iconBoxBase} w-10 h-10 group-hover:border-cyan-400 group-hover:text-cyan-600`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-gray-900 text-[13px] font-semibold leading-snug mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-[11.5px] leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Columna izquierda */}
          <div
            className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 md:p-8 transition-all duration-700 delay-150 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="pointer-events-none absolute -top-10 -right-10 w-52 h-52 bg-gradient-to-br from-cyan-100/40 to-cyan-200/20 rounded-full blur-3xl"></div>
            <h3 className="relative text-xl md:text-2xl font-bold text-gray-900 leading-snug mb-6">
              ¿Qué influye en el precio{' '}
              <span className="block text-cyan-500">de una aplicación?</span>
            </h3>
            <div className="relative flex flex-col">
              {factors.map((factor, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3.5 py-3.5 ${
                    index !== factors.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className={`${iconBoxBase} w-9 h-9 text-cyan-500`}>
                    {factorIcons[factor.icon]}
                  </div>
                  <div>
                    <h4 className="text-gray-900 text-[13.5px] font-semibold">{factor.title}</h4>
                    <p className="text-gray-500 text-[12px]">{factor.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative flex items-start gap-3.5 mt-5 p-4 rounded-xl border border-cyan-300 bg-cyan-50">
              <div className={`${iconBoxBase} w-10 h-10 border-cyan-300 text-cyan-500`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-gray-900 text-[13.5px] font-semibold mb-0.5">
                  No te preocupes si aún no tienes todo claro
                </h4>
                <p className="text-gray-500 text-[12px] leading-relaxed">
                  Te ayudamos a definir tu proyecto y las mejores soluciones para tu negocio.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario con validaciones */}
          <div
            className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 md:p-8 transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}
          >
            <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-cyan-100/40 to-cyan-200/20 rounded-full blur-3xl"></div>
            <div className="relative flex items-start justify-between gap-4 mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                Cuéntanos tu idea y te enviamos una{' '}
                <span className="text-cyan-500">cotización personalizada</span>
              </h3>
              <svg
                className="hidden sm:block flex-shrink-0 w-14 h-14 text-cyan-400/70"
                viewBox="0 0 64 64"
                fill="none"
              >
                <path
                  d="M10 14a6 6 0 016-6h28a6 6 0 016 6v18a6 6 0 01-6 6H24l-8 8v-8h-0a6 6 0 01-6-6V14z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="21" cy="22" r="1.8" fill="currentColor" />
                <circle cx="30" cy="22" r="1.8" fill="currentColor" />
                <circle cx="39" cy="22" r="1.8" fill="currentColor" />
              </svg>
            </div>

            {/* Mensaje de error general (límite de envíos) */}
            {errores.general && (
              <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                {errores.general}
              </div>
            )}

            <form onSubmit={handleSubmit} className="relative flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus-within:border-cyan-400 transition-colors duration-300">
                    <svg className="w-4 h-4 mt-0.5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="flex-1">
                      <span className="block text-gray-700 text-[13px] font-semibold mb-0.5">Nombre completo *</span>
                      <input
                        type="text"
                        value={form.nombre}
                        onChange={handleChange('nombre')}
                        placeholder="Tu nombre (solo letras)"
                        disabled={status === 'sending'}
                        required
                        className={inputBase}
                      />
                    </span>
                  </label>
                  {errores.nombre && (
                    <p className="text-red-500 text-xs mt-1 ml-2">{errores.nombre}</p>
                  )}
                </div>
                <div>
                  <label className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus-within:border-cyan-400 transition-colors duration-300">
                    <svg className="w-4 h-4 mt-0.5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="flex-1">
                      <span className="block text-gray-700 text-[13px] font-semibold mb-0.5">Correo electrónico *</span>
                      <input
                        type="email"
                        value={form.correo}
                        onChange={handleChange('correo')}
                        placeholder="tu@correo.com"
                        disabled={status === 'sending'}
                        required
                        className={inputBase}
                      />
                    </span>
                  </label>
                  {errores.correo && (
                    <p className="text-red-500 text-xs mt-1 ml-2">{errores.correo}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus-within:border-cyan-400 transition-colors duration-300">
                    <svg className="w-4 h-4 mt-0.5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="flex-1">
                      <span className="block text-gray-700 text-[13px] font-semibold mb-0.5">WhatsApp / Teléfono</span>
                      <input
                        type="tel"
                        value={form.telefono}
                        onChange={handleChange('telefono')}
                        placeholder="961 123 4567 (solo números)"
                        disabled={status === 'sending'}
                        className={inputBase}
                      />
                    </span>
                  </label>
                  {errores.telefono && (
                    <p className="text-red-500 text-xs mt-1 ml-2">{errores.telefono}</p>
                  )}
                </div>
                <CustomSelect
                  label="Tipo de negocio"
                  placeholder="¿A qué se dedica tu negocio?"
                  value={form.tipoNegocio}
                  onChange={(val) => setForm((prev) => ({ ...prev, tipoNegocio: val }))}
                  disabled={status === 'sending'}
                  icon={
                    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7h-3V6a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H4a1 1 0 00-1 1v11a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 6a1 1 0 011-1h4a1 1 0 011 1v1H9V6z" />
                    </svg>
                  }
                  options={NEGOCIO_OPTIONS}
                />
              </div>

              <CustomSelect
                label="Tipo de aplicación"
                placeholder="Selecciona el tipo de aplicación que necesitas"
                value={form.tipoApp}
                onChange={(val) => setForm((prev) => ({ ...prev, tipoApp: val }))}
                disabled={status === 'sending'}
                icon={
                  <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm4-3.2h.01" />
                  </svg>
                }
                options={APP_OPTIONS}
              />

              <div>
                <label className="flex items-start gap-3 p-3.5 rounded-xl border border-gray-200 bg-gray-50 focus-within:border-cyan-400 transition-colors duration-300">
                  <svg className="w-4 h-4 mt-0.5 text-cyan-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
                  </svg>
                  <span className="flex-1">
                    <span className="block text-gray-700 text-[13px] font-semibold mb-0.5">Cuéntanos tu idea *</span>
                    <textarea
                      value={form.idea}
                      onChange={handleChange('idea')}
                      placeholder="Describe tu proyecto, funciones principales, objetivos, público objetivo, etc. (mínimo 10 caracteres)"
                      rows={3}
                      disabled={status === 'sending'}
                      className={`${inputBase} resize-none`}
                    />
                  </span>
                </label>
                {errores.idea && (
                  <p className="text-red-500 text-xs mt-1 ml-2">{errores.idea}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-1 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Solicitar cotización
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-600 text-[12.5px] bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  ¡Listo! Recibimos tu solicitud, te contactaremos pronto.
                </div>
              )}
              {status === 'error' && !errores.general && (
                <div className="flex items-center gap-2 text-red-600 text-[12.5px] bg-red-50 border border-red-200 rounded-lg px-3 py-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-8.999 3h.008v.008h-.008V15z" />
                  </svg>
                  No pudimos enviar tu solicitud. Completa los campos correctamente e inténtalo de nuevo.
                </div>
              )}

              <p className="flex items-center justify-center gap-1.5 text-gray-400 text-[11px] mt-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Tu información está 100% protegida. No compartimos tus datos.
              </p>
            </form>
          </div>
        </div>

        {/* Garantías */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 md:p-7 mb-10 transition-all duration-700 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-100/40 to-cyan-200/20 rounded-full blur-3xl"></div>
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`${iconBoxBase} w-10 h-10 text-cyan-500`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-gray-900 text-[13px] font-semibold leading-snug">{item.title}</h4>
                  <p className="text-gray-500 text-[11.5px]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Línea final */}
        <div
          className={`flex items-center justify-center gap-2 text-center transition-all duration-700 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
          </svg>
          <p className="text-gray-500 text-sm md:text-base">
            Desarrollamos aplicaciones que impulsan tu negocio al siguiente nivel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicioAppsPricing;