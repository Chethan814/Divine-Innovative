import { Outlet, ScrollRestoration } from "react-router-dom";

function Layout() {
    return (
        <>
            <div className="">
                <ScrollRestoration />
                <Outlet />
            </div>
        </>
    );
}

export default Layout;


// sm:bg-red-400 md:bg-blue-400 lg:bg-green-400 xl:bg-purple-400 2xl:bg-white
