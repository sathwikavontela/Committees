import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import FicHeader from "../FicHeader.js";
import FicSidebar from "../FicSidebar.js";
import ScrollableFeed from "react-scrollable-feed";

const socket = io("http://localhost:1024", {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

const FacultyMechchatBox = ({ userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = {
        department: "mech",
      };
      const branch = JSON.stringify(data);
      try {
        const response = await fetch(
          "http://localhost:1024/api/v1/messages/get/departmentMessagesForCentral1",
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: branch,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setMessages(data.messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
    socket.on("receiveMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  return (
    <div className="max-w-[100%]  h-screen overflow-x-hidden text-wrap">
      <FicHeader />
      <div className="flex w-full h-[85%]">
        <FicSidebar />
        <div className=" md:ml-[18%] sm:ml-[0%] sm:h-full overflow-y-hidden relative top-20 flex w-full">
          <div className="flex flex-col p-4 mx-auto lg:w-[100%] sm:h-full md:max-w-full items-center ">
            <h1 className="text-[25px] font-semibold font-serif text-blue-400">
              Welcome to MECH Chat Box
            </h1>
            <div className="flex flex-col lg:w-[90%] lg:h-[100%] md:w-[77%] sm:w-full md:h-[30em] overflow-y-scroll border border-gray-300 rounded-lg p-4 mb-4 bg-gray-100">
              <ScrollableFeed>
                <div className="flex flex-col space-y-4">
                  {messages.length > 0 &&
                    messages.map((m, index) => (
                      <div
                        className="justify-start flex items-center max-w-xs md:max-w-md space-x-2 bg-white text-gray-800 px-3 py-1 rounded-lg shadow"
                        key={index}
                      >
                        <p className="break-words w-auto">{m.message}</p>
                      </div>
                    ))}
                </div>
              </ScrollableFeed>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyMechchatBox;
