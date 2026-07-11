// server/server.js
const express = require('express');
const twilio = require('twilio');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===== INFORMACIÓN DE BIOMEY =====
const companyInfo = {
  name: 'BioMey',
  description: 'Somos una agencia de soluciones digitales especializada en desarrollo web, aplicaciones móviles y servicios tecnológicos.',
  phone: '33 4981 2319',
  email: 'soporte-biomey-tux@outlook.com',
  website: 'https://bio-mey-com-five.vercel.app/'
};

// ===== SERVICIOS DETALLADOS =====
const services = {
  'web': {
    name: 'Desarrollo Web',
    description: 'Creamos páginas web profesionales, modernas y optimizadas para Google.',
    prices: 'Desde $2,500 MXN para landing pages, $6,500 para sitios de negocios, $11,500 para sitios profesionales y $18,500 para sitios empresariales.',
    details: 'Incluye diseño responsivo, optimización SEO, formularios de contacto, integración con redes sociales y soporte post-lanzamiento.',
    keywords: ['web', 'página', 'sitio', 'landing', 'pagina', 'diseño', 'desarrollo']
  },
  'app': {
    name: 'Aplicaciones Móviles',
    description: 'Desarrollamos apps para Android e iOS con diseño intuitivo y alto rendimiento.',
    prices: 'Desde $30,000 MXN para apps básicas, dependiendo de la complejidad y funcionalidades.',
    details: 'Incluye diseño UX/UI, desarrollo nativo, notificaciones push, integración con APIs y publicación en tiendas.',
    keywords: ['app', 'aplicación', 'movil', 'móvil', 'android', 'ios', 'celular']
  },
  'pc': {
    name: 'Mantenimiento de PC',
    description: 'Mantenimiento preventivo y correctivo para que tu equipo funcione como nuevo.',
    prices: 'Desde $250 MXN para mantenimiento preventivo básico.',
    details: 'Incluye limpieza física y de software, optimización del sistema, eliminación de virus, respaldo de datos y mejoras de rendimiento.',
    keywords: ['pc', 'computadora', 'mantenimiento', 'limpieza', 'virus', 'laptop', 'escritorio']
  },
  'soporte': {
    name: 'Soporte Técnico',
    description: 'Asistencia técnica presencial y remota para resolver tus problemas tecnológicos.',
    prices: 'Diagnóstico sin costo. Los precios varían según la complejidad del problema.',
    details: 'Incluye resolución de problemas de hardware y software, configuración de redes, instalación de periféricos y soporte continuo.',
    keywords: ['soporte', 'ayuda', 'técnico', 'problema', 'falla', 'asistencia']
  },
  'software': {
    name: 'Instalación de Software',
    description: 'Instalación y configuración de todo tipo de programas y sistemas operativos.',
    prices: 'Desde $150 MXN por instalación básica.',
    details: 'Incluye instalación de Windows, drivers, impresoras, paquetería Office, antivirus y programas especializados.',
    keywords: ['software', 'windows', 'office', 'programa', 'instalación', 'driver', 'antivirus']
  },
  'it': {
    name: 'Asesoría IT',
    description: 'Te asesoramos para tomar las mejores decisiones tecnológicas para tu negocio.',
    prices: 'Consulta gratuita inicial. Los precios varían según el proyecto.',
    details: 'Incluye diagnóstico tecnológico, plan de transformación digital, optimización de procesos y estrategia de crecimiento.',
    keywords: ['asesoría', 'consultoría', 'it', 'estrategia', 'tecnología', 'negocio']
  }
};

// ===== DETECTAR SERVICIO POR PALABRAS CLAVE =====
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

// ===== ENDPOINT PRINCIPAL - PRIMERA LLAMADA =====
app.post('/voice', (req, res) => {
  console.log('📞 Llamada entrante a BioMey');
  
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
  
  // Si no responde
  twiml.say(
    `No te he escuchado. Puedes contactarnos por WhatsApp al ${companyInfo.phone} ` +
    `o visitar nuestra página web. ¡Gracias por llamar!`
  );
  
  res.type('text/xml');
  res.send(twiml.toString());
});

