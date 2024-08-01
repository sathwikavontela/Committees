import React from 'react'
import HostelHeader from './HostelHeader.js'
import HostelSidebar from './HostelSidebar.js'
import CommitteeCard from '../CommitteeCard'
const cardData = {
  name: 'Hostel Committee',
  complaintForm: '/hostelcommitteeform',
  purPose:
    'The Hostel Committee is dedicated to ensuring a comfortable and supportive living environment for resident students in campus hostels. By overseeing accommodation and facilities, addressing concerns related to maintenance, hygiene, and security, the committee strives to enhance the overall hostel experience. Organizing recreational activities and cultural events for residents fosters a sense of community and belonging. The committee also ensures adherence to hostel rules and regulations, promoting a safe and conducive environment for all residents.',
  rolesAndResponsibilities: [
    ' Oversee hostel accommodation and facilities for resident students.',
    'Address concerns related to hostel maintenance, hygiene, and security.',
    'Organize recreational activities and cultural events for hostel residents.',
    'Ensure adherence to hostel rules and regulations.',
  ],
  categories: [
    'Accommodation Issues',
    'Maintenance Requests',
    'Security Concerns',
    'Stray Dogs in Hostel',
    'Recreational Activities',
    'other',
  ],
  committee_name: 'hostel',
}
const Hostel = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <HostelHeader />
      <div className="flex w-full">
        <div className="w-2/12">
          <HostelSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Hostel
