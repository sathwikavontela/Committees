import React, { useEffect, useState } from "react";
import SafetyHeader from './SafetyHeader'
import SafetySidebar from './SafetySidebar'
import ProfileCard from "../../ProfileCard";

const SafetyStudentCommittee = () => {
  const [students, setStudents] = useState([]);
  const [isDataReady,setIsdataready]=useState(false);


  useEffect(() => {
    const fetchStudentCommittees = async () => {
      const data = {
        committee_name: "safety",
      };
      const committee_details = JSON.stringify(data);
      try {
        const response = await fetch(
          `http://localhost:1024/api/v1/department/get/committeemembers`,
          {
            method: "POST",
            credentials: "include", // Include credentials (cookies)
            headers: {
              "Content-Type": "application/json",
            },
            body: committee_details,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setStudents(json.MembesArray);
        setIsdataready(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentCommittees();
  }, []);
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <SafetyHeader name={"Academic Committee"} />
      <div className="flex w-full">
        <SafetySidebar />
       { isDataReady && (
         <div className="relative md:left-40 lg:left-56 sm:left-0 z-[-1] flex flex-wrap justify-center items-center mt-10 md:w-[80%] sm:w-[100%]  ">
         <div className="mt-8 border border-[#c85cdb] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
           <h1 className=" bg-[#c85cdb]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
             Computer Science and Engineering
           </h1>
           <div className="flex flex-wrap justify-center items-center  px-4">
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[0]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[1]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[2]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[3]} />
             </div>
           </div>
         </div>
         <div className="mt-8 border border-[#45d9b9] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
           <h1 className="bg-[#45d9b9]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
             Electronics and Communications Engineering
           </h1>
           <div className="flex flex-wrap justify-center items-center px-4">
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[4]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[5]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[6]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[7]} />
             </div>
           </div>
         </div>
         <div className="mt-8 border border-[#eb692d] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
           <h1 className=" bg-[#eb692d]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
             Electronical Engineering
           </h1>
           <div className="flex flex-wrap justify-center items-center px-4">
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[8]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[9]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[10]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[11]} />
             </div>
           </div>
         </div>
         <div className="mt-8 border border-[#bddc3f] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
           <h1 className=" bg-[#bddc3f]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
           Mechanical Engineering
           </h1>
           <div className="flex flex-wrap justify-center items-center px-4">
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[12]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[13]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[14]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[15]} />
             </div>
           </div>
         </div>
         <div className="mt-8 border border-[#e33244] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
           <h1 className=" bg-[#e33244]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
             Civil Engineering
           </h1>
           <div className="flex flex-wrap justify-center items-center px-4">
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[16]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[17]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[18]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[19]} />
             </div>
           </div>
         </div>
         <div className="mt-8 border border-[#1d4872] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0">
           <h1 className=" bg-[#1d4872]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
           Metallurgical and Material Engineering
           </h1>
           <div className="flex flex-wrap justify-center items-center px-4">
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[20]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[21]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[22]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[23]} />
             </div>
           </div>
         </div>
         <div className="mt-8 border border-[#e81791] rounded-md pb-4 lg:w-[80%] sm:w-[100%] sm:mx-8 lg:mx-0 mb-4">
           <h1 className=" bg-[#e81791]  text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl  text-center py-2">
             Chemical Engineering
           </h1>
           <div className="flex flex-wrap justify-center items-center px-4">
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[24]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[25]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[26]} />
             </div>
             <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-1">
               <ProfileCard Data={students[27]} />
             </div>
           </div>
         </div>
       </div>
       )

       }
      </div>
    </div>
  );
};

export default  SafetyStudentCommittee;
