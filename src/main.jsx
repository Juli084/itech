import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import App from './App.jsx'
import Tanks from './pages/Thanks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/obrigado" element={<Tanks />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
