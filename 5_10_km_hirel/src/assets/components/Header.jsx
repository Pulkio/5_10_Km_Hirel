import React, { useState, useEffect } from 'react';

/**
 * Composant Header pour l'en-tête du site.
 * @returns {JSX.Element} - Élément JSX représentant l'en-tête du site.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={"bg-[color:var(--color-bleu)] text-white py-8 shadow-md w-full transition-all duration-300"}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        {/* Titre principal */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1 w-full">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-0 text-white drop-shadow-lg" style={{letterSpacing: '0.01em', lineHeight: 1}}>
            5 & 10 km d'Hirel
          </h1>
          <span className="text-2xl md:text-3xl font-bold text-white opacity-90 mt-0 block">Dimanche 3 août 2025</span>
        </div>
        {/* Navigation avec boutons plus sobres */}
        <nav className="w-full md:w-auto flex justify-center md:justify-end mt-2 md:mt-0">
          <ul className="flex flex-row gap-4 md:gap-6">
            <li>
              <a
                href="#epreuves"
                className="px-5 py-1.5 rounded-full bg-[color:var(--color-jaune)] text-[color:var(--color-bleu)] text-base font-bold shadow-md hover:bg-[color:var(--color-vert)] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-vert)]"
              >
                Épreuves
              </a>
            </li>
            <li>
              <a
                href="#infos"
                className="px-5 py-1.5 rounded-full bg-[color:var(--color-jaune)] text-[color:var(--color-bleu)] text-base font-bold shadow-md hover:bg-[color:var(--color-vert)] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-vert)]"
              >
                Infos pratiques
              </a>
            </li>
            <li>
              <a
                href="#partenaires"
                className="px-5 py-1.5 rounded-full bg-[color:var(--color-jaune)] text-[color:var(--color-bleu)] text-base font-bold shadow-md hover:bg-[color:var(--color-vert)] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-vert)]"
              >
                Partenaires
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
