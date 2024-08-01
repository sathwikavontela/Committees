import React from 'react'
import InnovationHeader from './InnovationHeader.js'
import InnovationSidebar from './InnovationSidebar.js'
import CommitteeCard from '../CommitteeCard'
const cardData = {
  name: 'Innovation and Incubation Committee',
  complaintForm: '/innovationcommitteeform',
  purPose:
    'The Innovation and Incubation Committee aims to cultivate culture of innovation and entrepreneurship among students. By providing support and resources for student-led startups and projects, the committee nurtures entrepreneurial aspirations. Organizing workshops, hackathons, and innovation challenges stimulates creative thinking and problem-solving skills. Facilitating collaboration with industry mentors and investors, the committee bridges the gap between academia and industry,  empowering students to turn innovative ideas into viable ventures.',
  rolesAndResponsibilities: [
    ' Foster innovation and entrepreneurship among students.',
    ' Provide support and resources for student-led startups and projects.',
    'Organize workshops, hackathons, and innovation challenges.',
    'Facilitate collaboration with industry mentors and investors.',
  ],
  categories: [
    'Innovation Support',
    'Entrepreneurship Support',
    'Workshops and Hackathons',
    'Industry Collaboration',
    'other',
  ],
  committee_name: 'innovation',
}
const Innovation = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <InnovationHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <InnovationSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Innovation
