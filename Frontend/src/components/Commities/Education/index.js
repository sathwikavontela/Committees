import React from 'react'
import EducationHeader from './EducationHeader'
import EducationSidebar from './EducationSidebar'
import CommitteeCard from '../CommitteeCard'

const cardData = {
  name: 'Educational Opportunities Committee',
  complaintForm: '/educationalcommitteeform',
  purPose:
    'The Educational Opportunities Committee is dedicated to empowering students by providing comprehensive information on scholarships, exchange programs, and study abroad opportunities. By assisting students in applying for external educational grants and funding, the committee aims to facilitate access to global learning experiences. Through organizing seminars and talks by experts in various fields and fostering collaboration with other educational institutions, the committee enriches students academic journeys and broadens their horizons.',
  rolesAndResponsibilities: [
    ' Provide information on scholarships, exchange programs, and study abroad opportunities',
    ' Assist students in applying for external educational grants and funding.',
    'Arrange seminars and talks by experts in various fields.',
    'Facilitate collaboration with other educational institutions.',
  ],
  categories: [
    'Scholarships',
    'Exchange Programs',
    'Study Abroad Opportunities',
    'Grants and Funding',
    'Seminars and Talks',
    'Collaboration with Institutions',
    'other',
  ],
  committee_name: 'education',
}
const Education = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <EducationHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <EducationSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Education
