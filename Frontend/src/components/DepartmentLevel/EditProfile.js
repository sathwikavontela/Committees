import React from 'react'
import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import DepartmentEditProfile from './DepartmentEditProfile'

const EditProfile = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <div>
          <DepartmentSidebar />
        </div>
        <div className="w-[80vw] ml-[18%] sm:ml-0 sm:w-full md:w-[80vw] md:ml-[18%]">
          <DepartmentEditProfile />
        </div>
      </div>
    </div>
  )
}

export default EditProfile
