import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Layout from "./pages/Layout.jsx";

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
import Website from "./pages/Services/Website/Website.jsx";
import Management from "./pages/Services/Management/Management.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import UserForm from "./pages/Info/UserForm.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/info", element: <UserForm /> },
            { path: "/aboutus", element: <Aboutus /> },
            { path: "/portfolio", element: <Portfolio /> },
            { path: "/services", element: <Services /> },
            { path: "/services/design", element: <Design /> },
            {
                path: "/services/design/graphicdesign",
                element: <GraphicDesign />,
            },
            {
                path: "/services/design/motiondesign",
                element: <MotionDesign />,
            },
            {
                path: "/services/design/nicheservices",
                element: <NicheServices />,
            },
            { path: "/services/design/printdesign", element: <PrintDesign /> },
            { path: "/services/design/webdesign", element: <WebDesign /> },
            { path: "/services/website", element: <Website /> },
            { path: "/services/management", element: <Management /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
