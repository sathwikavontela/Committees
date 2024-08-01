import React from 'react'
import FicHeader from './FicHeader'
import FicSidebar from './FicSidebar'
import FicViewComplaints from './FicViewComplaints'

const FicComplaintDetails = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <FicHeader />
      <div className="flex w-full">
        <FicSidebar />
        <div className="lg:w-[100%] lg:ml-[16.5%] md:w-[100%] sm:ml-0 sm:mt-14 sm:w-full flex items-center">
          <FicViewComplaints />
        </div>
      </div>
    </div>
  )
}

export default FicComplaintDetails
