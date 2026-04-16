import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Cursor from "./components/Cursor.jsx";
import Gallery from "./components/Gallery.jsx";
import "./styles/App.css";

function App() {
    return (
        <BrowserRouter>
            <Cursor />
            <Navbar />
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
