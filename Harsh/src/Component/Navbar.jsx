import React, { useState } from "react";
import pic from "../../public/photo.avif";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItem = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Portfolio" },
    { id: 4, title: "Experience" }, // make sure your section uses exactly "Experience"
    { id: 5, title: "Contacts" },
  ];

  const linkProps = {
    smooth: true,
    duration: 400,
    offset: -70, // header height
    spy: true,
    activeClass: "text-green-600",
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white z-50 h-16">
      <div className="flex justify-between items-center h-16">
        {/* Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={pic}
            alt="profile"
            className="w-10 h-10 rounded-full border-2 border-green-500"
          />
          <div className="leading-tight">
            <h1 className="font-bold text-lg">
              Hars<span className="text-green-500">h</span>
            </h1>
            <p className="text-xs text-gray-500">Web Developer</p>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {navItem.map(({ id, title }) => (
            <li key={id} className="cursor-pointer hover:text-green-500">
              <Link to={title} {...linkProps}>
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile trigger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menu}
          onClick={() => setMenu((s) => !s)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          {menu ? <IoMdClose size={26} /> : <IoMenu size={26} />}
        </button>
      </div>

      {/* Mobile overlay menu */}
      {menu && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-sm md:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setMenu(false)}
            className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100"
          >
            <IoMdClose size={28} />
          </button>

          <ul className="h-full flex flex-col items-center justify-center space-y-8 text-xl font-semibold text-gray-800">
            {navItem.map(({ id, title }) => (
              <li key={id}>
                <Link
                  to={title}
                  {...linkProps}
                  onClick={() => setMenu(false)} // close after navigate
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
