import AcademicHeader from './AcademicHeader'
import AcademicSidebar from './AcademicSidebar'
import CommitteeCard from '../CommitteeCard'
import React from 'react'

const cardData = {
  name: 'Academic Committee',
  complaintForm: '/academiccommittefeedbackform',
  purPose:
    'The Academic Committee at RGUKT Basar is dedicated to ensuring academic excellence and fostering an environment that promotes intellectual growth and development among students. The committee is committed to continuously improving the academic framework, supporting students in their educational journey, and maintaining high standards of teaching and learning',
  rolesAndResponsibilities: [
    'Monitor academic performance and provide support to struggling students.',
    'Organize academic workshops, seminars, and guest lectures',
    'Collect feedback on courses and suggest improvements.',
    'Coordinate with faculty on academic policies and curriculum development.',
  ],
  categories: [
    ' Monitor academic performance',
    'Academic workshops, seminars, and guest lectures',
    'Course feedback and improvements',
    'Academic policies and curriculum development',
    'other',
  ],
  committee_name: 'academic',
}
const Acadamic = () => {
  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <AcademicHeader name={'Academic Committee'} />
      <div className="flex w-full">
        <div className="w-2/12">
          <AcademicSidebar />
        </div>
        <div className="10/12">
          <CommitteeCard data={cardData} />
        </div>
      </div>
    </div>
  )
}

export default Acadamic
