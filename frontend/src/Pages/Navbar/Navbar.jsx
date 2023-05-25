import "./Navbar.css";
import Logo from "../../assets/codeCool_Logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { UilUser } from "@iconscout/react-unicons";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo-container">
          <img src={Logo} alt="codecool" className="CC-Logo" />
          <NavLink to="/" className="Logo-name hover-link">
            {" "}
            CodePool
          </NavLink>
        </div>
        <ul className="navbar">
          <li>
            <NavLink className="hover-link" to="/">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className="hover-link" to="/students">
              Students
            </NavLink>
          </li>
          <li>
            <NavLink className="hover-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="hover-link" to="#">
              <UilUser /> Sign In{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
