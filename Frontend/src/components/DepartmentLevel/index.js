import DepartmentHeader from './DepartmentHeader'
import DepartmentSidebar from './DepartmentSidebar'
import DepartmentComplaints from './DepartmentComplaints'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Departments = () => {
  const navigate = useNavigate();

  useEffect(() => {
  const DepartmentToken = Cookies.get('Department_jwt_token')
  console.log(DepartmentToken);
  if (DepartmentToken === null) {
   return  navigate('/departmentloginform');
  }
  },[])
  
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <DepartmentHeader />
      <div className="flex w-full">
        <div>
          <DepartmentSidebar />
        </div>
        <div className="w-[80vw] ml-[18%] sm:ml-0 sm:w-full md:w-[80vw] md:ml-[18%]">
          <DepartmentComplaints />
        </div>
      </div>
    </div>
  )
}

export default Departments
