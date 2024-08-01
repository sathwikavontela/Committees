import React from 'react'
import ExcellenceHeader from "./ExcellenceHeader";
import ExcellenceSidebar from "./ExcellenceSidebar";
import CommitteeCard from '../CommitteeCard'

const cardData = {
  name: 'Excellence Committee',
  complaintForm: '/sustainabilitycommitteeform',
  purPose:'The Excellence Committee is dedicated to fostering a culture of innovation and technical proficiency within the campus community. It aims to support the development of new models and products by leveraging the expertise of skilled members. The committee is also committed to identifying and empowering individuals for project completion and ensuring the continuous growth of students through comprehensive skill development programs. Through these efforts, the committee strives to enhance the academic and professional capabilities of the campus community.'
    ,rolesAndResponsibilities: [
   'Receive requests for developing models/ products',
    ' Identify the suitable persons for the task completion',
    'Train the next batch students on skills development',
  ],
  categories: [
    'Pollution',
    'Waste Management',
    'Water Conservation',
    'Energy Usage',
    'Recycling Issues',
    'Deforestation',
    'Wildlife Protection',
    'Sustainability Practices',
    'Green Campus Initiatives',
    'other',
  ],
  committee_name: 'environment',
}

const Excellence = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <ExcellenceHeader />
      <div className="flex w-full">
        <div className="w-2/12">
          <ExcellenceSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Excellence
