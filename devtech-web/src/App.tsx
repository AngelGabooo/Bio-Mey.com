import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicioWeb from './pages/ServicioWeb';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/desarrollo-web" element={<ServicioWeb />} />
      </Routes>
    </Router>
  );
}

export default App;