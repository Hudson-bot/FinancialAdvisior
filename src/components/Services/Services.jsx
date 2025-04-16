import React from "react";
import { motion } from "framer-motion";
import { FaPiggyBank, FaCalculator, FaChartLine, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link

const services = [
  {
    title: "Savings",
    description: "Helping you build financial security with smart saving strategies.",
    icon: <FaPiggyBank className="text-white text-2xl" />,
    color: "from-[#FF9A8B] to-[#FF6B95]",
    link: "/savings", 
  },
  {
    title: "Budgets",
    description: "Plan your finances efficiently and stay on top of your expenses.",
    icon: <FaCalculator className="text-white text-2xl" />,
    color: "from-[#4FACFE] to-[#00F2FE]",
    link: "/budget",
  },
  {
    title: "Investments",
    description: "Grow your wealth through strategic investment opportunities.",
    icon: <FaChartLine className="text-white text-2xl" />,
    color: "from-[#6A11CB] to-[#2575FC]",
    link: "/investment",
  },
];

const Services = () => {
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

  const item = {
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
    <section className="py-20 bg-gradient-to-b from-white to-[#F8F5FF] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <motion.h3 
            className="text-[#D9A273] uppercase font-bold text-sm tracking-widest"
            whileHover={{ scale: 1.05 }}
          >
            ● Our Dedicated Services
          </motion.h3>
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-[#1A0E2C] mt-4 mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Financial Services <span className="text-[#D9A273]">We Provide</span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl shadow-lg -z-10 blur-md" />
              
              <div className="h-full p-8 bg-white rounded-xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 flex flex-col items-center">
                <motion.div 
                  className={`flex justify-center items-center bg-gradient-to-br ${service.color} p-5 rounded-full w-16 h-16 mb-6`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-[#1A0E2C] mb-3 text-center">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>

                {service.link ? (
                  <Link
                    to={service.link}
                    className="flex items-center gap-2 text-sm font-semibold text-[#1A0E2C] group-hover:text-[#D9A273] transition-colors"
                  >
                    READ MORE
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                ) : (
                  <motion.button
                    className="flex items-center gap-2 text-sm font-semibold text-[#1A0E2C] group-hover:text-[#D9A273] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    READ MORE
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
