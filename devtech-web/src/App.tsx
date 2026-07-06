import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Home from './pages/Home';
import ServicioWeb from './pages/ServicioWeb';
import ServicioApps from './pages/ServicioApps';
import ServicioMantenimiento from './pages/ServicioMantenimiento';
import ServicioSoporte from './pages/ServicioSoporte';
import ServicioSoftware from './pages/ServicioSoftware';
import ServicioEnConstruccion from './pages/ServicioEnConstruccion';
import Technologies from './pages/Technologies';
import Nosotros from './pages/Nosotros';
import WhatsAppButton from './components/WhatsAppButton';
import AvisoPrivacidad from './pages/AvisoPrivacidad';
import TerminosCondiciones from './pages/TerminosCondiciones';

// Componente para trackear cambios de ruta
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // Solo trackear en producción
    if (process.env.NODE_ENV === 'production') {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
      console.log(`📊 Vista: ${location.pathname}`);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteTracker />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Servicios activos */}
        <Route path="/servicios/desarrollo-web" element={<ServicioWeb />} />
        <Route path="/servicios/aplicaciones-moviles" element={<ServicioApps />} />
        <Route path="/servicios/mantenimiento-pc" element={<ServicioMantenimiento />} />
        <Route path="/servicios/soporte-tecnico" element={<ServicioSoporte />} />
        <Route path="/servicios/instalacion-software" element={<ServicioSoftware />} />
        
        {/* Servicios en construcción */}
        <Route path="/servicios/formateo-flasheo" element={<ServicioEnConstruccion />} />
        <Route path="/servicios/asesoria-it" element={<ServicioEnConstruccion />} />
        <Route path="/servicios/tramites-digitales" element={<ServicioEnConstruccion />} />
        
        {/* Páginas adicionales */}
        <Route path="/tecnologias" element={<Technologies />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
        <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
      </Routes>
    </Router>
  );
}

export default App;