import { Link } from 'react-router-dom';
import './HeaderLink.css';

const HeaderLink = ({ to, children }) => {
  return (
    <Link to={to} className="header-link">
      {children}
    </Link>
  );
};

export default HeaderLink;
