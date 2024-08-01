import React, { useEffect, useState } from 'react'
import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import ProfileCard from '../ProfileCard'

const DepartmentFacultymember = () => {
  const [facultyMember, setFacultyMember] = useState()

  const fetchFacultyMember = async () => {
    try {
      const response = await fetch(
        'http://localhost:1024/api/v1/incharge/get-incharge1',
        {
          method: 'GET',
          credentials: 'include', // Include credentials (cookies)
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (!response.ok) {
        throw new Error(response, 'Network response was not ok')
      }
      const json = await response.json()
      setFacultyMember(json.incharge)
      console.log(json.incharge)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchFacultyMember()
  })

  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <DepartmentSidebar />
        <div className="relative md:left-40  lg:left-60 sm:left-0 z-[-1] flex flex-col flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%] lg:mt-[4%] sm:mt-[4%] md:mt-[6%]">
          <h1 className=" text-xl font-bold text-orange-500  block md:hidden lg:hidden  sm:mt-[12%]">
            Faculty Incharge
          </h1>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4 ">
            {facultyMember && <ProfileCard Data={facultyMember} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentFacultymember
