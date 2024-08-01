import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CampusAmentiesSidebar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const linkClass =
    "m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2";
  const activeLinkClass =
    "m-2 list-none bg-[#800e08] text-white px-2 truncate cursor-pointer rounded-md py-2";

  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ece8e8] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5">
          <Link
            to="/campusamenties/facultyincarge"
            onClick={() => handleLinkClick("/campusamenties/facultyincarge")}
          >
            <li
              className={
                activeLink === "/campusamenties/facultyincarge"
                  ? activeLinkClass
                  : linkClass
              }
            >
              Faculty Incharge
            </li>
          </Link>
          <Link
            to="/campusamenties/centralaurhority"
            onClick={() => handleLinkClick("/campusamenties/centralaurhority")}
          >
            <li
              className={
                activeLink === "/campusamenties/centralaurhority"
                  ? activeLinkClass
                  : linkClass
              }
            >
              Central Committee
            </li>
          </Link>
          <Link
            to="/campusamenties/studentcommitte"
            onClick={() => handleLinkClick("/campusamenties/studentcommitte")}
          >
            <li
              className={
                activeLink === "/campusamenties/studentcommitte"
                  ? activeLinkClass
                  : linkClass
              }
            >
              Department Committee
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default CampusAmentiesSidebar;
