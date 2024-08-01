import React, { useEffect, useState } from 'react'
import FicHeader from './FicHeader'
import FicSidebar from './FicSidebar'
import FicProfileCard from './FicProfileCard'

const FicFacultyMembers = () => {
  const [ficdetails, setficdetails] = useState()

  const getFicDetails = async () => {
    const url = 'http://localhost:1024/api/v1/incharge/get-incharge'
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    const data = await response.json()
    if (response.ok === true) {
      console.log(data)
      setficdetails(data.incharge)
      console.log('your Data is', data)
    } else {
      console.log(response.errorMessage)
      //console.log(response.ok);
    }
  }
  useEffect(() => {
    getFicDetails()
  }, [])
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <FicHeader />
      <div className="flex w-full">
        <FicSidebar />
        <div className="relative md:left-40  lg:left-60 sm:left-0 z-[-1] flex flex-col flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%] lg:mt-[4%] sm:mt-[4%] md:mt-[6%]">
          <h1 className=" text-xl font-bold text-orange-500  block md:hidden lg:hidden  sm:mt-[12%]">
            Faculty Incharge
          </h1>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
            {ficdetails && <FicProfileCard Data={ficdetails} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FicFacultyMembers
