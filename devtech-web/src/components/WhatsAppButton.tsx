import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  options?: { label: string; value: string }[];
}

type Step = 'askName' | 'askService' | 'askPhone' | 'askDetails' | 'done';

interface ChatState {
  messages: Message[];
  currentStep: Step;
  userName: string;
  userPhone: string;
  selectedService: string;
}

const STORAGE_KEY = 'biomey_chat_state';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>('askName');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const PHONE_NUMBER = '528144384806';

  const services = [
    { id: 'web', label: 'Desarrollo Web', icon: 'M13.5 3H12H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C5 4.52 5 5.08 5 6.2v11.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C6.52 21 7.08 21 8.2 21h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C19 19.48 19 18.92 19 17.8V8.5M13.5 3L19 8.5M13.5 3v3.4c0 .56 0 .84.109 1.054a1 1 0 00.437.437C14.26 8 14.54 8 15.1 8h3.9', keywords: ['web', 'pagina', 'página', 'sitio', 'landing'] },
    { id: 'mobile', label: 'Aplicaciones Móviles', icon: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0v.75h3v-.75m-3 0h3m-3 18.75h3', keywords: ['app', 'aplicacion', 'aplicación', 'movil', 'móvil', 'android', 'ios'] },
    { id: 'pc', label: 'Mantenimiento de PC', icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25', keywords: ['pc', 'computadora', 'lenta', 'lento', 'virus', 'traba', 'no prende', 'malware'] },
    { id: 'support', label: 'Soporte Técnico', icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091.99-.203 2.003-.877 2.726L7.5 12.5', keywords: ['soporte', 'ayuda', 'instalar', 'configurar', 'red', 'internet no funciona'] },
    { id: 'digital', label: 'Trámites Digitales', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', keywords: ['tramite', 'trámite', 'sat', 'gobierno', 'documento', 'factura'] },
    { id: 'it', label: 'Asesoría IT', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z', keywords: ['asesoria', 'asesoría', 'consultoria', 'consultoría', 'estrategia', 'proyecto tecnologico'] },
  ];

  const serviceInfo: Record<string, { title: string; description: string; questions: string }> = {
    web: {
      title: 'Desarrollo Web',
      description: 'Páginas modernas y optimizadas, diseño responsivo, SEO y panel administrativo disponible.',
      questions: '¿Qué tipo de página necesitas?\n• Landing page\n• Página para negocio (5-6 secciones)\n• Página profesional (hasta 15 secciones)\n• Página empresarial completa',
    },
    mobile: {
      title: 'Aplicaciones Móviles',
      description: 'Apps para Android e iOS, diseño intuitivo, alto rendimiento y publicación en tiendas oficiales.',
      questions: '¿Qué tipo de app necesitas?\n• App para clientes/usuarios\n• App de administración interna\n• App con base de datos\n• App con geolocalización',
    },
    pc: {
      title: 'Mantenimiento de PC',
      description: 'Limpieza física y de software, eliminación de virus, respaldo de datos y mejora de rendimiento.',
      questions: '¿Qué problema tienes con tu equipo?\n• Está lento o se traba\n• Tiene virus o malware\n• Necesita limpieza física\n• Quiero mejorar el rendimiento',
    },
    support: {
      title: 'Soporte Técnico',
      description: 'Asistencia presencial y remota, configuración de equipos, instalación de software y diagnóstico.',
      questions: '¿Qué tipo de soporte necesitas?\n• Soporte remoto\n• Soporte presencial\n• Instalación de programas\n• Configuración de red',
    },
    digital: {
      title: 'Trámites Digitales',
      description: 'Trámites oficiales en línea, gestión rápida y segura, con asesoría y seguimiento del proceso.',
      questions: '¿Qué trámite necesitas realizar?\n• Trámite del SAT\n• Trámite de gobierno\n• Gestión empresarial\n• Documentación oficial',
    },
    it: {
      title: 'Asesoría IT',
      description: 'Asesoría tecnológica personalizada, planificación de proyectos y estrategia digital para tu negocio.',
      questions: '¿En qué área necesitas asesoría?\n• Transformación digital\n• Selección de software\n• Optimización de procesos\n• Seguridad informática',
    },
  };

  const detectServiceFromText = (text: string): string | null => {
    const normalized = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    for (const service of services) {
      for (const keyword of service.keywords) {
        const plainKeyword = keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (normalized.includes(plainKeyword)) return service.id;
      }
    }
    return null;
  };

  const isBusinessHours = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    return day >= 1 && day <= 6 && hour >= 9 && hour < 20;
  };

  const sendBotMessage = (text: string, options?: Message['options'], delay = 600) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now().toString() + Math.random(), text, sender: 'bot', options }]);
    }, delay);
  };

  const resetChat = () => {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([]);
    setCurrentStep('askName');
    setUserName('');
    setUserPhone('');
    setSelectedService('');
    setInputValue('');
    sendBotMessage('¡Hola! Soy el asistente de BioMey. ¿Cuál es tu nombre?', undefined, 300);
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: ChatState = JSON.parse(saved);
        if (parsed.messages?.length && parsed.currentStep !== 'done') {
          setMessages(parsed.messages);
          setCurrentStep(parsed.currentStep);
          setUserName(parsed.userName);
          setUserPhone(parsed.userPhone);
          setSelectedService(parsed.selectedService);
        }
      }
    } catch {
      // ignorar
    }
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;
    const state: ChatState = { messages, currentStep, userName, userPhone, selectedService };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [messages, currentStep, userName, userPhone, selectedService]);

  const startChat = () => {
    setIsOpen(true);
    if (messages.length === 0) resetChat();
  };

  const closeChat = () => setIsOpen(false);

  const talkToHuman = () => {
    const parts = [`Hola, quiero hablar con alguien de BioMey.`];
    if (userName) parts.push(`Mi nombre es ${userName}.`);
    if (selectedService) {
      const label = services.find(s => s.id === selectedService)?.label;
      if (label) parts.push(`Me interesa: ${label}.`);
    }
    const plainMessage = parts.join('\n');
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(plainMessage)}`, '_blank');
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const userText = inputValue.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), text: userText, sender: 'user' }]);
    setInputValue('');
    setTimeout(() => processUserResponse(userText), 200);
  };

  const processUserResponse = (response: string) => {
    if (response.trim().toLowerCase() === 'reiniciar') {
      resetChat();
      return;
    }

    if (currentStep === 'askName') {
      const name = response.trim();
      if (name.length < 2) {
        sendBotMessage('Necesito un nombre válido para continuar. ¿Cómo te llamas?');
        return;
      }
      setUserName(name);

      const detected = detectServiceFromText(name);
      sendBotMessage(`Gracias, ${name}. ¿Qué servicio te interesa?`, services.map(s => ({ label: s.label, value: s.id })));
      setCurrentStep('askService');
      return;
    }

    if (currentStep === 'askService') {
      let selected = services.find(s => s.id === response);

      if (!selected) {
        const detectedId = detectServiceFromText(response);
        selected = services.find(s => s.id === detectedId);
      }

      if (!selected) {
        sendBotMessage('No identifiqué el servicio. Puedes escribirlo con tus palabras o elegir una opción:', services.map(s => ({ label: s.label, value: s.id })));
        return;
      }
      setSelectedService(selected.id);
      const info = serviceInfo[selected.id];
      sendBotMessage(`${info.title}\n\n${info.description}\n\n${info.questions}\n\nPor último, ¿a qué número te contactamos?`);
      setCurrentStep('askPhone');
      return;
    }

    if (currentStep === 'askPhone') {
      const looksLikeEmail = /\S+@\S+\.\S+/.test(response);
      if (looksLikeEmail) {
        sendBotMessage('Eso parece un correo, no un teléfono. ¿Me compartes tu número con lada (10 dígitos)?');
        return;
      }

      const digits = response.replace(/\D/g, '');
      if (digits.length < 10) {
        sendBotMessage('Ese número no parece completo. ¿Puedes escribirlo de nuevo con lada (10 dígitos)?');
        return;
      }
      setUserPhone(response.trim());
      sendBotMessage('Cuéntame un poco más sobre tu proyecto o lo que necesitas:');
      setCurrentStep('askDetails');
      return;
    }

    if (currentStep === 'askDetails') {
      const serviceName = services.find(s => s.id === selectedService)?.label || '';
      const plainMessage = `Hola, soy ${userName}.\n\nTeléfono: ${userPhone}\nServicio: ${serviceName}\nProyecto: ${response}\n\n¡Espero su respuesta!`;
      const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(plainMessage)}`;
      window.open(url, '_blank');

      const hoursNote = isBusinessHours()
        ? ''
        : '\n\nEstamos fuera de horario de atención (L-S, 9am-8pm), pero te contactaremos en cuanto abramos.';
      sendBotMessage(`Listo, ${userName}. Preparé tu mensaje con toda la información. Toca "Abrir WhatsApp" para enviarlo.${hoursNote}`);
      setCurrentStep('done');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const placeholderFor = (step: Step) => {
    switch (step) {
      case 'askName': return 'Escribe tu nombre...';
      case 'askService': return 'O escribe qué necesitas...';
      case 'askPhone': return 'Escribe tu teléfono...';
      case 'askDetails': return 'Describe tu proyecto...';
      default: return 'Escribe un mensaje...';
    }
  };

  const inputDisabled = currentStep === 'done';

  return (
    <>
      {/* Botón flotante - Más pequeño en móvil */}
      <button
        onClick={startChat}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 shadow-2xl shadow-cyan-500/40 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-cyan-400 rounded-full text-white text-[8px] sm:text-[10px] font-bold flex items-center justify-center animate-pulse">
          1
        </span>
      </button>

      {/* Modal de chat - Responsive */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-2 sm:right-6 z-50 w-[calc(100vw-1rem)] sm:w-[380px] max-w-[380px] bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-900/20 overflow-hidden">
          {/* Header - Más compacto en móvil */}
          <div className="bg-gray-50 px-3 sm:px-5 py-3 sm:py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-gray-900 font-semibold text-xs sm:text-sm truncate">Asistente BioMey</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isBusinessHours() ? 'bg-green-400' : 'bg-cyan-300/50'}`} />
                  <span className="truncate">{isBusinessHours() ? 'En línea • Responde en minutos' : 'Fuera de horario'}</span>
                </p>
              </div>
            </div>
            <button onClick={closeChat} className="text-gray-400 hover:text-gray-600 transition-colors p-1" aria-label="Cerrar">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mensajes - Altura adaptativa en móvil */}
          <div className="h-[350px] sm:h-[400px] overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3 bg-white">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white'
                      : 'bg-gray-50 border border-gray-200 text-gray-700'
                  }`}
                >
                  <div className="text-xs sm:text-sm whitespace-pre-wrap break-words">{msg.text}</div>
                  {msg.options && (
                    <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-1.5">
                      {msg.options.map((opt) => {
                        const service = services.find(s => s.id === opt.value);
                        return (
                          <button
                            key={opt.value}
                            onClick={() => {
                              setMessages(prev => [...prev, { id: Date.now().toString(), text: opt.label, sender: 'user' }]);
                              setTimeout(() => processUserResponse(opt.value), 200);
                            }}
                            className="w-full flex items-center gap-2 text-left px-2 sm:px-3 py-1.5 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 transition-all duration-200 text-gray-700 text-xs sm:text-sm"
                          >
                            {service && (
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                              </svg>
                            )}
                            <span className="truncate">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Acceso directo a humano */}
          {currentStep !== 'done' && (
            <div className="px-3 sm:px-4 pt-1 pb-0 sm:pt-2 bg-white">
              <button
                onClick={talkToHuman}
                className="text-[10px] sm:text-xs text-cyan-500 hover:text-cyan-600 transition-colors underline underline-offset-2"
              >
                Prefiero hablar directo con alguien
              </button>
            </div>
          )}

          {/* Input - Más compacto en móvil */}
          {currentStep !== 'done' && (
            <div className="p-2 sm:p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-1.5 sm:gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={placeholderFor(currentStep)}
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-colors duration-300 text-xs sm:text-sm"
                  disabled={inputDisabled}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || inputDisabled}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 text-white font-medium disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Enviar"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Acciones finales */}
          {currentStep === 'done' && (
            <div className="p-3 sm:p-4 border-t border-gray-200 bg-white space-y-1.5 sm:space-y-2">
              <button
                onClick={closeChat}
                className="w-full py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Abrir WhatsApp
              </button>
              <button
                onClick={resetChat}
                className="w-full py-1.5 sm:py-2 rounded-xl border border-gray-200 text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors text-xs sm:text-sm"
              >
                Iniciar nueva conversación
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;