import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SportsSidebar = () => {
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
            to="/sports/facultyincarge"
            onClick={() => handleLinkClick("/sports/facultyincarge")}
          >
            <li
              className={`m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate cursor-pointer rounded-md py-2 ${
                activeLink === "/sports/facultyincarge"
                  ? "bg-[#800e08] text-white px-2"
                  : "text-black"
              }`}
            >
              Faculty Incharge
            </li>
          </Link>
          <Link
            to="/sports/centralaurhority"
            onClick={() => handleLinkClick("/sports/centralaurhority")}
          >
            <li
              className={`m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate cursor-pointer rounded-md py-2 ${
                activeLink === "/sports/centralaurhority"
                  ? "bg-[#800e08] text-white px-2"
                  : "text-black"
              }`}
            >
              Central Committee
            </li>
          </Link>
          <li className="text-black">
            <Link
              to="/sports/studentcommitte"
              onClick={() => handleLinkClick("/sports/studentcommitte")}
              className={`block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg ${
                activeLink === "/sports/studentcommitte"
                  ? "bg-[#6a2121] text-white rounded-lg px-2"
                  : ""
              }`}
            >
              Department Committee
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SportsSidebar;
