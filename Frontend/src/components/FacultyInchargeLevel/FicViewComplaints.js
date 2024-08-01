import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FicViewComplaints = () => {
  const { complaintId } = useParams();
  const [complaint, setComplaint] = useState(null);
  // const [status, setStatus] = useState('pending')

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await fetch(
          `http://localhost:1024/api/v1/complaints/get/particularComplaintForIncharge/${complaintId}`,
          {
            method: "GET",
            credentials: "include", // Include credentials (cookies)
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        console.log(json.complaint);
        setComplaint(json.complaint);
        // setStatus(json.complaint.status)
      } catch (error) {
        console.log(error);
      }
    };
    fetchComplaint();
  }, [complaintId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (!complaint) {
    return <div className="text-center mt-4">Loading...</div>;
  }
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        Complaint Details
      </h2>
      <div className="bg-[#0d1d3b] rounded-lg shadow-lg overflow-hidden sm:rounded-lg border border-gray-300 hover:border-blue-500 transition duration-300">
        <div className="p-4">
          <div className="flex flex-col  px-4">
            <div className="py-2 border-b border-gray-300">
              <p className="text-sm md:text-md text-white mb-3">
                <span className="md:text-md">ID:</span> {complaint._id}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="md:text-md">Year:</span> {complaint.year}
              </p>
              <p className="text-sm md:text-md text-white mb-2">
                <span className="md:text-md">Department:</span>{" "}
                {complaint.department}
              </p>
              <p className="text-sm md:text-md text-white mb-3">
                <span className="md:text-md">Category:</span>{" "}
                {complaint.category}
              </p>
              <p className="text-sm md:text-md text-white mb-3">
                <span className="md:text-md font-medium">Date:</span>{" "}
                {formatDate(complaint.createdAt)}
              </p>
              <div className="text-sm md:text-md text-white mb-3">
                <span className="md:text-md">
                  Status:{` `}
                  <span className="capitalize">{complaint.status}</span>
                </span>
              </div>
            </div>
            <div className="py-2">
              <p className="text-sm md:text-md text-white">
                <span className="md:text-md">Description:</span>{" "}
                {complaint.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicViewComplaints;
