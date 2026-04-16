import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/">
          KEI
        </Link>
        <nav className="site-header__nav">
          <Link to="/gallery">Gallery</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
