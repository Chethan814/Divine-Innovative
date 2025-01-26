import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

// Pages
import Home from './pages/home.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Services from "./pages/Services/Services.jsx"
import Design from "./pages/Services/Design.jsx"
import Development from "./pages/Services/Development.jsx"
import Management from "./pages/Services/Management.jsx"

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                </Routes>
            </Router>
            
        </>
    );
}

export default App;
