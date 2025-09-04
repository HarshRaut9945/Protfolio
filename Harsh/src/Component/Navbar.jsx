import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Sample profile image - replace with your actual image
  const pic = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format";

  const navItem = [
    { id: 1, title: "Home", icon: "🏠" },
    { id: 2, title: "About", icon: "👤" },
    { id: 3, title: "Portfolio", icon: "💼" },
    { id: 4, title: "Experience", icon: "🏆" }, 
    { id: 5, title: "Projects", icon: "🚀" },
    { id: 6, title: "Contacts", icon: "📧" },
  ];

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -80,
    spy: true,
    activeClass: "text-emerald-500 scale-105",
    onSetActive: (section) => setActiveSection(section),
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menu]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? 'h-14' : 'h-16'
          }`}>
            
            {/* Brand Section */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img
                  src={pic}
                  alt="Harsh - Web Developer"
                  className={`rounded-full border-3 border-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                    scrolled ? 'w-9 h-9' : 'w-10 h-10'
                  }`}
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div className="leading-tight">
                <h1 className={`font-bold text-gray-800 transition-all duration-300 group-hover:text-emerald-600 ${
                  scrolled ? 'text-base' : 'text-lg'
                }`}>
                  Hars<span className="text-emerald-500 animate-pulse">h</span>
                </h1>
                <p className={`text-gray-500 transition-all duration-300 ${
                  scrolled ? 'text-xs' : 'text-sm'
                }`}>
                  Web Developer
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-1">
                {navItem.map(({ id, title, icon }) => (
                  <li key={id} className="relative">
                    <Link 
                      to={title} 
                      {...linkProps}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-gray-700 font-medium transition-all duration-300 cursor-pointer hover:text-emerald-500 hover:bg-emerald-50 hover:shadow-md transform hover:scale-105 ${
                        activeSection === title ? 'text-emerald-500 bg-emerald-50 shadow-md' : ''
                      }`}
                    >
                      <span className="text-sm">{icon}</span>
                      <span className="hidden xl:inline">{title}</span>
                    </Link>
                    {/* Active indicator */}
                    {activeSection === title && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label="Toggle menu"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
              className={`lg:hidden relative p-2 rounded-full transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                menu ? 'bg-emerald-100 text-emerald-600' : 'text-gray-700'
              }`}
            >
              <div className="relative w-6 h-6">
                <IoMenu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    menu ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <IoMdClose 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${
                    menu ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        menu 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            menu ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenu(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
          menu ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img
                src={pic}
                alt="Harsh"
                className="w-10 h-10 rounded-full border-2 border-emerald-500"
              />
              <div>
                <h2 className="font-bold text-gray-800">Harsh</h2>
                <p className="text-sm text-gray-500">Web Developer</p>
              </div>
            </div>
            <button
              onClick={() => setMenu(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <IoMdClose size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="py-6">
            {navItem.map(({ id, title, icon }, index) => (
              <Link
                key={id}
                to={title}
                {...linkProps}
                onClick={() => setMenu(false)}
                className={`flex items-center space-x-4 px-6 py-4 text-gray-700 font-medium transition-all duration-300 hover:text-emerald-500 hover:bg-emerald-50 hover:pl-8 cursor-pointer transform hover:scale-105 ${
                  activeSection === title ? 'text-emerald-500 bg-emerald-50 pl-8' : ''
                }`}
                style={{ 
                  animationDelay: menu ? `${index * 100}ms` : '0ms',
                  animation: menu ? 'slideInRight 0.5s ease-out forwards' : 'none'
                }}
              >
                <span className="text-xl">{icon}</span>
                <span className="text-lg">{title}</span>
                {activeSection === title && (
                  <div className="ml-auto w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
            <p className="text-center text-sm text-gray-500">
              © 2024 Harsh. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;