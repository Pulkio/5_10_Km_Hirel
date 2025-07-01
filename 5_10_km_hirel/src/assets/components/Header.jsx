import React, { useState, useEffect } from 'react';

/**
 * Composant Header pour l'en-tête du site.
 * Inclut un menu burger responsive et une navigation optimisée.
 * Menu burger maintenant actif en dessous de 1525px de largeur avec icône responsive.
 * Boutons de navigation parfaitement centrés verticalement par rapport au titre.
 * @returns {JSX.Element} - Élément JSX représentant l'en-tête du site.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  // Gestion du scroll pour les effets visuels
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du breakpoint personnalisé à 1525px
  useEffect(() => {
    const handleResize = () => {
      const shouldShowBurger = window.innerWidth < 1525;
      setShowBurgerMenu(shouldShowBurger);
      
      // Ferme le menu mobile si on passe au-dessus de 1525px
      if (window.innerWidth >= 1525) {
        setIsMobileMenuOpen(false);
      }
    };
    
    // Vérification initiale
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fonction pour fermer le menu mobile lors du clic sur un lien
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Configuration des liens de navigation
  const navLinks = [
    { href: "#epreuves", text: "Épreuves" },
    { href: "#infos", text: "Infos pratiques" },
    { href: "#photos", text: "Photos & Résultats" },
    { href: "#partenaires", text: "Partenaires" }
  ];

  return (
    <>
      <header className="bg-[color:var(--color-bleu)] text-white py-6 md:py-8 shadow-md w-full transition-all duration-300 relative z-50">
        {/* Container sans mx-auto pour éviter le centrage automatique */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Flex container avec alignement vertical parfait */}
          <div className="flex items-center justify-between w-full">
            
            {/* Titre principal - Vraiment collé à gauche maintenant */}
            <div className="flex flex-col items-start text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-1 text-white drop-shadow-lg leading-tight whitespace-nowrap">
                5 & 10 km d'Hirel
              </h1>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white opacity-90 block">
                Dimanche 3 août 2025
              </span>
            </div>

            {/* Navigation Desktop - Visible seulement si largeur >= 1525px */}
            {!showBurgerMenu && (
              <nav className="flex items-center h-full">
                <ul className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
                  {navLinks.map((link, index) => (
                    <li key={index} className="flex items-center">
                      <a
                        href={link.href}
                        className="inline-flex items-center justify-center px-3 md:px-4 lg:px-6 xl:px-8 py-3 md:py-3 lg:py-4 xl:py-5 rounded-full bg-[color:var(--color-jaune)] text-[color:var(--color-bleu)] text-xs md:text-sm lg:text-base xl:text-lg font-bold shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-transform duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[color:var(--color-jaune)] whitespace-nowrap min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] xl:min-h-[4.5rem]"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}

            {/* Bouton Menu Burger - Visible seulement si largeur < 1525px */}
            {showBurgerMenu && (
              <div className="flex items-center h-full">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="flex items-center justify-center p-3 md:p-4 lg:p-5 xl:p-6 rounded-lg bg-[color:var(--color-jaune)] text-[color:var(--color-bleu)] hover:bg-yellow-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-jaune)] shadow-md hover:shadow-lg"
                  aria-label="Ouvrir le menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {/* Icône burger responsive */}
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Menu Mobile en overlay - Affiché seulement si showBurgerMenu est true */}
      {showBurgerMenu && (
        <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        
          {/* Menu panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-[color:var(--color-bleu)] shadow-xl flex flex-col">
          
            {/* En-tête du menu avec bouton fermer */}
            <div className="flex items-center justify-between p-6 border-b border-white border-opacity-20">
              <h2 className="text-2xl font-bold text-[color:var(--color-jaune)]">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center p-2 rounded-lg bg-[color:var(--color-jaune)] text-[color:var(--color-bleu)] hover:bg-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-jaune)]"
                aria-label="Fermer le menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation mobile */}
            <nav className="flex-1 pt-8 pb-8">
              <ul className="space-y-4 px-6">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center justify-center w-full px-6 py-4 text-center bg-[color:var(--color-jaune)] text-[color:var(--color-bleu)] text-lg font-bold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-jaune)] transform"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Informations supplémentaires dans le menu mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white border-opacity-20">
              <div className="text-left text-white opacity-80">
                <p className="text-sm mb-2">📅 Dimanche 3 août 2025</p>
                <p className="text-sm">📍 Hirel, Baie du Mont Saint-Michel</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
