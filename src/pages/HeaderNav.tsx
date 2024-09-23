import "../App.css";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../assets/logo.png"

const HeaderNavBar = () => {
  const [navbarName, setNavBarName] = useState("case_management");
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setNavBarName("");
    } else if (location.pathname === "/case_management") {
      setNavBarName("Case Management");
    } 
  }, []);

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="bar">
          <div className="content border-b-zinc-400">
            <NavLink to="/case_management" className="fancy-button">
                <i className="bi bi-grid-fill mr-4"></i> Dynamic Template
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="relative topnavbgcolor">
        <div className="mx-auto max-w-12xl">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-5 md:justify-start md:space-x-10 px-5">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
      <img src={Logo} alt="Logo" className="logo" />
      <h2 className="text-xl font-semibold text-zinc-500 ml-4">{navbarName}</h2>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
