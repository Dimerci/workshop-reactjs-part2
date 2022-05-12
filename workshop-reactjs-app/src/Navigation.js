import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/">
                    Home
                </NavLink>
            </ul>
        </div>
    );
}
export default Navigation;