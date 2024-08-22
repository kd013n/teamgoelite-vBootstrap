import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.tsx'
import './assets/css/index.css'
import DashboardCarousel from './DashboardCarousel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <DashboardCarousel />
    
  </StrictMode>,
)
