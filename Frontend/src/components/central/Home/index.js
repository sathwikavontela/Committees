import React from 'react'

import CentralAuthoritySidebar from './CentralAuthoritySidebar'
import Header from './Header'
import CentralAuthorityComplaints from '../CentralAuthorityComplaints'

const CentralHomesection = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <CentralAuthoritySidebar />
        <div className="w-[80vw] ml-[18%] sm:ml-0 sm:w-full md:w-[80vw] md:ml-[18%]">
          <CentralAuthorityComplaints />
        </div>
      </div>
    </div>
  )
}

export default CentralHomesection
