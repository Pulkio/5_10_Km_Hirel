import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil'; 
import InfosPratiques from './InfosPratiques'; 
import PhotosResultats from './PhotosResultats'; 
import Partenaires from './Partenaires'; 
import './styles/index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Route principale (accueil) */}
        <Route path="/" element={<Accueil />} />
        {/* Route infos pratiques */}
        <Route path="/infos" element={<InfosPratiques />} />
        {/* Route photos & résultats */}
        <Route path="/photos" element={<PhotosResultats />} />
        {/* Route partenaires/remerciements */}
        <Route path="/partenaires" element={<Partenaires />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
