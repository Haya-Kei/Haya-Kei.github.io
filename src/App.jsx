import { BrowserRouter,  } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Info from "./components/Info.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import FAQ from "./components/FAQ.jsx";
import "./styles/App.css";
import "./styles/Info.css";

function App() {
    return (
        <BrowserRouter>
              <div id="body">
                  <div className="cursor">
                    <div className="main-wrapper">
                      <Navbar />
                      <div id="home"><Home /></div>
                      <div id="projects"><Projects /></div>
                      <div id="info"><Info /></div>
                      <div id="contact"><Contact /></div>
                      <div id="faq"><FAQ /></div>
                    </div>
                  </div>
              </div>
        </BrowserRouter>
    );
}

export default App;
