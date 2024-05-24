import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js";
import Projects from "./Projects.js";
import Info from "./Info.js";
import Contact from "./Contact.js";
import Home from "./Home.js";
import FAQ from "./FAQ.js";
import "./styles/App.css";


function App() {
    return (
        <BrowserRouter>
				<div id="body">
					<div id="cursor">
            <div className="main-wrapper">
              <Navbar />
              <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/info" element={<Info />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
              </Routes>
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
