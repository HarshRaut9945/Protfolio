import React, { useState } from "react";

function Experience() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Using placeholder images - replace with your actual images
  const cardItem = [
    // Web Development
    { 
      id: 1, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      name: "HTML5",
      category: "web",
      level: "Advanced",
      color: "from-orange-500 to-red-500"
    },
    { 
      id: 2, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      name: "CSS3",
      category: "web", 
      level: "Advanced",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      id: 3, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", 
      name: "Java",
      category: "web",
      level: "Intermediate",
      color: "from-red-600 to-orange-600"
    },
    { 
      id: 4, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", 
      name: "JavaScript",
      category: "web",
      level: "Advanced", 
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      id: 5, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      name: "React",
      category: "web",
      level: "Advanced",
      color: "from-blue-400 to-cyan-400"
    },
    { 
      id: 6, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      name: "Node.js",
      category: "web",
      level: "Intermediate",
      color: "from-green-500 to-green-600"
    },
    // Data Analytics Tools
    { 
      id: 7, 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      name: "Python",
      category: "analytics",
      level: "Advanced",
      color: "from-blue-600 to-yellow-500"
    },
    { 
      id: 8, 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg", 
      name: "Pandas",
      category: "analytics",
      level: "Advanced",
      color: "from-purple-500 to-blue-600"
    },
    { 
      id: 9, 
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg", 
      name: "Matplotlib",
      category: "analytics",
      level: "Intermediate",
      color: "from-green-400 to-blue-500"
    },
    { 
      id: 10, 
      logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", 
      name: "Seaborn",
      category: "analytics",
      level: "Intermediate",
      color: "from-teal-400 to-blue-600"
    },
    { 
      id: 11, 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg", 
      name: "Excel",
      category: "analytics",
      level: "Advanced",
      color: "from-green-600 to-green-700"
    },
    { 
      id: 12, 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", 
      name: "Power BI",
      category: "analytics",
      level: "Intermediate",
      color: "from-yellow-400 to-orange-500"
    },
  ];

  const categories = [
    { id: "all", name: "All Skills", icon: "🚀" },
    { id: "web", name: "Web Development", icon: "💻" },
    { id: "analytics", name: "Data Analytics", icon: "📊" },
  ];

  const filteredItems = activeCategory === "all" 
    ? cardItem 
    : cardItem.filter(item => item.category === activeCategory);

  const getLevelColor = (level) => {
    switch(level) {
      case "Advanced": return "text-green-600 bg-green-100";
      case "Intermediate": return "text-blue-600 bg-blue-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div
      name="Experience"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-4"
    >
      <div className="max-w-7xl container mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent mb-6">
              Experience & Skills
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            I've gained hands-on experience across web development and data analytics, 
            building modern applications and extracting insights from complex datasets.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredItems.map(({ id, logo, name, level, color }, index) => (
            <div
              key={id}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
              <div className="relative bg-white rounded-2xl p-6 -m-6">
                
                {/* Icon Container */}
                <div className="flex justify-center mb-4">
                  <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <img
                        src={logo}
                        alt={name}
                        className="w-10 h-10 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        onError={(e) => {
                          // Fallback for broken images
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback icon */}
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg hidden items-center justify-center text-white font-bold text-lg">
                        {name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Name */}
                <h3 className="text-center font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                  {name}
                </h3>

                {/* Skill Level Badge */}
                <div className="flex justify-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(level)} transition-colors duration-300`}>
                    {level}
                  </span>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">{cardItem.length}</div>
            <p className="text-gray-600">Technologies</p>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
        </div>
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
    </div>
  );
}

export default Experience;