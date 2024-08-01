import React, { useEffect, useState } from "react";

import Header from "../Home/Header";
import CentralAuthoritySidebar from "../Home/CentralAuthoritySidebar";

const CentralAuthorityFeedback = () => {
  const colors = [
    "bg-red-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-blue-300",
    "bg-yellow-300",
  ];
  const [feedbacks, setfeedbacks] = useState([]);
  const [feedbacksReady, setfeedbacksReady] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbacksPerPage] = useState(5); // Number of feedbacks per page

  const fetchfeedbacks = async () => {
    const url =
      "http://localhost:1024/api/v1/feedbacks/get/feedbacksForCentral";
    try {
      const response = await fetch(url, {
        method: "GET",
        credentials: "include", // Include credentials (cookies)
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log(json);
      setfeedbacks(json.feedbacks);
      setfeedbacksReady(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchfeedbacks();
  }, []);
  const formatDate = (dateString) => {
    // console.log(dateString);
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    //console.log(day, month, year);

    return `${day}/${month}/${year}`;
  };

  // Get current feedbacks
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks =
    feedbacksReady &&
    feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-[100%] overflow-x-hidden text-wrap">
      <Header />
      <div className="flex w-full">
        <CentralAuthoritySidebar />
        <div className="relative h-screen w-full lg:left-[8.5%] lg:top-16 md:left-20 md:top-10 sm:top-10">
          <div className=" w-full mt-[-1%] sm:mt-[2em] ">
            <div className="overflow-x-auto ">
              <div className="w-full flex flex-col items-center ">
                {feedbacksReady &&
                  currentFeedbacks.map((feedback, index) => (
                    <div
                      className={`lg:w-[70vw]  md:w-[60vw] sm:w-[80%] px-2 py-4 rounded-md ${
                        colors[index % colors.length]
                      }  my-4`}
                    >
                      <p>Year: {feedback.year}</p>
                      <p>Branch:{feedback.department}</p>
                      <p>Commiittee_name : {feedback.committee_name}</p>
                      <p>Created_at: {formatDate(feedback.createdAt)}</p>
                      <p>Description: {feedback.description} </p>
                    </div>
                  ))}
                {feedbacksReady && feedbacks.length === 0 && (
                  <p>No feedbacks found </p>
                )}
              </div>
              <div className="relative flex justify-center mt-4 mb-6">
                <button
                  className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <button
                  className={`bg-blue-500 text-white px-4 py-2 mx-2 rounded-md ${
                    indexOfLastFeedback >= feedbacks.length
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastFeedback >= feedbacks.length}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralAuthorityFeedback;
