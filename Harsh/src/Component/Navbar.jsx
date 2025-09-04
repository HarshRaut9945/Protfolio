import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sample profile image - replace with your actual image
  const pic = "photo.avif";

  const navItem = [
    { id: 1, title: "Home", icon: "🏠", color: "from-blue-500 to-cyan-500" },
    { id: 2, title: "About", icon: "👤", color: "from-purple-500 to-pink-500" },
    { id: 3, title: "Portfolio", icon: "💼", color: "from-green-500 to-emerald-500" },
    { id: 4, title: "Experience", icon: "🏆", color: "from-orange-500 to-red-500" }, 
    { id: 5, title: "Projects", icon: "🚀", color: "from-indigo-500 to-purple-500" },
    { id: 6, title: "Contacts", icon: "📧", color: "from-teal-500 to-cyan-500" },
  ];

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -80,
    spy: true,
    activeClass: "active-nav-item",
    onSetActive: (section) => setActiveSection(section),
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 50);
      setScrollProgress(progress);
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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <div 
          className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav 
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20' 
            : 'bg-white/80 backdrop-blur-lg shadow-lg border border-white/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? 'h-14' : 'h-16'
          }`}>
            
            {/* Enhanced Brand Section */}
            <motion.div 
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <img
                  src={pic}
                  alt="Harsha Raut - Full Stack Developer"
                  className={`relative rounded-full border-2 border-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl ${
                    scrolled ? 'w-9 h-9' : 'w-10 h-10'
                  }`}
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              <div className="leading-tight">
                <h1 className={`font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-600 ${
                  scrolled ? 'text-base' : 'text-lg'
                }`}>
                  Hars<span className="animate-pulse text-purple-500">h</span>a
                </h1>
                <p className={`text-gray-500 transition-all duration-300 group-hover:text-blue-500 ${
                  scrolled ? 'text-xs' : 'text-sm'
                }`}>
                  Full Stack Developer
                </p>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-1">
                {navItem.map(({ id, title, icon, color }) => {
                  const isActive = activeSection === title;
                  return (
                    <motion.li 
                      key={id} 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        to={title} 
                        {...linkProps}
                        className={`group relative flex items-center space-x-2 px-4 py-2.5 rounded-2xl font-medium transition-all duration-500 cursor-pointer overflow-hidden ${
                          isActive 
                            ? 'text-white shadow-lg' 
                            : 'text-gray-700 hover:text-white'
                        }`}
                      >
                        {/* Background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                          isActive ? 'opacity-100' : ''
                        }`}></div>
                        
                        {/* Content */}
                        <span className="relative text-lg group-hover:scale-110 transition-transform duration-300">{icon}</span>
                        <span className="relative hidden xl:inline font-semibold">{title}</span>
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                      </Link>
                      
                      {/* Active indicator */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            className={`absolute -bottom-2 left-1/2 w-2 h-2 bg-gradient-to-r ${color} rounded-full shadow-lg`}
                            initial={{ scale: 0, x: "-50%" }}
                            animate={{ scale: 1, x: "-50%" }}
                            exit={{ scale: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              aria-label="Toggle menu"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
              className={`lg:hidden relative p-3 rounded-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                menu 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                  : 'bg-gray-100 hover:bg-gradient-to-r hover:from-purple-100 hover:to-blue-100 text-gray-700 hover:text-purple-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-6 h-6">
                <IoMenu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-500 ${
                    menu ? 'rotate-180 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'
                  }`} 
                />
                <IoMdClose 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-500 ${
                    menu ? 'rotate-0 opacity-100 scale-100' : 'rotate-180 opacity-0 scale-0'
                  }`} 
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {menu && (
          <motion.div 
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/60 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
            />
            
            {/* Menu Panel */}
            <motion.div 
              className="absolute right-0 top-0 h-full w-80 max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="flex items-center space-x-3">
                  <img
                    src={pic}
                    alt="Harsha Raut"
                    className="w-12 h-12 rounded-full border-2 border-purple-500 shadow-lg"
                  />
                  <div>
                    <h2 className="font-bold text-gray-800">Harsha Raut</h2>
                    <p className="text-sm text-purple-600 font-medium">Full Stack Developer</p>
                  </div>
                </div>
                <motion.button
                  onClick={() => setMenu(false)}
                  className="p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoMdClose size={20} className="text-gray-600" />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="py-4 overflow-y-auto max-h-96">
                {navItem.map(({ id, title, icon, color }, index) => {
                  const isActive = activeSection === title;
                  return (
                    <motion.div
                      key={id}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to={title}
                        {...linkProps}
                        onClick={() => setMenu(false)}
                        className={`group relative flex items-center space-x-4 mx-4 my-2 px-4 py-4 rounded-2xl font-medium transition-all duration-500 cursor-pointer overflow-hidden ${
                          isActive 
                            ? 'text-white shadow-xl transform scale-105' 
                            : 'text-gray-700 hover:text-white hover:transform hover:scale-105'
                        }`}
                      >
                        {/* Background */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${color} transition-all duration-500 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}></div>
                        
                        {/* Content */}
                        <span className="relative text-2xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
                        <span className="relative text-lg font-semibold">{title}</span>
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div 
                            className="relative ml-auto w-3 h-3 bg-white/80 rounded-full shadow-lg"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        )}
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Enhanced Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200/50 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Ready to collaborate?</p>
                  <motion.button
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setMenu(false);
                      document.querySelector('[name="Contacts"]')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get In Touch
                  </motion.button>
                  <p className="text-xs text-gray-500 mt-2">© 2024 Harsha Raut. All rights reserved.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        .active-nav-item {
          @apply text-white;
        }
      `}</style>
    </>
  );
};

export default Navbar;