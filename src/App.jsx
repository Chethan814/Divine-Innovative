import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

// Pages
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Services from "./pages/Services/Services.jsx";
import Design from "./pages/Services/Design/Design.jsx";
import Development from "./pages/Services/Development/Development.jsx";
import Management from "./pages/Services/Management/Management.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/services" element={<Services />} />
                        <Route path="/Design" element={<Design />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                        <Route path="/Development" element={<Development />} />
                    
                </Routes>
            </Router>
        </>
    );
}

export default App;
