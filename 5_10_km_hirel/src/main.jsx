import React from 'react';
import ReactDOM from 'react-dom/client';
import Accueil from './Accueil';
import './index.css';

/**
 * Point d'entrée de l'application.
 * Rend le composant App dans le DOM.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>
);
