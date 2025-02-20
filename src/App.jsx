// import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";

// Pages
import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Services from "./pages/Services/Services.jsx";
import Design from "./pages/Services/Design/Design.jsx";
import GraphicDesign from "./pages/Services/Design/GraphicDesign.jsx";
import MotionDesign from "./pages/Services/Design/MotionDesign.jsx";
import NicheServices from "./pages/Services/Design/NicheServices.jsx";
import PrintDesign from "./pages/Services/Design/PrintDesign.jsx";
import WebDesign from "./pages/Services/Design/WebDesign.jsx";
// import Design from "./pages/Services/Design/Design.jsx";
import Development from "./pages/Services/Development/Development.jsx";
import Management from "./pages/Services/Management/Management.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },

    { path: "/aboutus", element: <Aboutus /> },

    { path: "/portfolio", element: <Portfolio /> },

    { path: "/services", element: <Services /> },

    { path: "/design", element: <Design /> },
    { path: "/graphicdesign", element: <GraphicDesign /> },
    { path: "/MotionDesign", element: <MotionDesign /> },
    { path: "/NicheServices", element: <NicheServices /> },
    { path: "/PrintDesign", element: <PrintDesign /> },
    { path: "/WebDesign", element: <WebDesign /> },

    { path: "/development", element: <Development /> },
    { path: "/management", element: <Management /> },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
