import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicioSoftwareHero from '../components/servicio-software/ServicioSoftwareHero';
import ServicioSoftwareServices from '../components/servicio-software/ServicioSoftwareServices';
import ServicioSoftwareSoftware from '../components/servicio-software/ServicioSoftwareSoftware';

const ServicioSoftware = () => {
  return (
    <div className="min-h-screen bg-[#0a0a14]">
      <Navbar />
      <ServicioSoftwareHero />
      <ServicioSoftwareServices />
      <ServicioSoftwareSoftware />
      <Footer />
    </div>
  );
};

export default ServicioSoftware;