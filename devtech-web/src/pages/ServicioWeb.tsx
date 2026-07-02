import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ServicioWebHero from '../components/servicio-web/ServicioWebHero';
import ServicioWebWhy from '../components/servicio-web/ServicioWebWhy';
import ServicioWebIncludes from '../components/servicio-web/ServicioWebIncludes';
import ServicioWebPricing from '../components/servicio-web/ServicioWebPricing';
import ServicioWebProcess from '../components/servicio-web/ServicioWebProcess';
import ServicioWebTechnologies from '../components/servicio-web/ServicioWebTechnologies';
import ServicioWebFAQ from '../components/servicio-web/ServicioWebFAQ';

const ServicioWeb = () => {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white overflow-x-hidden">
      <Navbar />

      <main>

        {/* Hero */}
        <ServicioWebHero />

        {/* ¿Por qué elegirnos? */}
        <ServicioWebWhy />

        {/* ¿Qué incluye una página web? */}
        <ServicioWebIncludes />

        {/* Paquetes y precios */}
        <ServicioWebPricing />

        {/* Nuestro proceso */}
        <ServicioWebProcess />

        {/* Tecnologías */}
        <ServicioWebTechnologies />

        {/* Preguntas frecuentes */}
        <ServicioWebFAQ />

      </main>

      <Footer />
    </div>
  );
};

export default ServicioWeb;