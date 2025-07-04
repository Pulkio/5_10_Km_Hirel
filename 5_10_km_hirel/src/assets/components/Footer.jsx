

/**
 * ===============================
 * Footer.jsx — Pied de page commun du site
 * ===============================
 *
 * Rôle :
 * - Affiché en bas de toutes les pages principales (Accueil, InfosPratiques, etc.)
 * - Contient le copyright
 *
 * Liens avec les autres fichiers :
 * - Importé dans Accueil.jsx, InfosPratiques.jsx, PhotosResultats.jsx, Remerciements.jsx
 * - Utilise les couleurs CSS définies dans variables.css
 */

import React from 'react';

/**
 * Composant Footer pour le pied de page du site.
 * @returns {JSX.Element} - Élément JSX représentant le pied de page du site.
 */
const Footer = () => {
  return (
    <footer className="bg-[color:var(--color-vert)] text-white p-4">
      <div className="container mx-auto text-center">
        {/* Texte du pied de page */}
        <p>&copy; {new Date().getFullYear()} 5&10km d'Hirel. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
