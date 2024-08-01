import React, { useState } from 'react'

import Header from '../Header'
import DesktopCommities from '../DesktopCommities'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AcademicCommiteeForm = () => {
  const [year, setYear] = useState('E1')
  const [branch, setBranch] = useState('cse')
  const [committee, setCommitte] = useState('Academic Committee')
  const [message, setMessage] = useState()
  const navigate = useNavigate()
  const committees = [
    'Academic Committee',
    'Campus Amenities Committee',
    'Mess Advisory Committee',
    'External Activities Committee',
    'Photography Committee',
    'Environment/Sustainability Committee',
    'Health Committee',
    'Placement and Internship Committee',
    'Grievance and Redressal Committee',
    'Hostel Committee',
    'Innovation and Incubation Committee',
    'Cultural Committee',
    'Sports Committee',
    'Campus Greening Committee',
    'Social Service Committee',
    'Sustainability Committee',
    'External Committee',
    'Campus Safety Committee',
  ]
  const submitFeedback = async (e) => {
    e.preventDefault()
    if (!year || !branch || !committee || !message) {
      toast.error('All the feilds are Required')
      return
    }
    const data = {
      committee_name: committee,
      year: year,
      department: branch,
      description: message,
    }
    const feedbackDetails = JSON.stringify(data)
    const url = 'http://localhost:1024/api/v1/feedbacks/create-feedback'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: feedbackDetails,
      })
      if (!response.ok) {
        throw new Error('Error in the Response')
      }
      toast.success('Feedback submitted successfully')
      setTimeout(() => {
        navigate('/')
      }, 1000)
    } catch (error) {
      throw new Error(error)
    }
  }
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <ToastContainer />
      <Header />
      <div className="flex flex-1 overflow-auto sm:max-w-full md:max-w-3/4 overflow-x-hidden">
        <DesktopCommities className="md:w-1/4 min-h-full overflow-auto sm:max-w-0 w-full inset-0" />
        <div className=" h-fit py-[4%] lg:mt-[0.1em] sm:w-[90%] sm:ml-[5%]  sm:mt-12 sm:px-4 lg:w-[70%] rounded-lg lg:ml-[23%]  md:w-[70%] md:ml-[14rem] md:mt-[2rem]  flex items-center justify-center  bg-white">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch  lg:h-[32em] rounded-md shadow-lg  overflow-hidden">
            <div className="flex-1 flex items-center justify-center bg-indigo-500  p-4">
              <img
                src="https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-suggestion-box-vector-png-image_6882474.png"
                alt="suggestion"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 bg-white p-8 flex flex-col justify-center">
              <h1 className="text-2xl font-bold mb-6 text-center text-black">
                Feedback Form
              </h1>
              <form onSubmit={submitFeedback}>
                <div className="mb-4">
                  <label
                    className="block text-black text-sm font-bold mb-2"
                    htmlFor="year"
                  >
                    Year
                  </label>
                  <select
                    id="year"
                    onChange={(e) => setYear(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Year</option>
                    <option value="E1">E1</option>
                    <option value="E2">E2</option>
                    <option value="E3">E3</option>
                    <option value="E4">E4</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-black text-sm font-bold mb-2"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <select
                    id="branch"
                    onChange={(e) => setBranch(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Department</option>
                    <option value="cse">CSE</option>
                    <option value="ece">ECE</option>
                    <option value="eee">EEE</option>
                    <option value="cevil">Civil</option>
                    <option value="mech">Mech</option>
                    <option value="chem">Chem</option>
                    <option value="mme">MME</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-black text-sm font-bold mb-2"
                    htmlFor="committee"
                  >
                    Committee
                  </label>
                  <select
                    id="committee"
                    onChange={(e) => setCommitte(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Committee</option>
                    {committees.map((committee, index) => (
                      <option key={index} value={committee}>
                        {committee}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-black text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your suggestion/feedback"
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className=" bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
  )
}

export default AcademicCommiteeForm