// ===== ENDPOINT PARA PROCESAR RESPUESTAS =====
app.post('/process-voice', (req, res) => {
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
  
  const lowerText = speechResult.toLowerCase();
  
  // ===== VERIFICAR SI QUIERE INFORMACIÓN GENERAL =====
  if (lowerText.includes('información') || lowerText.includes('quienes') || 
      lowerText.includes('que hacen') || lowerText.includes('que es')) {
    const gather = twiml.gather({
      input: 'speech',
      timeout: 5,
      speechTimeout: 'auto',
      action: '/process-voice',
      language: 'es-MX',
      enhanced: true,
    });
    gather.say(
      `${companyInfo.name} es ${companyInfo.description} ` +
      `Ofrecemos servicios de Desarrollo Web, Aplicaciones Móviles, Mantenimiento de PC, ` +
      `Soporte Técnico, Instalación de Software y Asesoría IT. ` +
      `¿Cuál de estos servicios te gustaría conocer más a fondo?`
    );
    res.type('text/xml').send(twiml.toString());
    return;
  }
  
  // ===== VERIFICAR SI QUIERE PRECIOS =====
  if (lowerText.includes('precio') || lowerText.includes('costo') || 
      lowerText.includes('cuánto') || lowerText.includes('cuesta')) {
    const gather = twiml.gather({
      input: 'speech',
      timeout: 5,
      speechTimeout: 'auto',
      action: '/process-voice',
      language: 'es-MX',
      enhanced: true,
    });
    gather.say(
      `Nuestros precios varían según el servicio. Por ejemplo, ` +
      `una landing page desde $2,500, una aplicación móvil desde $30,000, ` +
      `mantenimiento de PC desde $250 e instalación de software desde $150. ` +
      `¿Qué servicio te interesa para darte más detalles?`
    );
    res.type('text/xml').send(twiml.toString());
    return;
  }
  
  // ===== VERIFICAR SI QUIERE CONTACTAR =====
  if (lowerText.includes('contactar') || lowerText.includes('hablar') || 
      lowerText.includes('persona') || lowerText.includes('agendar')) {
    twiml.say(
      `Excelente. Puedes contactarnos por WhatsApp al ${companyInfo.phone} ` +
      `o enviarnos un correo a ${companyInfo.email}. ` +
      `También puedes visitar nuestra página web ${companyInfo.website}. ` +
      `¿Hay algo más en lo que pueda ayudarte?`
    );
    res.type('text/xml').send(twiml.toString());
    return;
  }
  
  // ===== DETECTAR SERVICIO ESPECÍFICO =====
  const detectedService = detectService(speechResult);
  
  if (detectedService && services[detectedService]) {
    const service = services[detectedService];
    const gather = twiml.gather({
      input: 'speech',
      timeout: 5,
      speechTimeout: 'auto',
      action: '/process-voice',
      language: 'es-MX',
      enhanced: true,
    });
    gather.say(
      `Excelente elección. ${service.name}. ` +
      `${service.description} ` +
      `Precios: ${service.prices} ` +
      `Detalles: ${service.details} ` +
      `¿Te gustaría más información sobre este servicio o prefieres que te contacte un asesor?`
    );
    res.type('text/xml').send(twiml.toString());
    return;
  }
  
  // ===== RESPUESTA POR DEFECTO =====
  const gather = twiml.gather({
    input: 'speech',
    timeout: 5,
    speechTimeout: 'auto',
    action: '/process-voice',
    language: 'es-MX',
    enhanced: true,
  });
  gather.say(
    `Entendido. Te recuerdo nuestros servicios: ` +
    `Desarrollo Web, Aplicaciones Móviles, Mantenimiento de PC, ` +
    `Soporte Técnico, Instalación de Software o Asesoría IT. ` +
    `¿Cuál te gustaría conocer más a fondo?`
  );
  
  twiml.say(
    `Si prefieres, puedes contactarnos por WhatsApp al ${companyInfo.phone}. ` +
    `¡Gracias por llamar a BioMey!`
  );
  
  res.type('text/xml');
  res.send(twiml.toString());
});

// ===== ENDPOINT DE SALUD =====
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Asistente BioMey funcionando' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🎙️ Asistente BioMey corriendo en puerto ${PORT}`);
  console.log(`📞 URL para Twilio: http://localhost:${PORT}/voice`);
});