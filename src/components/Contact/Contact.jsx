import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaCheck,
  FaTimes
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    contact: "",
    message: "",
  });

  const [notification, setNotification] = useState({
    show: false,
    success: false,
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://financialadvisiorbackend.onrender.com/api/contact",
        formData
      );
      
      // Show success notification
      setNotification({
        show: true,
        success: true,
        message: "Message sent successfully!"
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        contact: "",
        message: "",
      });
      
      // Hide notification after 3 seconds
      setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 3000);
      
    } catch (err) {
      // Show error notification
      setNotification({
        show: true,
        success: false,
        message: "Failed to send message. Please try again."
      });
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl" />,
      title: "Send E-Mail",
      detail: "advisiorFinance@gmail.com",
      color: "bg-[#FF9A8B]",
    },
    {
      icon: <FaPhoneAlt className="text-xl" />,
      title: "Call Anytime",
      detail: "+91-6370669619",
      color: "bg-[#4FACFE]",
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: "Locations",
      detail: "66 Guild Street 512B, Great North Town",
      color: "bg-[#6A11CB]",
    },
  ];

  return (
    <section className="mt-5 py-20 px-6 bg-gradient-to-b from-white to-[#F8F5FF]">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Unified Contact Box */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2">
            {/* Left - Contact Form */}
            <motion.div
              className="p-10"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-4xl font-bold text-[#1A0E2C] mb-8"
                variants={item}
                whileHover={{ x: 5 }}
              >
                Write Us <span className="text-[#4B1F52]">Something</span>
              </motion.h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={container}
                >
                  {["Your Name", "Your Email"].map((label, index) => {
                    const name = index === 0 ? "name" : "email";
                    return (
                      <motion.div key={index} variants={item}>
                        <label className="block text-[#5B2333] font-semibold mb-2">
                          {label} <span className="text-[#9A4E40]">*</span>
                        </label>
                        <motion.input
                          type={index === 1 ? "email" : "text"}
                          name={name}
                          value={formData[name]}
                          onChange={handleChange}
                          placeholder={`${label} here`}
                          className="w-full border-2 border-[#9A4E40] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B1F52] transition-all"
                          whileFocus={{ scale: 1.02 }}
                          required
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>

                <motion.div variants={item}>
                  <label className="block text-[#5B2333] font-semibold mb-2">
                    Your Subject <span className="text-[#9A4E40]">*</span>
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your subject here"
                    className="w-full border-2 border-[#9A4E40] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B1F52] transition-all"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label className="block text-[#5B2333] font-semibold mb-2">
                    Contact Number
                  </label>
                  <motion.input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Your phone here"
                    className="w-full border-2 border-[#5B2333] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B1F52] transition-all"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label className="block text-[#5B2333] font-semibold mb-2">
                    Message <span className="text-[#9A4E40]">*</span>
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a few words"
                    className="w-full border-2 border-[#9A4E40] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B1F52] h-32 transition-all"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="bg-gradient-to-r from-[#9A4E40] to-[#4B1F52] text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2 w-full justify-center mt-6 group"
                  variants={item}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(154, 78, 64, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut"
                    }}
                  >
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              className="bg-gradient-to-br from-[#1A0E2C] to-[#4B1F52] text-white p-10"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl font-bold mb-8"
                variants={item}
                whileHover={{ x: 5 }}
              >
                Our <span className="text-[#F0C29A]">Contact</span> Information
              </motion.h3>

              <motion.div className="space-y-8" variants={container}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="flex items-center gap-6 group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`${info.color} p-4 rounded-xl shadow-md group-hover:rotate-6 transition-transform`}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-lg">{info.title}</p>
                      <p className="text-[#F0C29A] mt-1">{info.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="mt-12" variants={item}>
                <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-[#F0C29A]">
                  <p>Monday - Friday: 9am to 6pm</p>
                  <p>Saturday: 10am to 3pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Google Maps Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="p-6">
            <motion.h3
              className="text-3xl font-bold text-[#1A0E2C] mb-6 flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt className="text-[#9A4E40]" />
              <span>
                Our <span className="text-[#4B1F52]">Location</span>
              </span>
            </motion.h3>

            <motion.div
              className="relative h-96 w-full rounded-xl overflow-hidden border-4 border-[#F0C29A] shadow-lg"
              whileHover={{ scale: 1.005 }}
            >
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179042!2d-73.98784492423992!3d40.74844097138983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="absolute inset-0"
              ></iframe>

              {/* Map Overlay Info */}
              <motion.div
                className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-xs"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-[#1A0E2C]">Our Headquarters</h4>
                <p className="text-sm text-[#5B2333] mt-1">
                  66 Guild Street 512B, Great North Town
                </p>
                <button className="mt-2 text-sm text-[#9A4E40] font-semibold flex items-center gap-1 hover:text-[#4B1F52] transition-colors">
                  Get Directions <FaArrowRight className="text-xs" />
                </button>
              </motion.div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {[
                { title: "Parking", text: "Available in nearby garage" },
                {
                  title: "Public Transport",
                  text: "Subway station 2 blocks away",
                },
                {
                  title: "Accessibility",
                  text: "Wheelchair accessible entrance",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#F7E6DA] p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-[#1A0E2C]">{item.title}</h4>
                  <p className="text-sm text-[#5B2333] mt-1">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Notification System */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className={`fixed left-1/2 bottom-8 shadow-xl rounded-lg p-4 flex items-center gap-3 z-50 max-w-md w-[90vw] ${
              notification.success 
                ? 'bg-green-50 border-l-4 border-green-500' 
                : 'bg-red-50 border-l-4 border-red-500'
            }`}
          >
            <div className={`p-2 rounded-full ${
              notification.success 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {notification.success ? <FaCheck /> : <FaTimes />}
            </div>
            <div className="flex-1">
              <h4 className={`font-bold ${
                notification.success ? 'text-green-800' : 'text-red-800'
              }`}>
                {notification.success ? 'Success!' : 'Error'}
              </h4>
              <p className={`text-sm ${
                notification.success ? 'text-green-600' : 'text-red-600'
              }`}>
                {notification.message}
              </p>
            </div>
            <button
              onClick={() => setNotification(prev => ({ ...prev, show: false }))}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;