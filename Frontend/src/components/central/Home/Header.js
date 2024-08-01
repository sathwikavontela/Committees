import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookie from 'js-cookie'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

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

  const Logout = async () => {
    const url = "http://localhost:1024/api/v1/central/logout";
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include", // Include credentials (cookies)
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      localStorage.removeItem("central");
      Cookie.remove('Central_jwt_token');
      toast.success("User logged out successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatboxMenu = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsChatboxOpen(false);
  };

  return (
    <nav className="bg-[#426CAD] p-4 fixed top-0 left-0 z-10 right-0 w-full">
      <ToastContainer />
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold lg:hidden sm:block">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl sm:block md:hidden focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <div className="hidden md:block text-white">Central Members</div>
        <div className="flex gap-5 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
          <Link to="/centralAuthorityHome">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out sm:hidden md:block">
              Home
            </button>
          </Link>
          <Link to="/centraleditprofile">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out  md:block">
              Edit Profile
            </button>
          </Link>
          <button
            onClick={Logout}
            className="relative text-white underline-transition transition duration-300 ease-in-out"
          >
            Logout
          </button>
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
        <div className={`${isOpen ? "block" : "hidden"} w-full mt-4`}>
          <ul className="flex flex-col ml-2">
            <li className="text-black" onClick={closeMenu}>
              <Link
                to="/"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Home
              </Link>
            </li>
            <li className="text-black" onClick={closeMenu}>
              <Link
                to="/central/facultyIncarge"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Faculty Incharge
              </Link>
            </li>
            <li className="text-black" onClick={closeMenu}>
              <Link
                to="/central/centralauthority"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Central Committee
              </Link>
            </li>
            <li className="text-black" onClick={closeMenu}>
              <Link
                to="/central/studentcommittee"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Department Committee
              </Link>
            </li>
            <li className="text-black" onClick={closeMenu}>
              <Link
                to="/centralmemberschatbox"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Discussion Forum
              </Link>
            </li>
            <li
              className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2 flex items-center"
              onClick={toggleChatboxMenu}
            >
              <span className="text-black">View Discussion Forum</span>
              {isChatboxOpen ? (
                <FaAngleDown className="ml-2" />
              ) : (
                <FaAngleRight className="ml-2" />
              )}
            </li>
            {isChatboxOpen && (
              <ul className="ml-4 text-black">
                <Link to="/central/csechatbox" onClick={closeMenu}>
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    CSE
                  </li>
                </Link>
                <Link to="/central/ecechatbox" onClick={closeMenu}>
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    ECE
                  </li>
                </Link>
                <Link to="/central/eeechatbox" onClick={closeMenu}>
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    EEE
                  </li>
                </Link>
                <Link to="/central/civilchatbox" onClick={closeMenu}>
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate  text-black cursor-pointer rounded-md py-2">
                    CIVIL
                  </li>
                </Link>
                <Link to="/central/mechchatbox" onClick={closeMenu}>
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate  text-black cursor-pointer rounded-md py-2">
                    MECH
                  </li>
                </Link>
                <Link to="/central/chemchatbox" onClick={closeMenu}>
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate  text-black cursor-pointer rounded-md py-2">
                    CHEM
                  </li>
                </Link>
                <Link to="/central/mmechatbox" onClick={closeMenu}>
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate  text-black cursor-pointer rounded-md py-2">
                    MME
                  </li>
                </Link>
              </ul>
            )}
            <li className=" text-black" onClick={closeMenu}>
              <Link
                to="/central/feedbacks"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Feedbacks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
