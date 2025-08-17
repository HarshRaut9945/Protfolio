import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: oracle, name: "Oracle" },
    { id: 6, logo: spring, name: "Spring" },
    { id: 7, logo: springBoot, name: "Spring Boot" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-3">Experience</h1>
        <p className="text-gray-600">
          I’ve gained hands-on experience in these technologies.
        </p>
      </div>

      {/* Tech Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 md:gap-2 mt-10">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="group flex flex-col items-center text-center p-1 transition-all duration-300"
          >
            {/* Circle Glow Effect */}
            <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 p-[2px] group-hover:scale-110 group-hover:animate-bounce transition-all duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg">
                <img
                  src={logo}
                  alt={name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            {/* Name */}
            <span className="mt-1 text-xs md:text-sm font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
