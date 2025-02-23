import { Outlet, ScrollRestoration } from "react-router-dom";

function Layout() {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    );
}

export default Layout;