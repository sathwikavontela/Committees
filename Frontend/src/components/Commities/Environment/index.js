import React from 'react'
import EnvironmentHeader from './EnvironmentHeader'
import EnvironmentSidebar from './EnvironmentSidebar'
import CommitteeCard from '../CommitteeCard'

const cardData = {
  name: 'Environment/Sustainability Committee',
  complaintForm: '/sustainabilitycommitteeform',
  purPose:
    'The Environment/Sustainability Committee is dedicated to fostering environmental awareness and promoting sustainable practices within the campus community. By implementing waste reduction and recycling programs, organizing tree planting drives, and leading environmental clean-up campaigns, the committee actively contributes to campus sustainability efforts. Additionally, the committee advocates for eco-friendly policies and initiatives, aiming to create a greener and more sustainable campus environment for all.',
  rolesAndResponsibilities: [
    'Promote environmental awareness and sustainability practices on campus.',
    ' Implement waste reduction and recycling programs.',
    'Organize tree planting drives and environmental clean-up campaigns',
    'Advocate for eco-friendly policies and initiatives within the institution.',
  ],
  categories: [
    'Pollution',
    'Waste Management',
    'Water Conservation',
    'Energy Usage',
    'Recycling Issues',
    'Deforestation',
    'Wildlife Protection',
    'Sustainability Practices',
    'Green Campus Initiatives',
    'other',
  ],
  committee_name: 'environment',
}

const Environment = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <EnvironmentHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <EnvironmentSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Environment
