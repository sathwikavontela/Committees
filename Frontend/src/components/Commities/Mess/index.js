import React from 'react'
import MessHeader from './MessHeader.js'
import MessSidebar from './MessSidebar.js'
import CommitteeCard from '../CommitteeCard'
const cardData = {
  name: 'Mess Advisory Committee',
  complaintForm: '/messadvisoryform',
  purPose:
    'The Mess Advisory Committee is responsible for maintaining high standards of quality and hygiene in the campus mess or cafeteria. By gathering and acting on student feedback regarding food quality and menu preferences, the committee ensures a satisfactory dining experience. Promptly addressing complaints and collaborating closely with catering services, the committee  strives to optimize and enhance food service operations across the campus.',
  rolesAndResponsibilities: [
    'Oversee quality and hygiene standards in the campus mess or cafeteria.',
    ' Gather feedback on food quality and menu preferences from students.',
    'Address complaints related to food service promptly.',
    ' Collaborate with catering services to ensure efficient operations.',
  ],
  categories: [
    'Food Quality',
    'Food Variety and Menu',
    'Hygiene and Cleanliness',
    'Service and Staff Behavior',
    'Facilities and Amenities',
    'other',
  ],
  committee_name: 'mess',
}
const Mess = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <MessHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <MessSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Mess
