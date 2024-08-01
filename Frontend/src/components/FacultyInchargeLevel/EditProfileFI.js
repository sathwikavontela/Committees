import React from 'react'
import FicHeader from './FicHeader'
import FicSidebar from './FicSidebar'
import FicEditProfile from './FicEditProfile'

const EditProfileFI = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <FicHeader />
      <div className="flex w-full">
        <div>
          <FicSidebar />
        </div>
        <div className="w-[80vw] ml-[18%] sm:ml-0 sm:w-full md:w-[80vw] md:ml-[18%]">
          <FicEditProfile />
        </div>
      </div>
    </div>
  )
}

export default EditProfileFI
