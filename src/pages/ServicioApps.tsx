import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ServicioAppsHero from '../components/servicio-apps/ServicioAppsHero';
import ServicioAppsWhy from '../components/servicio-apps/ServicioAppsWhy';
import ServicioAppsBenefits from '../components/servicio-apps/ServicioAppsBenefits';
import ServicioAppsSolutions from '../components/servicio-apps/ServicioAppsSolutions';
import ServicioAppsPricing from '../components/servicio-apps/ServicioAppsPricing';
import ServicioAppsProcess from '../components/servicio-apps/ServicioAppsProcess';
import ServicioAppsTechnologies from '../components/servicio-apps/ServicioAppsTechnologies';
import ServicioAppsFAQ from '../components/servicio-apps/ServicioAppsFAQ';

const ServicioApps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white overflow-x-hidden">
      <Navbar />

      <main>
        <ServicioAppsHero />

        {/* ¿Qué es una aplicación? */}
        <ServicioAppsWhy />

        {/* Beneficios */}
        <ServicioAppsBenefits />

        {/* Tipos de aplicaciones */}
        <ServicioAppsSolutions />

        {/* Cotización personalizada */}
        <ServicioAppsPricing />

        {/* Proceso */}
        <ServicioAppsProcess />

        {/* Tecnologías */}
        <ServicioAppsTechnologies />

        {/* Preguntas frecuentes */}
        <ServicioAppsFAQ />
      </main>

      <Footer />
    </div>
  );
};

export default ServicioApps;