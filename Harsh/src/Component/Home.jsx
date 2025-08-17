import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
      name="Home"
       className="max-w-screen-2xl container mx-auto px-6 md:px-20 my-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <span className="text-base md:text-lg text-gray-500">👋 Welcome to my feed</span>

            <div className="flex justify-center md:justify-start space-x-2 text-2xl md:text-4xl font-bold">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-600"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base text-justify">
              I am a passionate <span className="font-semibold">Frontend Developer</span> with a strong foundation in building
              responsive and user-friendly web applications. Skilled in{" "}
              <span className="font-semibold">HTML, CSS, JavaScript, and React</span>, I enjoy turning ideas into interactive digital
              experiences. My focus is on writing clean, efficient code and creating
              designs that blend functionality with creativity.
              <br />
              <br />
              Beyond web development, I also have hands-on experience with{" "}
              <span className="font-semibold">SQL, MongoDB, Excel, and Power BI</span>,
              which allows me to manage data effectively and create meaningful dashboards.  
              This combination of development and analytical skills helps me deliver complete, data-driven solutions.
            </p>

            {/* Social + Skills Section */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start gap-8 mt-8">
              
              {/* Social Media Section */}
              <div className="text-center sm:text-left">
                <h1 className="font-bold text-lg mb-3 text-center">🌐 Available On</h1>
                <ul className="flex justify-center sm:justify-start space-x-5 text-2xl text-gray-600 items-center">
                  <li className="hover:text-blue-600 transition duration-300">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <FaSquareFacebook />
                    </a>
                  </li>
                  <li className="hover:text-blue-500 transition duration-300">
                    <a href="https://www.linkedin.com/in/harsh-raut-417951291/" target="_blank" rel="noreferrer">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="hover:text-gray-800 transition duration-300">
                    <a href="https://github.com/HarshRaut9945" target="_blank" rel="noreferrer">
                      <FaSquareGithub />
                    </a>
                  </li>
                  <li className="hover:text-sky-500 transition duration-300">
                    <a href="https://t.me/yourTelegramID" target="_blank" rel="noreferrer">
                      <FaTelegram />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Skills Section */}
              <div className="text-center sm:text-left">
                <h1 className="font-bold text-lg mb-3">⚡ Currently Working On</h1>
                <div className="flex justify-center sm:justify-start space-x-5 text-gray-700">
                  <SiMongodb className="text-3xl hover:scale-125 duration-300 cursor-pointer" />
                  <SiExpress className="text-3xl hover:scale-125 duration-300 cursor-pointer" />
                  <FaReact className="text-3xl hover:scale-125 duration-300 cursor-pointer" />
                  <FaNodeJs className="text-3xl hover:scale-125 duration-300 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="./public/Harsh.jpg"
              alt="Harsh Raut"
              className="w-56 h-56 md:w-96 md:h-96 object-cover rounded-full shadow-xl border-4 border-red-600 hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-12" />
    </>
  );
};

export default Home;
