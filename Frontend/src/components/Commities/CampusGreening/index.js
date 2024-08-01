import React from 'react'
import CampusGreeningHeader from './CampusGreeningHeader'
import CampusGreeningSidebar from './CampusGreeningSidebar'
import CommitteeCard from '../CommitteeCard'

const cardData = {
  name: 'CampusGreening Committee',
  complaintForm: '/campusgreencommitteeform',
  purPose:
    ' The Academic Committee at RGUKT Basar is dedicated to ensuring academic excellence and fostering an environment that promotes intellectual growth and development among students. The committee is committed to continuously improving the academic framework, supporting students in their educational journey, and maintaining high standards of teaching and learning.',
  rolesAndResponsibilities: [
    ' Plan and implement initiatives to enhance green spaces on campus',
    '  Maintain gardens, parks, and green areas within the campus.',
    'Educate students on the importance of environmental conservation.',
    ' Collaborate with the sustainability committee on related projects.',
  ],
  categories: [
    'Green Spaces Enhancement',
    ' Gardens and Parks Maintenance',
    'Environmental Education',
    'Collaborative Projects with Sustainability Committee',
    'other',
  ],
  committee_name: 'greening',
}
const CampusGreening = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <CampusGreeningHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <CampusGreeningSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default CampusGreening
