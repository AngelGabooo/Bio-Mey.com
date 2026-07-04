import type { NavLink } from '../types';

export const navLinks: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '#' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

// Servicios para el dropdown del navbar
export const serviceLinks = [
  { label: 'Desarrollo Web', href: '/servicios/desarrollo-web' },
  { label: 'Aplicaciones Móviles', href: '/servicios/aplicaciones-moviles' },
  { label: 'Mantenimiento de PC', href: '/servicios/mantenimiento-pc' },
  { label: 'Soporte Técnico', href: '/servicios/soporte-tecnico' },
  { label: 'Trámites Digitales', href: '/servicios/tramites-digitales' },
  { label: 'Asesoría IT', href: '/servicios/asesoria-it' },
  { label: 'Instalación de Software', href: '/servicios/instalacion-software' },  // ← Agregar
  { label: 'Formateo y Flasheo', href: '/servicios/formateo-flasheo' },
];