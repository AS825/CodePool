import "./Navbar.css";
import LogoWhite from "../../assets/landing/logo-white_CC.png";
import Logo from "../../assets/codeCool_Logo.png";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { UilUser } from "@iconscout/react-unicons";
import Footer from "../../Components/Footer";
const Navbar = () => {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
    <div>
      <nav className={isLandingPage ? "landing-navbar" : "navbar"}>
        <div className="logo-container">
          <NavLink
            to="/"
            className={
              isLandingPage
                ? "Logo-name-landing link-landing"
                : "Logo-name link-not-landing"
            }
          >
            <img
              src={isLandingPage ? LogoWhite : Logo}
              alt="codecool"
              className="CC-Logo"
            />{" "}
            CodePool
          </NavLink>
        </div>
        <ul className="ul">
          <li>
            <NavLink
              className={isLandingPage ? "link-landing" : "link-not-landing"}
              to="/"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isLandingPage ? "link-landing" : "link-not-landing"}
              to="/students"
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isLandingPage ? "link-landing" : "link-not-landing"}
              to="/students/create"
            >
              Create Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isLandingPage ? "link-landing" : "link-not-landing"}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={isLandingPage ? "link-landing" : "link-not-landing"}
              to="/login"
            >
              <UilUser /> Sign In{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      {isLandingPage ? null : <Footer />}
    </div>
  );
};

export default Navbar;
