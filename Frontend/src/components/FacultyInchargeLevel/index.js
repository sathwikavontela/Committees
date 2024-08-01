import React from 'react'
import FicHeader from './FicHeader'
import FicSidebar from './FicSidebar'
import FicComplaints from './FicComplaints'

const FacultyIchargeLevel = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <FicHeader />
      <div className="flex w-full">
        <FicSidebar />
        <div className="w-[80vw] ml-[18%] sm:ml-0 sm:w-full md:w-[80vw] md:ml-[18%]">
          <FicComplaints />
        </div>
      </div>
    </div>
  )
}

export default FacultyIchargeLevel
