import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.tsx'

// ⚠️ TU MEASUREMENT ID
const GA_MEASUREMENT_ID = 'G-15CXBQ9HTG'

// Inicializar Google Analytics (solo en producción)
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(GA_MEASUREMENT_ID)
  console.log('✅ Google Analytics iniciado con ID:', GA_MEASUREMENT_ID)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)