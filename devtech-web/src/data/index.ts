import type { NavLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '#' },
  { label: 'Tecnologías', href: '/tecnologias' },  // ← Ruta a la página de tecnologías
  { label: 'Nosotros', href: '/nosotros' },        // ← Ruta a la página de nosotros
  { label: 'Contacto', href: 'https://wa.me/528144384806' }, // ← WhatsApp
];

// Servicios para el dropdown del navbar
export const serviceLinks = [
  { label: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
  { label: 'Aplicaciones Móviles', href: '/servicios/aplicaciones-moviles' },
  { label: 'Mantenimiento de PC', href: '/servicios/mantenimiento-pc' },
  { label: 'Soporte Técnico', href: '/servicios/soporte-tecnico' },
  { label: 'Trámites Digitales', href: '/servicios/tramites-digitales' },
  { label: 'Asesoría IT', href: '/servicios/asesoria-it' },
  { label: 'Instalación de Software', href: '/servicios/instalacion-software' },
  { label: 'Formateo y Flasheo', href: '/servicios/formateo-flasheo' },
];