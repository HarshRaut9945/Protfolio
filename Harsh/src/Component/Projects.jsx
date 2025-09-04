import React from 'react';
import { ExternalLink, Github, Code, BarChart3, MessageSquare, Gavel } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BID.ai - Smart Marketplace",
      description: "A revolutionary marketplace platform that transforms traditional buying and selling with intelligent bidding algorithms, secure transactions, and real-time notifications. Features advanced search capabilities, category-based filtering, and comprehensive user management system.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Bootstrap"],
      icon: <Gavel className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      features: ["Smart bidding system", "Secure authentication", "Dynamic search filters", "Real-time updates"],
      githubUrl: "https://github.com/Anup2601/Assignment",
      liveUrl: "https://assignment-sigma-pearl.vercel.app/"
    },
    {
      id: 2,
      title: "IntelliChat - AI Conversation Hub",
      description: "An advanced AI-powered chat application that delivers intelligent, context-aware conversations. Built with modern React architecture, featuring persistent chat history, seamless API integration, and an intuitive interface designed for optimal user experience.",
      technologies: ["React", "OpenAI/Gemini API", "Tailwind CSS", "JavaScript", "Local Storage"],
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      features: ["Context-aware AI", "Persistent chat history", "Intuitive sidebar navigation", "Error handling system"],
      githubUrl: "https://github.com/yourusername/intellichat",
      liveUrl: "https://intellichat.example.com"
    },
    {
      id: 3,
      title: "ConnectPro - Video Collaboration Platform",
      description: "A comprehensive video conferencing solution built for modern remote collaboration. Engineered with cutting-edge WebRTC technology, supporting multi-participant meetings, screen sharing, and integrated communication tools for seamless virtual interactions.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "WebRTC", "Socket.io"],
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      features: ["HD video conferencing", "Screen sharing", "Real-time messaging", "Room management"],
      githubUrl: "https://github.com/Anup2601/Zero",
      liveUrl: "https://zero-blush.vercel.app/"
    },
    {
      id: 4,
      title: "DataVision - Analytics Intelligence Suite",
      description: "A comprehensive business intelligence platform that transforms raw data into actionable insights. Combines advanced statistical analysis, interactive visualizations, and automated reporting to help organizations make data-driven decisions with confidence.",
      technologies: ["Power BI", "Python", "SQL", "Excel", "Pandas", "Matplotlib"],
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      features: ["Interactive dashboards", "Statistical modeling", "Automated reporting", "Data visualization"],
      githubUrl: "https://github.com/yourusername/datavision",
      liveUrl: "https://datavision.example.com"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
              My Work & Innovation
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Featured <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Showcasing innovative solutions that blend cutting-edge technology with user-centered design. 
            Each project represents a unique approach to solving real-world challenges through 
            <span className="font-semibold text-purple-600"> creative engineering</span> and 
            <span className="font-semibold text-blue-600"> data-driven insights</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 hover:border-purple-300/50 transform hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: "fadeInUp 0.8s ease-out forwards"
              }}
            >
              {/* Animated Header Bar */}
              <div className={`h-2 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/30 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
              </div>
              
              <div className="p-8 lg:p-10">
                {/* Project Icon & Title */}
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} text-white mr-5 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500">
                      {project.title}
                    </h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-700 mt-1"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700 group/item hover:text-purple-600 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wider flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-sm font-semibold rounded-full hover:from-purple-100 hover:to-blue-100 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200/70">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                    Explore Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-purple-300 text-purple-700 rounded-full font-semibold hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-sm border border-purple-200/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Interested in collaborating on your next project?
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Let's discuss how we can bring your innovative ideas to life with modern technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start a Conversation
              </button>
              <button className="px-8 py-4 border-2 border-purple-300 text-purple-700 rounded-full font-semibold hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105">
                View All Projects
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;