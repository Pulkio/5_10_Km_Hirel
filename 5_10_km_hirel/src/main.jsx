/**
 * ===============================
 * main.jsx — Point d'entrée principal de l'application React
 * ===============================
 *
 * Rôle :
 * - Monte l'application React dans la page HTML (div#root)
 * - Gère le routage entre les pages principales (Accueil, InfosPratiques, PhotosResultats, Remerciements)
 * - Importe le CSS global (index.css)
 *
 * Liens avec les autres fichiers :
 * - Importe tous les composants/pages principaux du site
 * - index.css importe toutes les feuilles de style globales et utilitaires
 *
 * Pour ajouter une nouvelle page, ajouter une nouvelle <Route> ici !
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './Accueil'; // Page d'accueil
import InfosPratiques from './InfosPratiques'; // Page infos pratiques
import PhotosResultats from './PhotosResultats'; // Page photos & résultats
import Remerciements from './Remerciements'; // Page partenaires/remerciements
import './styles/index.css'; // CSS global (importe toutes les autres feuilles)

// Point d'entrée de l'application avec routage React Router
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
        <Route path="/partenaires" element={<Remerciements />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
