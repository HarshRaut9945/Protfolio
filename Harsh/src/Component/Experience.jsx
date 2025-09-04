import React, { useState } from "react";
import { motion } from "framer-motion";

function Experience() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardItem = [
    // Web Development
    { 
      id: 1, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      name: "HTML5",
      category: "web",
      level: "Advanced",
      color: "from-orange-500 to-red-500",
      description: "Semantic markup & modern standards"
    },
    { 
      id: 2, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      name: "CSS3",
      category: "web", 
      level: "Advanced",
      color: "from-blue-500 to-cyan-500",
      description: "Responsive design & animations"
    },
    { 
      id: 3, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
      name: "Java",
      category: "web",
      level: "Intermediate",
      color: "from-red-600 to-orange-600",
      description: "Object-oriented programming & DSA"
    },
    { 
      id: 4, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      name: "JavaScript",
      category: "web",
      level: "Advanced", 
      color: "from-yellow-400 to-yellow-600",
      description: "ES6+ features & async programming"
    },
    { 
      id: 5, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      name: "React",
      category: "web",
      level: "Advanced",
      color: "from-blue-400 to-cyan-400",
      description: "Component-based architecture & hooks"
    },
    { 
      id: 6, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      name: "Node.js",
      category: "web",
      level: "Intermediate",
      color: "from-green-500 to-green-600",
      description: "Server-side JavaScript & APIs"
    },
    { 
      id: 7, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", 
      name: "Express.js",
      category: "web",
      level: "Intermediate",
      color: "from-gray-600 to-gray-800",
      description: "RESTful APIs & middleware"
    },
    { 
      id: 8, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
      name: "MongoDB",
      category: "web",
      level: "Intermediate",
      color: "from-green-600 to-green-800",
      description: "NoSQL database & document storage"
    },
    { 
      id: 9, 
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", 
      name: "Tailwind CSS",
      category: "web",
      level: "Advanced",
      color: "from-cyan-400 to-blue-600",
      description: "Utility-first CSS framework"
    },
    // Data Analytics Tools
    { 
      id: 10, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      name: "Python",
      category: "analytics",
      level: "Advanced",
      color: "from-blue-600 to-yellow-500",
      description: "Data analysis & automation scripts"
    },
    { 
      id: 11, 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg", 
      name: "Pandas",
      category: "analytics",
      level: "Advanced",
      color: "from-purple-500 to-blue-600",
      description: "Data manipulation & analysis"
    },
    { 
      id: 12, 
      logo: "https://numpy.org/images/logo.svg", 
      name: "NumPy",
      category: "analytics",
      level: "Intermediate",
      color: "from-blue-500 to-indigo-600",
      description: "Scientific computing & arrays"
    },
    { 
      id: 13, 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", 
      name: "Matplotlib",
      category: "analytics",
      level: "Intermediate",
      color: "from-green-400 to-blue-500",
      description: "Data visualization & plotting"
    },
    { 
      id: 14, 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg", 
      name: "Excel",
      category: "analytics",
      level: "Advanced",
      color: "from-green-600 to-green-700",
      description: "Advanced formulas & data analysis"
    },
    { 
      id: 15, 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", 
      name: "Power BI",
      category: "analytics",
      level: "Intermediate",
      color: "from-yellow-400 to-orange-500",
      description: "Business intelligence & dashboards"
    },
    { 
      id: 16, 
      logo: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg", 
      name: "SQL",
      category: "analytics",
      level: "Advanced",
      color: "from-blue-600 to-blue-800",
      description: "Database queries & data analysis"
    },
  ];

  const categories = [
    { id: "all", name: "All Skills", icon: "🚀", count: cardItem.length },
    { id: "web", name: "Web Development", icon: "💻", count: cardItem.filter(item => item.category === "web").length },
    { id: "analytics", name: "Data Analytics", icon: "📊", count: cardItem.filter(item => item.category === "analytics").length },
  ];

  const filteredItems = activeCategory === "all" 
    ? cardItem 
    : cardItem.filter(item => item.category === activeCategory);

  const getLevelColor = (level) => {
    switch(level) {
      case "Advanced": return "text-emerald-600 bg-emerald-100 border-emerald-200";
      case "Intermediate": return "text-blue-600 bg-blue-100 border-blue-200";
      default: return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div
      name="Experience"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6"
    >
      <div className="max-w-7xl container mx-auto">
        
        {/* Floating Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Header Section */}
        <motion.div 
          className="text-center mb-20 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
              My Technical Arsenal
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Experience
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforming ideas into reality through modern web technologies and 
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold"> data-driven insights</span>
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 shadow-lg hover:shadow-xl border border-white/20"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <div className="flex flex-col items-start">
                <span className="text-lg">{category.name}</span>
                <span className="text-xs opacity-70">{category.count} skills</span>
              </div>
              {activeCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-50 -z-10 animate-pulse"></div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative"
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-110`}></div>
              
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} p-1 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-12 h-12 object-contain filter group-hover:brightness-110 transition-all duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl hidden items-center justify-center text-white font-bold text-xl">
                        {item.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-center font-bold text-xl text-white mb-3 group-hover:text-white transition-colors duration-500">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-center text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {item.description}
                </p>

                {/* Skill Level Badge */}
                <div className="flex justify-center">
                  <span className={`px-4 py-2 rounded-full text-xs font-bold border ${getLevelColor(item.level)} transition-all duration-500 group-hover:scale-105`}>
                    {item.level}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Progress Bar */}
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="w-full bg-white/20 rounded-full h-1 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: hoveredCard === item.id ? (item.level === "Advanced" ? "90%" : "70%") : "0%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "1+", label: "Years Experience", color: "from-purple-500 to-pink-500", icon: "⏰" },
            { number: cardItem.length, label: "Technologies", color: "from-blue-500 to-cyan-500", icon: "🛠️" },
            { number: "10+", label: "Projects Completed", color: "from-green-500 to-emerald-500", icon: "🚀" },
            { number: "200+", label: "Problems Solved", color: "from-orange-500 to-red-500", icon: "🧠" }
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-20 blur-xl scale-110 group-hover:opacity-30 transition-opacity duration-500`}></div>
              <div className="relative text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 shadow-xl">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
         
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;