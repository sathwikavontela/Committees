import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HealthSidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ece8e8] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5">
          <Link
            to="/health/facultyincarge"
            onClick={() => handleLinkClick("/health/facultyincarge")}
          >
            <li
              className={`m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate cursor-pointer rounded-md py-2 ${
                activeLink === "/health/facultyincarge"
                  ? "bg-[#800e08] text-white px-2"
                  : "text-black"
              }`}
            >
              Faculty Incharge
            </li>
          </Link>
          <Link
            to="/health/centralaurhority"
            onClick={() => handleLinkClick("/health/centralaurhority")}
          >
            <li
              className={`m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate cursor-pointer rounded-md py-2 ${
                activeLink === "/health/centralaurhority"
                  ? "bg-[#800e08] text-white px-2"
                  : "text-black"
              }`}
            >
              Central Committee
            </li>
          </Link>
          <Link
            to="/health/studentcommitte"
            onClick={() => handleLinkClick("/health/studentcommitte")}
          >
            <li
              className={`m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate cursor-pointer rounded-md py-2 ${
                activeLink === "/health/studentcommitte"
                  ? "bg-[#800e08] text-white px-2"
                  : "text-black"
              }`}
            >
              Department Committee
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HealthSidebar;
