import React, { useState, useEffect } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const FicSidebar = () => {
  const location = useLocation();
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(location.pathname);

  const toggleChatboxMenu = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  useEffect(() => {
    if (
      location.pathname.includes("/faculty/csechatbox") ||
      location.pathname.includes("/faculty/ecechatbox") ||
      location.pathname.includes("/faculty/eeechatbox") ||
      location.pathname.includes("/faculty/civilchatbox") ||
      location.pathname.includes("/faculty/mechchatbox") ||
      location.pathname.includes("/faculty/chemchatbox") ||
      location.pathname.includes("/faculty/mmechatbox")
    ) {
      setIsChatboxOpen(true);
    } else {
      setIsChatboxOpen(false);
    }
  }, [location.pathname]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    if (!path.includes("/faculty/")) {
      setIsChatboxOpen(false);
    }
  };

  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ede6e5] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5 text-sm sm:text-base md:text-md lg:text-md xl:text-md">
          <Link
            to="/facultyIncharge/facultyMembers"
            onClick={() => handleLinkClick("/facultyIncharge/facultyMembers")}
          >
            <li
              className={`m-2 list-none ${
                activeLink === "/facultyIncharge/facultyMembers"
                  ? "bg-[#800e08] text-white px-2"
                  : "hover:bg-[#800e08] hover:text-white hover:px-2"
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Faculty Incharge
            </li>
          </Link>
          <Link
            to="/facultyIncharge/centralauthority-members"
            onClick={() =>
              handleLinkClick("/facultyIncharge/centralauthority-members")
            }
          >
            <li
              className={`m-2 list-none ${
                activeLink === "/facultyIncharge/centralauthority-members"
                  ? "bg-[#800e08] text-white px-2"
                  : "hover:bg-[#800e08] hover:text-white hover:px-2"
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Central Committees
            </li>
          </Link>
          <Link
            to="/facultyIncharge/studentcommittee"
            onClick={() => handleLinkClick("/facultyIncharge/studentcommittee")}
          >
            <li
              className={`m-2 list-none ${
                activeLink === "/facultyIncharge/studentcommittee"
                  ? "bg-[#800e08] text-white px-2"
                  : "hover:bg-[#800e08] hover:text-white hover:px-2"
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Department Committee
            </li>
          </Link>
          <Link
            to="/facultyIncharge/centralDiscussionForum"
            onClick={() =>
              handleLinkClick("/facultyIncharge/centralDiscussionForum")
            }
          >
            <li
              className={`m-2 list-none ${
                activeLink === "/facultyIncharge/centralDiscussionForum"
                  ? "bg-[#800e08] text-white px-2"
                  : "hover:bg-[#800e08] hover:text-white hover:px-2"
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Central Discussion Forum
            </li>
          </Link>
          <li
            className={`m-2 list-none ${
              isChatboxOpen
                ? "bg-[#800e08] text-white px-2"
                : "hover:bg-[#800e08] hover:text-white hover:px-2"
            } truncate text-black cursor-pointer rounded-md py-2 flex items-center`}
            onClick={toggleChatboxMenu}
          >
            <span>Department Discussion Forum</span>
            {isChatboxOpen ? (
              <FaAngleDown className="ml-2" />
            ) : (
              <FaAngleRight className="ml-2" />
            )}
          </li>
          {isChatboxOpen && (
            <ul className="ml-4">
              <Link
                to="/faculty/csechatbox"
                onClick={() => handleLinkClick("/faculty/csechatbox")}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === "/faculty/csechatbox"
                      ? "bg-[#b0d842] text-white px-2"
                      : "hover:bg-[#a9dd41] hover:text-white hover:px-2"
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  CSE
                </li>
              </Link>
              <Link
                to="/faculty/ecechatbox"
                onClick={() => handleLinkClick("/faculty/ecechatbox")}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === "/faculty/ecechatbox"
                      ? "bg-[#b0d842] text-white px-2"
                      : "hover:bg-[#a9dd41] hover:text-white hover:px-2"
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  ECE
                </li>
              </Link>
              <Link
                to="/faculty/eeechatbox"
                onClick={() => handleLinkClick("/faculty/eeechatbox")}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === "/faculty/eeechatbox"
                      ? "bg-[#b0d842] text-white px-2"
                      : "hover:bg-[#a9dd41] hover:text-white hover:px-2"
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  EEE
                </li>
              </Link>
              <Link
                to="/faculty/civilchatbox"
                onClick={() => handleLinkClick("/faculty/civilchatbox")}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === "/faculty/civilchatbox"
                      ? "bg-[#b0d842] text-white px-2"
                      : "hover:bg-[#a9dd41] hover:text-white hover:px-2"
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  CIVIL
                </li>
              </Link>
              <Link
                to="/faculty/mechchatbox"
                onClick={() => handleLinkClick("/faculty/mechchatbox")}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === "/faculty/mechchatbox"
                      ? "bg-[#b0d842] text-white px-2"
                      : "hover:bg-[#a9dd41] hover:text-white hover:px-2"
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  MECH
                </li>
              </Link>
              <Link
                to="/faculty/chemchatbox"
                onClick={() => handleLinkClick("/faculty/chemchatbox")}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === "/faculty/chemchatbox"
                      ? "bg-[#b0d842] text-white px-2"
                      : "hover:bg-[#a9dd41] hover:text-white hover:px-2"
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  CHEM
                </li>
              </Link>
              <Link
                to="/faculty/mmechatbox"
                onClick={() => handleLinkClick("/faculty/mmechatbox")}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === "/faculty/mmechatbox"
                      ? "bg-[#b0d842] text-white px-2"
                      : "hover:bg-[#a9dd41] hover:text-white hover:px-2"
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  MME
                </li>
              </Link>
            </ul>
          )}
          <Link
            to="/faculty/sendnotice"
            onClick={() => handleLinkClick("/faculty/sendnotice")}
          >
            <li
              className={`m-2 list-none ${
                activeLink === "/faculty/sendnotice"
                  ? "bg-[#800e08] text-white px-2"
                  : "hover:bg-[#800e08] hover:text-white hover:px-2"
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Add Notice
            </li>
          </Link>
          <Link
            to="/faculty/feedbacks"
            onClick={() => handleLinkClick("/faculty/feedbacks")}
          >
            <li
              className={`m-2 list-none ${
                activeLink === "/faculty/feedbacks"
                  ? "bg-[#800e08] text-white px-2"
                  : "hover:bg-[#800e08] hover:text-white hover:px-2"
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Feedback
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default FicSidebar;
