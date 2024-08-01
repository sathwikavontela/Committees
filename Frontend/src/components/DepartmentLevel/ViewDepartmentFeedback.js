// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const ViewDepartmentFeedback = () => {
//   const { feedbackId } = useParams()
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//   const day = String(date.getDate()).padStart(2, '0');
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//   return `${day}/${month}/${year}`;
// };

//   const handleStatusChange = (e) => {
//     const newStatus = e.target.value
//     setStatus(newStatus);
//   }
//   if (!complaint) {
//     return <div className="text-center mt-4">Loading...</div>
//   }
//   return (
//     <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full max-w-screen">
//       <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
//         Complaint Details
//       </h2>
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden sm:rounded-lg border border-gray-300 hover:border-blue-500 transition duration-300">
//         <div className="p-4">
//           <div className="flex flex-col border-b border-gray-300 hover:bg-gray-100">
//             <div className="py-2 border-b border-gray-300">
//               <p className="text-sm text-gray-600 mb-2">
//                 <span className="font-medium">ID:</span> {complaint._id}
//               </p>
//               <p className="text-sm text-gray-600 mb-2">
//                 <span className="font-medium">Category:</span>
//                 {complaint.category}
//               </p>
//               <p className="text-sm text-gray-600 mb-2">
//                 <span className="font-medium">Date:</span>16-07-2024
//               </p>
//             </div>
//             <div className="py-2">
//               <p className="text-sm text-gray-700">
//                 <span className="font-medium">Description:</span>{' '}
//                 {complaint.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ViewDepartmentFeedback
import React from 'react'

const ViewDepartmentFeedback = () => {
  return (
    <div>
      Hii
    </div>
  )
}

export default ViewDepartmentFeedback

