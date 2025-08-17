import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // Navigation Items
  const navItem = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Portfolio" },
    { id: 4, title: "Experience" },
    { id: 5, title: "Contacts" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 bg-white z-50 h-16">
        <div className="flex justify-between items-center py-4 h-16">
          {/* ---------------- Left Section - Logo + Name ---------------- */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src={pic}
              className="w-12 h-12 rounded-full border-2 border-green-500 shadow-sm"
              alt="profile"
            />
            <div>
              <h1 className="font-bold text-xl tracking-wide">
                Hars<span className="text-green-500">h</span>
              </h1>
              <p className="text-sm text-gray-500">Web Developer</p>
            </div>
          </div>

          {/* ---------------- Desktop Nav Bar ---------------- */}
          <div>
            <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
              {navItem.map(({ id, title }) => (
                <li
                  key={id}
                  className="hover:text-green-500 cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  {title}
                </li>
              ))}
            </ul>

            {/* ---------------- Hamburger Icon ---------------- */}
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer transition-transform duration-300"
            >
              {menu ? <IoMdClose size={28} /> : <IoMenu size={28} />}
            </div>
          </div>
        </div>

        {/* ---------------- Mobile Nav Bar ---------------- */}
        {menu && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 shadow-lg z-40">
            <ul className="text-gray-700 font-semibold text-xl">
              {navItem.map(({ id, title }) => (
                <li
                  key={id}
                  className="py-2 hover:text-green-500 cursor-pointer transition-transform duration-300 hover:scale-110 text-center"
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
