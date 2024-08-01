import React from 'react'
import CampusAmentiesHeader from './CampusAmentiesHeader'
import CampusAmentiesSidebar from './CampusAmentiesSidebar'
import CommitteeCard from '../CommitteeCard'

const cardData = {
  name: 'CampusAmenties Committee',
  complaintForm: '/campusamenitiesform',
  purPose:
    ' The Campus Amenities Committee ensures the ongoing maintenance, upkeep, and enhancement of campus facilities. Dedicated to addressing issues related to infrastructure, classrooms, and common areas, the committee plans and oversees beautification projects while maintaining close collaboration with maintenance staff and administration for timely repairs and improvements',
  rolesAndResponsibilities: [
    ' Ensure maintenance and upkeep of campus facilities.',
    ' Address issues related to infrastructure, classrooms, and common areas.',
    'Address issues related to infrastructure, classrooms, and common areas.',
    ' Liaise with maintenance staff and administration for timely repairs.',
  ],
  categories: [
    'Maintenance of campus facilities',
    'Infrastructure issues',
    'Classroom-related issues',
    'Common area issues',
    'Campus beautification projects',
    'Timely repairs',
    'other',
  ],
  committee_name: 'amenities',
}
const CampusAmenties = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CampusAmentiesHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <CampusAmentiesSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default CampusAmenties
