import {Link, Outlet} from "react-router-dom";

function Layout() {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>

            <footer>
                This is an example project.
            </footer>
        </>
    );
}

export default Layout;