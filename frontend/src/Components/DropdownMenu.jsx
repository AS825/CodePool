import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UilAngleDown } from "@iconscout/react-unicons";
import { UilAngleUp } from "@iconscout/react-unicons";
import { UilPen } from '@iconscout/react-unicons'
import AOS from "aos";
import "aos/dist/aos.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    window.location.reload(); 
    // navigate("/sign-in");
  };

  const handleOutsideClick = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      isOpen
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        {/* <UilArrowToRight className="edit" /> */}
        {localStorage.getItem("username")}
        <p className="arrow">{isOpen ? <UilAngleUp /> : <UilAngleDown />}</p>
      </div>

      {isOpen && (
        <div
          className="dropdown-menu"
          data-aos="fade-down"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <a href="/user" className="dropdown-item userName">
            <UilPen className="edit" />
            Profile
          </a>

          <a onClick={handleLogout} className="dropdown-item Logout">
            Log out
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
