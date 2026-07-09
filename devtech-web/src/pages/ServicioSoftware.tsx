import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicioSoftwareHero from '../components/servicio-software/ServicioSoftwareHero';
import ServicioSoftwareServices from '../components/servicio-software/ServicioSoftwareServices';
import ServicioSoftwareSoftware from '../components/servicio-software/ServicioSoftwareSoftware';
import ServicioSoftwareProcess from '../components/servicio-software/ServicioSoftwareProcess';

const ServicioSoftware = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a14]">
      <Navbar />
      <ServicioSoftwareHero />
      <ServicioSoftwareServices />
      <ServicioSoftwareSoftware />
      <ServicioSoftwareProcess />
      <Footer />
    </div>
  );
};

export default ServicioSoftware;