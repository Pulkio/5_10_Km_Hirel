import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Accueil from './Accueil';

/**
 * Composant principal de l'application.
 * @returns {JSX.Element} - Élément JSX représentant l'application.
 */


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* En-tête du site */}
      <Header />
      {/* Contenu principal */}
      <Accueil />
      {/* Pied de page */}
      <Footer />
    </div>
  );
};


export default App;
