import React, { useState } from 'react'

import { toast, ToastContainer } from 'react-toastify' // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'

const CommitteeCard = ({ data }) => {
  const { rolesAndResponsibilities } = data
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const committee_name = data.name
  const categories = data.categories
  const [showForm, setShowForm] = useState(false)
  const [category, setCategory] = useState('')
  const [otherCategory, setOtherCategory] = useState('')
  const [year, setYear] = useState('')
  const [branch, setBranch] = useState('')
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [studentId, setStudentId] = useState('')

  const handleAnonymousChange = (e) => {
    setIsAnonymous(e.target.value === 'anonymous')
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleYear = (e) => {
    setYear(e.target.value)
  }
  const handleBranch = (e) => {
    setBranch(e.target.value)
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    console.log(year, branch, category)
    if (!year || !category || !branch || !message || !committee_name) {
      toast.error('All fields are required')
      return
    }
    console.log(committee_name)
    const Details = {
      fullName: name,
      year,
      studentId: studentId,
      category,
      committee_name: data.committee_name,
      department: branch,
      description: message,
    }
    const committe_details = JSON.stringify(Details)
    try {
      const response = await fetch(
        `http://localhost:1024/api/v1/complaints/create-complaint`,
        {
          method: 'POST',
          credentials: 'include', // Include credentials (cookies)
          headers: {
            'Content-Type': 'application/json',
          },
          body: committe_details,
        }
      )
      if (!response.ok) {
        toast.error('Error in submiting complaint')
        throw new Error('Network response was not ok')
      }
      const json = await response.json()
      toast.success('Complaint submitted successfully')
      setTimeout(() => {
        setShowForm(!showForm)
      })
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  const DisplayForm = () => {
    setShowForm(!showForm)
  }
  return (
    <div>
      <ToastContainer />
      {!showForm ? (
        <>
          <div className="md:p-6 sm:px-0 sm:py-8 sm:relative sm:left-0 lg:left-[10%] md:left-24 z-0 sm:mt-[2%] md:mt-[3%]">
            <div className="mb-8 w-full md:w-3/4 lg:w-[82%] break-words px-3">
              <h1 className="text-sm sm:text-base md:text-2xl lg:text-2xl xl:text-4xl font-bold mb-4 mt-8 text-red-800">
                {` Welcome to RGUKT Basar's ${data.name}`}
              </h1>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold mb-2 break-words bg-green-900 w-fit text-white px-2">
                  Purpose:
                </h3>
                <p className="break-words text-sm sm:text-base md:text-md lg:text-md xl:text-lg">
                  {data.purPose}
                </p>
              </div>
            </div>
            <div className="mb-8 mx-3">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-bold mb-4 bg-green-900 w-fit text-white px-2">
                Roles And Responsibilities
              </h2>
              <div className="mb-4">
                <ul className="list-disc list-inside text-sm sm:text-base md:text-md lg:text-md xl:text-lg">
                  {rolesAndResponsibilities.map((eachrole, index) => (
                    <li key={index}>{eachrole}</li>
                  ))}
                </ul>
              </div>
              <div className=" flex flex-row justify-center text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg w-[90%] md:mt-[5%] sm:mt-[14%]">
                <button
                  className="w-[12em] h-[3em] bg-blue-500 text-white rounded-md cursor-pointer"
                  onClick={DisplayForm}
                >
                  Submit Complaint
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="p-6 sm:relative md:left-[22%] lg:left-[16%] sm:ml-[-9%] sm:mx-[-2%] z-0 md:mt-[-5%] lg:mt-[-12%]">
          <div className="max-w-[100%] overflow-x-hidden text-wrap">
            <div className="lg:flex lg:justify-start sm:mt-[15%]">
              <button
                onClick={DisplayForm}
                className="px-4 py-1 ml-1  bg-indigo-500   text-white hover:text-white rounded-md"
              >
                Home
              </button>
            </div>
            <div className="lg:mt-1 sm:w-[100%]  sm:mt-5 sm:px-1 lg:w-[80%] rounded-lg lg:ml-[0%]  md:w-[70%] md:ml-[0%] md:mt-5  flex items-center  bg-white shadow-md">
              <div className="flex flex-col lg:flex-row items-center lg:items-stretch   lg:h-fit   overflow-hidden">
                {/* <button >back</button> */}
                <div className=" bg-indigo-500 flex items-center">
                  <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-8978982-7328703.png?f=webp"
                    alt="Complaint"
                    className=" lg:w-[80em] lg:h-[35em] md:w-[80em] md:h-[25em] sm:w-[60em] sm:h-[20em] "
                  />
                </div>
                <div className="max-w-lg lg:w-[100%] bg-white mx-auto sm:mx-3 md:mt-0  lg:mt-0 sm:mt-2 px-4   py-6  ">
                  <h1 className=" sm:text-md text-base md:text-lg lg:text-xl font-bold mb-3 text-center text-black">
                    {committee_name} Grievance Form
                  </h1>
                  <form onSubmit={handlesubmit}>
                    <div className="mb-4">
                      <label className="block text-black text-sm font-bold mb-2">
                        Identity
                      </label>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="anonymous"
                          name="identity"
                          value="anonymous"
                          checked={isAnonymous}
                          onChange={handleAnonymousChange}
                          className="mr-2"
                        />
                        <label htmlFor="anonymous" className="text-black mr-4">
                          Anonymous
                        </label>
                        <input
                          type="radio"
                          id="notAnonymous"
                          name="identity"
                          value="notAnonymous"
                          checked={!isAnonymous}
                          onChange={handleAnonymousChange}
                          className="mr-2"
                        />
                        <label htmlFor="notAnonymous" className="text-black">
                          Specify
                        </label>
                      </div>
                    </div>
                    {!isAnonymous && (
                      <div>
                        <div className="mb-4">
                          <label
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="studentId"
                          >
                            Student ID
                          </label>
                          <input
                            type="text"
                            id="studentId"
                            name="studentId"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Student ID"
                          />
                        </div>
                      </div>
                    )}
                    <div className="mb-4">
                      <label
                        className="block text-black font-bold mb-2"
                        htmlFor="studentId"
                      >
                        year
                      </label>
                      <select
                        id="year"
                        name="year"
                        value={year}
                        onChange={handleYear}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value=""> Select year</option>
                        <option value="E1">E1</option>
                        <option value="E2">E2</option>
                        <option value="E3">E3</option>
                        <option value="E4">E4</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-black  font-bold mb-2"
                        htmlFor="otherCategory"
                      >
                        Department
                      </label>
                      <select
                        id="branch"
                        name="branch"
                        value={branch}
                        onChange={handleBranch}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value=""> Select branch</option>
                        <option value="cse">CSE</option>
                        <option value="ece">ECE</option>
                        <option value="eee">EEE</option>
                        <option value="chem">CE</option>
                        <option value="mech">ME</option>
                        <option value="chem">CHE</option>
                        <option value="mme">MME</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-black font-bold mb-2"
                        htmlFor="category"
                      >
                        Grievance Category
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
                      >
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    {(category === 'Other' || category === 'other') && (
                      <div className="mb-4">
                        <label
                          className="block text-black  font-bold mb-2"
                          htmlFor="otherCategory"
                        >
                          Please specify
                        </label>
                        <input
                          type="text"
                          id="otherCategory"
                          name="otherCategory"
                          value={otherCategory}
                          onChange={(e) => setOtherCategory(e.target.value)}
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Specify your category"
                        />
                      </div>
                    )}
                    <div className="mb-4">
                      <label
                        className="block text-black  font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Feedback or Grievance"
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="flex items-center">
                      <button
                        type="submit"
                        className="px-10 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CommitteeCard
