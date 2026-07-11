import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PhoneAssistant = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callStatus, setCallStatus] = useState('idle'); // idle, calling, listening, speaking, ended
  const [callDuration, setCallDuration] = useState(0);
  const recognitionRef = useRef(null);
  const synthesisRef = useRef(window.speechSynthesis);
  const timerRef = useRef(null);

  // Servicios que ofrece la agencia
  const services = [
    { id: 'web', name: 'Desarrollo Web', keywords: ['web', 'página', 'sitio', 'landing', 'pagina'] },
    { id: 'apps', name: 'Aplicaciones Móviles', keywords: ['app', 'aplicación', 'movil', 'móvil', 'android', 'ios'] },
    { id: 'mantenimiento', name: 'Mantenimiento de PC', keywords: ['pc', 'computadora', 'mantenimiento', 'limpieza', 'virus'] },
    { id: 'soporte', name: 'Soporte Técnico', keywords: ['soporte', 'ayuda', 'técnico', 'problema', 'falla'] },
    { id: 'software', name: 'Instalación de Software', keywords: ['software', 'windows', 'office', 'programa', 'instalación'] },
    { id: 'tramites', name: 'Trámites Digitales', keywords: ['trámite', 'sat', 'gobierno', 'documento', 'curp'] },
    { id: 'it', name: 'Asesoría IT', keywords: ['asesoría', 'consultoría', 'estrategia', 'tecnología'] },
  ];

  const phoneNumber = '528144384806';

  // Detectar servicio por palabras clave
  const detectService = (text) => {
    const lowerText = text.toLowerCase();
    for (const service of services) {
      for (const keyword of service.keywords) {
        if (lowerText.includes(keyword)) {
          return service;
        }
      }
    }
    return null;
  };

  // Respuestas de la IA
  const getAIResponse = (userText, service) => {
    const lowerText = userText.toLowerCase();

    // Saludos
    if (lowerText.includes('hola') || lowerText.includes('buenas') || lowerText.includes('saludos')) {
      return '¡Hola! Soy el asistente virtual de BioMey. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, precios o agendar una llamada.';
    }

    // Servicio detectado
    if (service) {
      const responses = {
        'web': `Excelente elección. Nuestro servicio de Desarrollo Web incluye páginas modernas y optimizadas. 
                Ofrecemos desde landing pages desde $2,500 hasta sitios empresariales completos. 
                ¿Te gustaría agendar una llamada con un asesor para más detalles?`,
        'apps': `Las aplicaciones móviles son una gran opción. Desarrollamos apps para Android e iOS con precios desde $30,000 MXN. 
                 ¿Quieres que te contacte un especialista en apps?`,
        'mantenimiento': `El mantenimiento de PC es fundamental para el rendimiento. Ofrecemos desde $250 para mantenimiento preventivo. 
                          ¿Te interesa agendar una revisión de tu equipo?`,
        'soporte': `Contamos con soporte técnico presencial y remoto. Los diagnósticos son sin costo. 
                    ¿Necesitas ayuda con algún problema específico?`,
        'software': `Instalamos Windows, Office, antivirus y programas especializados. 
                     Los precios comienzan desde $150. ¿Qué software necesitas instalar?`,
        'tramites': `Realizamos trámites digitales como citas SAT, CURP, RFC y más. 
                     Los costos van desde $15 hasta $250 según el trámite. ¿Cuál necesitas?`,
        'it': `Ofrecemos asesoría IT personalizada para tu negocio. 
               Podemos ayudarte con transformación digital y optimización de procesos. 
               ¿Te gustaría agendar una consultoría?`,
      };
      return responses[service.id] || `Entendido. Te ayudo con ${service.name}. ¿Puedes darme más detalles sobre lo que necesitas?`;
    }

    // Precios
    if (lowerText.includes('precio') || lowerText.includes('costo') || lowerText.includes('cuánto')) {
      return 'Nuestros precios varían según el servicio y la complejidad. Por ejemplo, una landing page desde $2,500, una app desde $30,000. ¿Qué servicio te interesa para darte un precio más exacto?';
    }

    // Agendar llamada
    if (lowerText.includes('agendar') || lowerText.includes('llamada') || lowerText.includes('contactar')) {
      return 'Excelente. Te voy a conectar con uno de nuestros asesores. Por favor, déjame tu nombre y teléfono para que te contacten. Si ya estás en WhatsApp, también puedes escribirnos directamente.';
    }

    // Despedida
    if (lowerText.includes('gracias') || lowerText.includes('chao') || lowerText.includes('adiós')) {
      return '¡Fue un placer ayudarte! Recuerda que puedes contactarnos por WhatsApp al 81 4438 4806 o visitar nuestra página web. ¡Hasta luego!';
    }

    // Respuesta por defecto
    return 'Entendido. Puedo ayudarte con Desarrollo Web, Aplicaciones Móviles, Mantenimiento de PC, Soporte Técnico, Instalación de Software, Trámites Digitales o Asesoría IT. ¿Cuál te interesa?';
  };

  // Inicializar reconocimiento de voz
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'es-MX';
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event) => {
        const last = event.results.length - 1;
        const text = event.results[last][0].transcript;
        setTranscript(text);
        processUserInput(text);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        if (isCallActive && callStatus !== 'ended') {
          // Si la llamada sigue activa, escuchar de nuevo
          setTimeout(() => {
            if (isCallActive && callStatus !== 'ended') {
              startListening();
            }
          }, 1000);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Error de reconocimiento:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setResponse('Parece que no has permitido el acceso al micrófono. Puedes escribir tu mensaje o contactarnos por WhatsApp.');
        }
      };
    } else {
      setResponse('Tu navegador no soporta reconocimiento de voz. Puedes contactarnos por WhatsApp o usar el formulario de contacto.');
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      synthesisRef.current.cancel();
    };
  }, []);

  // Timer de llamada
  useEffect(() => {
    if (isCallActive && callStatus === 'calling') {
      timerRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isCallActive, callStatus]);

  // Formatear duración
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening && isCallActive) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setCallStatus('listening');
      } catch (error) {
        console.error('Error al iniciar reconocimiento:', error);
      }
    }
  };

  const speak = (text) => {
    return new Promise((resolve) => {
      if (synthesisRef.current) {
        synthesisRef.current.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-MX';
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;

        // Buscar voz en español
        const voices = synthesisRef.current.getVoices();
        const spanishVoice = voices.find(v => v.lang.includes('es'));
        if (spanishVoice) {
          utterance.voice = spanishVoice;
        }

        utterance.onstart = () => {
          setIsSpeaking(true);
          setCallStatus('speaking');
        };

        utterance.onend = () => {
          setIsSpeaking(false);
          setCallStatus('listening');
          resolve();
          // Después de hablar, escuchar de nuevo
          setTimeout(() => {
            if (isCallActive && callStatus !== 'ended') {
              startListening();
            }
          }, 500);
        };

        utterance.onerror = () => {
          setIsSpeaking(false);
          setCallStatus('listening');
          resolve();
        };

        synthesisRef.current.speak(utterance);
      } else {
        resolve();
      }
    });
  };

  const processUserInput = async (text) => {
    if (!text.trim()) return;

    // Agregar mensaje del usuario
    setConversation(prev => [...prev, { sender: 'user', text: text }]);

    // Detectar servicio
    const detectedService = detectService(text);

    // Generar respuesta
    const aiResponse = getAIResponse(text, detectedService);
    setResponse(aiResponse);

    // Agregar respuesta de la IA
    setConversation(prev => [...prev, { sender: 'ai', text: aiResponse }]);

    // Hablar respuesta
    await speak(aiResponse);
  };

  const startCall = () => {
    setIsCallActive(true);
    setCallStatus('calling');
    setConversation([]);
    setCallDuration(0);
    const greeting = '¡Hola! Soy el asistente virtual de BioMey. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre nuestros servicios, precios o agendar una llamada.';
    setResponse(greeting);
    setConversation([{ sender: 'ai', text: greeting }]);

    // Esperar a que carguen las voces y luego hablar
    setTimeout(() => {
      speak(greeting);
    }, 500);
  };

  const endCall = () => {
    setIsCallActive(false);
    setIsListening(false);
    setIsSpeaking(false);
    setCallStatus('ended');
    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
    synthesisRef.current.cancel();
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Mensaje de despedida
    const farewell = 'Gracias por contactar a BioMey. Te esperamos en nuestra página web o WhatsApp. ¡Hasta luego!';
    setConversation(prev => [...prev, { sender: 'ai', text: farewell }]);
    speak(farewell);

    setTimeout(() => {
      setCallStatus('idle');
    }, 3000);
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="asistente">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-mono text-sm font-bold">// ASISTENTE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
            Asistente Telefónico con IA
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Nuestro asistente virtual te atenderá 24/7. Habla con él para conocer nuestros servicios, precios y agendar una llamada con un asesor.
          </p>
        </div>

        {/* Teléfono UI */}
        <div className="relative max-w-md mx-auto">
          <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl shadow-cyan-500/10 border border-gray-800">
            {/* Pantalla del teléfono */}
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Status Bar */}
              <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[10px] text-gray-400 ml-2 font-mono">Asistente BioMey</span>
                </div>
                {isCallActive && (
                  <span className="text-[10px] text-green-500 font-mono animate-pulse">
                    ● En llamada {formatDuration(callDuration)}
                  </span>
                )}
              </div>

              {/* Conversación */}
              <div className="h-[400px] overflow-y-auto p-4 space-y-3 bg-gray-50">
                {conversation.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <span className="text-6xl mb-4">📞</span>
                    <p className="text-sm text-center">Presiona "Llamar ahora" para hablar con nuestro asistente virtual</p>
                    <p className="text-xs text-center mt-2">Disponible 24/7</p>
                  </div>
                ) : (
                  conversation.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white'
                            : 'bg-white border border-gray-200 text-gray-700 shadow-sm'
                        }`}
                      >
                        <div className="text-sm whitespace-pre-wrap">{msg.text}</div>
                      </div>
                    </motion.div>
                  ))
                )}

                {/* Indicador de escucha */}
                {isListening && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-2.5 flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                      <span className="text-xs text-gray-400 ml-1">Escuchando...</span>
                    </div>
                  </div>
                )}

                {/* Indicador de hablando */}
                {isSpeaking && (
                  <div className="flex justify-start">
                    <div className="bg-cyan-50 border border-cyan-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-sm">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                      <span className="text-xs text-cyan-600">El asistente está hablando...</span>
                    </div>
                  </div>
                )}

                {/* Transcript (lo que el usuario dijo) */}
                {transcript && isListening && (
                  <div className="flex justify-end">
                    <div className="bg-gray-200/70 rounded-2xl px-4 py-2 text-sm text-gray-500 italic">
                      "{transcript}"
                    </div>
                  </div>
                )}
              </div>

              {/* Controles */}
              <div className="bg-gray-100 px-4 py-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-gray-500 font-mono">
                      {isCallActive ? 'En línea' : 'Disponible'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    {!isCallActive ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={startCall}
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm font-medium shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5a2.25 2.25 0 00-2.25 2.25z" />
                        </svg>
                        Llamar ahora
                      </motion.button>
                    ) : (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={startListening}
                          disabled={isListening || isSpeaking || callStatus === 'ended'}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            isListening
                              ? 'bg-cyan-100 text-cyan-700 border border-cyan-300'
                              : 'bg-white border border-gray-300 text-gray-700 hover:border-cyan-400 hover:text-cyan-600'
                          }`}
                        >
                          {isListening ? '🎤 Escuchando...' : '🎤 Hablar'}
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={endCall}
                          className="px-4 py-2 rounded-full bg-red-500 text-white text-sm font-medium shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Colgar
                        </motion.button>
                      </>
                    )}
                  </div>
                </div>

                {/* Mensaje de ayuda */}
                {!isCallActive && (
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    📞 24/7 • Responde preguntas sobre servicios y precios
                  </p>
                )}
                {isCallActive && (
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    {isListening ? '🎤 Habla ahora' : isSpeaking ? '🔊 El asistente está respondiendo' : '📱 Esperando...'}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Badge de disponibilidad */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-3 py-1.5 border border-gray-200"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-medium text-gray-700">24/7 Disponible</span>
            </div>
          </motion.div>
        </div>

        {/* Botón alternativo - WhatsApp */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            ¿Prefieres hablar con una persona?
          </p>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhoneAssistant;