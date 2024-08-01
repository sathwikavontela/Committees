import React from 'react'
import DesktopCommities from '../DesktopCommities'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { FaBullhorn } from 'react-icons/fa'

const Homepage = () => {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      <Header />
      <div className="flex flex-1 overflow-auto sm:max-w-full md:max-w-3/4 overflow-x-hidden">
        <DesktopCommities className="md:w-1/4 min-h-full overflow-auto sm:max-w-0 w-full inset-0" />
        <div className="flex-1 p-5 relative sm:left-0 lg:left-60 md:left-48">
          <div className="mb-8 w-full md:w-3/4 lg:w-[82%] break-words px-3">
            <Link to="/noticeboard">
              <div className="flex items-center justify-end cursor-pointer mb-2">
                <FaBullhorn className="text-blue-500 w-6 h-4 hover:text-blue-600 " />
                <p className="text-blue-500 text-lg  ">Notice</p>
              </div>
            </Link>
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-4 break-words md:marquee text-rose-900">
              Welcome to RGUKT Basar's Central Committee Communication Portal
              Enhancing Connectivity and Collaboration
            </h1>
            <p className="text-black mb-4 break-words text-sm sm:text-base md:text-md lg:text-md xl:text-lg">
              Welcome to the official communication portal of Rajiv Gandhi
              University of Knowledge Technologies, Basar. This platform is
              designed to streamline communication and collaboration between
              students and the academic section, ensuring a seamless and
              efficient exchange of information. Here, you'll find everything
              you need to stay connected, informed, and engaged with our vibrant
              campus community.
            </p>
          </div>

          <section className="mb-8 w-full md:w-3/4 break-words px-3">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-4 break-words bg-green-900 w-fit text-white px-1">
              Key Features of the Portal :
            </h2>

            <div className="mb-4 break-words">
              <h3 className="text-xl font-semibold mb-2 break-words">
                Centralized Communication Hub
              </h3>
              <ul className="list-disc list-inside break-words">
                <li>
                  Connect with various committees and stay updated on their
                  activities.
                </li>
                <li>
                  Access important announcements, updates, and resources in one
                  place.
                </li>
              </ul>
            </div>

            <div className="mb-4 break-words">
              <h3 className="text-xl font-semibold mb-2 break-words">
                Efficient Feedback System
              </h3>
              <ul className="list-disc list-inside break-words">
                <li>
                  Provide feedback on academic courses, campus facilities, and
                  more.
                </li>
                <li>
                  Engage with committees to suggest improvements and share your
                  ideas.
                </li>
              </ul>
            </div>

            <div className="mb-4 break-words">
              <h3 className="text-xl font-semibold mb-2 break-words">
                Event Management and Participation
              </h3>
              <ul className="list-disc list-inside break-words">
                <li>
                  Stay informed about upcoming workshops, seminars, cultural
                  events, and sports activities.
                </li>
                <li>Register for events and track participation easily.</li>
              </ul>
            </div>

            <div className="mb-4 break-words">
              <h3 className="text-xl font-semibold mb-2 break-words">
                Resource Access and Support
              </h3>
              <ul className="list-disc list-inside break-words">
                <li>
                  Access academic resources, career guidance materials, and
                  health services information.
                </li>
                <li>
                  Seek support from relevant committees for academic and
                  personal growth.
                </li>
              </ul>
            </div>

            <div className="mb-4 break-words">
              <h3 className="text-xl font-semibold mb-2 break-words">
                Grievance Redressal
              </h3>
              <ul className="list-disc list-inside break-words">
                <li>Report issues and grievances confidentially.</li>
                <li>
                  Ensure fair and timely resolution of disputes through
                  dedicated channels.
                </li>
              </ul>
            </div>

            <div className="mb-4 break-words">
              <h3 className="text-xl font-semibold mb-2 break-words">
                Innovation and Collaboration
              </h3>
              <ul className="list-disc list-inside break-words">
                <li>
                  Participate in innovation challenges, hackathons, and startup
                  initiatives.
                </li>
                <li>
                  Collaborate with peers and mentors to bring your ideas to
                  life.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8 w-full md:w-3/4 break-words px-3">
            <h2 className="text-2xl font-bold mb-4 break-words bg-green-900 text-white px-1 w-fit">
              Purpose and Vision :
            </h2>
            <p className="mb-4 break-words">
              The RGUKT Basar Central Committee Communication Portal is
              dedicated to fostering a culture of transparency, accountability,
              and engagement within our campus. Our vision is to create a
              supportive environment where students can:
            </p>

            <ul className="list-disc list-inside mb-4 break-words">
              <li>
                Voice Their Opinions: Share feedback and suggestions to improve
                campus life and academic experiences.
              </li>
              <li>
                Stay Informed: Receive timely updates on committee activities,
                events, and important announcements.
              </li>
              <li>
                Engage Actively: Participate in various events, workshops, and
                initiatives organized by different committees.
              </li>
              <li>
                Seek Support: Access resources and assistance for academic,
                career, health, and personal development.
              </li>
            </ul>

            <p className="mb-4 break-words">
              Join Us in Building a Better Campus Community
            </p>
            <p className="mb-4 break-words">
              This portal is a testament to our commitment to creating a
              supportive and collaborative environment for all students. Your
              active participation and feedback are crucial in helping us
              achieve this goal. Together, let's build a campus community that
              thrives on communication, innovation, and mutual support.
            </p>
            <p className="break-words pb-16">
              Welcome aboard! Explore, engage, and excel with RGUKT Basar's
              Central Committee Communication Portal.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Homepage
