import { Outlet, NavLink } from "react-router-dom";

export function RootLayout() {
    return (
        <div>

            <nav>
                {/* displays links to travel from page to page. */}
                <NavLink to="/">Home</NavLink>
                <br />
                <NavLink to="new">New</NavLink>
                <br />

            </nav>

            <main>
                {/* allows to display the main page bellow the links */}
                <Outlet />
            </main>
        </div>
    )
}