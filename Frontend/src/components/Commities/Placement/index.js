import React from 'react'
import PlacementHeader from './PlacementHeader.js'
import PlacementSidebar from './PlacementSidebar.js'
import CommitteeCard from '../CommitteeCard'
const cardData = {
  name: 'Placement and Internship Committee',
  complaintForm: '/placement-internshipcommitteeform',
  purPose:
    'The Placement and Internship Committee is dedicated to facilitating career opportunities for students through campus placements and internships. By coordinating with industries and companies for recruitment drives, the committee connects students with prospective employers. Offering career counseling, resume-building workshops, and maintaining a comprehensive database of job opportunities and internship openings, the committee equips students with the necessary skills and resources to succeed in their professional endeavors.',
  rolesAndResponsibilities: [
    'Facilitate campus placements and internships for students.',
    ' Coordinate with industries and companies for recruitment drives.',
    'Offer career counseling and resume-building workshops.',
    'Maintain a database of job opportunities and internshipopenings.',
  ],
  categories: [
    'Campus Placements',
    'Internship Programs',
    'Recruitment Drives',
    'Career Counseling',
    'Job Opportunities Database',
    'other',
  ],
  committee_name: 'placement',
}
const Placement = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <PlacementHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <PlacementSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Placement
