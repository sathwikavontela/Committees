import React from 'react'
import CareerHeader from './CareerHeader'
import CareerSidebar from './CareerSidebar'
import CommitteeCard from '../CommitteeCard'

const cardData = {
  name: 'Career Guidance Committee',
  complaintForm: '/careerguidanceform',
  purPose:
    'The Career Guidance Committee is dedicated to empowering students by organizing career counseling sessions, workshops, and providing valuable information on job opportunities, internships, and higher education prospects. Through tailored support in resume writing, interview skills, and networking strategies, the committee aims to enhance students career readiness. Additionally, maintaining a comprehensive alumni database fosters valuable networking opportunities for current students',
  rolesAndResponsibilities: [
    ' Organize cultural events, festivals, and competitions.',
    ' Showcase talent through music, dance, drama, and literary activities.',
    'Celebrate diversity and cultural heritage within the campus community.',
    '  Foster a sense of inclusivity and cultural exchange',
  ],
  categories: [
    'Career Counseling Sessions/Workshops',
    'Job Opportunities/Internships',
    'Resume Writing/Interview Skills',
    'Networking with Alumni',
    'other',
  ],
  committee_name: 'career',
}

const Career = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CareerHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <CareerSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Career
