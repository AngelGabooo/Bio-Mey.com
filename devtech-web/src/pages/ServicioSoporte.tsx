import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicioSoporteHero from '../components/servicio-soporte/ServicioSoporteHero';
import ServicioSoporteWhy from '../components/servicio-soporte/ServicioSoporteWhy';
import ServicioSoporteServices from '../components/servicio-soporte/ServicioSoporteServices';
import ServicioSoporteProcess from '../components/servicio-soporte/ServicioSoporteProcess';
import ServicioSoporteFAQ from '../components/servicio-soporte/ServicioSoporteFAQ';
import ServicioSoportePricing from '../components/servicio-soporte/ServicioSoportePricing';

const ServicioSoporte = () => {
  return (
    <div className="min-h-screen bg-[#0a0a14]">
      <Navbar />
      <ServicioSoporteHero />
      <ServicioSoporteWhy />
      <ServicioSoporteServices />
      <ServicioSoporteProcess />
      <ServicioSoportePricing />
      <ServicioSoporteFAQ />
      <Footer />
    </div>
  );
};

export default ServicioSoporte;