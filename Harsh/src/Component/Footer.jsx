import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-screen-xl container mx-auto px-6 md:px-12">
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="hover:text-blue-500 transition-colors duration-300">
              <FaFacebook size={22} />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors duration-300">
              <FaTwitter size={22} />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-pink-500 transition-colors duration-300">
              <FaInstagram size={22} />
            </a>
            <a href="https://www.linkedin.com/in/harsh-raut-417951291/" className="hover:text-blue-400 transition-colors duration-300">
              <FaLinkedinIn size={22} />
            </a>
          </div>

          {/* Footer Content */}
          <div className="text-center border-t border-gray-700 pt-6">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} Harsha Raut • Built with passion and dedication 🚀
            </p>
            <p className="text-sm mt-2">
              Designed for learning, growth, and endless possibilities 🌟
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
