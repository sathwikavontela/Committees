import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const DepartmentSidebar = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)

  const handleLinkClick = (path) => {
    setActiveLink(path)
  }

  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:block xl:block w-2/12 bg-[#ede6e5] shadow-lg z-20">
      <div className="flex flex-row gap-2 bg-[#426CAD] h-[3.7em]">
        <Link to="/departments">
          <img
            src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
            className="h-9 mt-2 ml-3 rounded-[50%]"
            alt="RGUKT Logo"
          />
        </Link>
        <span className="text-white pl-2 pt-3 font-serif font-bold text-sm sm:text-base md:text-lg lg:text-md xl:text-xl">
          Department
        </span>
      </div>
      <div className="overflow-y-auto h-full">
        <ul className="list-none px-4 py-5 text-sm sm:text-base md:text-md lg:text-md xl:text-md">
          <Link
            to="/department/facultyincharge"
            onClick={() => handleLinkClick('/department/facultyincharge')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/department/facultyincharge'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Faculty Incharge
            </li>
          </Link>
          <Link
            to="/departmentmembersChatbox"
            onClick={() => handleLinkClick('/departmentmembersChatbox')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/departmentmembersChatbox'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Discussion Forum
            </li>
          </Link>
          <Link
            to="/department/centralauthority"
            onClick={() => handleLinkClick('/department/centralauthority')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/department/centralauthority'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Central Committee
            </li>
          </Link>
          <Link
            to="/department/departmentmembers"
            onClick={() => handleLinkClick('/department/departmentmembers')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/department/departmentmembers'
                  ? 'bg-[#800e08] text-white px-2'
                  : 'hover:bg-[#800e08] hover:text-white hover:px-2'
              } truncate text-black cursor-pointer rounded-md py-2`}
            >
              Department Committees
            </li>
          </Link>
          <Link
            to="/departmentfeedbacks"
            onClick={() => handleLinkClick('/departmentfeedbacks')}
          >
            <li
              className={`m-2 list-none ${
                activeLink === '/departmentfeedbacks'
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

export default DepartmentSidebar
