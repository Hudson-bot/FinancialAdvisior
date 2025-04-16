import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Services data with corresponding routes
  const services = [
    { name: "Saving Strategies", route: "/savings" },
    { name: "Budgeting Solutions", route: "/budget" },
    { name: "Investment Planning", route: "/investment" }
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  const handleSubmit = () => {
    alert("You have Subcribed");
  };
  return (
    <motion.footer 
      className="bg-[#1A0E2C] text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <motion.div variants={itemVariants}>
          <h2 className="text-[#D9A273] font-bold text-lg mb-4">ABOUT US</h2>
          <p className="text-sm mb-6">
            We have 25+ years of experience. Helping you overcome business challenges.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedin].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-[#2A1B3D] p-2 rounded-full cursor-pointer"
              >
                <Icon className="text-[#D9A273] hover:text-white transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services - Updated with buttons */}
        <motion.div variants={itemVariants}>
          <h2 className="text-[#D9A273] font-bold text-lg mb-4">SERVICES</h2>
          <ul className="space-y-3">
            {services.map((service) => (
              <motion.li 
                key={service.name}
                whileHover={{ x: 5 }}
              >
                <button
                  onClick={() => handleServiceClick(service.route)}
                  className="w-full text-left text-sm flex items-center group cursor-pointer hover:text-[#D9A273] transition-colors"
                >
                  <FaArrowRight className="text-[#D9A273] mr-2 text-xs opacity-0 group-hover:opacity-100 transition-all" />
                  {service.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Recent News */}
        <motion.div variants={itemVariants}>
          <h2 className="text-[#D9A273] font-bold text-lg mb-4">RECENT NEWS</h2>
          <ul className="space-y-4">
            {[
              { title: "People saying about business", date: "8 Jan, 2024" },
              { title: "Providing all types of business", date: "3 Jan, 2024" }
            ].map((news, index) => (
              <motion.li 
                key={index}
                className="group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <p className="font-bold text-sm group-hover:text-[#D9A273] transition-colors">{news.title}</p>
                <span className="text-gray-400 text-xs">{news.date}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <h2 className="text-[#D9A273] font-bold text-lg mb-4">NEWSLETTER</h2>
          <p className="text-sm mb-6">Subscribe to our newsletter for discounts and more.</p>
          <motion.input
            type="email"
            placeholder="Your email address"
            className="w-full p-3 bg-[#2A1B3D] text-white rounded-md border border-transparent focus:border-[#D9A273] focus:outline-none transition-all"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button 
            className="w-full mt-4 py-3 bg-gradient-to-r from-[#D9A273] to-[#9A4E40] text-[#1A0E2C] font-bold rounded-md flex items-center justify-center gap-2"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 5px 15px rgba(217, 162, 115, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSubmit}
          >
            SUBSCRIBE <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>

      <motion.div 
        className="text-center text-sm text-gray-400 mt-12 pt-6 border-t border-[#2A1B3D]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Advisor | Powered by <span className="text-[#D9A273] hover:underline cursor-pointer">CKT Themes</span>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;