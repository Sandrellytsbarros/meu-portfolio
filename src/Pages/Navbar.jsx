import { Link } from "react-router-dom";
import ToggleTheme from '../Contexts/ToggleTheme';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/"><img src={process.env.PUBLIC_URL + "/logo-navbar.svg"} /></Link>
      </div>
      <div className="navbar--items">
        <ul>
          <li>
            <Link to="/" className="navbar--content">Home</Link>
          </li>
          <li>
            <Link to="/habilidades" className="navbar--content">Habilidades</Link>
          </li>
          <li>
            <Link to="/portfolio" className="navbar--content">Portfolio</Link>
          </li>
          <li>
            <ToggleTheme />  
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
