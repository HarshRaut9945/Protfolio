import React, { useState, useEffect } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaDownload, FaArrowRight } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import Profil from "../assets/Harsh.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // CV Download Function
  const handleDownloadCV = () => {
    try {
      // Create a link element
      const link = document.createElement('a');
      
      // Set the href to your PDF file path (stored in public/assets folder)
      link.href = '/assets/resume_Harsh(1).pdf';
      
      // Set the download attribute with desired filename
      link.download = 'Harsha_Raut_Resume.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Sorry, there was an error downloading the CV. Please try again.');
    }
  };

  const skillIcons = [
    { Icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
    { Icon: SiExpress, color: "text-gray-700", name: "Express.js" },
    { Icon: FaReact, color: "text-blue-500", name: "React" },
    { Icon: FaNodeJs, color: "text-green-600", name: "Node.js" },
  ];

  const socialLinks = [
    { Icon: FaSquareFacebook, href: "https://www.facebook.com/", color: "hover:text-blue-600", name: "Facebook" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/harsh-raut-417951291/", color: "hover:text-blue-500", name: "LinkedIn" },
    { Icon: FaSquareGithub, href: "https://github.com/HarshRaut9945", color: "hover:text-gray-800", name: "GitHub" },
    { Icon: FaTelegram, href: "https://t.me/yourTelegramID", color: "hover:text-sky-500", name: "Telegram" },
  ];

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div
        name="Home"
        className="min-h-screen flex items-center relative z-10 bg-gradient-to-br from-gray-50 via-white to-blue-50"
      >
        <div className="max-w-7xl container mx-auto px-6 md:px-20 py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            
            {/* Left Side - Text Content */}
            <div className={`w-full lg:w-1/2 space-y-8 text-center lg:text-left transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              
              {/* Welcome Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 text-gray-600 text-sm md:text-base animate-fadeInDown">
                <span className="animate-wave mr-2">👋</span>
                Welcome to my digital space
              </div>

              {/* Main Heading with Typed Effect */}
              <div className="space-y-2">
                <div className="flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start gap-2 text-3xl md:text-5xl lg:text-6xl font-bold">
                  <h1 className="text-gray-800 animate-fadeInUp">Hello, I'm a</h1>
                  <ReactTyped
                    className="text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text animate-fadeInUp animation-delay-500"
                    strings={["Developer", "Programmer", "Data Analyst", "Problem Solver"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                  />
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto lg:mx-0 rounded-full animate-slideInLeft animation-delay-1000"></div>
              </div>

              {/* Description */}
              <div className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                  I am a passionate <span className="font-bold text-purple-600">Full-Stack Developer</span> and{" "}
                  <span className="font-bold text-blue-600">Data Analyst</span> with expertise in building
                  responsive web applications and extracting meaningful insights from complex datasets.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6 text-sm md:text-base">
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-2">🚀 Web Development</h4>
                    <p className="text-gray-600">React, Node.js, MongoDB, Express.js</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-2">📊 Data Analytics</h4>
                    <p className="text-gray-600">Python, Power BI, SQL, Excel</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}>
                <button 
                  onClick={handleDownloadCV}
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <FaDownload className="group-hover:animate-bounce" />
                  Download CV
                </button>
                <button className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                  View Projects
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Social + Skills Section */}
              <div className={`flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 pt-8 transform transition-all duration-1000 delay-1200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
              }`}>
                
                {/* Social Media Section */}
                <div className="text-center xl:text-left">
                  <h3 className="font-bold text-lg mb-6 text-gray-800 flex items-center justify-center xl:justify-start gap-2">
                    <span className="text-2xl">🌐</span>
                    Connect With Me
                  </h3>
                  <div className="flex justify-center xl:justify-start space-x-6">
                    {socialLinks.map(({ Icon, href, color, name }, index) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={`group relative p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg ${color} transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-fadeInUp`}
                        style={{ animationDelay: `${1400 + index * 100}ms` }}
                      >
                        <Icon className="text-2xl transition-colors duration-300" />
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Skills Section */}
                <div className="text-center xl:text-left">
                  <h3 className="font-bold text-lg mb-6 text-gray-800 flex items-center justify-center xl:justify-start gap-2">
                    <span className="text-2xl">⚡</span>
                    Tech Stack
                  </h3>
                  <div className="flex justify-center xl:justify-start space-x-6">
                    {skillIcons.map(({ Icon, color, name }, index) => (
                      <div
                        key={name}
                        className={`group relative p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-rotate-6 animate-fadeInUp ${color}`}
                        style={{ animationDelay: `${1600 + index * 100}ms` }}
                      >
                        <Icon className="text-3xl transition-transform duration-300 group-hover:scale-125" />
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className={`w-full lg:w-1/2 flex justify-center items-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative group">
                {/* Floating Elements */}
                <div 
                  className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
                  style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                  }}
                ></div>
                <div 
                  className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-30 animate-float animation-delay-1000"
                  style={{
                    transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
                  }}
                ></div>
                
                {/* Profile Image */}
                <div className="relative">
                  {/* Gradient Ring */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full p-2 animate-spin-slow">
                    <div className="w-full h-full bg-white rounded-full"></div>
                  </div>
                  
                  {/* Profile Picture */}
                  <img
                    src={Profil}
                    alt="Harsh Raut - Full Stack Developer"
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl transition-all duration-500 group-hover:scale-105 animate-pulse-slow"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 h-px"></div>
        <div className="relative bg-white h-px"></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          10%, 30% { transform: rotate(-10deg); }
          20% { transform: rotate(12deg); }
          40% { transform: rotate(-4deg); }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-wave { animation: wave 2s ease-in-out infinite; }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </>
  );
};

export default Home;