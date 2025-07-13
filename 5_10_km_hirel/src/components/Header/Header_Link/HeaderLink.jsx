import { Link } from 'react-router-dom';
import './HeaderLink.css';

const HeaderLink = ({ to, children, onClick, active }) => {
  return (
    <Link
      to={to}
      className={`header-link ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
