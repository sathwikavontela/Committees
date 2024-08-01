import React, { useEffect, useState } from 'react'
import FicHeader from './FicHeader'
import FicSidebar from './FicSidebar'
import FicProfileCard from './FicProfileCard'

const FicStudentCommittee = () => {
  const [students, setStudents] = useState([])
  const [isDataReady, setIsdataready] = useState()

  useEffect(() => {
    const fetchStudentCommittees = async () => {
      try {
        const response = await fetch(
          'http://localhost:1024/api/v1/department/get/committee/departmentMembers2',
          {
            method: 'GET',
            credentials: 'include', // Include credentials (cookies)
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const json = await response.json()
        setStudents(json.members)
        setIsdataready(true)
      } catch (error) {
        console.log(error)
      }
    }

    fetchStudentCommittees()
  }, [])
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <FicHeader />
      <div className="flex w-full">
        <FicSidebar />
        {isDataReady && (
          <div className="mt-8 h-fit  md:relative z-[-1] md:left-[21%]  md:top-0 rounded-md pb-4 lg:w-[90%] lg:left-[25.5%] md:w-[80%] sm:w-[100%] sm:mt-20 sm:ml-[-3%] sm:mb-10  md:overflow-y-hidden">
            <div className="mt-8 border border-[#c85cdb] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#c85cdb]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Computer Science and Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center  px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[0]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[1]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[2]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[3]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#45d9b9] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className="bg-[#45d9b9]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Electronics and Communications Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[4]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[5]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[6]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[7]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#eb692d] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#eb692d]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Electronical Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[8]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[9]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[10]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[11]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#bddc3f] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#bddc3f]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Mechanical Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[12]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[13]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[14]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[15]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#e33244] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#e33244]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Civil Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[16]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[17]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[18]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[19]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#1d4872] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
              <h1 className=" bg-[#1d4872]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Metallurgical and Material Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[20]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[21]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[22]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[23]} />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-[#e81791] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0 mb-4">
              <h1 className=" bg-[#e81791]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
                Chemical Engineering
              </h1>
              <div className="flex flex-wrap justify-center items-center px-4">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[24]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[25]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[26]} />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
                  <FicProfileCard Data={students[27]} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FicStudentCommittee
