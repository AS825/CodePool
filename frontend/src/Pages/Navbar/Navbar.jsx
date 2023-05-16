import "./Navbar.css";
import Logo from "../../assets/codeCool_Logo.png";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="codecool" className="CC-Logo" />
          <NavLink to="/" className="Logo-name">
            {" "}
            CodePool
          </NavLink>
        </div>
        <ul className="navbar">
          <li></li>
          <li>
            <NavLink to="/">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/students">Students</NavLink>
          </li>
          <li>
            <NavLink to="#">Sign In</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
