import React, { useState } from 'react'

const FormCard = ({ Data }) => {
  const { committee_name, categories } = Data

  const [category, setCategory] = useState('')
  const [otherCategory, setOtherCategory] = useState('')
  const [year, setYear] = useState('')
  const [branch, setBranch] = useState('')

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handleYear = (e) => {
    setYear(e.target.value)
  }

  const handleBranch = (e) => {
    setBranch(e.target.value)
  }
  const handlesubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <div className="lg:mt-1 sm:w-[100%]  sm:mt-20 sm:px-1 lg:w-[80%] rounded-lg lg:ml-[0%]  md:w-[70%] md:ml-[0%] md:mt-20  flex items-center mb-10  bg-[#0d1d3b] pb-9">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* <button >back</button> */}
          <div className="bg-transparent rounded-lg">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-8978982-7328703.png?f=webp"
              alt="Complaint"
              className=" lg:w-[80em] lg:h-[30em] md:w-[80em] md:h-[25em] sm:w-[60em] sm:h-[20em] "
            />
          </div>
          <div className="max-w-lg lg:w-[100%] mx-auto sm:mx-3 md:mt-0  lg:mt-10 sm:mt-2 px-4  bg-[#223b5d] rounded-lg shadow-md  py-6 ">
            <h1 className=" sm:text-md text-base md:text-lg lg:text-xl font-bold mb-6 text-center text-white">
              {committee_name} Grievance Form
            </h1>
            <form onSubmit={handlesubmit}>
              <div className="mb-4">
                <label
                  className="block text-white  font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white  font-bold mb-2"
                  htmlFor="studentId"
                >
                  Student_Id
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Id"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-white font-bold mb-2"
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
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="E1">E1</option>
                  <option value="E2">E2</option>
                  <option value="E3">E3</option>
                  <option value="E4">E4</option>
                </select>
              </div>
              {(year === 'E1' ||
                year === 'E2' ||
                year === 'E3' ||
                year === 'E4') && (
                <div className="mb-4">
                  <label
                    className="block text-white  font-bold mb-2"
                    htmlFor="otherCategory"
                  >
                    Please specify
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={branch}
                    onChange={handleBranch}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value=""> Select branch</option>
                    <option value="P1">CSE</option>
                    <option value="P2">ECE</option>
                    <option value="E1">EEE</option>
                    <option value="E2">CE</option>
                    <option value="E3">ME</option>
                    <option value="E4">CHE</option>
                    <option value="E4">MME</option>
                  </select>
                </div>
              )}
              <div className="mb-4">
                <label
                  className="block text-white font-bold mb-2"
                  htmlFor="category"
                >
                  Suggestion/Grievance Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option value={category}>{category}</option>
                  ))}
                </select>
              </div>
              {category === 'Other' && (
                <div className="mb-4">
                  <label
                    className="block text-white  font-bold mb-2"
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
                  className="block text-white  font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Feedback or Grievance"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCard
