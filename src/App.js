import { BrowserRouter,  } from "react-router-dom";
import Navbar from "./Navbar.js";
import Projects from "./Projects.js";
import Info from "./Info.jsx";
import Contact from "./Contact.js";
import Home from "./Home.js";
import FAQ from "./FAQ.js";
import "./styles/App.css";
import "./styles/Info.css";
import SmoothScroll from './SmoothScroll.js';
import "./styles/locomotive-scroll master.css";

function App() {
    return (
        <BrowserRouter>
				<div id="body">
            <div className="cursor">
              <div className="main-wrapper">
                <Navbar />
                <SmoothScroll>
                  <div id="home"><Home /></div>
                  <div id="projects"><Projects /></div>
                  <div id="info"><Info /></div>
                  <div id="info"><Info /></div>
                  <div id="info"><Info /></div>
                  <div id="contact"><Contact /></div>
                  <div id="faq"><FAQ /></div>
                </SmoothScroll>
              </div>
            </div>
				</div>
        </BrowserRouter>
    );
}

export default App;
