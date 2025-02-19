// import React from "react";
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
import Development from "./pages/Services/Development/Development.jsx";
import Management from "./pages/Services/Management/Management.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/aboutus", element: <Aboutus /> },
    { path: "/portfolio", element: <Portfolio /> },
    { path: "/services", element: <Services /> },
    { path: "/services/design", element: <Design /> },
    { path: "/services/design/graphicdesign", element: <GraphicDesign /> },
    { path: "/services/design/motiondesign", element: <MotionDesign /> },
    { path: "/services/design/nicheservices", element: <NicheServices /> },
    { path: "/services/design/printdesign", element: <PrintDesign /> },
    { path: "/services/design/webdesign", element: <WebDesign /> },
    { path: "/services/development", element: <Development /> },
    { path: "/services/management", element: <Management /> },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
