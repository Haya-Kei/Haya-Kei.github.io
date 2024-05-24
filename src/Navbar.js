import "./styles/Navbar.css"

function Navbar() {
    return (
    <header>
    <nav className="wrap-header--padding">
    <nav className="main-navigation">
      <div className="main-navigation_title">
        <a className="h6" href="#home">Kei_1</a>
      </div>
      <div className="main-navigation_menu">
        <ol>
          <li className="h6"><a href="#home">Home</a></li>
          <li className="h6"><a href="#projects">Projects</a></li>
          <li className="h6"><a href="#info">Info</a></li>
          <li className="h6"><a href="#contact">Contact</a></li>
          <li className="h6"><a href="#faq">FAQ</a></li>
        </ol>
      </div>
    </nav>
    <div className="scroller"></div>
    </nav>
    </header>
    );
}

export default Navbar;
