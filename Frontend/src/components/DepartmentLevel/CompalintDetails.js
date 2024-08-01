import React from 'react'
import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import ViewComplaint from './ViewComplaint'

const CompalintDetails = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className="lg:w-[100%] lg:ml-[16.5%] md:w-[100%] sm:ml-0 sm:mt-14 sm:w-full flex items-center">
          <ViewComplaint />
        </div>
      </div>
    </div>
  )
}

export default CompalintDetails
