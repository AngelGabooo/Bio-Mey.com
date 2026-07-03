import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicioWeb from './pages/ServicioWeb';
import ServicioApps from './pages/ServicioApps';
import ServicioMantenimiento from './pages/ServicioMantenimiento';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/desarrollo-web" element={<ServicioWeb />} />
        <Route path="/servicios/aplicaciones-moviles" element={<ServicioApps />} />
        <Route path="/servicios/mantenimiento-pc" element={<ServicioMantenimiento />} />
      </Routes>
    </Router>
  );
}

export default App;