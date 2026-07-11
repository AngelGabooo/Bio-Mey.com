// api/voice.js
const twilio = require('twilio');
const cors = require('cors');

// Inicializar el middleware de CORS para funciones nativas
const corsHandler = cors({ origin: true });

const companyInfo = {
  name: 'BioMey',
  description: 'Somos una agencia de soluciones digitales especializada en desarrollo web, aplicaciones móviles y servicios tecnológicos.',
  phone: '33 4981 2319',
  email: 'soporte-biomey-tux@outlook.com',
  website: 'https://bio-mey-com-five.vercel.app/'
};

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

function getBaseUrl(req) {
  const host = req.headers['x-forwarded-host'] || req.headers['host'];
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  return `${protocol}://${host}`;
}

function detectService(text) {
  const lowerText = text.toLowerCase();
  for (const [key, service] of Object.entries(services)) {
    for (const keyword of service.keywords) {
      if (lowerText.includes(keyword)) return key;
    }
  }
  return null;
}

// Handler nativo de Vercel
module.exports = async function (req, res) {
  // Ejecutar CORS de forma manual
  await new Promise((resolve) => corsHandler(req, res, resolve));

  const url = req.url || '';
  
  // ===== ENDPOINT: /health o /api/voice/health =====
  if (url.includes('/health')) {
    return res.status(200).json({ status: 'ok', message: 'Asistente BioMey funcionando nativamente' });
  }

  // ===== ENDPOINT: /test o /api/voice/test =====
  if (url.includes('/test')) {
    return res.status(200).json({
      message: 'Servidor nativo funcionando correctamente',
      time: new Date().toISOString(),
      status: 'ok'
    });
  }

  // ===== ENDPOINT: /process-voice =====
  if (url.includes('/process-voice') && req.method === 'POST') {
    const speechResult = req.body?.SpeechResult || '';
    const twiml = new twilio.twiml.VoiceResponse();
    const baseUrl = getBaseUrl(req);

    if (!speechResult) {
      const gather = twiml.gather({
        input: 'speech', timeout: 5, speechTimeout: 'auto',
        action: `${baseUrl}/process-voice`, language: 'es-MX', enhanced: true,
      });
      gather.say('No te he escuchado bien. ¿Puedes repetir qué servicio te interesa?');
      res.setHeader('Content-Type', 'text/xml');
      return res.status(200).send(twiml.toString());
    }

    const lowerText = speechResult.toLowerCase();

    if (lowerText.includes('información') || lowerText.includes('quienes') || lowerText.includes('que hacen') || lowerText.includes('que es')) {
      const gather = twiml.gather({
        input: 'speech', timeout: 5, speechTimeout: 'auto',
        action: `${baseUrl}/process-voice`, language: 'es-MX', enhanced: true,
      });
      gather.say(`${companyInfo.name} es ${companyInfo.description} ¿Cuál de nuestros servicios te gustaría conocer más a fondo?`);
      res.setHeader('Content-Type', 'text/xml');
      return res.status(200).send(twiml.toString());
    }

    if (lowerText.includes('precio') || lowerText.includes('costo') || lowerText.includes('cuánto') || lowerText.includes('cuesta')) {
      const gather = twiml.gather({
        input: 'speech', timeout: 5, speechTimeout: 'auto',
        action: `${baseUrl}/process-voice`, language: 'es-MX', enhanced: true,
      });
      gather.say(`Nuestros precios varían según el servicio. Por ejemplo, desarrollo web desde $2,500, mantenimiento de PC desde $250. ¿Qué servicio te interesa?`);
      res.setHeader('Content-Type', 'text/xml');
      return res.status(200).send(twiml.toString());
    }

    const detectedService = detectService(speechResult);
    if (detectedService && services[detectedService]) {
      const service = services[detectedService];
      const gather = twiml.gather({
        input: 'speech', timeout: 5, speechTimeout: 'auto',
        action: `${baseUrl}/process-voice`, language: 'es-MX', enhanced: true,
      });
      gather.say(`Excelente elección. ${service.name}. Precios: ${service.prices} ¿Te gustaría más información o prefieres que te contacte un asesor?`);
      res.setHeader('Content-Type', 'text/xml');
      return res.status(200).send(twiml.toString());
    }

    const gather = twiml.gather({
      input: 'speech', timeout: 5, speechTimeout: 'auto',
      action: `${baseUrl}/process-voice`, language: 'es-MX', enhanced: true,
    });
    gather.say(`Entendido. Te recuerdo nuestros servicios: Desarrollo Web, Aplicaciones Móviles, Mantenimiento de PC, Soporte Técnico, Instalación de Software o Asesoría IT. ¿Cuál te gustaría conocer?`);
    res.setHeader('Content-Type', 'text/xml');
    return res.status(200).send(twiml.toString());
  }

  // ===== ENDPOINT PRINCIPAL: /voice (POST) =====
  if (req.method === 'POST') {
    const twiml = new twilio.twiml.VoiceResponse();
    const baseUrl = getBaseUrl(req);

    const gather = twiml.gather({
      input: 'speech', timeout: 5, speechTimeout: 'auto',
      action: `${baseUrl}/process-voice`, language: 'es-MX', enhanced: true,
    });

    gather.say(
      `¡Hola! Bienvenido a ${companyInfo.name}. ¿En qué servicio te gustaría que te ayudemos hoy? ` +
      `Puedes decir: Desarrollo Web, Aplicaciones Móviles, Mantenimiento de PC, Soporte Técnico, Instalación de Software o Asesoría IT.`
    );

    twiml.say(`No te he escuchado. Puedes contactarnos por WhatsApp al ${companyInfo.phone}. ¡Gracias por llamar!`);
    res.setHeader('Content-Type', 'text/xml');
    return res.status(200).send(twiml.toString());
  }

  // Fallback por defecto si entran por GET a la raíz del archivo
  return res.status(200).json({ status: 'ok', message: 'Backend Nativo de BioMey activo en Vercel' });
};