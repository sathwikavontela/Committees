import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaBook,
  FaBuilding,
  FaUtensils,
  FaBriefcase,
  FaFootballBall,
  FaPalette,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaHandsHelping,
  FaCamera,
  FaLeaf,
  FaTree,
  FaShieldAlt,
  FaHeartbeat,
  FaClipboardList,
  FaGavel,
  FaHome,
  FaMedal,
  FaLightbulb,
} from 'react-icons/fa'

const DesktopCommities = () => {
  return (
    <div className="min-h-screen h-full sm:hidden md:block fixed top-0 lg:w-64 md:w-52   shadow-lg">
      <div className="flex flex-row gap-2 bg-[#426CAD] h-[2.6em]">
        <img
          src="https://hub.rgukt.ac.in/hub/static/images/logo.png"
          className="h-9 mt-2 ml-3 rounded-[50%]"
          alt="RGUKT Logo"
        />
        <span className="text-white text-[22px] pl-2 pt-3 font-serif font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Committees
        </span>
      </div>
      <div className="overflow-y-auto h-[calc(100%-54px)] bg-[#ece8e8] mt-[7.2%] ">
        <ul className="list-none px-4 py-4 text-sm sm:text-base md:text-md lg:text-md xl:text-lg">
          <Link to="/academic">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaBook className="h-4 w-5 mt-1 text-blue-500 hover:animate-spin" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Academic Committee
              </li>
            </div>
          </Link>
          <Link to="/excellence">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaMedal className="h-4 w-5 mt-1 text-pink-500 hover:animate-spin" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Excellence Committee
              </li>
            </div>
          </Link>
          <Link to="/campusamenties">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaBuilding className="h-4 w-5 mt-1 text-green-500 hover:animate-bounce" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Campus Amenities Committee
              </li>
            </div>
          </Link>
          <Link to="/mess">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaUtensils className="h-4 w-5 mt-1 text-red-500 hover:animate-ping" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Mess Advisory Committee
              </li>
            </div>
          </Link>
          <Link to="/career">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaBriefcase className="h-4 w-5 mt-1 text-purple-500 hover:animate-pulse" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Career Guidance Committee
              </li>
            </div>
          </Link>
          <Link to="/sports">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaFootballBall className="h-4 w-5 mt-1 text-yellow-500 hover:animate-spin" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Sports Committee
              </li>
            </div>
          </Link>
          <Link to="/cultural">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaPalette className="h-4 w-5 mt-1 text-pink-500 hover:animate-bounce" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Cultural Committee
              </li>
            </div>
          </Link>
          <Link to="/educational">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaGraduationCap className="h-4 w-5 mt-1 text-teal-500 hover:animate-ping" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Educational Opportunites Committee
              </li>
            </div>
          </Link>
          <Link to="/external">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaExternalLinkAlt className="h-4 w-5 mt-1 text-orange-500 hover:animate-pulse" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                External Activities Committee
              </li>
            </div>
          </Link>
          <Link to="/social">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaHandsHelping className="h-4 w-5 mt-1 text-blue-500 hover:animate-spin" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Social Service Committee
              </li>
            </div>
          </Link>
          <Link to="/photography">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaCamera className="h-4 w-5 mt-1 text-purple-500 hover:animate-bounce" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Photography Committee
              </li>
            </div>
          </Link>
          <Link to="/environment">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaLeaf className="h-4 w-5 mt-1 text-green-500 hover:animate-ping" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Environment/Sustainability Committee
              </li>
            </div>
          </Link>
          <Link to="/campusgreening">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaTree className="h-4 w-5 mt-1 text-brown-500 hover:animate-pulse" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Campus Greening Committee
              </li>
            </div>
          </Link>
          <Link to="/safety">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaShieldAlt className="h-4 w-5 mt-1 text-red-500 hover:animate-spin" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Safety and Security Committee
              </li>
            </div>
          </Link>
          <Link to="/health">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaHeartbeat className="h-4 w-5 mt-1 text-pink-500 hover:animate-bounce" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Health Committee
              </li>
            </div>
          </Link>
          <Link to="/placement">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaClipboardList className="h-4 w-5 mt-1 text-blue-500 hover:animate-ping" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Placement and Internship Committee
              </li>
            </div>
          </Link>
          <Link to="/grievance">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaGavel className="h-4 w-5 mt-1 text-purple-500 hover:animate-pulse" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Grievance and Redressal Committee
              </li>
            </div>
          </Link>
          <Link to="/hostel">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaHome className="h-4 w-5 mt-1 text-teal-500 hover:animate-spin" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Hostel Committee
              </li>
            </div>
          </Link>
          <Link to="/innovation">
            <div className="flex flex-row mx-2 py-2 cursor-pointer hover:px-2 hover:bg-[#800e08] hover:text-white rounded-md">
              <FaLightbulb className="h-4 w-5 mt-1 text-yellow-500 hover:animate-bounce" />
              <li className="list-none hover:text-white truncate text-black ml-2">
                Innovation and Incubation Committee
              </li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default DesktopCommities
