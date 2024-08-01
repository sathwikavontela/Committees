import React from 'react'
import ExternalHeader from './ExternalHeader'
import ExternalSidebar from './ExternalSidebar'
import CommitteeCard from '../CommitteeCard'

const cardData = {
  name: 'External Activities Committee',
  complaintForm: '/externalactvitiescommitteeform',
  purPose:
    'The External Activities Committee plays a pivotal role in enhancing the institutions external engagement by coordinating participation in competitions, conferences, and events outside the campus. Responsible for managing logistics and travel arrangements for off-campus events, the committee ensures seamless representation of the institution at external forums and competitions. By cultivating partnerships with external organizations, the committee fosters collaborative initiatives that enrich students learning experiences and expand institutional outreach.',
  rolesAndResponsibilities: [
    'Coordinate participation in external competitions, conferences, and events.',
    'Manage logistics for off-campus events and travel arrangements',
    'Represent the institution at external forums and competitions.',
    'Cultivate partnerships with external organizations for collaborative initiatives.',
  ],
  categories: [
    'Participation in Competitions',
    'Attendance at Conferences',
    'External Events Management',
    'Representation at Forums',
    'External Partnerships',
    'Collaborations with External Organizations',
    'Networking Events',
    'Sponsorship Opportunities',
    'other',
  ],
  committee_name: 'external',
}
const External = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <ExternalHeader />
      <div className="flex w-full">
        <div className="w-2/12">
          <ExternalSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default External
