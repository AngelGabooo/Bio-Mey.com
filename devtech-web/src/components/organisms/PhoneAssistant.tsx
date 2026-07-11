import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PhoneAssistant = () => {
  // ⭐ Número de teléfono de BioMey
  const phoneNumber = '3349812319';

  // Estado para mostrar el modal/pantalla de llamada simulada
  const [isCallActive, setIsCallActive] = useState(false);
  const [conversation, setConversation] = useState<Array<{sender: 'user' | 'ai', text: string}>>([]);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);

  // Función para iniciar la llamada
  const startCall = () => {
    // Abrir el marcador del teléfono
    window.location.href = `tel:+523349812319`;
    
    // Mostrar la interfaz de llamada en la página (simulada)
    setIsCallActive(true);
    
    // Simular que la IA contesta después de 2 segundos
    setTimeout(() => {
      const greeting = '¡Hola! Soy el asistente virtual de BioMey. ¿En qué puedo ayudarte hoy? Puedes preguntarme sobre Desarrollo Web, Apps Móviles, Mantenimiento de PC, Soporte Técnico o Asesoría IT.';
      setConversation(prev => [...prev, { sender: 'ai', text: greeting }]);
      setIsAiSpeaking(true);
      
      // Simular que la IA deja de hablar después de 3 segundos
      setTimeout(() => {
        setIsAiSpeaking(false);
      }, 3000);
    }, 2000);
  };

  // Función para simular respuesta del usuario (cliente escribe en la interfaz)
  const handleUserMessage = (text: string) => {
    if (!text.trim()) return;
    
    setConversation(prev => [...prev, { sender: 'user', text: text }]);
    
    // Simular respuesta de la IA
    const responses: Record<string, string> = {
      'web': 'Excelente elección. Ofrecemos Desarrollo Web desde landing pages ($2,500) hasta sitios empresariales completos. ¿Te gustaría que te contacte un asesor para darte más detalles?',
      'app': 'Desarrollamos aplicaciones móviles para Android e iOS. Los precios comienzan desde $30,000 MXN. ¿Quieres que te envíe una cotización personalizada?',
      'pc': 'El mantenimiento de PC es fundamental. Ofrecemos desde $250 para mantenimiento preventivo. ¿Te interesa agendar una revisión?',
      'soporte': 'Contamos con soporte técnico presencial y remoto. Los diagnósticos son sin costo. ¿Necesitas ayuda con algún problema específico?',
      'asesoría': 'Ofrecemos asesoría IT personalizada para tu negocio. Podemos ayudarte con transformación digital. ¿Te gustaría agendar una consultoría?',
    };

    const lowerText = text.toLowerCase();
    let response = 'Entendido. Puedo ayudarte con Desarrollo Web, Apps Móviles, Mantenimiento de PC, Soporte Técnico o Asesoría IT. ¿Cuál te interesa?';
    
    for (const [key, value] of Object.entries(responses)) {
      if (lowerText.includes(key)) {
        response = value;
        break;
      }
    }

    // Si menciona correo o contacto, simular envío
    if (lowerText.includes('correo') || lowerText.includes('contacto') || lowerText.includes('sí') || lowerText.includes('si')) {
      response = '¡Perfecto! He registrado tu solicitud. En los próximos minutos recibirás un correo con toda la información y un asesor se pondrá en contacto contigo. ¿Hay algo más en lo que pueda ayudarte?';
    }

    setTimeout(() => {
      setConversation(prev => [...prev, { sender: 'ai', text: response }]);
      setIsAiSpeaking(true);
      setTimeout(() => setIsAiSpeaking(false), 4000);
    }, 500);
  };

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden" id="asistente">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-to-r from-cyan-100/30 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-mono text-sm font-bold">// ASISTENTE</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-2">
            Atención Telefónica con IA
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Nuestro asistente virtual te atenderá por teléfono 24/7. Conoce nuestros servicios, precios y agenda una llamada con un asesor.
          </p>
        </div>

        {/* Botón principal de llamada */}
        <div className="flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startCall}
            className="relative px-10 py-6 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-xl font-bold shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 flex items-center gap-4 group"
          >
            <span className="text-3xl">📞</span>
            <span>Llamar ahora</span>
            <span className="absolute -top-2 -right-2 bg-green-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
              24/7
            </span>
          </motion.button>
          
          <p className="text-sm text-gray-400 mt-3">
            Haz clic para llamar al <span className="font-mono text-cyan-500">33 4981 2319</span>
          </p>
        </div>

        {/* Interfaz de llamada en vivo (simulada) */}
        {isCallActive && (
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl shadow-cyan-500/10 border border-gray-800">
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* Status Bar */}
                <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-[10px] text-gray-400 ml-2 font-mono">
                      En llamada {isAiSpeaking ? '🔊' : '🎤'}
                    </span>
                  </div>
                  <span className="text-[10px] text-green-500 font-mono animate-pulse">
                    ● En línea
                  </span>
                </div>

                {/* Conversación */}
                <div className="h-[300px] overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {conversation.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400">
                      <span className="text-5xl mb-4">🔊</span>
                      <p className="text-sm text-center">La IA te está atendiendo...</p>
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

                  {isAiSpeaking && (
                    <div className="flex justify-start">
                      <div className="bg-cyan-50 border border-cyan-200 rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-sm">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
                        </div>
                        <span className="text-xs text-cyan-600">La IA está hablando...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input para simular respuesta del usuario */}
                <div className="bg-gray-100 px-4 py-3 border-t border-gray-200">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Escribe tu respuesta (simulado)..."
                      className="flex-1 px-4 py-2 rounded-full border border-gray-300 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          const input = e.target as HTMLInputElement;
                          handleUserMessage(input.value);
                          input.value = '';
                        }
                      }}
                    />
                    <button
                      className="px-4 py-2 rounded-full bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 transition-colors"
                      onClick={() => {
                        const input = document.querySelector('input') as HTMLInputElement;
                        if (input) {
                          handleUserMessage(input.value);
                          input.value = '';
                        }
                      }}
                    >
                      Enviar
                    </button>
                  </div>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    💡 Escribe para simular tu respuesta. En la vida real, esto sería por voz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhoneAssistant;