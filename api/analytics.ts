// api/analytics.ts
export default async function handler(_req: any, res: any) {
  try {
    const analyticsId = (globalThis as any).process?.env?.ANALYTICS_ID || 'G-8KVE4XQ0QQ';
    
    res.status(200).json({
      status: 'ok',
      message: 'Analytics endpoint activo',
      analyticsId: analyticsId
    });
  } catch (error: any) {
    res.status(500).json({ 
      status: 'error', 
      message: error.message || 'Error interno en el servidor' 
    });
  }
}