import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-6 md:px-20 my-16 text-gray-200"
    >
      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto text-lg">
          Hello, I'm{" "}
          <span className="font-semibold text-green-400">Harsh</span>, a
          passionate <span className="font-semibold">Web Developer</span> with
          expertise in the{" "}
          <span className="font-semibold text-cyan-400">MERN Stack</span>. I
          enjoy building modern, responsive, and user-friendly applications with
          impactful and visually stunning solutions.
        </p>
      </motion.div>

      {/* Education & Training */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 bg-gray-900/60 p-6 rounded-xl shadow-lg hover:shadow-green-400/30 transition"
      >
        <h2 className="text-green-400 font-semibold text-2xl mb-4">
          🎓 Education & Training
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>B.Tech in Computer Science & Design – GNIOT (2022 – 2026)</li>
          <li>Frontend Development Certification – (2024)</li>
          <li>Data Structures & Algorithms in Java – (2024)</li>
          <li>Data Analytics with Excel & Power BI – Udemy (2024)</li>
          <li>SQL for Data Analysis – Coursera (2024)</li>
          <li>MongoDB Essentials – MongoDB University (2024)</li>
        </ul>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 bg-gray-900/60 p-6 rounded-xl shadow-lg hover:shadow-cyan-400/30 transition"
      >
        <h2 className="text-cyan-400 font-semibold text-2xl mb-4">
          ⚡ Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <ul className="list-disc list-inside space-y-1">
            <li>HTML, CSS, JavaScript, Tailwind CSS</li>
            <li>React.js, Node.js, MongoDB</li>
            <li>Git & GitHub (Version Control)</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>SQL, MS Excel, Power BI</li>
            <li>Problem-solving & Clean Coding</li>
            <li>Team Collaboration & Communication</li>
          </ul>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 bg-gray-900/60 p-6 rounded-xl shadow-lg hover:shadow-green-400/30 transition"
      >
        <h2 className="text-green-400 font-semibold text-2xl mb-4">
          💼 Professional Experience
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>
            <strong>Frontend Development Projects</strong> – Built responsive and
            interactive web apps using React & Tailwind.
          </li>
          <li>
            <strong>Data Handling & Visualization</strong> – Analytics with SQL,
            Excel & Power BI dashboards.
          </li>
          <li>
            <strong>DSA in Java</strong> – Strengthening algorithms & problem-solving.
          </li>
          <li>
            <strong>Certifications & Coursework</strong> – Multiple technical
            certifications in frontend & DSA.
          </li>
        </ul>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 bg-gray-900/60 p-6 rounded-xl shadow-lg hover:shadow-cyan-400/30 transition"
      >
        <h2 className="text-cyan-400 font-semibold text-2xl mb-4">
          🏆 Achievements & Awards
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Frontend Development Certification – (2024)</li>
          <li>DSA in Java Certification – (2024)</li>
          <li>Consistent Academic Performance – B.Tech (2022 – 2026)</li>
          <li>
            Built personal projects – Chatbot UI, Portfolio Website, Dashboards
          </li>
        </ul>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gray-900/60 p-6 rounded-xl shadow-lg hover:shadow-green-400/30 transition"
      >
        <h2 className="text-green-400 font-semibold text-2xl mb-4">
          🚀 Mission Statement
        </h2>
        <p className="text-gray-300 leading-relaxed">
          My mission is to leverage my skills in web development & data
          technologies to create impactful, user-friendly, and efficient
          solutions. I aim to combine my MERN stack expertise with SQL, Excel,
          and Power BI to build apps that solve real-world problems while
          delivering meaningful insights.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
