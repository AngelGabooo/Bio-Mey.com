import { useEffect } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import ServicioMantenimientoHero from '../components/servicio-mantenimiento/ServicioMantenimientoHero';
import ServicioMantenimientoWhy from '../components/servicio-mantenimiento/ServicioMantenimientoWhy';
import ServicioMantenimientoServices from '../components/servicio-mantenimiento/ServicioMantenimientoServices';
import ServicioMantenimientoOffice from '../components/servicio-mantenimiento/ServicioMantenimientoOffice';
import ServicioMantenimientoPackages from '../components/servicio-mantenimiento/ServicioMantenimientoPackages';
import ServicioMantenimientoPricing from '../components/servicio-mantenimiento/ServicioMantenimientoPricing';
import ServicioMantenimientoBrands from '../components/servicio-mantenimiento/ServicioMantenimientoBrands';

const ServicioMantenimiento = () => {
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
        <ServicioMantenimientoHero />

        {/* Importancia del mantenimiento preventivo y correctivo */}
        <ServicioMantenimientoWhy />

        {/* Servicios principales */}
        <ServicioMantenimientoServices />

        {/* Instalación de Office y programas */}
        <ServicioMantenimientoOffice />

        {/* Paquetes sin precio fijo */}
        <ServicioMantenimientoPackages />

        {/* Precios según diagnóstico */}

        {/* Marcas que atendemos */}
        <ServicioMantenimientoBrands />
                <ServicioMantenimientoPricing />

      </main>

      <Footer />
    </div>
  );
};

export default ServicioMantenimiento;