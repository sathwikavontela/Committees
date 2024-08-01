import React, { useState, useEffect } from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const CentralAuthoritySidebar = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)
  const [isChatboxOpen, setIsChatboxOpen] = useState(false)

  const handleLinkClick = (path) => {
    setActiveLink(path)
  }

  const toggleChatboxMenu = () => {
    setIsChatboxOpen(!isChatboxOpen)
  }

  useEffect(() => {
    const chatboxPaths = [
      '/central/csechatbox',
      '/central/ecechatbox',
      '/central/eeechatbox',
      '/central/civilchatbox',
      '/central/mechchatbox',
      '/central/chemchatbox',
      '/central/mmechatbox',
    ]
    if (chatboxPaths.includes(location.pathname)) {
      setIsChatboxOpen(true)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ede6e5] shadow-lg mt-14">
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5 text-sm sm:text-base md:text-md lg:text-md xl:text-md">
          <Link
            to="/central/facultyIncharge"
            onClick={() => handleLinkClick('/central/facultyIncharge')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/central/facultyIncharge'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Faculty Incharge
            </li>
          </Link>
          <Link
            to="/central/centralauthority"
            onClick={() => handleLinkClick('/central/centralauthority')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/central/centralauthority'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Central Authority
            </li>
          </Link>
          <Link
            to="/central/studentcommittee"
            onClick={() => handleLinkClick('/central/studentcommittee')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/central/studentcommittee'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Department Committees
            </li>
          </Link>
          <Link
            to="/centralmemberschatbox"
            onClick={() => handleLinkClick('/centralmemberschatbox')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/centralmemberschatbox'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Chat with central members
            </li>
          </Link>
          <li
            className={`m-2 list-none ${
              isChatboxOpen
                ? 'bg-[#800e08] text-white px-2'
                : 'hover:bg-[#800e08] hover:text-white hover:px-2'
            } truncate text-black cursor-pointer rounded-md py-2 flex items-center`}
            onClick={toggleChatboxMenu}
          >
            <span>Discussion Forum</span>
            {isChatboxOpen ? (
              <FaAngleDown className="ml-2" />
            ) : (
              <FaAngleRight className="ml-2" />
            )}
          </li>
          {isChatboxOpen && (
            <ul className="ml-4">
              <Link
                to="/central/csechatbox"
                onClick={() => handleLinkClick('/central/csechatbox')}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === '/central/csechatbox'
                      ? 'bg-[#b0d842] text-white px-2'
                      : 'hover:bg-[#a9dd41] hover:text-white hover:px-2'
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  CSE
                </li>
              </Link>
              <Link
                to="/central/ecechatbox"
                onClick={() => handleLinkClick('/central/ecechatbox')}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === '/central/ecechatbox'
                      ? 'bg-[#b0d842] text-white px-2'
                      : 'hover:bg-[#a9dd41] hover:text-white hover:px-2'
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  ECE
                </li>
              </Link>
              <Link
                to="/central/eeechatbox"
                onClick={() => handleLinkClick('/central/eeechatbox')}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === '/central/eeechatbox'
                      ? 'bg-[#b0d842] text-white px-2'
                      : 'hover:bg-[#a9dd41] hover:text-white hover:px-2'
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  EEE
                </li>
              </Link>
              <Link
                to="/central/civilchatbox"
                onClick={() => handleLinkClick('/central/civilchatbox')}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === '/central/civilchatbox'
                      ? 'bg-[#b0d842] text-white px-2'
                      : 'hover:bg-[#a9dd41] hover:text-white hover:px-2'
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  CIVIL
                </li>
              </Link>
              <Link
                to="/central/mechchatbox"
                onClick={() => handleLinkClick('/central/mechchatbox')}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === '/central/mechchatbox'
                      ? 'bg-[#b0d842] text-white px-2'
                      : 'hover:bg-[#a9dd41] hover:text-white hover:px-2'
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  MECH
                </li>
              </Link>
              <Link
                to="/central/chemchatbox"
                onClick={() => handleLinkClick('/central/chemchatbox')}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === '/central/chemchatbox'
                      ? 'bg-[#b0d842] text-white px-2'
                      : 'hover:bg-[#a9dd41] hover:text-white hover:px-2'
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  CHEM
                </li>
              </Link>
              <Link
                to="/central/mmechatbox"
                onClick={() => handleLinkClick('/central/mmechatbox')}
              >
                <li
                  className={`m-2 list-none ${
                    activeLink === '/central/mmechatbox'
                      ? 'bg-[#b0d842] text-white px-2'
                      : 'hover:bg-[#a9dd41] hover:text-white hover:px-2'
                  } truncate text-black cursor-pointer rounded-md py-2`}
                >
                  MME
                </li>
              </Link>
            </ul>
          )}
          <Link
            to="/central/feedbacks"
            onClick={() => handleLinkClick('/central/feedbacks')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/central/feedbacks'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Feedback
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default CentralAuthoritySidebar
