import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Cursor from "./components/Cursor.jsx";
import Gallery from "./components/Gallery.jsx";
import BlogList from "./components/blog/BlogList.jsx";
import BlogPost from "./components/blog/BlogPost.jsx";
import "./styles/App.css";

function App() {
    return (
        <BrowserRouter>
            <Cursor />
            <Navbar />
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
