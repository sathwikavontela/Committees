import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Cookie from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

const FicHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsChatboxOpen(false);
    }
  };

  const toggleChatboxMenu = () => {
    setIsChatboxOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const Logout = async () => {
    const url = "http://localhost:1024/api/v1/incharge/logout";
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("User logged out successfully");
      Cookie.remove("Faculty_jwt_token");
      localStorage.removeItem("incharge");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="bg-[#426CAD] p-4 fixed top-0 left-0 z-10 right-0 w-full">
      <ToastContainer />
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
        <div className="hidden md:block text-white">Faculty Incharge</div>
        <div className="flex gap-5 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
          <Link to="/facultyInchargeHome">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out sm:hidden md:block">
              Home
            </button>
          </Link>
          <Link to="/facultyIncharge/editprofile">
            <button className="relative text-white underline-transition transition duration-300 ease-in-out sm:hidden md:block">
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
        className={`fixed top-0 left-0 h-full bg-[#ece8e8] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 z-50`}
        ref={menuRef}
      >
        <div className="flex flex-row bg-[#426CAD] p-0 h-[3.5em]">
          <img
            src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
            className="h-9 mt-2 ml-3 rounded-full"
            alt="RGUKT Logo"
          />
          <h1 className="h-9 mt-4 ml-3 text-white">Faculty Incharge</h1>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} w-full mt-4`}>
          <ul className="flex flex-col">
            <li className="text-black">
              <Link
                to="/facultyInchargeHome"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Home
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/facultyIncharge/facultyMembers"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Faculty Incharge
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/facultyIncharge/centralauthority-members"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Central Authority
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/facultyIncharge/studentcommittee"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Department Committee
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/facultyIncharge/centralDiscussionForum"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Central Discussion Forum
              </Link>
            </li>
            <li
              className="m-2 list-none hover:bg-[#6a2121] hover:text-white hover:px-2 py-2 truncate text-black cursor-pointer rounded-md flex items-center"
              onClick={toggleChatboxMenu}
            >
              <span className="text-black hover:text-white">
                Department Discussion Forum
              </span>
              {isChatboxOpen ? (
                <FaAngleDown className="ml-2" />
              ) : (
                <FaAngleRight className="ml-2" />
              )}
            </li>
            {isChatboxOpen && (
              <ul className="ml-4 text-black">
                <Link to="/faculty/csechatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    CSE
                  </li>
                </Link>
                <Link to="/faculty/ecechatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    ECE
                  </li>
                </Link>
                <Link to="/faculty/eeechatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    EEE
                  </li>
                </Link>
                <Link to="/faculty/civilchatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    CIVIL
                  </li>
                </Link>
                <Link to="/faculty/mechchatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    MECH
                  </li>
                </Link>
                <Link to="/faculty/chemchatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    CHEM
                  </li>
                </Link>
                <Link to="/faculty/mmechatbox">
                  <li className="m-2 list-none hover:bg-[#800e08] hover:text-white hover:px-2 truncate text-black cursor-pointer rounded-md py-2">
                    MME
                  </li>
                </Link>
              </ul>
            )}

            <li className="text-black">
              <Link
                to="/faculty/sendnotice"
                className="block px-2 py-2 hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
              >
                Add Notice
              </Link>
            </li>
            <li className="text-black">
              <Link
                to="/faculty/feedbacks"
                className="block px-2 py-2 text-black hover:bg-[#6a2121] hover:text-white hover:rounded-lg"
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

export default FicHeader;
