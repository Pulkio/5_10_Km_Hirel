import React, { useState, useEffect } from 'react';

/**
 * Composant Header ULTRA-MODERNE pour l'en-tête du site.
 * Design contemporain avec glassmorphism, animations fluides et micro-interactions.
 * Menu burger adaptatif avec transitions fluides et effets visuels avancés.
 * VERSION OPTIMISÉE - Sans logo + Boutons navigation plus visibles
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Gestion du scroll pour les effets visuels avancés
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gestion du breakpoint personnalisé à 1525px
  useEffect(() => {
    const handleResize = () => {
      const shouldShowBurger = window.innerWidth < 1525;
      setShowBurgerMenu(shouldShowBurger);
      
      if (window.innerWidth >= 1525) {
        setIsMobileMenuOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effet parallaxe subtil au survol
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#epreuves", text: "Épreuves", icon: "🏃🏻" },
    { href: "#infos", text: "Infos pratiques", icon: "📍" },
    { href: "#photos", text: "Photos & Résultats", icon: "📸" },
    { href: "#partenaires", text: "Partenaires", icon: "🤝" }
  ];

  return (
    <>
      {/* Header avec effet glassmorphism et animations */}
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${isScrolled 
            ? 'backdrop-blur-2xl bg-gradient-to-r from-[color:var(--color-bleu)]/95 via-[color:var(--color-bleu)]/90 to-[color:var(--color-bleu)]/95 shadow-2xl border-b border-white/10' 
            : 'bg-gradient-to-br from-[color:var(--color-bleu)] via-blue-600 to-[color:var(--color-bleu)] shadow-xl'
          }
        `}
        style={{
          background: isScrolled 
            ? undefined 
            : `linear-gradient(135deg, var(--color-bleu) 0%, #1e40af 50%, var(--color-bleu) 100%),
               radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}
      >
        {/* Effet de grain et texture */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        {/* Container principal */}
        <div className="relative w-full px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-4 md:py-6">
            
            {/* ✅ TITRE SEUL - Sans logo H */}
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-none">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  5 & 10 Km
                </span>{' '}
                <span className="text-[color:var(--color-jaune)] font-extrabold">
                  d'Hirel
                </span>
              </h1>
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-sm md:text-base lg:text-lg font-semibold text-white/90">
                  Course nature
                </span>
                <div className="w-1 h-1 bg-[color:var(--color-jaune)] rounded-full animate-pulse"></div>
                <span className="text-sm md:text-base lg:text-lg font-semibold text-[color:var(--color-jaune)]">
                  3 août 2025
                </span>
              </div>
            </div>

            {/* ✅ NAVIGATION DESKTOP ULTRA-VISIBLE */}
            {!showBurgerMenu && (
              <nav className="flex items-center">
                <div className="flex items-center space-x-3 lg:space-x-4 p-3 rounded-2xl backdrop-blur-xl bg-white/20 border-2 border-white/30 shadow-2xl">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="group relative flex items-center space-x-3 px-6 lg:px-8 py-4 lg:py-5 rounded-xl bg-gradient-to-r from-[color:var(--color-jaune)] to-yellow-400 text-[color:var(--color-bleu)] font-bold text-base lg:text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-jaune)] whitespace-nowrap border-2 border-yellow-300/50"
                      style={{
                        textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                      }}
                    >
                      {/* Icône avec animation */}
                      <span className="text-xl lg:text-2xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="group-hover:text-blue-800 transition-colors duration-300 font-extrabold">
                        {link.text}
                      </span>
                      
                      {/* Effet de brillance au survol */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Ombre interne pour l'effet 3D */}
                      <div className="absolute inset-0 rounded-xl shadow-inner opacity-30"></div>
                    </a>
                  ))}
                </div>
              </nav>
            )}

            {/* Bouton Menu Burger Ultra-moderne */}
            {showBurgerMenu && (
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-2xl bg-gradient-to-br from-[color:var(--color-jaune)] to-yellow-400 text-[color:var(--color-bleu)] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-jaune)] group border-2 border-yellow-300/50"
                aria-label="Ouvrir le menu"
              >
                {/* Icône burger animée - Plus grosse */}
                <div className="flex flex-col space-y-2 group-hover:space-y-2.5 transition-all duration-300">
                  <div className="w-6 h-1 bg-[color:var(--color-bleu)] rounded-full group-hover:w-7 transition-all duration-300"></div>
                  <div className="w-5 h-1 bg-[color:var(--color-bleu)] rounded-full group-hover:w-7 transition-all duration-300"></div>
                  <div className="w-6 h-1 bg-[color:var(--color-bleu)] rounded-full group-hover:w-7 transition-all duration-300"></div>
                </div>
                
                {/* Effet de halo */}
                <div className="absolute inset-0 rounded-2xl bg-[color:var(--color-jaune)] opacity-30 blur-lg scale-110 group-hover:scale-125 transition-transform duration-500"></div>
              </button>
            )}
          </div>
        </div>

        {/* Barre de progression au scroll */}
        <div 
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[color:var(--color-jaune)] to-yellow-400 transition-all duration-300 ease-out"
          style={{ 
            width: isScrolled ? '100%' : '0%',
            opacity: isScrolled ? 1 : 0
          }}
        />
      </header>

      {/* ✅ MENU MOBILE ULTRA-MODERNE - Sans logo H */}
      {showBurgerMenu && (
        <div className={`fixed inset-0 z-50 transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'backdrop-blur-xl' : 'pointer-events-none'
        }`}>
        
          {/* Background overlay avec effet */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-black/60 via-[color:var(--color-bleu)]/40 to-black/60 transition-all duration-500 ${
              isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        
          {/* Menu panel moderne */}
          <div className={`absolute right-0 top-0 h-full w-full max-w-sm transition-all duration-500 ease-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            
            {/* Panel avec glassmorphism */}
            <div className="h-full backdrop-blur-2xl bg-gradient-to-br from-[color:var(--color-bleu)]/95 via-blue-600/90 to-[color:var(--color-bleu)]/95 border-l border-white/10 shadow-2xl">
              
              {/* Header du menu - Sans logo H */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[color:var(--color-jaune)] to-yellow-400 bg-clip-text text-transparent">
                  🏃‍♂️ Navigation
                </h2>
                
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[color:var(--color-jaune)] to-yellow-400 text-[color:var(--color-bleu)] hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[color:var(--color-jaune)]"
                  aria-label="Fermer le menu"
                >
                  <svg className="w-6 h-6 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ✅ NAVIGATION MOBILE ULTRA-VISIBLE */}
              <nav className="flex-1 pt-8 pb-8 px-6">
                <ul className="space-y-5">
                  {navLinks.map((link, index) => (
                    <li 
                      key={index}
                      className="transform transition-all duration-300 ease-out"
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: isMobileMenuOpen ? 'slideInRight 0.5s ease-out forwards' : undefined
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={handleLinkClick}
                        className="group flex items-center space-x-4 w-full px-6 py-5 rounded-2xl bg-gradient-to-r from-[color:var(--color-jaune)] to-yellow-400 text-[color:var(--color-bleu)] font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white border-2 border-yellow-300/50"
                        style={{
                          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                        }}
                      >
                        <span className="text-3xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                          {link.icon}
                        </span>
                        <span className="flex-1 group-hover:text-blue-800 transition-colors duration-300 font-extrabold">
                          {link.text}
                        </span>
                        
                        {/* Flèche avec animation */}
                        <svg className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        
                        {/* Effet de brillance */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer du menu moderne */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 backdrop-blur-xl bg-white/5">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-white/90">
                    <span className="text-2xl">📅</span>
                    <div>
                      <p className="font-bold text-[color:var(--color-jaune)]">Dimanche 3 août 2025</p>
                      <p className="text-sm opacity-80">Prochaine édition</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-white/90">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-bold text-[color:var(--color-jaune)]">Hirel, Baie du Mont Saint-Michel</p>
                      <p className="text-sm opacity-80">Bretagne, France</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes pour les animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>

      {/* Spacer pour compenser le header fixe */}
      <div className="h-20 md:h-24 lg:h-28"></div>
    </>
  );
};

export default Header;
