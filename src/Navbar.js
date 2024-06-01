import "./styles/Navbar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
    return (
    <header className="navigation-wrapper">
      <nav className="wrap-header--padding">
        <nav className="main-navigation">
          <div className="main-navigation_title">
            <a className="h6" href="#home">Kei_1</a>
          </div>
          <div className="main-navigation_menu">
            <ol>
              <li className="h6"><AnchorLink href="#home">Home</AnchorLink></li>
              <li className="h6"><AnchorLink href="#projects">Projects</AnchorLink></li>
              <li className="h6"><AnchorLink href="#info">Info</AnchorLink></li>
              <li className="h6"><AnchorLink href="#contact">Contact</AnchorLink></li>
              <li className="h6"><AnchorLink href="#faq">FAQ</AnchorLink></li>
            </ol>
          </div>
        </nav>
        <div className="scroller"></div>
      </nav>
    </header>
    );
}

export default Navbar;
