// api/index.js - Versión simplificada para Vercel
const twilio = require('twilio');

// ===== INFORMACIÓN DE BIOMEY =====
const companyInfo = {
  name: 'BioMey',
  description: 'Somos una agencia de soluciones digitales...',
  phone: '33 4981 2319',
  email: 'soporte-biomey-tux@outlook.com',
  website: 'https://bio-mey-com-five.vercel.app/'
};

// ===== SERVICIOS DETALLADOS =====
const services = {
  'web': {
    name: 'Desarrollo Web',
    description: 'Creamos páginas web profesionales...',
    prices: 'Desde $2,500 MXN para landing pages...',
    keywords: ['web', 'página', 'sitio', 'landing']
  },
  'app': {
    name: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps para Android e iOS...',
    prices: 'Desde $30,000 MXN para apps básicas...',
    keywords: ['app', 'aplicación', 'movil', 'android']
  },
  'pc': {
    name: 'Mantenimiento de PC',
    description: 'Mantenimiento preventivo y correctivo...',
    prices: 'Desde $250 MXN para mantenimiento preventivo...',
    keywords: ['pc', 'computadora', 'mantenimiento']
  },
  'soporte': {
    name: 'Soporte Técnico',
    description: 'Asistencia técnica presencial y remota...',
    prices: 'Diagnóstico sin costo...',
    keywords: ['soporte', 'ayuda', 'técnico']
  },
  'software': {
    name: 'Instalación de Software',
    description: 'Instalación y configuración de programas...',
    prices: 'Desde $150 MXN por instalación básica...',
    keywords: ['software', 'windows', 'office']
  },
  'it': {
    name: 'Asesoría IT',
    description: 'Te asesoramos para tomar decisiones tecnológicas...',
    prices: 'Consulta gratuita inicial...',
    keywords: ['asesoría', 'consultoría', 'it']
  }
};

function detectService(text) {
  const lowerText = text.toLowerCase();
  for (const [key, service] of Object.entries(services)) {
    for (const keyword of service.keywords) {
      if (lowerText.includes(keyword)) {
        return key;
      }
    }
  }
  return null;
}

function getAIResponse(text, service) {
  const lowerText = text.toLowerCase();
  
  // Saludos
  if (lowerText.includes('hola') || lowerText.includes('buenas')) {
    return '¡Hola! Soy el asistente virtual de BioMey. ¿En qué puedo ayudarte hoy?';
  }
  
  // Servicio detectado
  if (service && services[service]) {
    const s = services[service];
    return `Excelente elección. ${s.name}. ${s.description} Precios: ${s.prices} ¿Te gustaría más información?`;
  }
  
  // Precios
  if (lowerText.includes('precio') || lowerText.includes('costo')) {
    return 'Nuestros precios varían según el servicio. ¿Qué servicio te interesa?';
  }
  
  // Contacto
  if (lowerText.includes('contactar') || lowerText.includes('hablar')) {
    return 'Puedes contactarnos por WhatsApp al 33 4981 2319 o visitar nuestra página web.';
  }
  
  // Despedida
  if (lowerText.includes('gracias') || lowerText.includes('adiós')) {
    return '¡Fue un placer ayudarte! Recuerda que puedes contactarnos por WhatsApp. ¡Hasta luego!';
  }
  
  return 'Entendido. Puedo ayudarte con Desarrollo Web, Apps, Mantenimiento de PC, Soporte Técnico, Instalación de Software o Asesoría IT. ¿Cuál te interesa?';
}

// ===== FUNCIÓN PRINCIPAL PARA VERCEL =====
module.exports = async (req, res) => {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Manejar OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  const url = req.url;
  console.log(`📞 Llamada a: ${url}`);
  
  // ===== ENDPOINT DE SALUD =====
  if (url === '/health' || url === '/health/') {
    res.json({ status: 'ok', message: 'Asistente BioMey funcionando' });
    return;
  }
  
  // ===== ENDPOINT DE PRUEBA =====
  if (url === '/test' || url === '/test/') {
    res.json({
      message: 'Servidor funcionando correctamente',
      time: new Date().toISOString(),
      status: 'ok'
    });
    return;
  }
  
  // ===== ENDPOINT PRINCIPAL DE VOZ =====
  if (url === '/voice' || url === '/voice/') {
    const twiml = new twilio.twiml.VoiceResponse();
    
    const gather = twiml.gather({
      input: 'speech',
      timeout: 5,
      speechTimeout: 'auto',
      action: '/process-voice',
      language: 'es-MX',
      enhanced: true,
    });
    
    gather.say(
      `¡Hola! Bienvenido a ${companyInfo.name}. ${companyInfo.description} ` +
      `¿En qué servicio te gustaría que te ayudemos hoy? ` +
      `Puedes decir: Desarrollo Web, Aplicaciones Móviles, Mantenimiento de PC, ` +
      `Soporte Técnico, Instalación de Software o Asesoría IT.`
    );
    
    twiml.say(
      `No te he escuchado. Puedes contactarnos por WhatsApp al ${companyInfo.phone} ` +
      `o visitar nuestra página web. ¡Gracias por llamar!`
    );
    
    res.type('text/xml');
    res.send(twiml.toString());
    return;
  }
  
  // ===== ENDPOINT PARA PROCESAR RESPUESTAS =====
  if (url === '/process-voice' || url === '/process-voice/') {
    const speechResult = req.body.SpeechResult;
    console.log('🗣️ Cliente dijo:', speechResult);
    
    const twiml = new twilio.twiml.VoiceResponse();
    
    if (!speechResult) {
      const gather = twiml.gather({
        input: 'speech',
        timeout: 5,
        speechTimeout: 'auto',
        action: '/process-voice',
        language: 'es-MX',
        enhanced: true,
      });
      gather.say('No te he escuchado bien. ¿Puedes repetir qué servicio te interesa?');
      res.type('text/xml').send(twiml.toString());
      return;
    }
    
    const detectedService = detectService(speechResult);
    const response = getAIResponse(speechResult, detectedService);
    
    const gather = twiml.gather({
      input: 'speech',
      timeout: 5,
      speechTimeout: 'auto',
      action: '/process-voice',
      language: 'es-MX',
      enhanced: true,
    });
    gather.say(response);
    
    twiml.say('Gracias por contactar a BioMey. ¡Hasta luego!');
    
    res.type('text/xml');
    res.send(twiml.toString());
    return;
  }
  
  // ===== RUTA NO ENCONTRADA =====
  res.status(404).json({ error: 'Not found' });
};