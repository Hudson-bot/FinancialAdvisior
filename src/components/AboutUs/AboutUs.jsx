import React from "react";
import { motion } from "framer-motion";
import { FaChartPie, FaClipboardList, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: <FaChartPie className="text-[#4B1F52] text-2xl" />,
      title: "Business Innovations",
      description: "Cutting-edge financial strategies tailored to your needs",
    },
    {
      icon: <FaClipboardList className="text-[#4B1F52] text-2xl" />,
      title: "Marketing Solution",
      description: "Data-driven approaches to maximize your returns",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F0C29A] to-[#F8D5B5] overflow-hidden">
      <motion.div
        className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        {/* Left Side - Image */}
        <motion.div
          className="relative w-full lg:w-1/2"
          variants={item}
        >
          <motion.img
            src="/images/AboutUs1.jpg"
            alt="Financial advisors meeting with clients"
            className="rounded-xl shadow-2xl w-full"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 bg-[#1A0E2C] text-white p-6 rounded-xl shadow-xl"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-300">Trusted By</p>
            <p className="text-3xl font-bold">75k+</p>
            <p className="text-xs text-gray-400 mt-1">Clients Worldwide</p>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6"
          variants={item}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-[#1A0E2C] text-[#F0C29A] px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
              ABOUT US
            </span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#1A0E2C] leading-tight"
              whileHover={{ x: 5 }}
            >
              Your trusted partner for{" "}
              <span className="text-[#4B1F52]">financial success</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#5B2333] text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our team of certified financial advisors provides personalized wealth
            management solutions to help you achieve your financial goals with
            confidence and clarity.
          </motion.p>

          {/* Features */}
          <motion.div
            className="grid gap-6 mt-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                variants={item}
              >
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A0E2C]">
                    {feature.title}
                  </h3>
                  <p className="text-[#5B2333] text-sm mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <Link
              to="/aboutUs1 "
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4B1F52] to-[#9A4E40] text-white rounded-lg font-medium hover:shadow-lg transition-all group"
            >
              Learn More About Us
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;