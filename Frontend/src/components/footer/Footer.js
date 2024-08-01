import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-800 py-4 px-10 w-[85%] mt-[-4%]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-blue-900 ml-[-3%]">
            Copyright @ Rajiv Gandhi University of Knowledge Technologies, Basar
          </p>
        </div>
        <div className="flex flex-row mr-[-2%]">
          <a
            href="https://www.facebook.com/people/Rajiv-Gandhi-University-of-Knowledge-Technologies/100081653359582/"
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC_5eZQWA2Celmz2Plt-bKfA"
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rgukt-basar-41b210114/"
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rgukt-basar-41b210114/"
            className="text-gray-600 hover:text-gray-900 mx-2"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
