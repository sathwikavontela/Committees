import React from 'react'

const FicProfileCard = ({ Data }) => {
  console.log(Data);
  return (
    <div className="flex justify-center mt-8 md:mt-10">
      <div className="max-w-xs md:max-w-lg">
        <div className="flex flex-row  w-fit px-10 items-center bg-white border border-gray-200 rounded-lg shadow-md">
          <img
            className="object-cover  rounded-t-lg h-auto w-32 md:rounded-none md:rounded-l-lg"
            src={Data.image_url}
            alt="Profile"
          />
          <div className="flex flex-col justify-between p-4 leading-normal text-sm sm:text-base md:text-md lg:text-md xl:text-lg">
            <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-gray-400">
              {Data.fullName}
            </h5>
            <p className="mb-3  text-gray-700 dark:text-gray-400">
              {Data.Id_number}
            </p>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              {Data.department}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FicProfileCard
