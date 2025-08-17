import React from "react";

const About = () => {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-6 md:px-20 my-16">
      {/* About Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Hello, I'm{" "}
          <span className="font-semibold text-green-600">Harsh</span>, a
          passionate <span className="font-semibold">Web Developer</span> with
          expertise in the{" "}
          <span className="font-semibold text-green-600">MERN Stack</span>. With
          a strong background in IT, I enjoy building modern, responsive, and
          user-friendly applications. My goal is to craft{" "}
          <span className="italic">impactful</span> and{" "}
          <span className="italic">visually stunning</span> solutions that
          create meaningful digital experiences.
        </p>
      </div>

      {/* Education & Training */}
      <div className="mb-12">
        <h2 className="text-green-600 font-semibold text-2xl mb-3">
          Education & Training
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            B.Tech in Computer Science & Design – GNIOT (2022 – 2026)
          </li>
          <li>Frontend Development Certification – (2024)</li>
          <li>Data Structures & Algorithms in Java – (2024)</li>
          <li>Data Analytics with Excel & Power BI – Udemy (2024)</li>
          <li>SQL for Data Analysis – Coursera (2024)</li>
          <li>MongoDB Essentials – MongoDB University (2024)</li>
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-12">
        <h2 className="text-green-600 font-semibold text-2xl mb-3">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
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
      </div>

      {/* Professional Experience */}
      <div className="mb-12">
        <h2 className="text-green-600 font-semibold text-2xl mb-3">
          Professional Experience
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>Frontend Development Projects</strong> (2023 – Present) –
            Built responsive and interactive web applications using React,
            Tailwind CSS, and JavaScript.
          </li>
          <li>
            <strong>Data Handling & Visualization</strong> (2024 – Present) –
            Hands-on practice with MS Excel, SQL, and Power BI for analytics and
            dashboards.
          </li>
          <li>
            <strong>DSA in Java</strong> (2023 – Present) – Practicing problem
            solving and algorithms to strengthen coding skills.
          </li>
          <li>
            <strong>Certifications & Coursework</strong> – Completed multiple
            certifications in Frontend & DSA in Java.
          </li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="mb-12">
        <h2 className="text-green-600 font-semibold text-2xl mb-3">
          Achievements & Awards
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Frontend Development Certification – (2024)</li>
          <li>DSA in Java Certification – (2024)</li>
          <li>
            Consistent Academic Performance – B.Tech (Batch 2022 – 2026)
          </li>
          <li>
            Built personal projects – Chatbot UI, Portfolio Website, Data
            Dashboards (2023 – 2025)
          </li>
        </ul>
      </div>

      {/* Mission Statement */}
      <div className="mb-12">
        <h2 className="text-green-600 font-semibold text-2xl mb-3">
          Mission Statement
        </h2>
        <p className="text-gray-700 leading-relaxed">
          My mission is to leverage my skills in web development and data
          technologies to create impactful, user-friendly, and efficient
          solutions. I aim to combine my knowledge of the MERN stack, SQL, Excel,
          and Power BI to build applications that not only solve real-world
          problems but also deliver meaningful insights. I am committed to
          continuous learning, embracing new challenges, and growing into a
          versatile IT professional who adds value to every project and team I
          collaborate with.
        </p>
      </div>
    </div>
  );
};

export default About;
