import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const GrievanceHeader = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#426CAD] p-4 fixed top-0 left-0 z-10 right-0 w-full">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold lg:hidden sm:block">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl sm:block md:hidden focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <Link to="/grievance" className="hidden md:block text-white">
          Grievance Committee
        </Link>
        <div className="flex">
          <Link to="/feedbackform">
            <button className="mr-5 rounded-md relative text-white underline-transition transition duration-300 ease-in-out">
              Feedback
            </button>
          </Link>
          <Link to="/">
            <button className="mr-5 relative text-white underline-transition transition duration-300 ease-in-out sm:hidden md:block">
              Home
            </button>
          </Link>
          <Link to="/login">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-[#ece8e8] sm:block md:hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64  z-50`}
        ref={menuRef}
      >
        <div>
          <div className="flex flex-row bg-[#426CAD] p-0 h-[3.5em]">
            <img
              src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
              className="h-9 mt-2 ml-3 rounded-[50%]"
              alt="RGUKT Logo"
            />
          </div>
        </div>
        <div className="w-full mt-4">
          <ul className="flex flex-col">
            <li className="text-black">
              <Link
                to="/"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Home
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/grievance"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Grievance Committee
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/grievance/facultyincarge"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Faculty Incharge
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/grievance/centralaurhority"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Central Committee
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/grievance/studentcommitte"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Department Committee
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GrievanceHeader;
