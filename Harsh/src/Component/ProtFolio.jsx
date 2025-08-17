import React from 'react'
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

const ProtFolio = () => {
  const cardiTems = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
      description:
        "A NoSQL database used to store high-volume data in a flexible, document-oriented format.",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
      description:
        "A minimal and flexible Node.js framework for building server-side applications and APIs.",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      description:
        "A JavaScript library for building fast and interactive user interfaces.",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description:
        "A runtime environment that allows executing JavaScript code on the server-side.",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
      description:
        "A versatile high-level programming language popular for AI, data science, and web development.",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
      description:
        "A robust, object-oriented programming language widely used for enterprise applications.",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      {/* Section Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-600">Portfolio</h1>
        <p className="underline font-semibold text-gray-700">
          Featured Projects
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
        {cardiTems.map(({ id, logo, name, description }) => (
          <div
            key={id}
            className="border-[2px] rounded-xl shadow-lg p-6 cursor-pointer hover:scale-105 duration-300 flex flex-col items-center bg-white"
          >
            {/* Logo */}
            <img
              src={logo}
              className="w-[100px] h-[100px] p-2 rounded-full border-[2px] object-cover"
              alt={name}
            />

            {/* Text */}
            <div className="text-center mt-4 flex flex-col flex-grow">
              <h2 className="font-bold text-xl text-gray-800">{name}</h2>
              <p className="px-2 text-gray-600 text-sm mt-2">{description}</p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow">
                Video
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow">
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtFolio;
