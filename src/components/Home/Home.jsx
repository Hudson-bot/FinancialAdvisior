import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaChartLine } from "react-icons/fa";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import TeamSection from "../TeamSections/TeamSection";
import Blog from "../Blog/Blog";

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <>
    <div className="mt-16 relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <motion.div
          className="w-full h-full bg-[url('/images/background.jpg')] bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }} // Adjust opacity here (0.6 = 60%)
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-[#1A0E2C]/90" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen w-full">
        <div className="w-full max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-yellow-400 uppercase text-sm font-bold mb-2 flex items-center gap-2"
              variants={itemVariants}
            >
              <FaChartLine className="text-yellow-400" />
              Business Made Easy
            </motion.p>
            
            <motion.h1
              className="text-5xl font-bold leading-tight mb-4 text-white"
              variants={itemVariants}
            >
              Excellent services for your{" "}
              <motion.span 
                className="text-yellow-400"
                whileHover={{ scale: 1.05 }}
              >
                business.
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-gray-300 text-lg mb-6"
              variants={itemVariants}
            >
              Take your business to the next level with our sales agency for
              business idea management tools for you.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(234, 179, 8, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More <FaArrowRight />
              </motion.button>
              
              <motion.button
                className="border border-white px-6 py-3 rounded-md font-semibold text-white hover:bg-white hover:text-[#1A0E2C] transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Empty div to maintain layout balance */}
          <div className="lg:w-1/2"></div>
        </div>
      </div>
    </div>
    <Services/>
    <AboutUs/>
    <TeamSection/>
    <Blog/>
    </>
  );
};

export default Home;
