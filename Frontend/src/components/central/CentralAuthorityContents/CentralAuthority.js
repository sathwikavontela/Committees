import React, { useEffect, useState } from 'react'
import Header from '../Home/Header'
import CentralAuthoritySidebar from '../Home/CentralAuthoritySidebar'
import CentralAuthorityProfileCard from '../ProfileCard/CentralAuthorityProfileCard'

const CentralAuthority = () => {
  const [students, setStudents] = useState([])
  const [isDataReady, setIsdataready] = useState()

  useEffect(() => {
    const fetchStudentCommittees = async () => {
      try {
        const response = await fetch(
          'http://localhost:1024/api/v1/central/get/centralMembersByLogin1',
          {
            method: 'GET',
            credentials: 'include', // Include credentials (cookies)
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok after nikhils')
        }
        const json = await response.json()
        setStudents(json.MembersArray)
        setIsdataready(true)
      } catch (error) {
        console.log(error)
      }
    }
    fetchStudentCommittees()
  }, [])
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <CentralAuthoritySidebar />
        {isDataReady && (
          <div className="relative md:left-36  lg:left-[18%] lg:mt-[4%] md:mt-[5%] sm:left-0 z-[-1] flex flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%] ">
            <h1 className="mt-10 font-bold text-2xl md:hidden text-pink-400">
              Central Committee Members
            </h1>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <CentralAuthorityProfileCard Data={students[0]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <CentralAuthorityProfileCard Data={students[1]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <CentralAuthorityProfileCard Data={students[2]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <CentralAuthorityProfileCard Data={students[3]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <CentralAuthorityProfileCard Data={students[4]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <CentralAuthorityProfileCard Data={students[5]} />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
              <CentralAuthorityProfileCard Data={students[6]} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CentralAuthority
