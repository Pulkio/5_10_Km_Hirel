import { Link } from 'react-router-dom';
import './Header.css'
import HeaderLink from './Header_Link/HeaderLink';

const Header = () => {
    return (
        <header>
            <HeaderLink to="/infos">Infos pratiques</HeaderLink>
            <HeaderLink to="/photos">Photos et Résultats</HeaderLink>
            <HeaderLink to="/partenaires">Partenaires</HeaderLink>
        </header>
    )
};

export default Header;
