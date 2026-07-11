import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PhoneAssistant from '../components/organisms/PhoneAssistant'; // ← IMPORTAR EL ASISTENTE

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Servicios */}
        <Services />

        {/* Tecnologías */}
        <Technologies />

        {/* Estadísticas */}
        <Stats />

        {/* Testimonios */}
        <Testimonials />

        {/* Preguntas frecuentes */}
        <FAQ />

        {/* Contacto */}
        <Contact />

        {/* ⭐ ASISTENTE TELEFÓNICO CON IA ⭐ */}
        <PhoneAssistant />

      </main>

      <Footer />
    </div>
  );
};

export default Home;