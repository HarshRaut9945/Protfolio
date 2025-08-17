import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/brogovma", userInfo);
      toast.success("Message sent successfully! ✅");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again later. ❌");
    }
  };

  return (
    <div 
      name="Contacts" 
      className="w-full py-16 px-6 md:px-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    >
      <div className="max-w-screen-lg mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Contact Me</h1>
        <p className="text-white/90 mt-3">Please fill out the form below to get in touch with me 🚀</p>
      </div>

      <div className="flex justify-center items-center">
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-white/20 backdrop-blur-lg shadow-xl w-full md:w-[500px] p-8 rounded-2xl border border-white/30"
        >
          <h1 className="text-2xl font-semibold text-white mb-6">📩 Send Your Message</h1>

          {/* Name */}
          <div className="flex flex-col mb-5">
            <label className="text-white mb-1">Full Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter Your Name"
              className="border border-gray-200/40 p-3 rounded-lg bg-white/90 focus:ring-2 focus:ring-blue-400 transition outline-none"
            />
            {errors.name && <span className="text-red-300 text-sm">This field is required</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col mb-5">
            <label className="text-white mb-1">Email Address</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter Your Email"
              className="border border-gray-200/40 p-3 rounded-lg bg-white/90 focus:ring-2 focus:ring-blue-400 transition outline-none"
            />
            {errors.email && <span className="text-red-300 text-sm">This field is required</span>}
          </div>

          {/* Message */}
          <div className="flex flex-col mb-5">
            <label className="text-white mb-1">Message</label>
            <textarea
              {...register("message", { required: true })}
              placeholder="Enter your Query"
              rows="4"
              className="border border-gray-200/40 p-3 rounded-lg bg-white/90 focus:ring-2 focus:ring-blue-400 transition outline-none"
            />
            {errors.message && <span className="text-red-300 text-sm">This field is required</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition-transform duration-300 text-white font-semibold py-3 rounded-lg shadow-md"
          >
            🚀 Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact
