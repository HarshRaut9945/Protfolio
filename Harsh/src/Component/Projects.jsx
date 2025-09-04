import React from 'react';
import { ExternalLink, Github, Code, BarChart3, MessageSquare, Gavel } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Bid AI - OLX Clone",
      description: "A comprehensive online marketplace platform built with MERN stack featuring real-time bidding, user authentication, product listings, and secure payment integration.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
      icon: <Gavel className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      features: ["Real-time bidding", "User authentication", "Payment gateway", "Product management"],
      githubUrl: "https://github.com/Anup2601/Assignment",
      liveUrl: "https://assignment-sigma-pearl.vercel.app/"
    },
    {
      id: 2,
      title: "Chat AI - ChatGPT Clone",
      description: "An intelligent conversational AI application using Gemini API with React frontend, featuring chat history, multiple conversation threads, and responsive design.",
      technologies: ["React", "Gemini API", "JavaScript", "CSS3", "Local Storage"],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      features: ["AI conversations", "Chat history", "Multiple threads", "Responsive design"],
      githubUrl: "https://github.com/yourusername/chat-ai",
      liveUrl: "https://chat-ai.example.com"
    },
    {
      id: 3,
      title: "Zero - Zoom Clone",
      description: "A full-featured video conferencing application built with MERN stack, supporting multiple participants, screen sharing, and real-time communication.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "WebRTC", "Socket.io"],
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      features: ["Video conferencing", "Screen sharing", "Real-time chat", "Room management"],
      githubUrl: "https://github.com/Anup2601/Zero",
      liveUrl: "https://zero-blush.vercel.app/"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Comprehensive data analytics solution combining multiple tools for data visualization, statistical analysis, and business intelligence reporting.",
      technologies: ["Power BI", "Python", "SQL", "Excel", "Pandas", "Matplotlib"],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      features: ["Interactive dashboards", "Statistical analysis", "Data visualization", "Business reports"],
      githubUrl: "https://github.com/yourusername/chat-ai",
      liveUrl: "https://chat-ai.example.com"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, AI integration, and data analytics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
            >
              {/* Card Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                {/* Project Icon & Title */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                    <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                        <Github className="w-4 h-4" />
                        View Code
                    </a>
                    <a 
                        href={project.liveUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                    </a>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 