import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Send, User, Mail, MessageSquare, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    
    try {
      await axios.post("https://getform.io/f/brogovma", userInfo);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "Muzaffarpur, Bihar, India",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "harshraut9945@gmail.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      info: "Within 24 hours",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
      name="Contacts" 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Let's create something amazing together.
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold"> Drop me a message</span>!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                I'm always excited to discuss new opportunities, creative projects, 
                and innovative ideas. Whether you're looking for a developer, 
                data analyst, or just want to connect, I'd love to hear from you.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-2xl opacity-20 blur-xl scale-110 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-500">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color} text-white shadow-lg`}>
                        {contact.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{contact.title}</h3>
                        <p className="text-gray-300">{contact.info}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-white font-semibold text-xl mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/harsh-raut-417951291/", color: "from-blue-500 to-blue-600" },
                  { name: "GitHub", href: "https://github.com/HarshRaut9945", color: "from-gray-600 to-gray-800" },
                  { name: "Portfolio", href: "https://protfolio-7cv5.vercel.app", color: "from-purple-500 to-pink-500" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Form Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl scale-110"></div>
            
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl"
            >
              <div className="flex items-center mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mr-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">Send Your Message</h2>
              </div>

              {/* Name Field */}
              <div className="mb-6">
                <label className="flex items-center text-white font-medium mb-3">
                  <User className="w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-white/30 p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
                {errors.name && (
                  <span className="text-red-400 text-sm mt-2 block">{errors.name.message}</span>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="flex items-center text-white font-medium mb-3">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email"
                    }
                  })}
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-white/30 p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                />
                {errors.email && (
                  <span className="text-red-400 text-sm mt-2 block">{errors.email.message}</span>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-8">
                <label className="flex items-center text-white font-medium mb-3">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Tell me about your project or just say hello..."
                  rows="5"
                  className="w-full border border-white/30 p-4 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
                />
                {errors.message && (
                  <span className="text-red-400 text-sm mt-2 block">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>

              {/* Success Message */}
              <p className="text-gray-400 text-sm text-center mt-6">
                I'll get back to you within 24 hours. Thank you for reaching out!
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;