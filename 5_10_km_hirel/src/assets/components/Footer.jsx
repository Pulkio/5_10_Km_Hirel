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
