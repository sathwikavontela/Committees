import React, { useEffect, useState } from "react";
import ProfileCard from "../../ProfileCard";
import SocialHeader from "./SocialHeader.js";
import SocialSidebar from "./SocialSidebar.js";

const SocialFacultyIncarge = () => {
 const [students, setStudents] = useState([])
  const [isDataReady, setIsdataready] = useState(false)
   useEffect(() => {
    const fetchStudentCommittees = async () => {
      const data = {
        committee_name: 'social',
      }
      const committee_details = JSON.stringify(data)
      try {
        const response = await fetch(
          'http://localhost:1024/api/v1/incharge/get-inchargeforuser',
          {
            method: 'POST',
            credentials: 'include', // Include credentials (cookies)
            headers: {
              'Content-Type': 'application/json',
            },
            body: committee_details,
          }
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const json = await response.json()
        setStudents(json.incharge)
        setIsdataready(true)
      } catch (error) {
        console.log(error)
      }
    }
    fetchStudentCommittees()
   }, [])
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <SocialHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <SocialSidebar />
        <div className="relative md:left-40  lg:left-60 sm:left-0 z-[-1] flex flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%] ">
          {isDataReady && <ProfileCard Data={students} />}
        </div>
      </div>
    </div>
  );
};

export default SocialFacultyIncarge;
