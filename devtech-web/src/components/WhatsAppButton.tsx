import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  options?: { label: string; value: string; next?: string }[];
}

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<'initial' | 'service' | 'web' | 'mobile' | 'pc' | 'support' | 'digital' | 'it'>('initial');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');

  // Número de WhatsApp (reemplaza con tu número)
  const PHONE_NUMBER = '5219611234567'; // Formato: código país + número

  // Servicios disponibles
  const services = [
    { id: 'web', label: '💻 Desarrollo Web', emoji: '💻' },
    { id: 'mobile', label: '📱 Aplicaciones Móviles', emoji: '📱' },
    { id: 'pc', label: '🖥️ Mantenimiento de PC', emoji: '🖥️' },
    { id: 'support', label: '🛠️ Soporte Técnico', emoji: '🛠️' },
    { id: 'digital', label: '📄 Trámites Digitales', emoji: '📄' },
    { id: 'it', label: '🧠 Asesoría IT', emoji: '🧠' },
  ];

  // Información detallada por servicio
  const serviceInfo = {
    web: {
      title: 'Desarrollo Web',
      description: '✅ Páginas web modernas y optimizadas\n✅ Diseño responsivo (móvil, tablet, escritorio)\n✅ SEO para mejorar posicionamiento\n✅ Integración con WhatsApp y redes sociales\n✅ Panel administrativo (CMS) disponible',
      questions: '¿Qué tipo de página necesitas?\n• Landing Page (una página)\n• Página para negocio (5-6 secciones)\n• Página profesional (hasta 15 secciones)\n• Página empresarial (completa)'
    },
    mobile: {
      title: 'Aplicaciones Móviles',
      description: '✅ Apps para Android e iOS\n✅ Diseño intuitivo y moderno\n✅ Alto rendimiento y seguridad\n✅ Integración con APIs\n✅ Publicación en tiendas oficiales',
      questions: '¿Qué tipo de app necesitas?\n• App para clientes/usuarios\n• App para administración interna\n• App con conexión a base de datos\n• App con geolocalización'
    },
    pc: {
      title: 'Mantenimiento de PC',
      description: '✅ Limpieza física y de software\n✅ Optimización del sistema\n✅ Eliminación de virus y malware\n✅ Respaldo de datos\n✅ Mejora de rendimiento',
      questions: '¿Qué problema tienes con tu PC?\n• Está lenta o se traba\n• Tiene virus o malware\n• Necesita limpieza física\n• Quiere mejorar el rendimiento'
    },
    support: {
      title: 'Soporte Técnico',
      description: '✅ Asistencia presencial y remota\n✅ Resolución de problemas técnicos\n✅ Configuración de equipos\n✅ Instalación de software\n✅ Diagnóstico y reparación',
      questions: '¿Qué tipo de soporte necesitas?\n• Soporte remoto (vía conexión segura)\n• Soporte presencial en tu ubicación\n• Instalación de programas\n• Configuración de red'
    },
    digital: {
      title: 'Trámites Digitales',
      description: '✅ Trámites oficiales en línea\n✅ Gestión rápida y segura\n✅ Asesoría personalizada\n✅ Seguimiento de procesos\n✅ Documentación digital',
      questions: '¿Qué trámite necesitas realizar?\n• Trámite del SAT\n• Trámite de gobierno\n• Gestión empresarial\n• Documentación oficial'
    },
    it: {
      title: 'Asesoría IT',
      description: '✅ Asesoría tecnológica personalizada\n✅ Planificación de proyectos digitales\n✅ Selección de herramientas y tecnologías\n✅ Optimización de procesos\n✅ Estrategia digital para tu negocio',
      questions: '¿En qué área necesitas asesoría?\n• Transformación digital\n• Selección de software\n• Optimización de procesos\n• Seguridad informática'
    }
  };

  // Iniciar chat
  const startChat = () => {
    setIsOpen(true);
    setMessages([
      {
        id: '1',
        text: '👋 ¡Hola! Soy el asistente de DevTech. ¿Cuál es tu nombre?',
        sender: 'bot'
      }
    ]);
    setShowNameInput(true);
    setCurrentStep('initial');
  };

  // Cerrar chat
  const closeChat = () => {
    setIsOpen(false);
    // Resetear todo después de cerrar
    setTimeout(() => {
      setMessages([]);
      setCurrentStep('initial');
      setUserName('');
      setUserPhone('');
      setSelectedService('');
      setShowNameInput(false);
      setShowPhoneInput(false);
      setInputValue('');
    }, 300);
  };

  // Manejar envío de mensajes
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), text: userMessage, sender: 'user' }]);
    setInputValue('');

    // Procesar según el paso actual
    setTimeout(() => {
      processUserResponse(userMessage);
    }, 500);
  };

  // Procesar respuesta del usuario
  const processUserResponse = (response: string) => {
    if (currentStep === 'initial') {
      // Guardar nombre
      setUserName(response);
      setShowNameInput(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `✨ ¡Gracias ${response}! ¿Qué servicio te interesa?`,
        sender: 'bot',
        options: services.map(s => ({ label: s.label, value: s.id }))
      }]);
      setCurrentStep('service');
      return;
    }

    if (currentStep === 'service') {
      // Seleccionar servicio
      const selected = services.find(s => s.id === response);
      if (selected) {
        setSelectedService(selected.id);
        const info = serviceInfo[selected.id as keyof typeof serviceInfo];
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: `📌 **${info.title}**\n\n${info.description}\n\n${info.questions}`,
          sender: 'bot'
        }]);
        setShowPhoneInput(true);
        setCurrentStep('web'); // Cambiar según el servicio
      } else {
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          text: '❓ No entendí tu selección. Por favor, elige una opción de la lista:',
          sender: 'bot',
          options: services.map(s => ({ label: s.label, value: s.id }))
        }]);
      }
      return;
    }

    // Si ya tenemos el servicio y el teléfono, preguntar por el proyecto
    if (showPhoneInput && response) {
      setUserPhone(response);
      setShowPhoneInput(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: '📝 Cuéntame más sobre tu proyecto o lo que necesitas:',
        sender: 'bot'
      }]);
      setCurrentStep('details');
      return;
    }

    if (currentStep === 'details') {
      const serviceName = services.find(s => s.id === selectedService)?.label || '';
      // Construir mensaje para WhatsApp
      const whatsappMessage = `Hola, soy ${userName}.%0A%0A📞 Teléfono: ${userPhone}%0A📌 Servicio: ${serviceName}%0A📝 Proyecto: ${response}%0A%0A¡Espero su respuesta!`;

      // Abrir WhatsApp con el mensaje predefinido
      const url = `https://wa.me/${PHONE_NUMBER}?text=${whatsappMessage}`;
      window.open(url, '_blank');

      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: `✅ ¡Excelente ${userName}! Te he preparado un mensaje para WhatsApp con toda la información.%0A%0A📲 Haz clic en el botón "Abrir WhatsApp" para enviarlo.`,
        sender: 'bot'
      }]);
      setCurrentStep('done');
    }
  };

  // Scroll automático
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <button
        onClick={startChat}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {/* Notificación */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center animate-pulse">
          1
        </span>
      </button>

      {/* Modal de chat */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-[#0a0a14] rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-5 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Asistente DevTech</h3>
                <p className="text-blue-200/50 text-xs">En línea • Responde en minutos</p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="text-blue-200/50 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mensajes */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-[#0a0a14]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white/5 backdrop-blur-sm border border-white/10 text-blue-200/90'
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                  {msg.options && (
                    <div className="mt-3 space-y-1.5">
                      {msg.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => {
                            setMessages(prev => [...prev, {
                              id: Date.now().toString(),
                              text: opt.label,
                              sender: 'user'
                            }]);
                            setTimeout(() => {
                              processUserResponse(opt.value);
                            }, 300);
                          }}
                          className="w-full text-left px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-200 text-white text-sm"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {currentStep !== 'done' && (
            <div className="p-4 border-t border-white/10 bg-[#0a0a14]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={
                    showNameInput ? 'Escribe tu nombre...' :
                    showPhoneInput ? 'Escribe tu teléfono...' :
                    currentStep === 'details' ? 'Describe tu proyecto...' :
                    'Escribe un mensaje...'
                  }
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-blue-200/30 focus:border-blue-400/50 focus:outline-none transition-colors duration-300 text-sm"
                  disabled={currentStep === 'service' || currentStep === 'done'}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || currentStep === 'service' || currentStep === 'done'}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Botón final para abrir WhatsApp */}
          {currentStep === 'done' && (
            <div className="p-4 border-t border-white/10 bg-[#0a0a14]">
              <button
                onClick={() => {
                  // Ya se abrió WhatsApp en el proceso
                  closeChat();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Abrir WhatsApp
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;