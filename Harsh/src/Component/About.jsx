import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div
      name="About"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Get to know me
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg md:text-xl">
            Hello, I'm{" "}
            <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Harsha Raut
            </span>, a passionate{" "}
            <span className="font-semibold text-blue-400">Full-Stack Developer</span> and{" "}
            <span className="font-semibold text-green-400">Data Analyst</span> with
            expertise in the{" "}
            <span className="font-semibold text-cyan-400">MERN Stack</span>. I
            enjoy building modern, responsive, and user-friendly applications that
            solve real-world problems with impactful and visually stunning solutions.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Education & Training */}
          <motion.div
            variants={itemVariants}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl mr-4">
                🎓
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Education & Training
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h3 className="text-purple-400 font-semibold text-lg mb-2">Bachelor's Degree</h3>
                <p className="text-gray-300">B.Tech in Computer Science – Dr. A. P. J. Abdul Kalam Technical University (2022 – 2026)</p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {[
                  "Frontend Development Certification (2024)",
                  "Data Structures & Algorithms in Java (2024)",
                  "Data Analytics with Excel & Power BI – Udemy (2024)",
                  "SQL for Data Analysis – Coursera (2024)",
                  "MongoDB Essentials – MongoDB University (2024)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2"></div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            variants={itemVariants}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl mr-4">
                ⚡
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Skills & Expertise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-blue-400 font-semibold mb-3">Frontend Development</h3>
                <div className="space-y-2">
                  {["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-cyan-400 font-semibold mb-3">Backend & Data</h3>
                <div className="space-y-2">
                  {["Node.js & Express.js", "MongoDB & MySQL", "Python & SQL", "Power BI & Excel"].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 mt-4">
                <h3 className="text-green-400 font-semibold mb-3">Tools & Others</h3>
                <div className="flex flex-wrap gap-2">
                  {["Git & GitHub", "VS Code", "Problem Solving", "Team Collaboration", "Communication"].map((tool, index) => (
                    <span key={index} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            variants={itemVariants}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl mr-4">
                💼
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Professional Experience
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Full-Stack Development Projects",
                  desc: "Built responsive and interactive web applications using React, Node.js, and MongoDB with modern UI/UX design principles."
                },
                {
                  title: "Data Analysis & Visualization",
                  desc: "Created comprehensive analytics dashboards using SQL, Excel, and Power BI for data-driven insights."
                },
                {
                  title: "Algorithm Implementation",
                  desc: "Strengthened problem-solving skills through Data Structures & Algorithms implementation in Java and Python."
                },
                {
                  title: "API Development & Integration",
                  desc: "Developed RESTful APIs and integrated third-party services for enhanced application functionality."
                }
              ].map((exp, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-green-400 font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-300 text-sm">{exp.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Awards */}
          <motion.div
            variants={itemVariants}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl mr-4">
                🏆
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Achievements & Awards
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Clash of Code Conduct (Microsoft Student Community)",
                  desc: "Ranked Top 5 out of 150+ participants in competitive programming"
                },
                {
                  title: "HackWithUttarakhand 2024",
                  desc: "Secured 3rd Place by building a logistics web app within 36 hours"
                },
                {
                  title: "LeetCode Problem Solver",
                  desc: "Solved 200+ algorithmic problems strengthening DSA skills"
                },
                {
                  title: "Multiple Technical Certifications",
                  desc: "Completed certifications in Frontend Development, DSA, and Data Analytics"
                }
              ].map((achievement, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-yellow-400 font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-3xl text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
            🚀
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mission Statement
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg md:text-xl">
            My mission is to leverage my skills in{" "}
            <span className="font-semibold text-purple-400">web development</span> and{" "}
            <span className="font-semibold text-blue-400">data technologies</span> to create impactful,
            user-friendly, and efficient solutions. I aim to combine my{" "}
            <span className="font-semibold text-cyan-400">MERN stack expertise</span> with{" "}
            <span className="font-semibold text-green-400">SQL, Excel, and Power BI</span> to build
            applications that solve real-world problems while delivering meaningful insights
            and exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;