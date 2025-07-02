import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import InfosPratiques from './InfosPratiques';
import './index.css';

// Point d'entrée de l'application avec routage
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/infos" element={<InfosPratiques />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
