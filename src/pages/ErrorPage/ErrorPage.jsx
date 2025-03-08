/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";


function ErrorPage() {
    return (
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Uh-oh!
                </p>

                <p className="mt-4 text-gray-500">We can't find that page.</p>

                <NavLink
                    to='/'
                    className="mt-6 inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-black hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
                >
                    Go Back Home
                </NavLink>
            </div>
        </div>
    );
}

export default ErrorPage;


// bg-gradient-to-r from-[#F8DCE0] via-[#E6E0FE] to-[#F5D6FA]