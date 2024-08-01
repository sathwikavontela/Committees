import React from 'react'
import GrievanceHeader from './GrievanceHeader.js'
import GrievanceSidebar from './GrievanceSidebar.js'
import CommitteeCard from '../CommitteeCard'

const cardData = {
  name: 'Grievance and Redressal Committee',
  complaintForm: '/grivanceredressalcommitteeform',
  purPose:
    'The Grievance and Redressal Committee is committed to ensuring a fair and supportive campus environment by addressing grievances and complaints raised by students. Through prompt and impartial resolution of disputes and conflicts, the committee upholds confidentiality and advocates for institutional policies that promote fairness and justice. By fostering transparency and accountability, the committee aims to enhance trust and well-being within the campus community.',
  rolesAndResponsibilities: [
    'Address grievances and complaints raised by students. ',
    ' Ensure fair and timely resolution of disputes and conflicts.',
    'Maintain confidentiality and impartiality in handling grievances.',
    'Advocate for institutional policies that promote fairness andjustice.',
  ],
  categories: [
    'Academic Issues',
    'Disciplinary Matters',
    'Harassment Complaints',
    'Facility and Infrastructure',
    'other',
  ],
  committee_name: 'grievance',
}
const Grievance = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <GrievanceHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <GrievanceSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Grievance
