import './NavDropDown.css';

function NavDropDown() {
    return (
        <>
            <li className="nav-item">
                <a href="#" className="nav-link">Work &dtrif;</a>
                <ul className="dropdown">
                    <li>
                        <a href="#">Web Development</a>
                    </li>
                    <li>
                        <a href="#">Web Design</a>
                    </li>
                    <li>
                        <a href="#">Illustration</a>
                    </li>
                    <li>
                        <a href="#">Iconography</a>
                    </li>
                </ul>
            </li>
        </>
    );
}

export default NavDropDown;
