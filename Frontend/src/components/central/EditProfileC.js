import React from 'react'
import Header from './Home/Header'
import CentralAuthoritySidebar from './Home/CentralAuthoritySidebar'
import CentralEditprofile from './CentralEditprofile'

const EditProfileC = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <div>
          <CentralAuthoritySidebar />
        </div>
        <div className="w-[80vw] ml-[18%] sm:ml-0 sm:w-full md:w-[80vw] md:ml-[18%]">
          <CentralEditprofile />
        </div>
      </div>
    </div>
  )
}

export default EditProfileC
