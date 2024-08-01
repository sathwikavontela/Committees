import React from 'react'
import SocialHeader from './SocialHeader.js'
import SocialSidebar from './SocialSidebar.js'
import CommitteeCard from '../CommitteeCard'
const cardData = {
  name: 'Social Service Committee',
  complaintForm: '/socialservicecommitteeform',
  purPose:
    'The Social Service Committee is dedicated to fostering a spirit of social responsibility among students through organizing community service projects, volunteer activities, and outreach programs. By raising awareness about social issues and partnering with NGOs and local communities, the committee promotes active student engagement in humanitarian efforts. Through its initiatives, the committee aims to cultivate empathy, leadership, and a commitment to making a positive impact on society.',
  rolesAndResponsibilities: [
    'Organize community service projects and volunteer activities.',
    'Raise awareness about social issues and promote social responsibility.',
    ' Partner with NGOs and local communities for outreach programs.',
    'Encourage student engagement in humanitarian efforts.',
  ],
  categories: [
    'Community Service Projects',
    'Awareness Campaigns',
    'NGO Partnerships',
    'Humanitarian Efforts',
    'Cleaning Roads',
    'Tree Cutting',
    'other',
  ],
  committee_name: 'social',
}
const Social = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <SocialHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <SocialSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Social
