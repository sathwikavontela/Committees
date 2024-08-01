import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      (!dropdownRef.current || !dropdownRef.current.contains(event.target))
    ) {
      setIsOpen(false);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#426CAD] p-4 relative">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl sm:block md:hidden focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <div className="flex text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
          <Link to="/feedbackform">
            <button className="mr-5 rounded-md relative text-white underline-transition transition duration-300 ease-in-out">
              Feedback
            </button>
          </Link>
          <Link to="/">
            <button className="mr-5 sm:gap-0 sm:hidden md:block relative text-white underline-transition transition duration-300 ease-in-out">
              Home
            </button>
          </Link>
          <Link to="/login">
            <button className="mr-5 relative text-white underline-transition transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full bg-[#ece8e8] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 z-50`}
        ref={menuRef}
      >
        <div className="flex flex-row bg-[#426CAD] p-0 h-[3.5em]">
          <img
            src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
            className="h-9 mt-2 ml-3 rounded-[50%]"
            alt="RGUKT Logo"
          />
        </div>
        <div className="w-full mt-4">
          <ul className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
            <li className="text-black">
              <Link
                to="/"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Home
              </Link>
            </li>
            <li className="py-1 text-black relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full text-left px-2 py-1 focus:outline-none"
              >
                <span className="mr-2">Committees</span>
                {isDropdownOpen ? <FaAngleDown /> : <FaAngleRight />}
              </button>
              <ul
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } ml-2 bg-[#ece8e8] rounded text-black`}
              >
                <li>
                  <Link to="/academic" className="block">
                    Academics
                  </Link>
                </li>
                <li>
                  <Link to="/excellence" className="block">
                    Excellence
                  </Link>
                </li>
                <li>
                  <Link to="/sports" className="block py-1">
                    Sports Committee
                  </Link>
                </li>
                <li>
                  <Link to="/campusamenties" className="block">
                    Campus Amenities Committee
                  </Link>
                </li>
                <li>
                  <Link to="/mess" className="block py-1">
                    Mess Advisory Committee
                  </Link>
                </li>
                <li>
                  <Link to="/hostel" className="block">
                    Hostel Committee
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="block py-1">
                    Career Guidance Committee
                  </Link>
                </li>
                <li>
                  <Link to="/innovation" className="block">
                    Innovation and Incubation Committee
                  </Link>
                </li>
                <li>
                  <Link to="/cultural" className="block py-1">
                    Cultural Committee
                  </Link>
                </li>
                <li>
                  <Link to="/educational" className="block">
                    Educational Opportunities Committee
                  </Link>
                </li>
                <li>
                  <Link to="/external" className="block py-1">
                    External Activities Committee
                  </Link>
                </li>
                <li>
                  <Link to="/grievance" className="block">
                    Grievance and Redressal Committee
                  </Link>
                </li>
                <li>
                  <Link to="/social" className="block py-1">
                    Social Service Committee
                  </Link>
                </li>
                <li>
                  <Link to="/photography" className="block">
                    Photography Committee
                  </Link>
                </li>
                <li>
                  <Link to="/environment" className="block py-1">
                    Environment/Sustainability Committee
                  </Link>
                </li>
                <li>
                  <Link to="/campusgreening" className="block">
                    Campus Greening Committee
                  </Link>
                </li>
                <li>
                  <Link to="/safety" className="block py-1">
                    Safety and Security Committee
                  </Link>
                </li>
                <li>
                  <Link to="/health" className="block">
                    Health Committee
                  </Link>
                </li>
                <li>
                  <Link to="/placement" className="block py-1">
                    Placement and Internship Committee
                  </Link>
                </li>
              </ul>
            </li>
            <li className="text-black">
              <Link to="/login" className="block px-2 py-1">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
