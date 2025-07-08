import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HeaderLink from './Header_Link/HeaderLink';
import logo from '../../assets/logos/SiteLogoWhite.svg';
import { X, Menu } from 'lucide-react'; // optional, replace with your icon system

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        <div className="desktop-links headerLinkContainer">
          <HeaderLink to="/infos">Infos pratiques</HeaderLink>
          <HeaderLink to="/photos">Photos et Résultats</HeaderLink>
          <HeaderLink to="/partenaires">Partenaires</HeaderLink>
        </div>
        <div className="burger-icon" onClick={() => setIsMenuOpen(true)}>
          <Menu size={32} color="white" />
        </div>
      </header>

      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="close-icon" onClick={closeMenu}>
            <X size={36} color="white" />
          </div>
          <div className="mobile-links">
            <HeaderLink to="/" onClick={closeMenu}>Accueil</HeaderLink>
            <HeaderLink to="/infos" onClick={closeMenu}>Infos pratiques</HeaderLink>
            <HeaderLink to="/photos" onClick={closeMenu}>Photos et Résultats</HeaderLink>
            <HeaderLink to="/partenaires" onClick={closeMenu}>Partenaires</HeaderLink>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
