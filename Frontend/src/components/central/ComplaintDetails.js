import React from 'react'
import Header from './Home/Header'
import CentralAuthoritySidebar from './Home/CentralAuthoritySidebar'
import ViewComplaint from './ViewComplaint'

const ComplaintDetails = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <CentralAuthoritySidebar />
        <div className="lg:w-[100%] lg:ml-[16.5%] md:w-[100%] sm:ml-0 sm:mt-14 sm:w-full flex items-center">
          <ViewComplaint  />
        </div>
      </div>
    </div>
  )
}

export default ComplaintDetails
