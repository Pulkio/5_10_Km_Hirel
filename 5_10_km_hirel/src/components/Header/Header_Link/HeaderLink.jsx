import { Link } from 'react-router-dom';
import './HeaderLink.css';

const HeaderLink = ({ to, children, onClick }) => {
  return (
    <Link to={to} className="header-link" onClick={onClick}>
      {children}
    </Link>
  );
};

export default HeaderLink;
